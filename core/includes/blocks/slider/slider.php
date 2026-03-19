<?php
/**
 * Register Cwicly Slider block.
 *
 * @package cwicly
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register block render callback.
 */
function cwicly_slider_register() {
	register_block_type(
		__DIR__,
		array(
			'render_callback' => 'cc_slider_render_callback',
		)
	);
}
add_action( 'init', 'cwicly_slider_register' );

/**
 * Render callback.
 *
 * @param array  $attributes Block attributes.
 * @param string $content Block content.
 * @param object $block Block data.
 *
 * @return string
 */
function cc_slider_render_callback( $attributes, $content, $block ) {
	if ( ! is_admin() ) {
		wp_enqueue_style( 'cc-swiper', CWICLY_DIR_URL . 'assets/css/swiper.css', array(), CWICLY_VERSION );
		wp_enqueue_script( 'cc-swiper', CWICLY_DIR_URL . 'assets/js/swiper.js', array(), CWICLY_VERSION, true );
		wp_enqueue_script( 'cc-slider', CWICLY_DIR_URL . 'assets/js/cc-slider.min.js', array( 'cc-swiper' ), CWICLY_VERSION, true );
	}

	$conditions = \Cwicly\Helpers::block_conditions_check( $attributes, $block );

	if ( $conditions ) {
		$open  = \Cwicly\Helpers::tag_maker( $attributes, $block, true );
		$close = \Cwicly\Helpers::tag_maker( $attributes, $block, false );

		$data_attrs = ' data-slider="true"';
		$data_attrs .= ' data-autoplay="' . ( ( $attributes['sliderAutoPlay'] ?? false ) ? 'true' : '' ) . '"';
		$data_attrs .= ' data-autoplayduration="' . esc_attr( $attributes['sliderAutoPlayDuration'] ?? '3000' ) . '"';
		$data_attrs .= ' data-loop="' . ( ( $attributes['sliderLoop'] ?? false ) ? 'true' : '' ) . '"';
		$data_attrs .= ' data-slidedirection="' . esc_attr( $attributes['sliderDirection'] ?? 'horizontal' ) . '"';
		$data_attrs .= ' data-fade="' . ( ( $attributes['sliderFade'] ?? false ) ? 'true' : '' ) . '"';
		$data_attrs .= ' data-slidegrab="' . ( ( $attributes['sliderGrabCursor'] ?? true ) ? 'true' : '' ) . '"';
		
		// Responsive attributes for slides and space between
		if ( isset( $attributes['sliderNumberPerWindow'] ) ) {
			foreach ( $attributes['sliderNumberPerWindow'] as $bp => $val ) {
				$data_attrs .= ' data-slides' . esc_attr( $bp ) . '="' . esc_attr( $val ) . '"';
			}
		}
		if ( isset( $attributes['sliderSpaceBetween'] ) ) {
			foreach ( $attributes['sliderSpaceBetween'] as $bp => $val ) {
				$data_attrs .= ' data-spacebt' . esc_attr( $bp ) . '="' . esc_attr( $val ) . '"';
			}
		}

		// Inner content structure for Swiper
		$inner_content = '<div class="swiper"><div class="swiper-wrapper">' . cc_render( $content, $attributes, $block ) . '</div>';

		// Navigation and Pagination
		if ( $attributes['sliderDots'] ?? true ) {
			$inner_content .= '<div class="swiper-pagination"></div>';
		}
		if ( $attributes['sliderButtons'] ?? true ) {
			$id = $attributes['id'] ?? ( $attributes['uniqueID'] ?? '' );
			$inner_content .= '<div id="' . esc_attr( $id ) . '-slider-button-prev" class="swiper-button-prev"></div>';
			$inner_content .= '<div id="' . esc_attr( $id ) . '-slider-button-next" class="swiper-button-next"></div>';
		}
		
		$inner_content .= '</div>'; // Close .swiper

		return '<' . $open . $data_attrs . '>' . $inner_content . $close;
	}

	return '';
}
