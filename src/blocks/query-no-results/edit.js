import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName } from '../../utils/index.js';

const DEFAULT_TEMPLATE = [
    ['cwicly/paragraph', { content: __('No results found.', 'cwicly') }],
];

export default function Edit({ attributes, setAttributes, clientId }) {
    const { classID, classes } = attributes;

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const blockProps = useBlockProps({
        className: getCombinedClassName(attributes, classes || ''),
        style: { border: '1px dashed #f0a500', padding: '8px' },
    });

    return (
        <div {...blockProps}>
            <p style={{ fontSize: '10px', color: '#f0a500', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {__('No Results', 'cwicly')}
            </p>
            <InnerBlocks template={DEFAULT_TEMPLATE} />
        </div>
    );
}
