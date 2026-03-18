<?php
/**
 * Register Cwicly Tab List block.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cwicly_tablist_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_tablist_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_tablist_register' );

function cc_tablist_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() ) {
		wp_enqueue_script( 'cc-tab', CWICLY_DIR_URL . 'assets/js/cc-tab.min.js', array(), CWICLY_VERSION, true );
	}

	$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
	$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

	$tab_list_attrs = ' data-cc-tab-list="true"';
	if ( isset( $attributes['tabContentsID'] ) && $attributes['tabContentsID'] ) {
		$tab_list_attrs .= ' data-tab-contents-id="' . esc_attr( $attributes['tabContentsID'] ) . '"';
	}
	if ( isset( $attributes['tabContentsActive'] ) && $attributes['tabContentsActive'] ) {
		$tab_list_attrs .= ' data-tab-active="' . esc_attr( $attributes['tabContentsActive'] ) . '"';
	}
	if ( isset( $attributes['tabTrigger'] ) && $attributes['tabTrigger'] ) {
		$tab_list_attrs .= ' data-tab-trigger="' . esc_attr( $attributes['tabTrigger'] ) . '"';
	}
	$tab_list_attrs .= ' role="tablist"';

	return '<' . $open . $tab_list_attrs . '>' . cc_render( $content, $attributes, $block ) . $close;
}
