import { useBlockProps } from '@wordpress/block-editor';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';

/**
 * Post Title save.
 * Outputs the dynamic tag {post_title=post_title} as the content.
 * Resolved at render time by the existing dynamic-data.php filter.
 * If isLink is true, wraps in {permalink=permalink}.
 */
export default function save({ attributes }) {
    const { headingTag: Tag, isLink, classes, classID } = attributes;
    const blockProps = useBlockProps.save({
        id: classID ? `cc-${classID}` : undefined,
        className: getCombinedClassName(attributes, classes || ''),
    });

    return (
        <Tag {...blockProps}>
            {isLink ? (
                <a href="{permalink=permalink}">{'{post_title=post_title}'}</a>
            ) : (
                '{post_title=post_title}'
            )}
        </Tag>
    );
}
