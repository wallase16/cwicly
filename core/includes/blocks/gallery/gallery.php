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
function cwicly_gallery_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_gallery_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_gallery_register' );

/**
 * Render callback.
 *
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 * @param object $block Block data.
 *
 * @return string
 */
function cc_gallery_render_callback( $attributes, $content, $block ) {
	if ( isset( $attributes['linkWrapperType'] ) && 'lightbox' === $attributes['linkWrapperType'] && ! is_admin() ) {
		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
		wp_enqueue_style( 'cc-lightbox', CWICLY_DIR_URL . 'assets/css/lightbox' . $suffix . '.css', array(), CWICLY_VERSION );
		wp_enqueue_script( 'cc-lightbox', CWICLY_DIR_URL . 'assets/js/lightbox.js', array(), CWICLY_VERSION, true );
	}
	if ( ! is_admin() && isset( $attributes['effectsTiltControl'] ) && $attributes['effectsTiltControl'] ) {
		wp_enqueue_script( 'cc-tilter', CWICLY_DIR_URL . 'assets/js/tilter.js', array(), CWICLY_VERSION, false );
	}

	if ( ! is_admin() ) {
		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
		wp_enqueue_script( 'cc-helpers-js', CWICLY_DIR_URL . 'assets/js/ccers.min.js', array(), CWICLY_VERSION, true );
		wp_enqueue_style( 'cc-gallery', CWICLY_DIR_URL . 'assets/css/gallery' . $suffix . '.css', array(), CWICLY_VERSION );
		wp_enqueue_script( 'cc-gallery', CWICLY_DIR_URL . 'assets/js/cc-gallery.min.js', array( 'cc-helpers-js' ), CWICLY_VERSION, true );
	}

	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		return cc_render( $content, $attributes, $block );
	}

	return '';
}
