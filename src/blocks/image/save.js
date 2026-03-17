import { getBlockID, getImageAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
    const {
        imageLazy,
        imageWidth,
        imageHeight,
        imageAspectRatio,
        imageFocalX,
        imageFocalY,
        imageLightbox,
        linkWrapperActionLighboxRef,
    } = attributes;

    const blockID      = getBlockID(attributes, 'image');
    const imageAttrs   = getImageAttributes(attributes);
    const interactions = getInteractions(attributes.interactions);

    // Inline style for aspect-ratio + focal point
    const imgStyle = {};
    if (imageAspectRatio) {
        imgStyle.aspectRatio   = imageAspectRatio;
        imgStyle.objectFit     = 'cover';
        imgStyle.objectPosition = `${imageFocalX ?? 50}% ${imageFocalY ?? 50}%`;
    }

    const imgElement = (
        <img
            id={blockID}
            {...imageAttrs}
            {...interactions}
            className={getCombinedClassName(attributes, attributes.className)}
            loading={imageLazy !== false ? 'lazy' : undefined}
            width={imageWidth  || undefined}
            height={imageHeight || undefined}
            style={Object.keys(imgStyle).length > 0 ? imgStyle : undefined}
        />
    );

    if (imageLightbox) {
        const lightboxAttrs = getImageAttributes({ ...attributes, lightbox: true });
        return (
            <a
                className="cc-lightbox"
                href={lightboxAttrs.src}
                data-gallery={linkWrapperActionLighboxRef || null}
            >
                {imgElement}
            </a>
        );
    }

    return imgElement;
}
