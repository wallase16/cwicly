import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: `cc-accordion-content ${attributes.classID || ''}`,
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
