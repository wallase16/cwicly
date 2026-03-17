import { InnerBlocks } from '@wordpress/block-editor';
import { getBlockID, getHtmlAttributes, getLinkAttributes, getInteractions, getCombinedClassName, getAOSAttributes } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'section');
  const linkAttrs = getLinkAttributes(attributes, 'section');
  const interactions = getInteractions(attributes.interactions);
  const aos = getAOSAttributes(attributes);
  const htmlAttrs = getHtmlAttributes(attributes);
  
  const Tag = (attributes.linkWrapperActive || linkAttrs?.href)
    ? (attributes.containerLayoutTag || 'a')
    : (attributes.containerLayoutTag || 'section');

  return (
    <Tag
      id={blockID}
      {...linkAttrs}
      {...interactions}
      {...aos}
      {...htmlAttrs}
      className={getCombinedClassName(attributes, attributes.className)}
    >
      <InnerBlocks.Content />
    </Tag>
  );
}
