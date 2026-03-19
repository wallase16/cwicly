<?php
/**
 * Register Cwicly Wait block.
 *
 * @package cwicly
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Wait block.
 */
function cwicly_wait_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_wait_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_wait_register' );

/**
 * Render callback for Wait block.
 */
function cc_wait_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() ) {
		wp_enqueue_style( 'cwicly-form-style', CWICLY_DIR_URL . 'assets/css/blocks/form.css', array(), CWICLY_VERSION );
	}

	$message    = isset( $attributes['message'] ) ? $attributes['message'] : 'Please wait...';
	$showLoader = isset( $attributes['showLoader'] ) ? $attributes['showLoader'] : true;
	$isOverlay  = isset( $attributes['isOverlay'] ) ? $attributes['isOverlay'] : true;
	$uniqueID   = isset( $attributes['uniqueID'] ) ? $attributes['uniqueID'] : '';

	$classes = array( 'cc-wait' );
	if ( $isOverlay ) {
		$classes[] = 'cc-wait-overlay';
	}

	// Hidden by default
	$output = '<div class="' . esc_attr( implode( ' ', $classes ) ) . '" id="' . esc_attr( $uniqueID ) . '" style="display: none;">';
	
	if ( $showLoader ) {
		$output .= '<div class="cc-loader-spinner"></div>';
	}

	if ( $message ) {
		$output .= '<p class="cc-wait-message">' . esc_html( $message ) . '</p>';
	}

	$output .= '</div>';

	return $output;
}
