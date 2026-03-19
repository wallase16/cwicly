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
function cwicly_code_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_code_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_code_register' );

/**
 * Render callback.
 */
function cc_code_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() ) {
		$suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
		wp_enqueue_style( 'cc-prism-theme', CWICLY_DIR_URL . 'assets/css/prism/prism-okaidia' . $suffix . '.css', array(), CWICLY_VERSION );
		if ( isset( $attributes['showLineNumbers'] ) && $attributes['showLineNumbers'] ) {
			wp_enqueue_style( 'cc-prism-line-numbers', CWICLY_DIR_URL . 'assets/css/prism/prism-line-numbers' . $suffix . '.css', array(), CWICLY_VERSION );
			wp_enqueue_script( 'cc-prism-line-numbers', CWICLY_DIR_URL . 'assets/js/prism/prism-line-numbers' . $suffix . '.js', array( 'cc-prism' ), CWICLY_VERSION, true );
		}
		wp_enqueue_script( 'cc-prism', CWICLY_DIR_URL . 'assets/js/prism/prism' . $suffix . '.js', array(), CWICLY_VERSION, true );
		wp_enqueue_script( 'cc-prism-autoloader', CWICLY_DIR_URL . 'assets/js/prism/prism-autoloader' . $suffix . '.js', array( 'cc-prism' ), CWICLY_VERSION, true );
		wp_enqueue_script( 'cc-code-frontend', CWICLY_DIR_URL . 'assets/js/cc-code' . $suffix . '.js', array( 'cc-prism-autoloader' ), CWICLY_VERSION, true );
	}

	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		return cc_render( $content, $attributes, $block );
	}

	return '';
}
