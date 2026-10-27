# Test store

Spin up a throwaway WordPress + WooCommerce server to test plugin changes, then delete it the same day. Nobody patches it, so it must not live longer than the test.

- **wordpress1**: the throwaway Vultr server. It's reached at `<ip-with-dashes>.wordpress1.sslip.io`, so `45.32.1.2` becomes `45-32-1-2.wordpress1.sslip.io`. [sslip.io](https://sslip.io) resolves that name to the embedded IP, so there's no DNS record to create.
- **Released Plugin**: the Addressfinder plugin as published on wordpress.org.
- **Developer Plugin**: a zip of your local branch, built by `./bin/build_and_package_developer_plugin.sh`.
- **Classic Checkout**: a checkout page using the `[woocommerce_checkout]` shortcode.
- **Block Checkout**: a checkout page using the WooCommerce Checkout block. This is the default on new stores.

## Before you start

- **Vultr access:** ask Nigel for a my.vultr.com login if you don't have one.
- **The Addressfinder key:** this is the Addressfinder API key, not a password. In the Portal, open the [WooCommerce Testing Project](https://portal.addressfinder.net/portal/projects/f7b96cf2-d1bb-11f1-aec1-0a5536c42134/keys) in the `Addressfinder Hub 2` account and copy its key. The project's allowed domains must include `wordpress1.sslip.io`, which covers every `*.wordpress1.sslip.io` host.

## 1. Create the server

1. In my.vultr.com, go to **Compute → Create Instance**.
2. Choose **Shared CPU**, then plan **`vc2-1c-2gb`** (1 vCPU, 2 GB, 55 GB SSD) under Cloud Compute. Choose location **Sydney**, then click **Configure**.
3. Under **Image Selection and Configuration**, choose **Marketplace App → WooCommerce**.
4. Fill in **WordPress Administrator E-Mail address** with your email and **WordPress Blog Title** with anything.
5. Select your own SSH key.
6. Set **Server 1 Hostname** and **Server 1 Label** to `wordpress1`.
7. Under **Additional Features**, make sure everything is off, especially **Automatic Backups** ($2/mo) and **Limited User Login** (the setup below runs as root).
8. Click **Deploy**, and wait for the server page to show its IP.

## 2. Find the WordPress login

WordPress comes installed. The admin username and password are on the server's page under **App Instructions → WordPress Administration Panel**. You don't need to save them: the box is gone tonight.

## 3. Set up the store

SSH in as root:

```bash
ssh root@<ip>
```

In the SSH session, set your email and the key:

```bash
export EMAIL=you@addressfinder.com     # for Let's Encrypt expiry notices
export AF_KEY=XXXXXXXXXXXXXXXXXXXX     # Addressfinder API key from the WooCommerce Testing Project in the Portal; leave empty to set it later
```

Then paste this block into the same SSH session unchanged:

```bash
IP=$(hostname -I | awk '{print $1}')
HOST="${IP//./-}.wordpress1.sslip.io"

# The image finishes installing after you can first SSH in
cloud-init status --wait

# The image exposes the Cockpit control panel on port 9080 with the root password
systemctl disable --now cockpit.socket

certbot --nginx --redirect -d "$HOST" -m "$EMAIL" --agree-tos --no-eff-email
wp option update home "https://$HOST"
wp option update siteurl "https://$HOST"

# New stores start in "coming soon" mode, which hides the shop from logged-out visitors
wp option update woocommerce_coming_soon no

wp wc product create --name="Test product" --type=simple --virtual=true --regular_price=10 --user=1

[ -n "$AF_KEY" ] && wp option update af-key "$AF_KEY"
wp plugin install addressfinder-woo --activate

BLOCK_ID=$(wp option get woocommerce_checkout_page_id)
CLASSIC_ID=$(wp post create --post_type=page --post_status=publish --post_title="Classic checkout" \
  --post_content='<!-- wp:shortcode -->[woocommerce_checkout]<!-- /wp:shortcode -->' --porcelain)

echo "Store:            https://$HOST/shop/"
echo "Admin:            https://$HOST/wp-admin/"
echo "Block checkout:   page $BLOCK_ID (current)"
echo "Classic checkout: page $CLASSIC_ID"
wp post get "$BLOCK_ID" --field=post_content | grep -q 'wp:woocommerce/checkout' \
  || echo "WARNING: page $BLOCK_ID is not a Block Checkout"
```

If you didn't note the WordPress login from step 2, set your own admin password:

```bash
read -rsp 'New password: ' PW; echo
wp user update "$(wp user list --role=administrator --field=ID | head -1)" --user_pass="$PW" --skip-email
```

The store now runs the Released Plugin over HTTPS. Add the test product to the cart and go to checkout. Address autocomplete should work.

Check the versions against `Tested up to` and `WC tested up to` in [readme.txt](readme.txt):

```bash
wp core version
wp plugin get woocommerce --field=version
```

## 4. Test your branch

Run this from the repo on your laptop each time you change the code. It builds the Developer Plugin and installs it over whatever is on the box:

```bash
HOST=45-32-1-2.wordpress1.sslip.io
./bin/build_and_package_developer_plugin.sh
scp addressfinder-woo-developer.zip root@$HOST:/tmp/
ssh root@$HOST wp plugin install /tmp/addressfinder-woo-developer.zip --force --activate
```

If you can't SSH in, upload the zip instead: **Plugins → Add New Plugin → Upload Plugin**, then choose **Replace current with uploaded**.

To go back to the Released Plugin:

```bash
ssh root@$HOST wp plugin install addressfinder-woo --force --activate
```

## 5. Switch between checkouts

Point WooCommerce at the other checkout page, using the page IDs printed in step 3:

```bash
ssh root@$HOST wp option update woocommerce_checkout_page_id <page id>
```

## Test a clean install or upgrade

Delete every Addressfinder setting, including the key. The plugin writes its defaults again the next time a wp-admin page loads. Set the key again afterwards with `wp option update af-key`.

```bash
ssh root@$HOST "wp option list --search='af-*' --field=option_name | xargs -r -n1 wp option delete"
```

## 6. Delete the server

In my.vultr.com, open `wordpress1` and click **Destroy Server**. Do this the same day.

## Troubleshooting

- **certbot fails with a rate limit error.** sslip.io isn't on the Public Suffix List, so every sslip.io user shares Let's Encrypt's weekly certificate limit. Wait and retry, or create a temporary Route53 record for the IP and use that as `HOST`.
- **White screen after installing the Developer Plugin.** It's usually a PHP syntax error. Deactivate the plugin, fix the error, then reinstall:

  ```bash
  ssh root@$HOST wp plugin deactivate addressfinder-woo
  ```

- **The widget doesn't load.** Type `addressfinderDebugMode()` in the browser console to restart the widget with debug logging. An `INVALID_DOMAIN` error means the page isn't on a `*.wordpress1.sslip.io` host.
