<?php
/**
 * Register Cwicly Tab block.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cwicly_tab_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_tab_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_tab_register' );

function cc_tab_render_callback( $attributes, $content, $block ) {
	$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
	$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

	$tab_index = isset( $attributes['tabIndex'] ) ? $attributes['tabIndex'] : 1;
	$is_active = isset( $attributes['tabActive'] ) && $attributes['tabActive'];
	$contents_id = isset( $block->context['cwicly/tabContentsID'] ) ? $block->context['cwicly/tabContentsID'] : 'default';

	$tab_attrs  = ' role="tab"';
	$tab_attrs .= ' aria-selected="' . ( $is_active ? 'true' : 'false' ) . '"';
	$tab_attrs .= ' data-tab-index="' . esc_attr( $tab_index ) . '"';
	$tab_attrs .= ' id="cc-tab-' . esc_attr( $contents_id ) . '-' . esc_attr( $tab_index ) . '"';
	$tab_attrs .= ' aria-controls="cc-tab-content-' . esc_attr( $contents_id ) . '-' . esc_attr( $tab_index ) . '"';

	return '<' . $open . $tab_attrs . '>' . cc_render( $content, $attributes, $block ) . $close;
}
