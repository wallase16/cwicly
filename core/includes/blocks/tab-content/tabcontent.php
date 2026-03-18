<?php
/**
 * Register Cwicly Tab Content block.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cwicly_tabcontent_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_tabcontent_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_tabcontent_register' );

function cc_tabcontent_render_callback( $attributes, $content, $block ) {
	$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
	$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

	$is_active = $attributes['tabActive'] ?? false;
		$tab_index = isset( $attributes['tabIndex'] ) ? $attributes['tabIndex'] : 1;
		$is_active = isset( $attributes['tabActive'] ) && $attributes['tabActive'];
		$contents_id = isset( $block->context['cwicly/tabContentsID'] ) ? $block->context['cwicly/tabContentsID'] : 'default';

		$content_attrs  = ' role="tabpanel"';
		$content_attrs .= ' id="cc-tab-content-' . esc_attr( $contents_id ) . '-' . esc_attr( $tab_index ) . '"';
		$content_attrs .= ' aria-labelledby="cc-tab-' . esc_attr( $contents_id ) . '-' . esc_attr( $tab_index ) . '"';
		$content_attrs .= ' data-cc-tab-content="true"';
		$content_attrs .= ' data-tab-index="' . esc_attr( $tab_index ) . '"';
		if ( $is_active ) {
			$content_attrs .= ' data-cc-tab-content-active="true"';
		}

		return '<' . $open . $content_attrs . '>' . cc_render( $content, $attributes, $block ) . $close;
}
