<?php
/**
 * Register Cwicly Form block.
 *
 * @package cwicly
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Form block.
 */
function cwicly_form_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_form_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_form_register' );

/**
 * Render callback for Form block.
 */
function cc_form_render_callback( $attributes, $content, $block ) {
	// Add form-specific logic if needed (e.g., enqueuing frontend script)
	if ( ! is_admin() ) {
		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
		wp_enqueue_style( 'cwicly-form-style', CWICLY_DIR_URL . 'assets/css/blocks/form.css', array(), CWICLY_VERSION ); // No .min for block-specific CSS yet
		wp_enqueue_script( 'cc-forms-js', CWICLY_DIR_URL . 'assets/js/cc-forms' . $suffix . '.js', array(), CWICLY_VERSION, true );
	}

	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		// Form is basically a wrapper, so we can use cc_render normally if we add a case for it
		return cc_render( $content, $attributes, $block );
	}

	return '';
}
