import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Query Template save.
 * The outer wrapper HTML is produced by PHP (cwicly_render_query_loop),
 * which repeats this inner block structure for each post in the loop.
 */
export default function save() {
    return <InnerBlocks.Content />;
}
