# Development

Follow the setup instructions in [BUILD.md](BUILD.md), and then:

# Developing JS

1. `npm install -g live-server`
1. `npm install -g live-server-https`
2. `live-server --https=/usr/local/lib/node_modules/live-server-https dist/`

If `live-server-https` throws a module not found error, find the proper directory by running `npm -g ls live-server-https` and adding `node_modules` to the result.

This will open up a browser window (https://127.0.0.1:8080) with the `dist` directory contents displayed.

# Live reload

In a separate window, run:

1. `npm run watch`

Then whenever a file is edited, it will be re-compiled and available for reloading.

# Test Servers
We use Vultr to set up and run test server

## Addressfinder WooCommerce Staging
 - Wordpress v6.6
 - Woocommerce v9.1.2
 - Test store: https://45.32.247.160/
 - Server access: ssh ubuntu@45.32.247.160

# Developing and testing

There are two ways to swap out the Woocommerce plugin javascript for your own local javascript. The first method only works for Test Server One

## Method One

1. Visit the test server (https://45.32.247.160/wp-admin, credentials available in 1Password)
1. If the AddressFinder plugin is installed and acitve. Click Tools -> Plugin File Editor. Otherwise install it by clicking the 'Add New' button under plugins.
1. Edit the plugin file `woocommerce-addressfinder.php`.
  - Comment out this line

    ```
    echo "\n</script>";
    wp_enqueue_script( 'addressfinder_js', plugins_url( 'addressfinder.js', __FILE__ ), array(), ADDRESSFINDER_WOOCOMMERCE_VERSION, true );
    ```

  - Replace it with:

    ```
    echo "
      document.addEventListener('DOMContentLoaded', () => {
        var s = document.createElement('script')
        s.src = 'https://127.0.0.1:8080/addressfinder.js'
        s.async = 1
        document.body.appendChild(s)
      })
    </script>";
    ```

  This points the WooCommerce plugin at the file being served by live-server. Make sure that your s.src path matches the path where the javascript is being run by live server.

1. Click 'Update File'

Now you can click the _Visit Store_ link and trial the plugin by selecting an item to purchase and
visiting the checkout.

## Method Two

Another way to test changes is to login to the WooCommerce server and copy and paste your local files into their WooCommerce counterparts. You will need to do this to test on Woocommerce Test Server 2.

1. To login to the WooCommerce server your public ssh key has to be added. Ask Nigel about this.

2. Run `ssh ubuntu@45.32.247.160` in the terminal.

3. Find the file that you want to update. You can update all the plugin files in the terminal using vim, or if you prefer, you can follow the third step in Method One, replacing the javascript path with your own local javascript.

`cd /var/www/html/wp-content/plugins/addressfinder-woo`
`vim woocommerce-addressfinder.php`

4. To update the files you'll need to use vim in the terminal. Beginners Guide to Vim may be helpful: https://github.com/abletech/wiki/blob/8ef2a180153ad25bf3f900db85d91ae28546159c/technology_tips/beginners_guide_to_vi.md

5. When you save the files they update on the WooCommerce store.

### Switching between the checkouts
WooCommerce has two types of checkouts.

- `standard`
- `block`

To switch between these types you can
navigate to the checkout editor in the WooCommerce admin settings and remove this code `[woocommerce_checkout]` to enable the block checkout. Or add it to enable the standard checkout.

## Trouble Shooting

### Debugging
  If you are debugging a customer site, you can type `addressfinderDebugMode()` into the javascript console. This will reinitialise the widget,
  with the debug flag set to true, so you can see console logs from the addressfinder-webpage-tools npm package.
  This works in Chrome and FireFox

### Dealing with PHP errors

Be careful when making code changes to the php, as syntax errors can cause the 'white screen of death'. Your site will not load and will show a white screen with no errors. If this happens you can login in to the WooCommerce server and make the changes using Vim in the terminal. You can also delete the addressfinder-woo directory. This will delete the addressfinder plugin from your test site, but you can re-download the latest version from the Plugin page once your php error has been resolved.

 ```
 cd /var/www/html/wp-content/plugins/
 rm -rf addressfinder-woo
```

### Legacy packages
Depending on the machine packages you have installed it is possible you may run into OpenSSL implementations of algorithms that have been deemed legacy.
Simply run `export NODE_OPTIONS=--openssl-legacy-provider` in your terminal.

### Content Security Policy
Depending on your browser you may run into CSP errors. Below are some methods which could help for the different browsers.
1. Google Chrome
- Go chrome://flags and disable `Block insecure private network requests`
