# AddressFinder 1.4.9 (January 28, 2022)

* Documentation update

# AddressFinder 1.4.8 (March 3, 2021)

* Confirm compatibility with Wordpress 5.7

# AddressFinder 1.4.6 (December 21, 2020)

* Confirm compatibility with Wordpress 5.6
* Confirm compatibility with WooCommerce 4.8.0

# AddressFinder 1.4.5 (September 7, 2020)

* Confirm compatibility with Wordpress 5.5.1
* Confirm compatibility with WooCommerce 4.4.1

# AddressFinder 1.4.4 (August 6th, 2020)

* Bug fix - prevent reloading the widget on mutation if the country element was never present

# AddressFinder 1.4.3 (July 10th, 2020)

* Bug fix - prevent plugin reloading when address line 2 field is missing for AU addresses

# AddressFinder 1.4.2 (May 26th, 2020)

* Bug fix - prevent plugin reloading when suburb field is missing for NZ addresses
* Bug fix - prevent error when plugin is in debug mode, and widget options are invalid

# AddressFinder 1.4.1 (December 6, 2019)

* Update dependencies
* Update the WC tested to value
* Add source maps

# AddressFinder 1.3.6 (December 5, 2019)

* Override styling for addressfinder `li` elements
* Update the tested to value

# AddressFinder 1.3.2 (October 19, 2019)

* Differentiate between WooCommerce version and webpage tools version

# AddressFinder 1.3.1 (Sept 18, 2019)

* Update addressfinder-webpage-tools package to v1.6.0

# AddressFinder 1.3.0 (May 14, 2019)

* Update to use addressfinder-webpage-tools package

# AddressFinder 1.2.17 (March 6, 2019)

* Documentation update after testing on Wordpress 5.1

# AddressFinder 1.2.16 (January 14, 2019)

* Support state/region fields of type input (text)

# AddressFinder 1.2.15 (December 20, 2018)

* Documentation update
* New installation video
* Wordpress 5.0 compatibility confirmation

# AddressFinder 1.2.14 (April 24, 2018)

* Removes redundant positioning function to reflect api updates

# AddressFinder 1.2.13 (April 24, 2018)

* Dispatches update checkout event on address selection

# AddressFinder 1.2.12 (March 6, 2018)

* Fixes errors when checkouts are missing address_line_2 field

# AddressFinder 1.2.11 (March 5, 2018)

* Checks window.AddressFinder is loaded before intialising plugin

# AddressFinder 1.2.10 (January 16, 2018)

* Emit a change event when field values are updated

# AddressFinder 1.2.9 (November 15, 2017)

* Documentation update

# AddressFinder 1.2.8 (November 6, 2017)

* Fix configuration loading fault
* Load Javascript with external file rather than embedding

# AddressFinder 1.2.7 (November 2, 2017)

* Prevents country change event clearing account address details on page load.

# AddressFinder 1.2.6 (November 1, 2017)

* Removes redundant core-js functions.

# AddressFinder 1.2.5 (October 17, 2017)

* Preserves address field values on page load.

# AddressFinder 1.2.4 (October 17, 2017)

* Add support for checkout pages without a country form field
* Add a default country option in the settings

# AddressFinder 1.2.3 (August 24, 2017)

* Adjusts position of the widget

# AddressFinder 1.2.2 (August 22, 2017)

* Plugin now uses a single licence key by default
* Moved to webpack for script development

# AddressFinder 1.1.2 (June 12, 2017)

* Minor fixes

# AddressFinder 1.1.1 (June 9, 2017)

* Allows users to add additional options to adjust default behaviour of the widget

# AddressFinder 1.1.0 (May 9, 2017) #

* Move to NPM for development
* Remove superfluous CSS
* Use a minified script

# AddressFinder 1.0.14 (November 24, 2016) #

* Support checkout pages without country fields

# AddressFinder 1.0.13 (November 9, 2016) #

* Z-index fix

# AddressFinder 1.0.12 (November 9, 2016) #

* Region code mappings fix

# AddressFinder 1.0.11 (October 5, 2016) #

* Confirm compatibility with Wordpress 4.6 series

# AddressFinder 1.0.10 (May 2, 2016) #

* Added debug flag to admin screen
* Improve handling of missing form fields

# AddressFinder 1.0.9 (April 23, 2016) #

* Confirm compatibility with Wordpress 4.5

# AddressFinder 1.0.8 (April 23, 2016) #

* Clean up WooCommerce settings page

# AddressFinder 1.0.7 (April 12, 2016) #

* Minor fixes

# AddressFinder 1.0.6 (April 11, 2016) #

* Add a default z-index style to handle sites that use positioned elements
* Load AddressFinder widget later to improve compatibility with the multistep-checkout-wizard plugin

# AddressFinder 1.0.5 (March 1, 2016) #

* Fix fault with New Zealand city field
* Ignore WooCommerce placeholder instruction. Instead populate address_1 and address_2 as per Australian standards

# AddressFinder 1.0.3 (January 21, 2016) #

* Use proper Woothemes supported version

# AddressFinder 1.0.2 (January 21, 2016) #

* Minor bug fixes

# AddressFinder 1.0.0 (January 20, 2016) #

* Initial public release
