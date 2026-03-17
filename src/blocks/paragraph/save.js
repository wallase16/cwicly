import { RichText } from '@wordpress/block-editor';
import { getBlockID, getLinkAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'paragraph');
  const linkAttrs = getLinkAttributes(attributes, 'paragraph');
  const interactions = getInteractions(attributes.interactions);
  
  const linkWrapperActive = attributes.linkWrapperActive || linkAttrs?.href;
  const Tag = linkWrapperActive ? (attributes.containerLayoutTag || 'a') : (attributes.containerLayoutTag || 'p');

  return (
    <Tag
      id={blockID}
      {...linkAttrs}
      {...interactions}
      className={getCombinedClassName(attributes, attributes.className)}
    >
      <RichText.Content value={attributes.content} />
    </Tag>
  );
}
