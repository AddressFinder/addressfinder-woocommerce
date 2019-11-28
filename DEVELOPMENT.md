# Development

Follow the setup instructions in [BUILD.md](BUILD.md), and then:

# Developing JS

1. `npm install -g live-server`
1. `npm install -g live-server-https`
2. `live-server --https=/usr/local/lib/node_modules/live-server-https dist/`

This will open up a browser window (https://127.0.0.1:8080) with the `dist` directory contents displayed.

# Live reload

In a separate window, run:

1. `npm run watch`

Then whenever a file is edited, it will be re-compiled and available for reloading.


# Test Servers
We have two test servers

1. The first uses Wordpress v5.1.3 and Woocommerce v3.6.2.
2. The second uses Wordpress v5.3 and Woocommerce v3.8.1

# Developing and testing Test Server 1

To develop and test this plugin, you should:

1. Visit the Abletech Woocommerce test server. You can find url and the credentials [here](https://github.com/abletech/wiki/tree/ba4de9312525902fafc89e41a94e99904ddde88f/clients/addressfinder/addressfinder-woocommerce)
2. On the store's admin pages click on Plugins. If the AddressFinder plugin is listed click 'edit', otherwise install it by clicking the 'Add New' button at the top of the page.
3. Edit the plugin file `woocommerce-addressfinder.php`.
  - Comment out this line

    ```
    echo "\n</script>";
    echo '<script src="' . plugins_url( 'addressfinder.js', __FILE__ ) . '" async=1></script>';
    ```

  - Replace it with:

    ```
    echo "
     let s = document.createElement('script')
     s.src = 'https://127.0.0.1:52537/addressfinder.js'
     s.async = 1
     document.body.appendChild(s)</script>";
    ```

  This points the WooCommerce plugin at the file being served by live-server

4. Click 'Update File'

Now you can click the _Visit Store_ link and trial the plugin by selecting an item to purchase and
visiting the checkout.

# Developing and testing Test Server 2

Unfortunately you can't edit `woocommerce-addressfinder.php` in the browser on Test Server 2. This is to avoid users making syntax errors by editing their php.

Instead login to the WooCommerce server and copy and paste your local files into their WooCommerce counterparts.

1. To login to the WooCommerce server your public ssh key has to be added. Ask Nigel about this.

2. If you are using the Woocommerce 2 test server, Run ssh root@149.28.164.196 in the terminal. (You can also use this method for Test Server 1, with ssh root@45.55.11.166)

3. `cd /var/www/html/wp-content/plugins/addressfinder-woo/woocommerce-addressfinder.php`

4. Copy step 3 from the Test Server 1 above. To update the files you'll need to use vim in the terminal. Beginners Guide to Vim may be helpful: https://github.com/abletech/wiki/blob/8ef2a180153ad25bf3f900db85d91ae28546159c/technology_tips/beginners_guide_to_vi.md

5. When you save the files they update on the WooCommerce store.

## Trouble Shooting

### Debugging
  If you are debugging a customer site, you can type `addressfinderDebugMode()` into the javascript console. This will reinitialise the widget,
  with the debug flag set to true, so you can see console logs from the addressfinder-webpage-tools npm package.
  This works in Chrome and FireFox

### Restarting the Server

1. Run ssh root command in the terminal.
   For example, for Test Server 1: ssh root@45.55.11.166
2. sudo reboot

### Dealing with PHP errors

Be careful when making code changes to the php, as syntax errors can cause the 'white screen of death'. Your site will not load and will show a white screen with no errors. If this happens you can login in to the WooCommerce server and make the changes using Vim in the terminal. You can also delete the addressfinder-woo directory. This will delete the addressfinder plugin from your test site, but you can re-download the latest version from the Plugin page once your php error has been resolved.

 ```
 cd /var/www/html/wp-content/plugins/
 rm -rf addressfinder-woo
```