<?php
/**
 * Register Cwicly Slide block.
 *
 * @package cwicly
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register block render callback.
 */
function cwicly_sliderchild_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_sliderchild_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_sliderchild_register' );

/**
 * Render callback.
 *
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 * @param object $block Block data.
 *
 * @return string
 */
function cc_sliderchild_render_callback( $attributes, $content, $block ) {
	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
		$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

		return '<' . $open . ' class="swiper-slide ' . ( $attributes['classID'] ?? '' ) . '">' . cc_render( $content, $attributes, $block ) . $close;
	}

	return '';
}
