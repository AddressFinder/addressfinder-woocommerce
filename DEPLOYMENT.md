#Deployment

## Pass code checks
WooCommerce run an automated phpcs check on the plugin, we need to make sure we can pass it before submitting it. - Install [https://getcomposer.org/](composer)
- Run `composer install` to fetch dependencies
- Run `vendor/bin/phpcs --standard=WooCommerce-Core -n woocommerce-addressfinder.php` and fix any errors reported
- You can use bundled `phpcbf` to fix any errors marked with `[x]` by running `vendor/bin/phpcbf --standard=WooCommerce-Core -n woocommerce-addressfinder.php`

## Publish code
When you create a new release many of the files will need a version number change.
- woocommerce-addressfinder.php
- woocommerce_plugin.js
- changelog.txt (describe your changes)
- readme.txt (Update the stable tag AND the changelog)
- package.json

Since you have changed the version in `package.json` you need to run the build
process again to update the version number in the minified files as well:
`docker compose run addressfinder-woocommerce /addressfinder-woocommerce/bin/build_production.sh`

It's good to double check that you have not missed anything by grepping for the previous version
and making sure only `changelog.txt` and `readme.txt` show up since they contain references to
all previous versions:
```
rg '1\.5\.4' -l # using ripgrep to skip .git and friends, -l to just list files that matched`
changelog.txt
readme.txt
```

When you are ready to deploy the version to the Wordpress store run these commands.
A few minutes afterwards you will see your update in the Wordpress store.

```
svn co https://plugins.svn.wordpress.org/addressfinder-woo/

mv addressfinder-woo addressfinder-woocommerce-svn

cd addressfinder-woocommerce-svn

svn up # to sync with remote

cp ../addressfinder-woocommerce/dist/addressfinder.min.js trunk/addressfinder.js
cp ../addressfinder-woocommerce/dist/addressfinder.min.js.map trunk/addressfinder.min.js.map
cp ../addressfinder-woocommerce/woocommerce-addressfinder.php trunk/
cp ../addressfinder-woocommerce/styles/addressfinder-styles.css trunk/
cp ../addressfinder-woocommerce/changelog.txt trunk/
cp ../addressfinder-woocommerce/readme.txt trunk/

svn cp ./trunk/ ./tags/<version> (note: no v prefix)

# login details are in 1Password
svn --username abletech ci . -m "Release v<version>"
```

If you need to add any new files you will need to run `svn add FILENAME` so that svn knows about the file.
