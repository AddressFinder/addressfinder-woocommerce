# Development

Follow the setup instructions in [BUILD.md](BUILD.md), and then:

# Developing JS

1. `npm install -g live-server`
1. `npm install -g live-server-https`
2. `live-server --https=/usr/local/lib/node_modules/live-server-https dist/`

This will open up a browser window (https://127.0.0.1:8080) with the `dist` directory contents displayed.

To develop and test this plugin, you should:

1. Visit the Abletech Woocommerce test server. You can find url and the credentials [here](https://sites.google.com/a/abletech.co.nz/wiki/addressfinder/plugins/woocommerce-test-seer)
1. On the store's admin pages click on Plugins. If the AddressFinder plugin is listed click 'edit', otherwise install it by clicking the 'Add New' button at the top of the page.
1. Edit the plugin file `woocommerce-addressfinder.php`.
  - Comment out this line

    ```
    echo "\n</script>";
    echo '<script src="' . plugins_url( 'addressfinder.js', __FILE__ ) . '" async=1></script>';
    ```

  - Replace it with:

    ```
    echo "    
     let s = document.createElement('script')
     s.src = 'https://127.0.0.1:8080/addressfinder.js'
     s.async = 1
     document.body.appendChild(s)</script>";
    ```

  This points the WooCommerce plugin at the file being served by live-server

1. Click 'Update File'

Now you can click the _Visit Store_ link and trial the plugin by selecting an item to purchase and
visiting the checkout.

# Live reload

In a separate window, run:

1. `npm run watch`

Then whenever a file is edited, it will be re-compiled and available for reloading.

# Developing PHP or JS
Another way to test changes is to login to the WooCommerce server and copy and paste your local files into their WooCommerce counterparts. You will need to do this if you want to make changes the the php code.

1. To login to the WooCommerce server your public ssh key has to be added. Ask Nigel about this.

2. If you are using the Woocommerce 2 test server, Run ssh root@45.55.11.166 in the terminal. For WooCommerce 3 run ssh root@45.77.50.98

3. Find the file that you want to update. From the root the path to WooCommerce files is: /var/www/html/wp-content/plugins/addressfinder-woo

4. To update the files you'll need to use vim in the terminal. Beginners Guide to Vim may be helpful: https://sites.google.com/a/abletech.co.nz/wiki/technology-tips/beginners-guide-to-vim

5. When you save the files they update on the WooCommerce store.

## Trouble Shooting

### Restarting the Server

1. Run ssh root command in the terminal.
  * Woocommerce 2: ssh root@45.55.11.166
2. sudo reboot

### Dealing with PHP errors

Be careful when making code changes to the php, as syntax errors can cause the 'white screen of death'. Your site will not load and will show a white screen with no errors. If this happens you can login in to the WooCommerce server and make the changes using Vim in the terminal. You can also delete the addressfinder-woo directory. This will delete the addressfinder plugin from your test site, but you can re-download the latest version from the Plugin page once your php error has been resolved.

 ```
 cd /var/www/html/wp-content/plugins/
 rm -rf addressfinder-woo
```