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
function cwicly_accordion_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_accordion_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_accordion_register' );

/**
 * Render callback.
 *
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 * @param object $block Block data.
 *
 * @return string
 */
function cc_accordion_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() && isset( $attributes['effectsTiltControl'] ) && $attributes['effectsTiltControl'] ) {
		wp_enqueue_script( 'cc-tilter', CWICLY_DIR_URL . 'assets/js/tilter.js', array(), CWICLY_VERSION, true );
	}
	if ( ! is_admin() ) {
		wp_enqueue_script( 'cc-accordion', CWICLY_DIR_URL . 'assets/js/cc-accordion.min.js', array(), CWICLY_VERSION, true );
	}

	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
		$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

		$accordion_attrs = ' data-cc-accordion="true"';
		if ( isset( $attributes['accordionOpen'] ) && $attributes['accordionOpen'] ) {
			$accordion_attrs .= ' data-accordion-open="true"';
		}
		if ( isset( $attributes['accordionLinked'] ) && $attributes['accordionLinked'] ) {
			$accordion_attrs .= ' data-accordion-linked="true"';
		}
		if ( isset( $attributes['accordionGroup'] ) && $attributes['accordionGroup'] ) {
			$accordion_attrs .= ' data-accordion-group="' . esc_attr( $attributes['accordionGroup'] ) . '"';
		}
		if ( isset( $attributes['accordionNoTransition'] ) && $attributes['accordionNoTransition'] ) {
			$accordion_attrs .= ' data-accordion-no-transition="true"';
		}
		if ( isset( $attributes['accordionTransitionDuration'] ) && $attributes['accordionTransitionDuration'] ) {
			$accordion_attrs .= ' data-accordion-transition-duration="' . esc_attr( $attributes['accordionTransitionDuration'] ) . '"';
		}

		return '<' . $open . $accordion_attrs . '>' . cc_render( $content, $attributes, $block ) . $close;
	}

	return '';
}
