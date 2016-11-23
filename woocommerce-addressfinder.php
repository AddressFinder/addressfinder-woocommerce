<?php
/*
Plugin Name: AddressFinder
Plugin URI: https://github.com/Abletech/woocommerce-addressfinder
Version: 1.0.14
Author: Abletech
Description: Woocommerce address finder plugin for autocompleting addresses in New Zealand and Australia
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Check if WooCommerce is active
 **/
if ( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) {
	add_action( 'woocommerce_after_checkout_form', 'add_addressfinder_widget' );
	add_action( 'woocommerce_after_edit_address_form_billing', 'add_addressfinder_widget' );
	add_action( 'woocommerce_after_edit_address_form_shipping', 'add_addressfinder_widget' );

	function add_addressfinder_widget( $checkout ) {
		$path = plugin_dir_path( __FILE__ );
		$af_key_nz = esc_attr( get_option( 'af-key' ) );
		$af_key_au = esc_attr( get_option( 'af-key-au' ) );
		$af_debug = esc_attr( get_option( 'af-debug' ) );
		$addressfinder_js = file_get_contents( $path . 'addressfinder.js' );
		echo "<script>\nvar AddressFinderConfig = {};\n";

		if($af_key_nz) {
			echo "AddressFinderConfig.key_nz = '{$af_key_nz}';\n";
		}

		if($af_key_au) {
			echo "AddressFinderConfig.key_au = '{$af_key_au}';\n";
		}

		if($af_debug == 'yes') {
			echo "AddressFinderConfig.debug = true;\n";
		}

		echo "\n{$addressfinder_js}\n</script>";

		$addressfinder_css = file_get_contents( $path . 'addressfinder.css' );
		echo "<style>{$addressfinder_css}</style>";
	}

	add_filter( 'woocommerce_get_settings_checkout', 'addressfinder_settings', 10, 1 );
	function addressfinder_settings( $settings ) {
		$settings[] = array( 'name' => __( 'AddressFinder Settings', 'text-domain' ),
			'type' => 'title',
			'desc' => __( 'AddressFinder supports New Zealand and Australia. You may enter a key for either, or both.', 'text-domain' ),
			'id' => 'addressfinder-widget' );

		$settings[] = array(
			'name'     => __( 'Key for New Zealand', 'text-domain' ),
			'desc_tip' => __( 'The Key shown in the AddressFinder portal', 'text-domain' ),
			'id'       => 'af-key',
			'type'     => 'text',
			'desc'     => __( 'Find your AddressFinder Key from <a href="https://portal.addressfinder.io" target="_blank">AddressFinder Portal</a>', 'text-domain' ),
		);

		$settings[] = array(
			'name'     => __( 'Key for Australia', 'text-domain' ),
			'desc_tip' => __( 'The Key shown in the AddressFinder Australian portal', 'text-domain' ),
			'id'       => 'af-key-au',
			'type'     => 'text',
			'desc'     => __( 'Find your AddressFinder Key from <a href="https://portal.addressfinder.io" target="_blank">AddressFinder Portal</a>', 'text-domain' ),
		);

		$settings[] = array(
			'name'     => __( 'Debug Mode', 'text-domain' ),
			'id'       => 'af-debug',
			'type'     => 'checkbox',
			'desc'     => __( 'Show error messages when expected fields are missing', 'text-domain' ),
		);

		$settings[] = array( 'type' => 'sectionend', 'id' => 'addressfinder-widget' );
		return $settings;
	}
}
?>
