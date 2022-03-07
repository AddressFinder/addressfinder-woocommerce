<?php
/**
	AddressFinder plugin for autocompleting addresses in WooCommerce for New Zealand and Australia
	Plugin Name: AddressFinder
	Plugin URI: https://github.com/AddressFinder/woocommerce-addressfinder
	Version: 1.4.9
	Author: AddressFinder
	Description: Woocommerce address finder plugin for autocompleting addresses in New Zealand and Australia

	@package AddressFinder/WooCommerce
 **/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'ADDRESSFINDER_WOOCOMMERCE_VERSION' ) ) {
	define( 'ADDRESSFINDER_WOOCOMMERCE_VERSION', '1.4.9' );
}

/**
 * Check if WooCommerce is active
 */
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	add_action( 'woocommerce_after_checkout_form', 'add_addressfinder_widget' );
	add_action( 'woocommerce_after_edit_address_form_billing', 'add_addressfinder_widget' );
	add_action( 'woocommerce_after_edit_address_form_shipping', 'add_addressfinder_widget' );

	/**
	 * Adds necessary js code to load and initializes our autocomplete widget
	 *
	 * @param string[] $_checkout unused.
	 **/
	function add_addressfinder_widget( $_checkout ) {
		$path               = plugin_dir_path( __FILE__ );
		$af_key_nz          = esc_attr( get_option( 'af-key' ) );
		$af_key_au          = esc_attr( get_option( 'af-key-au' ) );
		$af_widget_options  = get_option( 'af-widget-options' );
		$af_debug           = esc_attr( get_option( 'af-debug' ) );
		$af_default_country = esc_attr( get_option( 'af-default-country' ) );
		$addressfinder_js   = file_get_contents( $path . 'addressfinder.js' );
		echo "<script>\nvar AddressFinderConfig = {};\n";

		if ( $af_key_nz ) {
			$escaped_af_key_nz = esc_js( $af_key_nz );
			// Safe to ignore the check because esc_js() is called on the user provided $af_key_nz
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo "AddressFinderConfig.key_nz = '{$escaped_af_key_nz}';\n";
		}

		if ( $af_key_au ) {
			$escaped_af_key_au = esc_js( $af_key_au );
			// Safe to ignore the check because esc_js() is called on the user provided $af_key_au
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo "AddressFinderConfig.key_au = '{$escaped_af_key_au}';\n";
		}

		if ( $af_widget_options ) {
			$encoded_json = json_encode( $af_widget_options );
			// Safe to ignore the check because the user providerd $af_widget_options are passed through json_encode() first
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo "AddressFinderConfig.widget_options = {$encoded_json};\n";
		}

		if ( 'yes' == $af_debug ) {
			echo "AddressFinderConfig.debug = true;\n";
		}

		if ( $af_default_country ) {
			$escaped_af_default_country = esc_js( $af_default_country );
			// Safe to ignore the check because esc_js() is called on the user provided $af_default_country.
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo "AddressFinderConfig.default_country = '{$escaped_af_default_country}';\n";
		}

		echo "\n</script>";

		wp_enqueue_script( 'addressfinder_js', plugins_url( 'addressfinder.js', __FILE__ ), array(), ADDRESSFINDER_WOOCOMMERCE_VERSION );
	}

	add_filter( 'woocommerce_get_settings_checkout', 'addressfinder_settings', 10, 1 );
	/**
	 * Injects AF related settings into the checkout's settings page
	 *
	 * @param Array[] $settings existing settings to append to.
	 **/
	function addressfinder_settings( $settings ) {
		$settings[] = array(
			'name' => __( 'AddressFinder Settings', 'text-domain' ),
			'type' => 'title',
			'desc' => __( 'AddressFinder supports New Zealand and Australia.', 'text-domain' ),
			'id'   => 'addressfinder-widget',
		);

		$af_key_nz = esc_attr( get_option( 'af-key' ) );
		$af_key_au = esc_attr( get_option( 'af-key-au' ) );
		if ( $af_key_nz && $af_key_au ) {
			$settings[] = array(
				'name'     => __( 'Licence key for New Zealand', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the AddressFinder portal', 'text-domain' ),
				'id'       => 'af-key',
				'type'     => 'text',
				'desc'     => __( 'Find your AddressFinder Key from <a href="https://portal.addressfinder.net" target="_blank">AddressFinder Portal</a>', 'text-domain' ),
			);

			$settings[] = array(
				'name'     => __( 'Licence key for Australia', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the AddressFinder Australian portal', 'text-domain' ),
				'id'       => 'af-key-au',
				'type'     => 'text',
				'desc'     => __( 'Find your AddressFinder Key from <a href="https://portal.addressfinder.net" target="_blank">AddressFinder Portal</a>', 'text-domain' ),
			);
		} elseif ( $af_key_au ) {
			$settings[] = array(
				'name'     => __( 'Licence key', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the AddressFinder Australian portal', 'text-domain' ),
				'id'       => 'af-key-au',
				'type'     => 'text',
				'desc'     => __( 'Find your AddressFinder Key from <a href="https://portal.addressfinder.net" target="_blank">AddressFinder Portal</a>', 'text-domain' ),
			);
		} else {
			$settings[] = array(
				'name'     => __( 'Licence key', 'text-domain' ),
				'desc_tip' => __( 'The key shown in the AddressFinder portal', 'text-domain' ),
				'id'       => 'af-key',
				'type'     => 'text',
				'desc'     => __( 'Find your AddressFinder Key from <a href="https://portal.addressfinder.net" target="_blank">AddressFinder Portal</a>', 'text-domain' ),
			);
		}

		$settings[] = array(
			'name'        => __( 'Widget Options', 'text-domain' ),
			'id'          => 'af-widget-options',
			'type'        => 'textarea',
			'placeholder' => __( 'Eg: {&quot;byline&quot;: true}', 'text-domain' ),
			'desc'        => __( '<p>Additional options that allow you to adjust the default behaviour of the widget. These options should be in the form of a JSON string with proper quoting of keys. </p><p>This section may be left blank for default behaviour.</p><p>For a full list of possible options <a href="https://addressfinder.nz/docs/widget_docs/">see our Widget documentation</a></p>', 'text-domain' ),
		);

		$settings[] = array(
			'name' => __( 'Debug Mode', 'text-domain' ),
			'id'   => 'af-debug',
			'type' => 'checkbox',
			'desc' => __( 'Show error messages when expected fields are missing', 'text-domain' ),
		);

		$settings[] = array(
			'name'    => __( 'Default Country', 'text-domain' ),
			'desc'    => __( 'If the checkout page does not have country selector form field, addresses from this country will be displayed', 'text-domain' ),
			'id'      => 'af-default-country',
			'default' => 'NZ',
			'type'    => 'select',
			'options' => array(
				'au' => __( 'Australia', 'text-domain' ),
				'nz' => __( 'New Zealand', 'text-domain' ),
			),
		);

		$settings[] = array(
			'type' => 'sectionend',
			'id'   => 'addressfinder-widget',
		);
		return $settings;
	}

	$plugin_url = plugin_dir_url( __FILE__ );
	wp_enqueue_style( 'addressfinder-woocommerce', $plugin_url . 'addressfinder-styles.css', array(), ADDRESSFINDER_WOOCOMMERCE_VERSION );
}
