<?php
/**
 * Dynamic Data resolution logic for Cwicly Rebuild.
 * Resolves {source=field} tags in block attributes and rendered HTML.
 */

namespace Cwicly;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Resolves a Cwicly dynamic data tag.
 *
 * @param string   $tag        The dynamic tag, e.g. {post_title=post_title}.
 * @param array    $attributes Block attributes.
 * @param WP_Block $block      WP_Block instance (for loop context).
 * @return string
 */
function cc_get_dyn( $tag, $attributes = [], $block = null ) {
    if ( ! preg_match( '/^\{([\w-]+)=([\w-]*)\}$/', $tag, $matches ) ) {
        return $tag;
    }

    $source  = $matches[1];
    $field   = $matches[2];
    $value   = '';
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

        case 'post_excerpt':
            $value = get_the_excerpt( $post_id );
            break;

        case 'author_name':
            $value = get_the_author_meta( 'display_name', (int) get_post_field( 'post_author', $post_id ) );
            break;

        case 'featured_image':
            $image_id = get_post_thumbnail_id( $post_id );
            if ( $image_id ) {
                $size  = $field ?: 'full';
                $src   = wp_get_attachment_image_src( $image_id, $size );
                $value = $src ? $src[0] : wp_get_attachment_url( $image_id );
            }
            break;

        case 'taxonomy':
            $terms = get_the_terms( $post_id, $field );
            if ( $terms && ! is_wp_error( $terms ) ) {
                $value = implode( ', ', wp_list_pluck( $terms, 'name' ) );
            }
            break;

        case 'permalink':
            $value = get_permalink( $post_id );
            break;

        case 'query_index':
            if ( $block && isset( $block->context['query_index'] ) ) {
                $value = $block->context['query_index'];
            } else if ( $block ) {
                // Check for potential aliases
                if ( isset( $block->context['queryIndex'] ) ) {
                    $value = $block->context['queryIndex'];
                } else if ( isset( $block->context['repeater_row'] ) ) {
                    $value = $block->context['repeater_row'];
                } else {
                    // Fallback to global query index if available
                    global $wp_query;
                    if ( isset( $wp_query->current_post ) ) {
                        $value = $wp_query->current_post + 1;
                    }
                }
            }
            break;

        case 'idadd':
            // Loop indicators (-q-1, etc.)
            if ( $block && isset( $block->context['query_index'] ) ) {
                $value = '-q-' . $block->context['query_index'];
            }
            break;

        case 'post_date':
            // {post_date=post_date}     → publish date in site default format
            // {post_date=post_modified} → modified date in site default format
            // {post_date=Y-m-d}         → publish date in custom format
            if ( 'post_modified' === $field ) {
                $value = get_the_modified_date( get_option( 'date_format' ), $post_id );
            } else {
                $fmt   = ( $field && 'post_date' !== $field ) ? $field : get_option( 'date_format' );
                $value = get_the_date( $fmt, $post_id );
            }
            break;
    }

    // Handle array/object ACF values (e.g. ACF Image field)
    if ( is_array( $value ) ) {
        $value = isset( $value['url'] ) ? $value['url'] : implode( ', ', $value );
    }

    return (string) $value;
}

/**
 * Ensure query_index is passed to inner blocks from query loops.
 * Gutenberg does not automatically propagate all context items deeply.
 */
add_filter( 'render_block_context', function( $context, $unparsed_block, $parent_block ) {
    if ( isset( $parent_block->context['query_index'] ) ) {
        $context['query_index'] = $parent_block->context['query_index'];
    }
    return $context;
}, 10, 3 );

/**
 * Resolve dynamic tags in Cwicly block HTML at render time.
 * Handles {source=field} patterns in the serialized block output.
 */
add_filter(
    'render_block',
    function ( $block_content, $block, $instance ) {
        // Only process Cwicly blocks.
        if ( strpos( $block['blockName'] ?? '', 'cwicly/' ) !== 0 ) {
            return $block_content;
        }

        // Skip if no dynamic tags present (fast path).
        if ( strpos( $block_content, '{' ) === false ) {
            return $block_content;
        }

        $attrs      = $block['attrs'] ?? [];
        // The 3rd argument of render_block filter is the WP_Block instance ($instance).
        $block_obj  = $instance; 

        return preg_replace_callback(
            '/\{([\w-]+)=([\w-]*)\}/',
            function ( $matches ) use ( $attrs, $block_obj ) {
                return cc_get_dyn( $matches[0], $attrs, $block_obj );
            },
            $block_content
        );
    },
    10,
    3
);
