=== WooCommerce AddressFinder ===

Contributors: Abletech
Tags: woocommerce, addressfinder, address, autocomplete, new zealand, australia, billing, shipping, valid, validation
Requires at least: 4.1
Tested up to: 5.5
WC tested up to: 4.4
Stable tag: 1.4.5
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Enables autocomplete of Shipping and Billing Addresses for New Zealand and Australian WooCommerce stores.

== Description ==

The AddressFinder plugin for WooCommerce adds an autocomplete capability to the delivery and billing address fields of your online store.

= Get Verified Addresses =

No more mistakes. Save verified addresses straight from your checkout to your database.

= Access the latest addresses =

Leave the hard work to us. The AddressFinder address database is frequently refreshed from multiple sources so you can rely on the data you collect.

= No programming required =

This plugin is super easy to set up. It does not require any experience and you can have it working in minutes.

= Supported Countries =

* [Australia](https://addressfinder.com.au/?utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=Australia&utm_content=Supported%20Countries)
* [New Zealand](https://addressfinder.nz/?utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=New%20Zealand&utm_content=Supported%20Countries)

= Demonstration Video =

Watch a short 2 min video showing the [installation and configuration of AddressFinder for WooCommerce](https://vimeo.com/307188204).

= Compatibility =

WooCommerce AddressFinder is compatible with WooCommerce v3.0 and above

WooCommerce AddressFinder requires:

* Wordpress v4.1 or higher
* WooCommerce v2.3 or higher


== Installation ==

= Demonstration video =

Follow the instructions below, or watch the [installation video](https://vimeo.com/abletech/addressfinder-woocommerce).

= Installation instructions =

This section describes how to install the plugin and get it working.

1. Use the Wordpress Admin Menu, select Plugins -> Add New
2. Search for `woocommerce-addressfinder`
3. Press the Install Now button
4. Activate the plugin through the 'Plugins' screen in WordPress
5. Use the WooCommerce -> Settings -> Payments screen to input your AddressFinder API keys.
6. Done

New users can register for a free account at one of these links:

* [Free Account for Australia](https://portal.addressfinder.io/signup/au/free?rc=woo_readme&utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=AddressFinder%20Australia%20Free%20Plans)
* [Free Account for New Zealand](https://portal.addressfinder.io/signup/nz/free?rc=woo_readme&utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=AddressFinder%20New%20Zealand%20Free%20Plans)

Existing users can obtain their API key from the [AddressFinder Portal](https://portal.addressfinder.io/?utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=AddressFinder%20Portal&utm_content=Existing%20users%20can%20obtain%20their%20API%20key).

Read more on the AddressFinder [WooCommerce Plugin](https://addressfinder.nz/docs/woocommerce/?rc=woo_readme&utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=Woocommerce%20Plugin&utm_content=Register%20for%20a%20free%20account) page.


== Frequently Asked Questions ==

= What is the WooCommerce plugin? =

The WooCommerce plugin provides the following features:

* Autocomplete billing and shipping address in checkout page
* Autocomplete address in my account page
* Only enabled when country is selected as New Zealand or Australia

= How do I remove the AddressFinder byline?

If you are on a paid plan, you can disable the "byline" by setting a widget option. Use the WooCommerce -> Settings -> Checkout screen, and add the following to the _Widget Options_ box:

`{"byline": false}`

Then reload the checkout page, and the AddressFinder advertising will disappear.

= Which AddressFinder plan is right for you? =

AddressFinder offers both free and paid plans, we recommend you start with the free plan which gives you up to 1000 completed address searches per month.

If you need more than 1000 address lookups per month from day one then upgrade to a paid plan, these start from $42 per month.

You can read more about AddressFinder plans here:

* [AddressFinder New Zealand Plans](https://addressfinder.nz/plans/?utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=AddressFinder%20New%20Zealand%20Plans&utm_content=Which%20AddressFinder%20plan%20is%20right%20for%20you)
* [AddressFinder Australia Plans](https://addressfinder.com.au/plans/?utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=AddressFinder%20Australia%20Plans&utm_content=Which%20AddressFinder%20plan%20is%20right%20for%20you)

= Many more FAQ questions and answers

The AddressFinder website has a large [FAQ section](https://addressfinder.com.au/faq/?utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=FAQ%20section&utm_content=AddressFinder%20FAQ%20NZ) with many questions answered.


== Screenshots ==

1. Autocomplete billing and shipping address in checkout page.
1. In the Admin section of your Wordpress website, navigate to *Plugins* -> *Installed Plugins* and activate the plugin by pressing Activate on AddressFinder.
1. Find your AddressFinder API key at [https://portal.addressfinder.io](https://portal.addressfinder.io/?utm_source=wordpress&utm_medium=plugin&utm_campaign=plugin&utm_term=Find%20your%20AddressFinder%20API%20key&utm_content=Screenshots)
1. In the Admin interface, navigate to the *WooCommerce* -> *Settings* -> *Checkout* page and enter your API key/s in the new section for AddressFinder settings. Leaving either the New Zealand or Australia field blank will simply disable autocompletion for the respective country.


== Changelog ==
= 1.4.5 =
* Confirm compatibility with Wordpress 5.5.1
* Confirm compatibility with WooCommerce 4.4.1
= 1.4.4 =
* Bug fix - prevent reloading the widget on mutation if the country element was never present
= 1.4.3 =
* Bug fix: prevent plugin reloading when address line 2 field is missing for AU addresses
= 1.4.2 =
* Bug fix: prevent plugin reloading when suburb field is missing for NZ addresses
* Bug fix: prevent error when plugin is in debug mode, and widget options are invalid
= 1.4.1 =
* Update dependencies
* Update the WC tested to value
* Add source maps
= 1.3.6 =
* Override styling for addressfinder `li` elements
* Update the tested to value
= 1.3.2 =
* Differentiate between WooCommerce version and webpage tools version
= 1.3.1 =
* Update addressfinder_webpage_tools v1.6.0
= 1.3.0 =
* Update to use new webpage tools package
= 1.2.17 =
* Documentation update after testing on Wordpress 5.1
= 1.2.16 =
* Support state/region fields of type input (text)
= 1.2.15 =
* Documentation update
* New installation video
* Wordpress 5.0 compatibility confirmation
= 1.2.14 =
* Removes redundant positioning function to reflect api updates
= 1.2.13 =
* Dispatches update checkout event on address selection
= 1.2.12 =
* Fixes errors when checkouts are missing address_line_2 field
= 1.2.11 =
* Checks window.AddressFinder is loaded before intialising plugin
= 1.2.10 =
* Emit a change event when field values are updated
= 1.2.9 =
* Documentation updates
= 1.2.8 =
* Fix configuration loading fault
* Load Javascript with external file rather than embedding
= 1.2.7 =
* Prevents country change event clearing account address details on page load.
= 1.2.6 =
* Removes redundant core-js functions.
= 1.2.5 =
* Preserves address field values on page load.
= 1.2.4 =
* Add support for checkout pages without a country form field
* Add a default country option in the settings
= 1.2.3 =
* Adjusts the position of the widget
= 1.2.2 =
* Plugin now uses a single licence key by default
* Moved to webpack for script development
= 1.1.2 =
* Minor fixes
= 1.1.1 =
* Allows users to add additional options to adjust default behaviour of the widget
= 1.1.0 =
* Moved to NPM for script development
* Minified output script
* Removed superfluous CSS
= 1.0.14 =
* Support checkout pages without country fields
= 1.0.13 =
* Z-index fix
= 1.0.12 =
* Region code mappings fix
= 1.0.11 =
* Confirm compatibility with Wordpress 4.6 series
= 1.0.10 =
* Added debug flag to admin screen
* Improve handling of missing form fields
= 1.0.9 =
* Confirm compatibility with Wordpress 4.5
= 1.0.8 =
* Clean up WooCommerce settings page
= 1.0.7 =
* Minor fixes
= 1.0.6 =
* Add a default z-index style to handle sites that use positioned elements
* Load AddressFinder widget later to improve compatibility with the multistep-checkout-wizard plugin
= 1.0.5 =
* Fix fault with New Zealand city field
* Ignore WooCommerce placeholder instruction. Instead populate address_1 and address_2 as per Australian standards
= 1.0.3 =
* Initial release, enjoy!

== Upgrade Notice ==
= 1.4.5 =
* No changes are necessary
= 1.2.16 =
* No changes are necessary
= 1.2.14 =
* Visit the WooCommerce / Settings / Checkout page and confirm the default country value


== Contributors ==

* Jordan Carter   (https://github.com/jordandcarter)
* Andrew Pett     (https://github.com/aspett)
* Nigel Ramsay    (https://github.com/nigelramsay)
* Fiona Sanggang  (https://github.com/fsanggang)
* Ross Jourdain   (https://github.com/rossjourdain)
* Shaun O'Connell (https://github.com/ndorfin)
* Kate Norquay    (https://github.com/katenorquay)
