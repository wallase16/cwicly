import { useBlockProps } from '@wordpress/block-editor';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';

/**
 * Post Excerpt save.
 * Emits {post_excerpt=post_excerpt} — resolved by dynamic-data.php.
 */
export default function save({ attributes }) {
    const { classID, classes, containerTag: Tag } = attributes;
    const blockProps = useBlockProps.save({
        id: classID ? `cc-${classID}` : undefined,
        className: getCombinedClassName(attributes, classes || ''),
    });

    return <Tag {...blockProps}>{'{post_excerpt=post_excerpt}'}</Tag>;
}
