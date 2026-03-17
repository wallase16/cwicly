import { RichText } from '@wordpress/block-editor';
import { getBlockID, getHtmlAttributes, getLinkAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';


export default function save({ attributes }) {
  const Tag = attributes.headingTag || 'h1';
  const blockID = getBlockID(attributes, 'heading');
  const linkAttrs = getLinkAttributes(attributes, 'heading');
  const interactions = getInteractions(attributes.interactions);
  const htmlAttrs = getHtmlAttributes(attributes);
  
  const linkWrapperActive = attributes.linkWrapperActive || linkAttrs?.href;
  const LinkTag = (!attributes.containerLayoutTag || (attributes.containerLayoutTag !== 'a' && attributes.containerLayoutTag !== 'button')) ? 'a' : attributes.containerLayoutTag;

  return (
    <Tag
      id={blockID}
      {...interactions}
      {...htmlAttrs}
      className={getCombinedClassName(attributes, attributes.className)}
    >
      {linkWrapperActive ? (
        <LinkTag {...linkAttrs}>
          <RichText.Content value={attributes.content} />
        </LinkTag>
      ) : (
        <RichText.Content value={attributes.content} />
      )}
    </Tag>
  );
}
