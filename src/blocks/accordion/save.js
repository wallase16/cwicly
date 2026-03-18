import { InnerBlocks } from '@wordpress/block-editor';
import { getBlockID, getHtmlAttributes, getInteractions, getCombinedClassName } from '../../utils/index.js';

export default function save({ attributes }) {
  const blockID = getBlockID(attributes, 'accordion');
  const interactions = getInteractions(attributes.interactions);
  const htmlAttrs = getHtmlAttributes(attributes);
  
  // Accordion data attributes for the frontend JS
  const accordionAttrs = {
    'data-cc-accordion': 'true',
    'data-accordion-open': attributes.accordionOpen ? 'true' : 'false',
    'data-accordion-linked': attributes.accordionLinked ? 'true' : 'false',
    'data-accordion-group': attributes.accordionGroup || '',
    'data-accordion-duration': attributes.accordionTransitionDuration || '300ms',
  };

  return (
    <div
      id={blockID}
      {...interactions}
      {...htmlAttrs}
      {...accordionAttrs}
      className={getCombinedClassName(attributes, 'cc-accordion')}
    >
      <InnerBlocks.Content />
    </div>
  );
}
