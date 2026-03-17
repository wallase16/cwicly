import { RichText } from '@wordpress/block-editor';
import { getBlockID, getHtmlAttributes, getLinkAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'paragraph');
  const linkAttrs = getLinkAttributes(attributes, 'paragraph');
  const interactions = getInteractions(attributes.interactions);
  const htmlAttrs = getHtmlAttributes(attributes);
  
  const linkWrapperActive = attributes.linkWrapperActive || linkAttrs?.href;
  const Tag = linkWrapperActive ? (attributes.containerLayoutTag || 'a') : (attributes.containerLayoutTag || 'p');

  return (
    <Tag
      id={blockID}
      {...linkAttrs}
      {...interactions}
      {...htmlAttrs}
      className={getCombinedClassName(attributes, attributes.className)}
    >
      <RichText.Content value={attributes.content} />
    </Tag>
  );
}
