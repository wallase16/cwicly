import { InnerBlocks } from '@wordpress/block-editor';
import { getBlockID, getHtmlAttributes, getLinkAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'columns');
  const linkAttrs = getLinkAttributes(attributes, 'columns');
  const interactions = getInteractions(attributes.interactions);
  const htmlAttrs = getHtmlAttributes(attributes);
  
  const Tag = attributes.linkWrapperActive || linkAttrs?.href 
    ? (attributes.containerLayoutTag || 'a') 
    : (attributes.containerLayoutTag || 'div');

  return (
    <Tag
      id={blockID}
      {...linkAttrs}
      {...interactions}
      {...htmlAttrs}
      className={getCombinedClassName(attributes, attributes.className)}
    >
      <InnerBlocks.Content />
    </Tag>
  );
}
