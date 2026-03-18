import { InnerBlocks } from '@wordpress/block-editor';
import { getBlockID, getHtmlAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'accordionheader');
  const interactions = getInteractions(attributes.interactions);
  const htmlAttrs = getHtmlAttributes(attributes);
  
  const Tag = attributes.containerLayoutTag || 'div';

  return (
    <Tag
      id={blockID}
      {...interactions}
      {...htmlAttrs}
      data-cc-accordion-header="true"
      className={getCombinedClassName(attributes, 'cc-accordion-header')}
    >
      <InnerBlocks.Content />
    </Tag>
  );
}
