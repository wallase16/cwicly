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
function cwicly_accordioncontent_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_accordion_content_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_accordioncontent_register' );

/**
 * Render callback.
 *
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 * @param object $block Block data.
 *
 * @return string
 */
function cc_accordion_content_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() && isset( $attributes['effectsTiltControl'] ) && $attributes['effectsTiltControl'] ) {
		wp_enqueue_script( 'cc-tilter', CWICLY_DIR_URL . 'assets/js/tilter.js', array(), CWICLY_VERSION, true );
	}

	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
		$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

		$parent_id = isset( $block->context['cwicly/uniqueID'] ) ? $block->context['cwicly/uniqueID'] : 'default';

		$content_attrs  = ' data-cc-accordion-content="true"';
		$content_attrs .= ' role="region"';
		$content_attrs .= ' aria-labelledby="cc-accordion-header-' . esc_attr( $parent_id ) . '"';
		$content_attrs .= ' id="cc-accordion-content-' . esc_attr( $parent_id ) . '"';

		return '<' . $open . $content_attrs . '>' . cc_render( $content, $attributes, $block ) . $close;
	}

	return '';
}
