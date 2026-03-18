import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';

const ALLOWED_BLOCKS = ['cwicly/accordion-header', 'cwicly/accordion-content'];
const TEMPLATE = [
  ['cwicly/accordion-header', {}],
  ['cwicly/accordion-content', {}],
];

export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({
    className: `cc-accordion ${attributes.classID || ''}`,
  });

  return (
    <>
      <CwiclyInspector
        attributes={attributes}
        setAttributes={setAttributes}
        blockName="cwicly/accordion"
      />
      <div {...blockProps}>
        <InnerBlocks
          allowedBlocks={ALLOWED_BLOCKS}
          template={TEMPLATE}
          templateLock="all"
        />
      </div>
    </>
  );
}
