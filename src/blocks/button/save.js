import { RichText } from '@wordpress/block-editor';
import { getBlockID, getHtmlAttributes, getLinkAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'button');
  const linkAttrs = getLinkAttributes(attributes, 'button');
  const interactions = getInteractions(attributes.interactions);
  const htmlAttrs = getHtmlAttributes(attributes);
  
  const Tag = (!attributes.containerLayoutTag || (attributes.containerLayoutTag !== 'a' && attributes.containerLayoutTag !== 'button')) ? 'a' : attributes.containerLayoutTag;

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
