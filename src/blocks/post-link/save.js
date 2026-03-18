import { useBlockProps } from '@wordpress/block-editor';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';

/**
 * Post Link save.
 * Emits an <a> with href="{permalink=permalink}" — resolved by dynamic-data.php.
 * The aria-label also uses {post_title=post_title} for screen reader accessibility.
 */
export default function save({ attributes }) {
    const { classID, classes, label, showArrow, newTab } = attributes;
    const blockProps = useBlockProps.save({
        id: classID ? `cc-${classID}` : undefined,
        className: getCombinedClassName(attributes, classes || ''),
    });

    return (
        <a
            {...blockProps}
            href="{permalink=permalink}"
            target={newTab ? '_blank' : undefined}
            rel={newTab ? 'noopener noreferrer' : undefined}
            aria-label="{post_title=post_title}"
        >
            {label}{showArrow ? ' →' : ''}
        </a>
    );
}
