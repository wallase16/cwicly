import { useBlockProps } from '@wordpress/block-editor';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';

/**
 * Post Date save.
 * Emits {post_date=post_date} or {post_date=post_modified} — resolved by dynamic-data.php.
 * The <time> element gets a machine-readable dateTime attribute too.
 */
export default function save({ attributes }) {
    const { classID, classes, containerTag: Tag, dateType } = attributes;
    const blockProps = useBlockProps.save({
        id: classID ? `cc-${classID}` : undefined,
        className: getCombinedClassName(attributes, classes || ''),
    });

    const tag = dateType === 'post_modified' ? '{post_date=post_modified}' : '{post_date=post_date}';

    return (
        <Tag
            {...blockProps}
            dateTime={Tag === 'time' ? tag : undefined}
        >
            {tag}
        </Tag>
    );
}
