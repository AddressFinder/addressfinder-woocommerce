# WooCommerce AddressFinder Plugin

The AddressFinder plugin for WooCommerce adds an autocomplete capability to the
delivery and billing address fields of your online store.

Supported Countries:

* [Australia](https://addressfinder.com.au/)
* [New Zealand](https://addressfinder.nz/)

Register for a free AddressFinder account at one of these links:

* [Free Account for Australia](https://portal.addressfinder.io/signup/au/free?rc=woo_readme)
* [Free Account for New Zealand](https://portal.addressfinder.io/signup/nz/free?rc=woo_readme)

Existing users can obtain their API key from the [AddressFinder Portal](https://portal.addressfinder.io/).

Read more on the AddressFinder [WooCommerce Plugin](https://addressfinder.nz/docs/woocommerce/?rc=woo_readme) page.

## Development

This project uses npm scripts to lint, concat, and minify the JS used in this WooCommerce PHP plugin.

### Dependencies:

 - Node.js
 - npm
 - uglify-js
 - eslint

### Setting up your development environment

 1. `npm install -g uglifyjs eslint`
 2. `npm install` or `yarn`

Once your dependencies are installed, please install EditorConfig in your development environment to avoid whitespace changes.
See [editorconfig.org](http://editorconfig.org) for more.

### Building the JS

 - `npm run build` or `npm run build:production`

