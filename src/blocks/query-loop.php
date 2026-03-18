<?php
/**
 * Query Loop PHP render callback.
 *
 * Handles server-side rendering of cwicly/query-loop and its children:
 *   - cwicly/query-template  (repeated once per post)
 *   - cwicly/query-no-results (rendered when 0 results)
 *   - cwicly/query-pagination (next/prev or numbered links)
 */

namespace Cwicly;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Render the cwicly/query-loop block.
 *
 * @param array    $attributes Block attributes.
 * @param string   $content    Inner block HTML (not used directly; we iterate $block->inner_blocks).
 * @param WP_Block $block      The WP_Block instance.
 * @return string  Rendered HTML.
 */
function cwicly_render_query_loop( $attributes, $content, $block ) {
    // --- Build WP_Query args ---
    // Extract order safely before any in_array() check to avoid accessing a missing key.
    $order = isset( $attributes['order'] ) && in_array( $attributes['order'], [ 'ASC', 'DESC' ], true )
        ? $attributes['order']
        : 'DESC';

    $args = [
        'post_type'           => sanitize_key( $attributes['postType'] ?? 'post' ),
        'posts_per_page'      => (int) ( $attributes['postsPerPage'] ?? 6 ),
        'orderby'             => sanitize_key( $attributes['orderBy'] ?? 'date' ),
        'order'               => $order,
        'offset'              => (int) ( $attributes['offset'] ?? 0 ),
        'ignore_sticky_posts' => true,
        'no_found_rows'       => false, // needed for pagination
    ];

    // Pagination
    if ( ! empty( $attributes['paged'] ) ) {
        $args['paged'] = (int) ( get_query_var( 'paged' ) ?: 1 );
    }

    // Tax query
    if ( ! empty( $attributes['taxQuery'] ) && is_array( $attributes['taxQuery'] ) ) {
        $tq = $attributes['taxQuery'];
        if ( ! empty( $tq['taxonomy'] ) && ! empty( $tq['terms'] ) ) {
            $args['tax_query'] = [ // phpcs:ignore WordPress.DB.SlowDBQuery
                [
                    'taxonomy' => sanitize_key( $tq['taxonomy'] ),
                    'field'    => 'term_id',
                    'terms'    => array_map( 'intval', (array) $tq['terms'] ),
                ],
            ];
        }
    }

    // Meta query
    if ( ! empty( $attributes['metaQuery'] ) && is_array( $attributes['metaQuery'] ) ) {
        $mq = $attributes['metaQuery'];
        if ( ! empty( $mq['key'] ) ) {
            $args['meta_query'] = [ // phpcs:ignore WordPress.DB.SlowDBQuery
                [
                    'key'     => sanitize_key( $mq['key'] ),
                    'value'   => $mq['value'] ?? '',
                    'compare' => in_array( $mq['compare'] ?? '=', [ '=', '!=', '>', '<', 'LIKE', 'NOT LIKE', 'EXISTS', 'NOT EXISTS' ], true )
                                 ? $mq['compare']
                                 : '=',
                ],
            ];
        }
    }

    // --- Run query ---
    $query          = new \WP_Query( $args );
    $template_html  = '';
    $pagination_html = '';

    if ( $query->have_posts() ) {
        $index = 0;
        while ( $query->have_posts() ) {
            $query->the_post();
            $current_post_id = get_the_ID();

            // Find and render each cwicly/query-template child
            foreach ( $block->inner_blocks as $inner_block ) {
                if ( 'cwicly/query-template' !== $inner_block->name ) {
                    continue;
                }
                // Clone inner block to set per-post context
                $template_block                              = clone $inner_block;
                $template_block->context['query_index']     = $index;
                $template_block->context['cwicly/postId']   = $current_post_id;

                // Render the template block and its inner blocks
                $template_html .= cwicly_render_query_template(
                    $template_block->attributes,
                    $template_block->render(),
                    $template_block,
                    $current_post_id
                );
            }
            $index++;
        }
        wp_reset_postdata();

        // --- Pagination ---
        foreach ( $block->inner_blocks as $inner_block ) {
            if ( 'cwicly/query-pagination' !== $inner_block->name ) {
                continue;
            }
            $ptype = $inner_block->attributes['paginationType'] ?? 'nextprev';

            if ( 'numbered' === $ptype ) {
                $mid_size        = (int) ( $inner_block->attributes['midSize'] ?? 2 );
                $pagination_html = get_the_posts_pagination( [
                    'mid_size'  => $mid_size,
                    'prev_text' => '&laquo;',
                    'next_text' => '&raquo;',
                ] );
            } else {
                $prev_label      = esc_html( $inner_block->attributes['prevLabel'] ?? '← Previous' );
                $next_label      = esc_html( $inner_block->attributes['nextLabel'] ?? 'Next →' );
                $pagination_html = '<nav class="cwicly-pagination">'
                    . get_previous_posts_link( $prev_label )
                    . get_next_posts_link( $next_label, $query->max_num_pages )
                    . '</nav>';
            }
        }
    } else {
        // --- No results ---
        foreach ( $block->inner_blocks as $inner_block ) {
            if ( 'cwicly/query-no-results' === $inner_block->name ) {
                $template_html .= $inner_block->render();
            }
        }
    }

    // --- Wrapper ---
    $class_id    = esc_attr( $attributes['classID'] ?? '' );
    $extra_class = esc_attr( $attributes['classes'] ?? '' );
    $class_attr  = trim( ( $class_id ? "cc-{$class_id}" : '' ) . ' ' . $extra_class );
    $tag         = esc_attr( $attributes['containerTag'] ?? 'div' );
    $id_attr     = $class_id ? " id=\"cc-{$class_id}\"" : '';

    return sprintf(
        '<%1$s%2$s class="%3$s">%4$s%5$s</%1$s>',
        $tag,
        $id_attr,
        $class_attr,
        $template_html,
        $pagination_html
    );
}

/**
 * Render a single cwicly/query-template for a specific post.
 * Wraps the rendered inner blocks in the template's container tag.
 *
 * @param array    $attributes   Template block attributes.
 * @param string   $inner_html   Pre-rendered inner blocks HTML.
 * @param WP_Block $block        The template WP_Block.
 * @param int      $post_id      Current post ID.
 * @return string
 */
function cwicly_render_query_template( $attributes, $inner_html, $block, $post_id ) {
    $tag         = esc_attr( $attributes['containerTag'] ?? 'article' );
    $class_id    = esc_attr( $attributes['classID'] ?? '' );
    $extra_class = esc_attr( $attributes['classes'] ?? '' );
    $class_attr  = trim( ( $class_id ? "cc-{$class_id}" : '' ) . ' ' . $extra_class );
    $id_attr     = $class_id ? " id=\"cc-{$class_id}-{$post_id}\"" : '';

    return sprintf(
        '<%1$s%2$s class="%3$s" data-post-id="%4$d">%5$s</%1$s>',
        $tag,
        $id_attr,
        $class_attr,
        $post_id,
        $inner_html
    );
}

// Register the block type with a render_callback
add_action( 'init', function () {
    register_block_type(
        'cwicly/query-loop',
        [
            'render_callback' => 'Cwicly\cwicly_render_query_loop',
        ]
    );
} );
