import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: `cc-accordion-header ${attributes.classID || ''}`,
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
