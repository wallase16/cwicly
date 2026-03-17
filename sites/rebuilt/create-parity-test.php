<?php
/**
 * Create a complex Cwicly test post for parity checking.
 */

// Load WordPress
require_once __DIR__ . '/wp-load.php';

// Check if user already exists
$user = get_user_by('login', 'admin');
if (!$user) {
    // If admin doesn't exist, we might have issues, but let's assume it does or use another one.
    $user = get_users(['role' => 'administrator'])[0];
}

wp_set_current_user($user->ID);

// Block content for a complex section
$block_content = '<!-- wp:cwicly/section {
    "uniqueID": "parity-section",
    "padding": {"lg": {"top": "50px", "right": "50px", "bottom": "50px", "left": "50px"}},
    "background": {"lg": {"backgroundType": "solid", "backgroundColor": "#f8f9fa"}},
    "typography": {"lg": {"fontSize": "20px", "fontWeight": "600"}},
    "interactions": {"click": [{"action": "toggleClass", "value": "active-parity", "target": "current"}]},
    "aos": {"animation": "fade-up", "duration": 1000},
    "globalClass": ["parity-global-class"]
} -->
<section id="parity-section" class="parity-global-class">
    <!-- wp:cwicly/paragraph {"uniqueID": "parity-p"} -->
    <p id="parity-p">This is a parity test paragraph.</p>
    <!-- /wp:cwicly/paragraph -->
</section>
<!-- /wp:cwicly/section -->';

$post_id = wp_insert_post([
    'post_title'   => 'Parity Check Test',
    'post_content' => $block_content,
    'post_status'  => 'publish',
    'post_type'    => 'post'
]);

if (is_wp_error($post_id)) {
    echo "Error creating post: " . $post_id->get_error_message() . "\n";
} else {
    echo "Successfully created post ID: $post_id\n";
    echo "URL: " . get_permalink($post_id) . "\n";
}
