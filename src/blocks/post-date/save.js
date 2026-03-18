import { useBlockProps } from '@wordpress/block-editor';
import { getCombinedClassName, getBlockID, getHtmlAttributes } from '../../utils/index.js';

/**
 * Post Date save.
 * Emits {post_date=post_date} or {post_date=post_modified} — resolved by dynamic-data.php.
 * The <time> element gets a machine-readable dateTime attribute too.
 */
export default function save({ attributes }) {
    const { classID, classes, containerTag: Tag, dateType } = attributes;
    const blockProps = useBlockProps.save({
        id: getBlockID(attributes, 'post-date'),
        className: getCombinedClassName(attributes, classes || ''),
    });

    const tag = dateType === 'post_modified' ? '{post_date=post_modified}' : '{post_date=post_date}';

    return (
        <Tag
            {...blockProps}
            {...getHtmlAttributes(attributes)}
            dateTime={Tag === 'time' ? tag : undefined}
        >
            {tag}
        </Tag>
    );
}
