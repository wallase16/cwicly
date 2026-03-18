import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';

export default function Edit({ attributes, setAttributes, context }) {
  const parentID = context['cwicly/uniqueID'] || 'default';

  const blockProps = useBlockProps({
    className: `cc-accordion-content ${attributes.classID || ''}`,
    role: 'region',
    'aria-labelledby': `cc-accordion-header-${parentID}`,
    id: `cc-accordion-content-${parentID}`,
  });

  const Tag = attributes.containerLayoutTag || 'div';

  return (
    <>
      <CwiclyInspector
        attributes={attributes}
        setAttributes={setAttributes}
        blockName="cwicly/accordion-content"
      />
      <Tag {...blockProps}>
        <InnerBlocks />
      </Tag>
    </>
  );
}
