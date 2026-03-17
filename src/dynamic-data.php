<?php
/**
 * Dynamic Data resolution logic for Cwicly Rebuild.
 * Mirrored from original Cwicly/render.php
 */

namespace Cwicly;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Resolves Cwicly dynamic data tags.
 * 
 * @param string $tag The dynamic tag (e.g., {acf=hero_image}).
 * @param array $attributes Block attributes.
 * @param object $block WP_Block object.
 * @return mixed
 */
function cc_get_dyn( $tag, $attributes = [], $block = null ) {
    if ( ! preg_match( '/^\{([\w-]+)=([\w-]+)\}$/', $tag, $matches ) ) {
        return $tag;
    }

    $source = $matches[1];
    $field  = $matches[2];
    $value  = '';

    $post_id = get_the_ID();

    switch ( $source ) {
        case 'acf':
            if ( function_exists( 'get_field' ) ) {
                $value = get_field( $field, $post_id );
            }
            break;

        case 'meta':
            $value = get_post_meta( $post_id, $field, true );
            break;

        case 'post_title':
            $value = get_the_title( $post_id );
            break;

        case 'post_content':
            $value = get_the_content( null, false, $post_id );
            break;

        case 'author_name':
            $value = get_the_author_meta( 'display_name', get_post_field( 'post_author', $post_id ) );
            break;
            
        case 'idadd':
            // Logic for loop indicators (-p-1, -q-2, etc.)
            $value = '';
            if ( isset( $block->context['query_index'] ) ) {
                $value .= '-q-' . $block->context['query_index'];
            }
            break;
    }

    // Handle array/object values (e.g., ACF Image)
    if ( is_array( $value ) ) {
        if ( isset( $value['url'] ) ) {
            $value = $value['url'];
        } else {
            $value = implode( ', ', $value );
        }
    }

    return $value;
}
