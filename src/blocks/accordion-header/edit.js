import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';

export default function Edit({ attributes, setAttributes, context }) {
  const parentID = context['cwicly/uniqueID'] || 'default';
  const isOpen = context['cwicly/accordionOpen'] || false;

  const blockProps = useBlockProps({
    className: `cc-accordion-header ${attributes.classID || ''}`,
    role: 'button',
    tabIndex: 0,
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-controls': `cc-accordion-content-${parentID}`,
    id: `cc-accordion-header-${parentID}`,
  });

  const Tag = attributes.containerLayoutTag || 'div';

  return (
    <>
      <CwiclyInspector
        attributes={attributes}
        setAttributes={setAttributes}
        blockName="cwicly/accordion-header"
      />
      <Tag {...blockProps}>
        <InnerBlocks
          renderAppender={InnerBlocks.ButtonBlockAppender}
        />
      </Tag>
    </>
  );
}
