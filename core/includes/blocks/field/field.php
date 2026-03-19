<?php
/**
 * Register Cwicly Field block.
 *
 * @package cwicly
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register Field block.
 */
function cwicly_field_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_field_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_field_register' );

/**
 * Render callback for Field block.
 */
function cc_field_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() ) {
		wp_enqueue_style( 'cwicly-form-style', CWICLY_DIR_URL . 'assets/css/blocks/form.css', array(), CWICLY_VERSION );
	}

	$inputType   = isset( $attributes['inputType'] ) ? $attributes['inputType'] : 'text';
	$label       = isset( $attributes['label'] ) ? $attributes['label'] : '';
	$name        = isset( $attributes['name'] ) ? $attributes['name'] : '';
	$placeholder = isset( $attributes['placeholder'] ) ? $attributes['placeholder'] : '';
	$required    = isset( $attributes['required'] ) && $attributes['required'] ? 'required' : '';
	$uniqueID    = isset( $attributes['uniqueID'] ) ? $attributes['uniqueID'] : '';

	$output = '<div class="cc-field-container">';
	
	if ( $label ) {
		$output .= '<label class="cc-field-label" for="' . esc_attr( $uniqueID ) . '">' . esc_html( $label ) . ( $required ? ' <span class="required">*</span>' : '' ) . '</label>';
	}

	if ( 'textarea' === $inputType ) {
		$output .= '<textarea class="cc-field-input cc-field-textarea" id="' . esc_attr( $uniqueID ) . '" name="' . esc_attr( $name ) . '" placeholder="' . esc_attr( $placeholder ) . '" ' . $required . '></textarea>';
	} elseif ( 'checkbox' === $inputType ) {
		$output .= '<input type="checkbox" class="cc-field-input cc-field-checkbox" id="' . esc_attr( $uniqueID ) . '" name="' . esc_attr( $name ) . '" ' . $required . '>';
	} else {
		$output .= '<input type="' . esc_attr( $inputType ) . '" class="cc-field-input" id="' . esc_attr( $uniqueID ) . '" name="' . esc_attr( $name ) . '" placeholder="' . esc_attr( $placeholder ) . '" ' . $required . '>';
	}

	$output .= '</div>';

	return $output;
}
