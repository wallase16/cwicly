<?php
/**
 * Register Cwicly Tab Contents block.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function cwicly_tabcontents_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_tabcontents_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_tabcontents_register' );

function cc_tabcontents_render_callback( $attributes, $content, $block ) {
	$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
	$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

	$tab_contents_attrs = ' data-cc-tab-contents="true"';

	return '<' . $open . $tab_contents_attrs . '>' . cc_render( $content, $attributes, $block ) . $close;
}
