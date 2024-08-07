<?php
/**
	Addressfinder plugin for autocompleting addresses in WooCommerce for New Zealand and Australia
	Plugin Name: Addressfinder
	Plugin URI: https://github.com/AddressFinder/woocommerce-addressfinder
	Version: 1.7.6
	Author: Addressfinder
	Description: Woocommerce address finder plugin for autocompleting addresses in New Zealand and Australia

	@package AddressFinder/WooCommerce
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'ADDRESSFINDER_WOOCOMMERCE_VERSION' ) ) {
	define( 'ADDRESSFINDER_WOOCOMMERCE_VERSION', '1.7.6' );
}

/**
 * Check if WooCommerce is active
 *
 * @since version 1.0.0
 */
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	add_action( 'woocommerce_after_checkout_form', 'add_addressfinder_widget' );
	add_action( 'woocommerce_after_edit_address_form_billing', 'add_addressfinder_widget' );
	add_action( 'woocommerce_after_edit_address_form_shipping', 'add_addressfinder_widget' );
	add_action( 'wp_enqueue_scripts', 'addressfinder_add_styles' );
	add_action( 'woocommerce_blocks_enqueue_checkout_block_scripts_after', 'add_addressfinder_widget' );

	/**
	 * Adds necessary js code to load and initializes our autocomplete widget
	 *
	 * @param string[] $_checkout unused.
	 */
	function add_addressfinder_widget( $_checkout ) {
		$path               = plugin_dir_path( __FILE__ );
		$addressfinder_js   = file_get_contents( $path . 'addressfinder.js' );

		// general.
		$af_key_nz          = esc_attr( get_option( 'af-key' ) );
		$af_key_au          = esc_attr( get_option( 'af-key-au' ) );
		$af_debug           = esc_attr( get_option( 'af-debug' ) );

		// address widget.
		$af_widget_enabled = esc_attr( get_option( 'af-widget-enabled' ) );
		$af_widget_options  = get_option( 'af-widget-options' );
		$af_default_country = esc_attr( get_option( 'af-default-country' ) );
		$af_au_widget_options = esc_attr( get_option( 'af-au-widget-options' ) );
		$af_au_widget_pobox = esc_attr( get_option( 'af-au-widget-pobox' ) );
		$af_nz_widget_options = esc_attr( get_option( 'af-nz-widget-options' ) );
		$af_nz_widget_pobox = esc_attr( get_option( 'af-nz-widget-pobox' ) );

		// email widget.
		$af_ev_widget_enabled = esc_attr( get_option( 'af-ev-widget-enabled' ) );
		$af_ev_widget_public = esc_attr( get_option( 'af-ev-widget-public' ) );
		$af_ev_widget_role = esc_attr( get_option( 'af-ev-widget-role' ) );
		$af_ev_widget_disposable = esc_attr( get_option( 'af-ev-widget-disposable' ) );
		$af_ev_widget_unverified = esc_attr( get_option( 'af-ev-widget-unverified' ) );
		$af_ev_widget_rules = get_option( 'af-ev-widget-rules' );

		// phone widget.
		$af_pv_widget_enabled = esc_attr( get_option( 'af-pv-widget-enabled' ) );
		$af_pv_default_country = esc_attr( get_option( 'af-pv-widget-default-country' ) );
		$af_pv_allowed_countries = esc_attr( get_option( 'af-pv-widget-allowed-countries' ) );
		$af_pv_widget_non_mobile = esc_attr( get_option( 'af-pv-widget-non-mobile' ) );
		$af_pv_widget_disallowed_country = esc_attr( get_option( 'af-pv-widget-disallowed-country' ) );
		$af_pv_widget_unverified = esc_attr( get_option( 'af-pv-widget-unverified' ) );
		$af_pv_widget_format_number = esc_attr( get_option( 'af-pv-widget-format-number' ) );
		$af_pv_widget_rules = get_option( 'af-pv-widget-rules' );

		echo "<script>\nvar AddressFinderConfig = {};\n";

		// general.
		if ( $af_key_nz ) {
			printf( "AddressFinderConfig.key_nz = '%s';\n", esc_js( $af_key_nz ) );
		}

		if ( $af_key_au ) {
			printf( "AddressFinderConfig.key_au = '%s';\n", esc_js( $af_key_au ) );
		}

		// address widget.
		if ( 'yes' == $af_widget_enabled ) {
			echo "AddressFinderConfig.address_widget_enabled = true;\n";

			if ( $af_default_country ) {
				printf( "AddressFinderConfig.default_country = '%s';\n", esc_js( $af_default_country ) );
			}

			if ( null !== $af_widget_options && ! empty( trim( $af_widget_options ) ) ) {
				printf( "AddressFinderConfig.widget_options = '%s';\n", wp_json_encode( json_decode( $af_widget_options ) ) );
			} else {
				if ( 'postal_and_physical' == $af_au_widget_options ) {
					if ( 'yes' == $af_au_widget_pobox ) {
						printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "gnaf,paf"}}' ) ) );
					} else {
						printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "gnaf,paf", "post_box": "0"}}' ) ) );
					}
				} else if ( 'postal' == $af_au_widget_options ) {
					if ( 'yes' == $af_au_widget_pobox ) {
						printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "paf"}}' ) ) );
					} else {
						printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "paf", "post_box": "0"}}' ) ) );
					}
				} else if ( 'physical' == $af_au_widget_options ) {
					if ( 'yes' == $af_au_widget_pobox ) {
						printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "gnaf"}}' ) ) );
					} else {
						printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "gnaf", "post_box": "0"}}' ) ) );
					}
				}

				if ( 'postal_and_physical' == $af_nz_widget_options ) {
					if ( 'yes' == $af_nz_widget_pobox ) {
						printf( "AddressFinderConfig.nz_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {}}' ) ) );
					} else {
						printf( "AddressFinderConfig.nz_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"post_box": "0"}}' ) ) );
					}
				} else if ( 'postal' == $af_nz_widget_options ) {
					if ( 'yes' == $af_nz_widget_pobox ) {
						printf( "AddressFinderConfig.nz_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"delivered": "1"}}' ) ) );
					} else {
						printf( "AddressFinderConfig.nz_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"delivered": "1", "post_box": "0"}}' ) ) );
					}
				}
			}
		}

		// email widget.
		if ( 'yes' == $af_ev_widget_enabled ) {
			echo "AddressFinderConfig.email_widget_enabled = true;\n";
			echo "AddressFinderConfig.email = {};\n";

			if ( null !== $af_ev_widget_rules && ! empty( trim( $af_ev_widget_rules ) ) ) {
				printf( "AddressFinderConfig.email.rules = '%s';\n", wp_json_encode( json_decode( $af_ev_widget_rules ) ) );
			} else {
				$public_rule     = ( 'yes' == $af_ev_widget_public ) ? 'allow' : 'block';
				$role_rule       = ( 'yes' == $af_ev_widget_role ) ? 'allow' : 'block';
				$disposable_rule = ( 'yes' == $af_ev_widget_disposable ) ? 'allow' : 'block';
				$unverified_rule = ( 'yes' == $af_ev_widget_unverified ) ? 'allow' : 'block';

				printf( "AddressFinderConfig.email.rules = '%s';\n", wp_json_encode( json_decode( '{"public": {"rule": "' . $public_rule . '"}, "role": {"rule": "' . $role_rule . '"}, "disposable": {"rule": "' . $disposable_rule . '"}, "unverified": {"rule": "' . $unverified_rule . '"}}' ) ) );
			}
		}

		// phone widget.
		if ( 'yes' == $af_pv_widget_enabled ) {
			echo "AddressFinderConfig.phone_widget_enabled = true;\n";
			echo "AddressFinderConfig.phone = {};\n";
			printf( "AddressFinderConfig.phone.formatNumber = '%s';\n", esc_js( $af_pv_widget_format_number ) );

			if ( $af_pv_default_country ) {
				printf( "AddressFinderConfig.phone.defaultCountryCode = '%s';\n", esc_js( $af_pv_default_country ) );
			}

			if ( $af_pv_allowed_countries ) {
				printf( "AddressFinderConfig.phone.allowedCountryCodes = '%s';\n", esc_js( $af_pv_allowed_countries ) );
			}

			if ( null !== $af_pv_widget_rules && ! empty( trim( $af_pv_widget_rules ) ) ) {
				printf( "AddressFinderConfig.phone.rules = '%s';\n", wp_json_encode( json_decode( $af_pv_widget_rules ) ) );
			} else {
				$non_mobile_rule         = ( 'yes' == $af_pv_widget_non_mobile ) ? 'allow' : 'block';
				$disallowed_country_rule = ( 'yes' == $af_pv_widget_disallowed_country ) ? 'allow' : 'block';
				$unverified_phone_rule   = ( 'yes' == $af_pv_widget_unverified ) ? 'allow' : 'block';

				printf( "AddressFinderConfig.phone.rules = '%s';\n", wp_json_encode( json_decode( '{"nonMobile": {"rule": "' . $non_mobile_rule . '"}, "countryNotAllowed": {"rule": "' . $disallowed_country_rule . '"}, "unverified": {"rule": "' . $unverified_phone_rule . '"}}' ) ) );
			}
		}

		if ( 'yes' == $af_debug ) {
			echo "AddressFinderConfig.debug = true;\n";
		}

		echo "\n</script>";

		wp_enqueue_script( 'addressfinder_js', plugins_url( 'addressfinder.js', __FILE__ ), array(), ADDRESSFINDER_WOOCOMMERCE_VERSION, true );
	}

	/**
	 * Add the tab to the tabs array
	 *
	 * @param array $settings_tabs adds additional settings.
	 */
	function filter_addressfinder_settings_tabs_array( $settings_tabs ) {
		$settings_tabs['addressfinder-settings'] = __( 'Addressfinder', 'woocommerce' );

		return $settings_tabs;
	}
	add_filter( 'woocommerce_settings_tabs_array', 'filter_addressfinder_settings_tabs_array', 99 );
	add_filter( 'woocommerce_settings_addressfinder-settings', 'add_settings', 10, 1 );

	// creates custom tabs attaching to the addressfinder settings page id: 'addressfinder-settings'.
	add_action( 'woocommerce_sections_addressfinder-settings', 'add_addressfinder_widget_tabs' );

	/**
	 * Sections created using this blog post https://rudrastyh.com/woocommerce/settings-pages.html
	 */
	function add_addressfinder_widget_tabs() {
		global $current_section;

		$sections = array(
			''    => 'General',
			'af-av-widget-section'  => 'Address Widget',
			'af-ev-widget-section'  => 'Email Widget',
			'af-pv-widget-section'  => 'Phone Widget',
		);

		echo '<ul class="subsubsub">';

		foreach ( $sections as $id => $label ) {
			$url = add_query_arg(
				array(
					'page' => 'wc-settings',
					'tab' => 'addressfinder-settings',
					'section' => $id,
				),
				admin_url( 'admin.php' )
			);

			$current = $current_section == $id ? 'class=current' : '';

			$separator = end( array_keys( $sections ) ) === $id ? '' : '|';

			echo '<li><a href="' . esc_url( $url ) . '" ' . esc_attr( $current ) . '>' . esc_html( $label ) . '</a> ' . esc_html( $separator ) . ' </li>';
		}

		echo '</ul><br class="clear" />';
	}

	/**
	 * Add settings
	 */
	function add_settings() {
		return WC_Admin_Settings::output_fields( addressfinder_settings() );
	}
	/**
	 * Injects AF related settings into the AF settings page
	 */
	function addressfinder_settings() {
		if ( isset( $_GET['section'] ) ) {
			if ( 'af-av-widget-section' == $_GET['section'] ) {
				return addressfinder_address_widget_settings();
			} else if ( 'af-ev-widget-section' == $_GET['section'] ) {
				return addressfinder_email_widget_settings();
			} else if ( 'af-pv-widget-section' == $_GET['section'] ) {
				return addressfinder_phone_widget_settings();
			}
		}

		// Outside of the 'if' statement to successfully return the general settings on page load.
		return addressfinder_general_settings();
	}

	/**
	 * Returns an array of AF general settings
	 */
	function addressfinder_general_settings() {
		$settings = array();

		$settings[] = array(
			'name' => __( 'Addressfinder', 'text-domain' ),
			'type' => 'title',
			'desc' => __( 'Addressfinder supports address, email and phone data verification services.', 'text-domain' ),
			'id'   => 'addressfinder-general',
		);

		$af_key_nz = esc_attr( get_option( 'af-key' ) );
		$af_key_au = esc_attr( get_option( 'af-key-au' ) );
		if ( $af_key_nz && $af_key_au ) {
			$settings[] = array(
				'name'     => __( 'Licence key for New Zealand', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the Addressfinder portal', 'text-domain' ),
				'id'       => 'af-key',
				'type'     => 'text',
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>', 'text-domain' ),
			);

			$settings[] = array(
				'name'     => __( 'Licence key for Australia', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the Addressfinder Australian portal', 'text-domain' ),
				'id'       => 'af-key-au',
				'type'     => 'text',
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>', 'text-domain' ),
			);
		} else if ( $af_key_au ) {
			$settings[] = array(
				'name'     => __( 'Licence key', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the Addressfinder Australian portal', 'text-domain' ),
				'id'       => 'af-key-au',
				'type'     => 'text',
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>', 'text-domain' ),
			);
		} else {
			$settings[] = array(
				'name'     => __( 'Licence key', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the Addressfinder portal', 'text-domain' ),
				'id'       => 'af-key',
				'type'     => 'text',
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>', 'text-domain' ),
			);
		}

		$settings[] = array(
			'name' => __( 'Debug Mode', 'text-domain' ),
			'id'   => 'af-debug',
			'type' => 'checkbox',
			'desc' => __( 'Show error messages when expected fields are missing', 'text-domain' ),
		);

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-general',
		);

		return $settings;
	}

	/**
	 * Returns an array of AF address settings
	 */
	function addressfinder_address_widget_settings() {

		$settings[] = array(
			'name' => __( 'Address Widget', 'text-domain' ),
			'type' => 'title',
			'desc' => __( 'Configure your address widget settings.', 'text-domain' ),
			'id'   => 'addressfinder-av-widget',
		);

		$settings[] = array(
			'name' => __( 'Enable', 'text-domain' ),
			'id'   => 'af-widget-enabled',
			'type' => 'checkbox',
			'desc' => __( 'Autocomplete addresses at the point of capture', 'text-domain' ),
			'default' => 'yes',
		);

		// Australian widget options.
		$settings[] = array(
			'name'    => __( 'Australian Address Options', 'text-domain' ),
			'id'      => 'af-au-widget-options',
			'default' => 'postal_and_physical',
			'type'    => 'radio',
			'options' => array(
				'postal_and_physical' => __( 'Search all addresses (Postal and Physical)', 'text-domain' ),
				'postal' => __( 'Search Australia Post delivered addresses only', 'text-domain' ),
				'physical' => __( 'Search physical addresses only', 'text-domain' ),
			),
		);

		$settings[] = array(
			'id'   => 'af-au-widget-pobox',
			'type' => 'checkbox',
			'desc' => __( 'Include PO Boxes', 'text-domain' ),
			'default' => 'yes',
		);

		// New Zealand widget options.
		$settings[] = array(
			'name'    => __( 'New Zealand Address Options', 'text-domain' ),
			'id'      => 'af-nz-widget-options',
			'default' => 'postal_and_physical',
			'type'    => 'radio',
			'options' => array(
				'postal_and_physical' => __( 'Search all addresses (Postal and Physical)', 'text-domain' ),
				'postal' => __( 'Search New Zealand Post delivered addresses only', 'text-domain' ),
			),
		);

		$settings[] = array(
			'id'   => 'af-nz-widget-pobox',
			'type' => 'checkbox',
			'desc' => __( 'Include PO Boxes', 'text-domain' ),
			'default' => 'yes',
		);

		$settings[] = array(
			'name'        => __( 'Advanced Options', 'text-domain' ),
			'id'          => 'af-widget-options',
			'type'        => 'textarea',
			'desc_tip' => __( 'This will override the above options.', 'text-domain' ),
			'placeholder' => __( 'Eg: {"address_params": {"source": "gnaf,paf"}}', 'text-domain' ),
			'desc'        => __( '<p>Examples can be found <a href="https://addressfinder.nz/docs/code-examples/">here</a>.</p>', 'text-domain' ),
		);

		$settings[] = array(
			'name'    => __( 'Default Country', 'text-domain' ),
			'desc'    => __( 'If your checkout page does not have a country select field, addresses from this country will be displayed', 'text-domain' ),
			'id'      => 'af-default-country',
			'default' => 'AU',
			'type'    => 'select',
			'options' => array(
				'au' => __( 'Australia', 'text-domain' ),
				'nz' => __( 'New Zealand', 'text-domain' ),
			),
		);

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-av-widget',
		);

		return $settings;
	}


	/**
	 * Returns an array of AF email settings
	 */
	function addressfinder_email_widget_settings() {
		$settings = array();

		$settings[] = array(
			'name' => __( 'Email Widget', 'text-domain' ),
			'type' => 'title',
			'desc' => __( 'Configure your email widget settings.', 'text-domain' ),
			'id'   => 'addressfinder-ev-widget',
		);

		$settings[] = array(
			'name' => __( 'Enable', 'text-domain' ),
			'id'   => 'af-ev-widget-enabled',
			'type' => 'checkbox',
			'desc' => __( 'Verify email addresses at the point of capture', 'text-domain' ),
		);

		$settings[] = array(
			'name' => __( 'Allowed Email Types', 'text-domain' ),
			'id'   => 'af-ev-widget-public',
			'type' => 'checkbox',
			'desc' => __( 'Public', 'text-domain' ),
			'default' => 'yes',
		);

		$settings[] = array(
			'id'   => 'af-ev-widget-role',
			'type' => 'checkbox',
			'desc' => __( 'Role', 'text-domain' ),
			'default' => 'yes',
		);

		$settings[] = array(
			'id'   => 'af-ev-widget-disposable',
			'type' => 'checkbox',
			'desc' => __( 'Disposable', 'text-domain' ),
		);

		$settings[] = array(
			'id'   => 'af-ev-widget-unverified',
			'type' => 'checkbox',
			'desc' => __( 'Unverified', 'text-domain' ),
		);

		$settings[] = array(
			'name'        => __( 'Advanced Rules', 'text-domain' ),
			'id'          => 'af-ev-widget-rules',
			'type'        => 'textarea',
			'desc_tip' => __( 'This will override the above allowed email types.', 'text-domain' ),
			'placeholder' => __( 'Eg: {"public": {"rule": "warn"}}', 'text-domain' ),
			'desc'        => __( '<p>Examples can be found <a target="_blank" href="https://addressfinder.nz/docs/email/advanced_usage/#custom-rules-messages">here</a>.</p>', 'text-domain' ),
		);

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-ev-widget',
		);

		return $settings;
	}


	/**
	 * Returns an array of AF phone settings
	 */
	function addressfinder_phone_widget_settings() {
		$settings = array();

		$settings[] = array(
			'name' => __( 'Phone Widget', 'text-domain' ),
			'type' => 'title',
			'desc' => __( 'Configure your phone widget settings.', 'text-domain' ),
			'id'   => 'addressfinder-pv-widget',
		);

		$settings[] = array(
			'name' => __( 'Enable', 'text-domain' ),
			'id'   => 'af-pv-widget-enabled',
			'type' => 'checkbox',
			'desc' => __( 'Verify phone numbers at the point of capture', 'text-domain' ),
		);

		$settings[] = array(
			'name'        => __( 'Default Country (Required)', 'text-domain' ),
			'id'          => 'af-pv-widget-default-country',
			'type'        => 'text',
			'placeholder' => __( 'NZ', 'text-domain' ),
			'desc'        => __( 'If your checkout page does not have a country select field, phone numbers will be verified against this country.', 'text-domain' ),
		);

		$settings[] = array(
			'name'        => __( 'Allowed Countries', 'text-domain' ),
			'id'          => 'af-pv-widget-allowed-countries',
			'type'        => 'text',
			'placeholder' => __( 'AU,NZ', 'text-domain' ),
			'desc'        => __( '<p>Seperate country codes by a comma.</p><p>A full list of Country Codes can be found <a target="_blank" href="https://www.iban.com/country-codes">here</a>.</p>', 'text-domain' ),
		);

		$settings[] = array(
			'name' => __( 'Allowed Line Types', 'text-domain' ),
			'id'   => 'af-pv-widget-non-mobile',
			'type' => 'checkbox',
			'desc' => __( 'Non Mobile', 'text-domain' ),
			'default' => 'yes',
		);

		$settings[] = array(
			'id'   => 'af-pv-widget-disallowed-country',
			'type' => 'checkbox',
			'desc' => __( 'Disallowed Countries', 'text-domain' ),
			'default' => 'yes',
		);

		$settings[] = array(
			'id'   => 'af-pv-widget-unverified',
			'type' => 'checkbox',
			'desc' => __( 'Unverified', 'text-domain' ),
		);

		$settings[] = array(
			'name'    => __( 'Format Phone Number On Validation', 'text-domain' ),
			'id'      => 'af-pv-widget-format-number',
			'default' => 'none',
			'type'    => 'radio',
			'options' => array(
				'none' => __( 'None', 'text-domain' ),
				'rawNational' => __( '1234567890 (raw national)', 'text-domain' ),
				'formattedNational' => __( '123 456 7890 (formatted national)', 'text-domain' ),
				'rawInternational' => __( '+64123456789 (raw international)', 'text-domain' ),
				'formattedInternational' => __( '+64 12 345 6789 (formatted international)', 'text-domain' ),
			),
		);

		$settings[] = array(
			'name'        => __( 'Advanced Rules', 'text-domain' ),
			'id'          => 'af-pv-widget-rules',
			'type'        => 'textarea',
			'desc_tip' => __( 'This will override the above allowed line types.', 'text-domain' ),
			'placeholder' => __( 'Eg: {"unverified": {"rule": "warn"}}', 'text-domain' ),
			'desc'        => __( '<p>Examples can be found <a target="_blank" href="https://addressfinder.nz/docs/phone/advanced_usage/#custom-rules-messages">here</a>.</p>', 'text-domain' ),
		);

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-pv-widget',
		);

		return $settings;
	}

	/**
	 * Process save the settings
	 */
	function action_woocommerce_settings_save_addressfinder_settings() {
		global $current_section;

		$tab_id = 'addressfinder-settings';

		// Call settings function.
		$settings = addressfinder_settings();

		WC_Admin_Settings::save_fields( $settings );

		if ( $current_section ) {
			/**
			 * Updates the woocommerce options
			 *
			 * @since version 1.0.0
			 */
			do_action( 'woocommerce_update_options_' . $tab_id . '_' . $current_section );
		}
	}
	add_action( 'woocommerce_settings_save_addressfinder-settings', 'action_woocommerce_settings_save_addressfinder_settings', 10 );


	/**
	 * Load Addressfinder styles
	 */
	function addressfinder_add_styles() {
		$plugin_url = plugin_dir_url( __FILE__ );
		wp_enqueue_style( 'addressfinder-woocommerce', $plugin_url . 'addressfinder-styles.css', array(), ADDRESSFINDER_WOOCOMMERCE_VERSION );
	}
}
