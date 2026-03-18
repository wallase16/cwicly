import { useBlockProps } from '@wordpress/block-editor';
import { getCombinedClassName, getBlockID, getHtmlAttributes } from '../../utils/index.js';

/**
 * Post Featured Image save.
 * Emits dynamic tags resolved by dynamic-data.php:
 *   {featured_image=<size>}  → image URL
 *   {permalink=permalink}    → post URL (if isLink=true)
 *   {post_title=post_title}  → post title for alt text
 */
export default function save({ attributes }) {
    const { classID, classes, imageSize, isLink } = attributes;
    const blockProps = useBlockProps.save({
        id: getBlockID(attributes, 'post-featured-image'),
        className: getCombinedClassName(attributes, classes || ''),
    });

    const img = (
        <img
            src={`{featured_image=${imageSize}}`}
            alt="{post_title=post_title}"
            loading="lazy"
        />
    );

    return (
        <figure {...blockProps} {...getHtmlAttributes(attributes)} style={{ margin: 0 }}>
            {isLink ? (
                <a href="{permalink=permalink}">{img}</a>
            ) : (
                img
            )}
        </figure>
    );
}
