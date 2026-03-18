<?php
/**
 * CSS Cache Invalidation — Cwicly Rebuild
 *
 * Hooks into save_post to delete stale per-post CSS files and bump a
 * per-post version stamp stored in wp_options. The version stamp is
 * used by class-frontend.php as the WP_Enqueue style version so that
 * it survives PHP opcode/object caches that can make filemtime() stale.
 *
 * Also registers the cwicly/v1/invalidate_all_css REST endpoint for
 * bulk regeneration from the admin (e.g. after a plugin update changes
 * style-generator.js output).
 */

namespace Cwicly;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * On every real post save:
 *  1. Delete the per-post CSS file so stale CSS can never survive.
 *  2. Bump an option-based version stamp so the filemtime() shortcut
 *     is bypassed even when object-caching is active.
 */
add_action(
    'save_post',
    function ( $post_id ) {
        // Skip autosaves, revisions, and nav menu items.
        if (
            wp_is_post_autosave( $post_id ) ||
            wp_is_post_revision( $post_id ) ||
            'nav_menu_item' === get_post_type( $post_id )
        ) {
            return;
        }

        $css_path = wp_upload_dir()['basedir'] . '/cwicly/css/cc-post-' . $post_id . '.css';

        if ( file_exists( $css_path ) ) {
            // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged
            @unlink( $css_path );
        }

        // Autoload=false — this is a high-write option, no need to bloat the autoload cache.
        update_option( 'cwicly_css_v_' . $post_id, time(), false );
    },
    10,
    1
);

/**
 * Bulk invalidation REST endpoint.
 * Deletes ALL cc-post-*.css files in uploads/cwicly/css/.
 * Should be called after style-generator changes or plugin updates.
 *
 * Requires: manage_options capability.
 */
add_action(
    'rest_api_init',
    function () {
        register_rest_route(
            'cwicly/v1',
            '/invalidate_all_css',
            array(
                'methods'             => \WP_REST_Server::CREATABLE,
                'permission_callback' => function () {
                    return current_user_can( 'manage_options' );
                },
                'callback'            => function () {
                    $dir   = wp_upload_dir()['basedir'] . '/cwicly/css/';
                    $files = glob( $dir . 'cc-post-*.css' );
                    $count = 0;

                    if ( is_array( $files ) ) {
                        foreach ( $files as $file ) {
                            if ( @unlink( $file ) ) { // phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged
                                // Bump each post's version stamp.
                                $base     = basename( $file, '.css' ); // cc-post-9
                                $post_id  = (int) str_replace( 'cc-post-', '', $base );
                                if ( $post_id > 0 ) {
                                    update_option( 'cwicly_css_v_' . $post_id, time(), false );
                                }
                                $count++;
                            }
                        }
                    }

                    return array(
                        'success' => true,
                        'deleted' => $count,
                    );
                },
            )
        );
    }
);
