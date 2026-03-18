<?php
/**
 * Post Child Blocks registration and rendering.
 * Handlers for Phase 16 convenience blocks: post-title, post-excerpt, post-date, post-featured-image, post-link.
 */

namespace Cwicly;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register blocks.
 */
function cc_register_post_child_blocks() {
	$blocks = [
		'post-title',
		'post-excerpt',
		'post-date',
		'post-featured-image',
		'post-link'
	];

	foreach ( $blocks as $name ) {
		register_block_type( 'cwicly/' . $name, [
			'render_callback' => 'Cwicly\cc_post_child_render_callback',
		] );
	}
}
add_action( 'init', 'Cwicly\cc_register_post_child_blocks' );

/**
 * Unified render callback for post child blocks.
 */
function cc_post_child_render_callback( $attributes, $content, $block ) {
	$name = str_replace( 'cwicly/post-', '', $block->name );
	$post_id = $block->context['cwicly/postId'] ?? get_the_ID();
	
	// Determine dynamic tag
	$source = str_replace( '-', '_', $name );
	if ( 'title' === $name ) $source = 'post_title';
	if ( 'link' === $name ) $source = 'permalink';

    // Attributes
    $class_id = $attributes['classID'] ?? ( $attributes['uniqueID'] ?? substr( md5( $block->name . $post_id ), 0, 8 ) );
    $id = ! empty( $attributes['id'] ) ? $attributes['id'] : ( ! empty( $class_id ) ? 'cc-' . $class_id : '' );
    
    // Resolve dynamic data using the common helper (passing the block instance for context)
    $resolved = cc_get_dyn( '{' . $source . '=' . $source . '}', $attributes, $block );
    
    // Include custom HTML attributes
    $html_attrs = '';
    if ( function_exists( 'cc_get_html_attributes' ) ) {
        $html_attrs = cc_get_html_attributes( $attributes );
    }

    if ( 'link' === $name ) {
        return sprintf( 
            '<a id="%s" href="%s" class="cc-%s"%s>%s</a>', 
            esc_attr( $id ), 
            esc_url( $resolved ), 
            esc_attr( $class_id ), 
            $html_attrs,
            get_the_title( $post_id ) 
        );
    }

    if ( 'featured-image' === $name ) {
        return sprintf( 
            '<img id="%s" src="%s" class="cc-%s"%s />', 
            esc_attr( $id ), 
            esc_url( $resolved ), 
            esc_attr( $class_id ),
            $html_attrs
        );
    }

    $tag = $attributes['headingTag'] ?? 'div';
    // For title/excerpt/date, we might want to allow links
    $is_link = $attributes['isLink'] ?? false;
    if ( $is_link ) {
        $resolved = sprintf( '<a href="%s" style="color:inherit;text-decoration:none;">%s</a>', get_permalink($post_id), $resolved );
    }

    return sprintf( 
        '<%s id="%s" class="cc-%s"%s>%s</%s>', 
        $tag, 
        esc_attr( $id ), 
        esc_attr( $class_id ), 
        $html_attrs,
        $resolved, 
        $tag 
    );
}
