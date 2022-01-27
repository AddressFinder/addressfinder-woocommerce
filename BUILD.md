# Development

This project uses webpack to build the JS used in this WooCommerce plugin.

# Dependencies
  - webpack
  - core-js
  - babel-core
  - babel-cli
  - babel-loader
  - babel-preset-es2015
  - uglify-js

# Setting up your development environment

  1. `npm install`

Once your dependencies are installed, please install EditorConfig in your development environment to avoid whitespace changes.
See [editorconfig.org](http://editorconfig.org) for more.

### Building the JS

Scripted:

Run the following command to create a new Debian container, install the relevant NodeJS
packages, and then build the `/dist/addressfinder.*` files.

 - `docker-compose run addressfinder-woocommerce /addressfinder-woocommerce/bin/build_production.sh`

Manually:

 - `npm run build` or `npm run build:production`

### Export

Instructions for exporting the WooCommerce plugin are in the [Wiki](https://github.com/abletech/wiki/tree/master/clients/addressfinder/addressfinder-woocommerce)
