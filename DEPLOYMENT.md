#Deployment

## Pass code checks
WooCommerce run an automated phpcs check on the plugin, we need to make sure we can pass it before submitting it.
- Install [https://getcomposer.org/](composer)
- Run `composer install` to fetch dependencies
- Run `vendor/bin/phpcs --standard=WooCommerce-Core -n woocommerce-addressfinder.php` and fix any errors reported
- You can use bundled `phpcbf` to fix any errors marked with `[x]` by running `vendor/bin/phpcbf --standard=WooCommerce-Core -n woocommerce-addressfinder.php`

## Publish code (probably obsolete)
When you create a new release many of the files will need a version number change.
- CHANGELOG.md
- addressfinder.js
- woocommerce-addressfinder.php
- readme.txt (Update the stable tag AND the changelog)
- package.json


When you are ready to deploy the version to the WooCommerce Store run these commands.
A few minutes afterwards you will see your update in the woocommerce store.


```
svn co https://plugins.svn.wordpress.org/addressfinder-woo/

mv addressfinder-woo addressfinder-woocommerce-svn

cd addressfinder-woocommerce-svn

cp ../addressfinder-woocommerce/dist/addressfinder.min.js trunk/addressfinder.js
cp ../addressfinder-woocommerce/dist/addressfinder.min.js.map trunk/addressfinder.min.js.map
cp ../addressfinder-woocommerce/woocommerce-addressfinder.php trunk/
cp ../addressfinder-woocommerce/CHANGELOG.md trunk/
cp ../addressfinder-woocommerce/readme.txt trunk/
cp ../addressfinder-woocommerce/styles/addressfinder-styles.css trunk/

svn cp ./trunk/ ./tags/<version> (note: no v prefix)

svn --username abletech ci . -m "Release v<version>"
```

If you need to add any new files you will need to run `svn add FILENAME` so that svn knows about the file.
