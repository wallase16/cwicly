<?php
/**
 * Register Cwicly block.
 *
 * @package cwicly
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register block render callback.
 */
function cwicly_map_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_map_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_map_register' );

/**
 * Render callback.
 */
function cc_map_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() ) {
		wp_enqueue_style( 'leaflet-css', CWICLY_DIR_URL . 'assets/css/leaflet.css', array(), CWICLY_VERSION );
		wp_enqueue_script( 'leaflet-js', CWICLY_DIR_URL . 'assets/js/leaflet.js', array(), CWICLY_VERSION, true );
		wp_enqueue_script( 'cwicly-map-js', CWICLY_DIR_URL . 'assets/js/maps-leaflet.js', array( 'leaflet-js' ), CWICLY_VERSION, true );
		wp_localize_script( 'cwicly-map-js', 'cwiclyMapData', array(
			'iconDir' => CWICLY_DIR_URL . 'assets/img/leaflet/'
		) );
	}

	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		return cc_render( $content, $attributes, $block );
	}

	return '';
}
