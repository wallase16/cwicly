<?php
/**
 * Cwicly Global Styles.
 *
 * @package cwicly
 */

namespace Cwicly;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Global Styles class.
 */
class Global_Styles {

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ), 20 );
		add_action( 'enqueue_block_assets', array( $this, 'enqueue_styles' ), 20 );
	}

	/**
	 * Enqueue global styles.
	 */
	public function enqueue_styles() {
		$global_styles = get_option( 'cwicly_global_styles' );
		
		if ( ! $global_styles ) {
			return;
		}

		$css = $this->generate_css( $global_styles );

		if ( $css ) {
			wp_register_style( 'cc-global-styles', false );
			wp_enqueue_style( 'cc-global-styles' );
			wp_add_inline_style( 'cc-global-styles', $css );
		}
	}

	/**
	 * Generate CSS from global styles data.
	 *
	 * @param array|string $data Global styles data.
	 * @return string
	 */
	public function generate_css( $data ) {
		if ( is_string( $data ) ) {
			$data = json_decode( $data, true );
		}

		if ( ! is_array( $data ) ) {
			return '';
		}

		$css = '';

		// 1. CSS Variables
		if ( isset( $data['variables'] ) && is_array( $data['variables'] ) ) {
			$vars_css = ":root {\n";
			foreach ( $data['variables'] as $var ) {
				if ( ! empty( $var['name'] ) && ! empty( $var['value'] ) ) {
					$name = $var['name'];
					if ( strpos( $name, '--' ) !== 0 ) {
						$name = '--' . $name;
					}
					$vars_css .= "  {$name}: {$var['value']};\n";
				}
			}
			$vars_css .= "}\n\n";
			$css .= $vars_css;
		}

		// 2. Global Classes
		if ( isset( $data['classes'] ) && is_array( $data['classes'] ) ) {
			foreach ( $data['classes'] as $class ) {
				if ( empty( $class['name'] ) ) {
					continue;
				}

				$selector = $class['name'];
				if ( strpos( $selector, '.' ) !== 0 ) {
					$selector = '.' . $selector;
				}

				// Base Styles
				if ( ! empty( $class['styles'] ) ) {
					$css .= $selector . " {\n";
					foreach ( $class['styles'] as $prop => $val ) {
						$css .= "  {$prop}: {$val};\n";
					}
					$css .= "}\n\n";
				}

				// Pseudo States
				if ( ! empty( $class['pseudoStates'] ) ) {
					foreach ( $class['pseudoStates'] as $pseudo => $styles ) {
						if ( empty( $styles ) ) {
							continue;
						}
						$css .= "{$selector}:{$pseudo} {\n";
						foreach ( $styles as $prop => $val ) {
							$css .= "  {$prop}: {$val};\n";
						}
						$css .= "}\n\n";
					}
				}
			}
		}

		return $css;
	}
}
