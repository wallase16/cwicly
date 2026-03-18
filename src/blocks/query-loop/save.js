/**
 * Query Loop save — server rendered via PHP render_callback.
 * InnerBlocks.Content is included so WordPress serializes the inner block
 * structure (template, pagination, no-results) into the post content for
 * the PHP renderer to iterate over.
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    return <InnerBlocks.Content />;
}
