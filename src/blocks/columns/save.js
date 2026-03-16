import { InnerBlocks } from '@wordpress/block-editor';
import { getBlockID, getLinkAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'columns');
  const linkAttrs = getLinkAttributes(attributes, 'columns');
  const interactions = getInteractions(attributes);
  
  const Tag = attributes.linkWrapperActive || linkAttrs?.href 
    ? (attributes.containerLayoutTag || 'a') 
    : (attributes.containerLayoutTag || 'div');

  return (
    <Tag
      id={blockID}
      {...linkAttrs}
      {...interactions}
      className={getCombinedClassName(attributes, attributes.className)}
    >
      <InnerBlocks.Content />
    </Tag>
  );
}
