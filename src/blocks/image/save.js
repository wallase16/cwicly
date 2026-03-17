import { Fragment, createElement } from '@wordpress/element';
import { getBlockID, getLinkAttributes, getImageAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'image');
  const imageAttrs = getImageAttributes(attributes);
  const interactions = getInteractions(attributes.interactions);
  
  const imgElement = (
    <img
      id={blockID}
      {...imageAttrs}
      {...interactions}
      className={getCombinedClassName(attributes, attributes.className)}
    />
  );

  if (attributes.imageLightbox) {
    const lightboxAttrs = getImageAttributes({ ...attributes, lightbox: true });
    return (
      <a
        className="cc-lightbox"
        href={lightboxAttrs.src}
        data-gallery={attributes.linkWrapperActionLighboxRef || null}
      >
        {imgElement}
      </a>
    );
  }

  return imgElement;
}
