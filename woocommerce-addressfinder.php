<?php
/**
	Addressfinder plugin for autocompleting addresses in WooCommerce for New Zealand and Australia
	Plugin Name: Addressfinder
	Plugin URI: https://github.com/AddressFinder/woocommerce-addressfinder
	Version: 1.6.1
	Author: Addressfinder
	Description: Woocommerce address finder plugin for autocompleting addresses in New Zealand and Australia

	@package AddressFinder/WooCommerce
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'ADDRESSFINDER_WOOCOMMERCE_VERSION' ) ) {
	define( 'ADDRESSFINDER_WOOCOMMERCE_VERSION', '1.6.1' );
}

/**
 * Check if WooCommerce is active
 *
 * @since 1.0.0
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
		$path                = plugin_dir_path( __FILE__ );
		$af_key_nz           = esc_attr( get_option( 'af-key' ) );
		$af_key_au           = esc_attr( get_option( 'af-key-au' ) );
		$af_widget_options   = get_option( 'af-widget-options' );
		$af_default_country  = esc_attr( get_option( 'af-default-country' ) );
		$af_widget_au_options = esc_attr( get_option( 'af-widget-au-options' ) );
		$af_widget_nz_options = esc_attr( get_option( 'af-widget-nz-options' ) );
		$af_widget_nz_po_box = esc_attr( get_option( 'af-widget-nz-pobox' ) );
		$af_widget_au_po_box = esc_attr( get_option( 'af-widget-au-pobox' ) );

		// email.
		$af_ev_widget_enabled = esc_attr( get_option( 'af-ev-widget-enabled' ) );
		$af_ev_widget_public = esc_attr( get_option( 'af-ev-widget-public' ) );
		$af_ev_widget_role = esc_attr( get_option( 'af-ev-widget-role' ) );
		$af_ev_widget_disposable = esc_attr( get_option( 'af-ev-widget-disposable' ) );
		$af_ev_widget_unverified = esc_attr( get_option( 'af-ev-widget-unverified' ) );
		$af_ev_widget_options = get_option( 'af-ev-widget-options' );

		// phone.
		$af_pv_widget_enabled = esc_attr( get_option( 'af-pv-widget-enabled' ) );
		$af_pv_default_country = esc_attr( get_option( 'af-pv-widget-default-country' ) );
		$af_pv_allowed_countries = esc_attr( get_option( 'af-pv-widget-allowed-countries' ) );
		$af_pv_widget_non_mobile = esc_attr( get_option( 'af-pv-widget-non-mobile' ) );
		$af_pv_widget_disallowed_country = esc_attr( get_option( 'af-pv-widget-disallowed-country' ) );
		$af_pv_widget_unverified = esc_attr( get_option( 'af-pv-widget-unverified' ) );
		$af_pv_widget_options = get_option( 'af-pv-widget-options' );

		$addressfinder_js   = file_get_contents( $path . 'addressfinder.js' );
		echo "<script>\nvar AddressFinderConfig = {};\n";

		if ( $af_key_nz ) {
			printf( "AddressFinderConfig.key_nz = '%s';\n", esc_js( $af_key_nz ) );
		}

		if ( $af_key_au ) {
			printf( "AddressFinderConfig.key_au = '%s';\n", esc_js( $af_key_au ) );
		}

		if ( null !== $af_widget_options && ! empty( trim( $af_widget_options ) ) ) {
			printf( "AddressFinderConfig.widget_options = '%s';\n", wp_json_encode( json_decode( $af_widget_options ) ) );
		} else {
			$au_post_box = ( 'yes' == $af_widget_au_po_box ) ? '0' : '1';
			$nz_post_box = ( 'yes' == $af_widget_nz_po_box ) ? '0' : '1';

			if ( 'postal_and_physical' == $af_widget_au_options ) {
				printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "gnaf,paf", "post_box": "' . $au_post_box . '"}}' ) ) );
			} elseif ( 'postal' == $af_widget_au_options ) {
				printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "paf", "post_box": "' . $au_post_box . '"}}' ) ) );
			} else {
				printf( "AddressFinderConfig.au_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"source": "gnaf", "post_box": "' . $au_post_box . '"}}' ) ) );
			}

			if ( 'postal_and_physical' == $af_widget_nz_options ) {
				printf( "AddressFinderConfig.nz_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"post_box": "' . $nz_post_box . '"}}' ) ) );
			} else {
				printf( "AddressFinderConfig.nz_widget_options = '%s';\n", wp_json_encode( json_decode( '{"address_params": {"delivered": "1", "post_box": "' . $nz_post_box . '"}}' ) ) );
			}
		}

		// Email Settings.
		if ( 'yes' == $af_ev_widget_enabled ) {
			echo "AddressFinderConfig.email = {};\n";

			if ( null !== $af_ev_widget_options && ! empty( trim( $af_ev_widget_options ) ) ) {
				printf( "AddressFinderConfig.email.rules = '%s';\n", wp_json_encode( json_decode( $af_ev_widget_options ) ) );
			} else {
				$public_rule     = ( 'yes' == $af_ev_widget_public ) ? 'allow' : 'block';
				$role_rule       = ( 'yes' == $af_ev_widget_role ) ? 'allow' : 'block';
				$disposable_rule = ( 'yes' == $af_ev_widget_disposable ) ? 'allow' : 'block';
				$unverified_rule = ( 'yes' == $af_ev_widget_unverified ) ? 'allow' : 'block';

				printf( "AddressFinderConfig.email.rules = '%s';\n", wp_json_encode( json_decode( '{"public": {"rule": "' . $public_rule . '"}, "role": {"rule": "' . $role_rule . '"}, "disposable": {"rule": "' . $disposable_rule . '"}, "unverified": {"rule": "' . $unverified_rule . '"}}' ) ) );
			}
		}

		// Phone Settings.
		if ( 'yes' == $af_pv_widget_enabled ) {
			echo "AddressFinderConfig.phone = {};\n";

			if ( $af_pv_default_country ) {
				printf( "AddressFinderConfig.phone.defaultCountryCode = '%s';\n", esc_js( $af_pv_default_country ) );
			}

			if ( $af_pv_allowed_countries ) {
				printf( "AddressFinderConfig.phone.allowedCountryCodes = '%s';\n", esc_js( $af_pv_allowed_countries ) );
			}

			if ( null !== $af_pv_widget_options && ! empty( trim( $af_pv_widget_options ) ) ) {
				printf( "AddressFinderConfig.phone.rules = '%s';\n", wp_json_encode( json_decode( $af_pv_widget_options ) ) );
			} else {
				$non_mobile_rule         = ( 'yes' == $af_pv_widget_non_mobile ) ? 'allow' : 'block';
				$disallowed_country_rule = ( 'yes' == $af_pv_widget_disallowed_country ) ? 'allow' : 'block';
				$unverified_phone_rule   = ( 'yes' == $af_pv_widget_unverified ) ? 'allow' : 'block';

				printf( "AddressFinderConfig.phone.rules = '%s';\n", wp_json_encode( json_decode( '{"nonMobile": {"rule": "' . $non_mobile_rule . '"}, "countryNotAllowed": {"rule": "' . $disallowed_country_rule . '"}, "unverified": {"rule": "' . $unverified_phone_rule . '"}}' ) ) );
			}
		}

		echo "\n</script>";

		wp_enqueue_script( 'addressfinder_js', plugins_url( 'addressfinder.js', __FILE__ ), array(), ADDRESSFINDER_WOOCOMMERCE_VERSION, true );
	}

	/**
	 * Add the tab to the tabs array.
	 *
	 * @param array $settings_tabs adds additional settings.
	 */
	function filter_addressfinder_settings_tabs_array( $settings_tabs ) {
		$settings_tabs['addressfinder-settings'] = __( 'Addressfinder', 'woocommerce' );

		return $settings_tabs;
	}
	add_filter( 'woocommerce_settings_tabs_array', 'filter_addressfinder_settings_tabs_array', 99 );
	add_filter( 'woocommerce_settings_addressfinder-settings', 'add_settings', 10, 1 );

	/**
	 * Add settings.
	 */
	function add_settings() {
		return WC_Admin_Settings::output_fields( addressfinder_settings() );
	}
	/**
	 * Injects AF related settings into the AF settings page
	 */
	function addressfinder_settings() {

		$settings = array();

		$settings[] = array(
			'name' => __( 'Addressfinder Settings', 'text-domain' ),
			'type' => 'title',
			'desc' => __( 'Addressfinder supports Australian and New Zealand data verification services.', 'text-domain' ),
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
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>.', 'text-domain' ),
			);

			$settings[] = array(
				'name'     => __( 'Licence key for Australia', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the Addressfinder Australian portal', 'text-domain' ),
				'id'       => 'af-key-au',
				'type'     => 'text',
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>.', 'text-domain' ),
			);
		} elseif ( $af_key_au ) {
			$settings[] = array(
				'name'     => __( 'Licence key', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the Addressfinder Australian portal', 'text-domain' ),
				'id'       => 'af-key-au',
				'type'     => 'text',
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>.', 'text-domain' ),
			);
		} else {
			$settings[] = array(
				'name'     => __( 'Licence key', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the Addressfinder portal', 'text-domain' ),
				'id'       => 'af-key',
				'type'     => 'text',
				'desc'     => __( 'Find your Addressfinder Key from <a href="https://portal.addressfinder.net" target="_blank">Addressfinder Portal</a>.', 'text-domain' ),
			);
		}

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-general',
		);

		$settings[] = array(
			'name' => __( 'Address Verification', 'text-domain' ),
			'type' => 'title',
			'id'   => 'addressfinder-widget',
		);

		$settings[] = array(
			'name'    => __( 'Default Country', 'text-domain' ),
			'desc'    => __( 'If your checkout page does not have a country select field, addresses from this country will be displayed.', 'text-domain' ),
			'id'      => 'af-default-country',
			'default' => 'AU',
			'type'    => 'select',
			'options' => array(
				'au' => __( 'Australia', 'text-domain' ),
				'nz' => __( 'New Zealand', 'text-domain' ),
			),
		);

		$settings[] = array(
			'name'    => __( 'Australian Address Options', 'text-domain' ),
			'id'      => 'af-widget-au-options',
			'default' => 'postal_and_physical',
			'type'    => 'radio',
			'options' => array(
				'postal_and_physical' => __( 'Search all addresses (Postal and Physical)', 'text-domain' ),
				'postal' => __( 'Search Australia Post delivered addresses only', 'text-domain' ),
				'physical' => __( 'Search physical addresses only', 'text-domain' ),
			),
		);

		$settings[] = array(
			'id'   => 'af-widget-au-pobox',
			'type' => 'checkbox',
			'desc' => __( 'Include PO Boxes', 'text-domain' ),
			'default' => 'yes',
		);

		$settings[] = array(
			'name'    => __( 'New Zealand Address Options', 'text-domain' ),
			'id'      => 'af-widget-nz-options',
			'default' => 'postal_and_physical',
			'type'    => 'radio',
			'options' => array(
				'postal_and_physical' => __( 'Search all addresses (Postal and Physical)', 'text-domain' ),
				'postal' => __( 'Search New Zealand Post delivered addresses only', 'text-domain' ),
			),
		);

		$settings[] = array(
			'id'   => 'af-widget-nz-pobox',
			'type' => 'checkbox',
			'desc' => __( 'Include PO Boxes', 'text-domain' ),
			'default' => 'yes',
		);

		$settings[] = array(
			'name'        => __( 'Advanced Javascript Options', 'text-domain' ),
			'id'          => 'af-widget-options',
			'type'        => 'textarea',
			'desc_tip' => __( 'This will override the above options.', 'text-domain' ),
			'placeholder' => __( 'Eg: {"address_params": {"source": "gnaf,paf"}}', 'text-domain' ),
			'desc'        => __( '<p>Examples can be found <a href="https://addressfinder.nz/docs/code-examples/">here</a>.</p>', 'text-domain' ),
		);

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-widget',
		);

		$settings[] = array(
			'name' => __( 'Email Verification', 'text-domain' ),
			'type' => 'title',
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
			'name'        => __( 'Advanced Email Rules', 'text-domain' ),
			'id'          => 'af-ev-widget-options',
			'type'        => 'textarea',
			'desc_tip' => __( 'This will override the above allowed email types.', 'text-domain' ),
			'placeholder' => __( 'Eg: {"public": {"rule": "warn"}}', 'text-domain' ),
			'desc'        => __( '<p>Examples can be found <a target="_blank" href="https://addressfinder.nz/docs/email/advanced_usage/#custom-rules-messages">here</a>.</p>', 'text-domain' ),
		);

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-ev-widget',
		);

		$settings[] = array(
			'name' => __( 'Phone Verification', 'text-domain' ),
			'type' => 'title',
			'id'   => 'addressfinder-pv-widget',
		);

		$settings[] = array(
			'name' => __( 'Enable', 'text-domain' ),
			'id'   => 'af-pv-widget-enabled',
			'type' => 'checkbox',
			'desc' => __( 'Verify phone numbers at the point of capture', 'text-domain' ),
		);

		$settings[] = array(
			'name'        => __( 'Default Country', 'text-domain' ),
			'id'          => 'af-pv-widget-default-country',
			'type'        => 'text',
			'desc'        => __( 'Used to determine what location to query.', 'text-domain' ),
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
			'name'        => __( 'Advanced Phone Rules', 'text-domain' ),
			'id'          => 'af-pv-widget-options',
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
	 * Process save the settings.
	 */
	function action_woocommerce_settings_save_addressfinder_settings() {
		global $current_section;

		$tab_id = 'addressfinder-settings';

		// Call settings function.
		$settings = addressfinder_settings();

		WC_Admin_Settings::save_fields( $settings );

		if ( $current_section ) {
			/**
			 * Updating the woocommerce options.
			 *
		   * @since 1.0.0
			 */
			do_action( 'woocommerce_update_options_' . $tab_id . '_' . $current_section );
		}
	}
	add_action( 'woocommerce_settings_save_addressfinder-settings', 'action_woocommerce_settings_save_addressfinder_settings', 10 );


	/**
	 * Load Addressfinder styles.
	 */
	function addressfinder_add_styles() {
		$plugin_url = plugin_dir_url( __FILE__ );
		wp_enqueue_style( 'addressfinder-woocommerce', $plugin_url . 'addressfinder-styles.css', array(), ADDRESSFINDER_WOOCOMMERCE_VERSION );
	}
}
