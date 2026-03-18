import { useBlockProps } from '@wordpress/block-editor';
import { getCombinedClassName, getBlockID, getHtmlAttributes } from '../../utils/index.js';

/**
 * Post Excerpt save.
 * Emits {post_excerpt=post_excerpt} — resolved by dynamic-data.php.
 */
export default function save({ attributes }) {
    const { classID, classes, containerTag: Tag } = attributes;
    const blockProps = useBlockProps.save({
        id: getBlockID(attributes, 'post-excerpt'),
        className: getCombinedClassName(attributes, classes || ''),
    });

    return <Tag {...blockProps} {...getHtmlAttributes(attributes)}>{'{post_excerpt=post_excerpt}'}</Tag>;
}
