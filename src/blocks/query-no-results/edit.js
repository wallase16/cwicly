import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

const DEFAULT_TEMPLATE = [
    ['cwicly/paragraph', { content: __('No results found.', 'cwicly') }],
];

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { classID, classes } = attributes;

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass:  select('cwicly/base').getPseudoClass(),
    }), []);

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, classes || ''),
        style: { border: '1px dashed #f0a500', padding: '8px' },
    });

    return (
        <>
            <InspectorControls>
                <CwiclyInspector attributes={attributes} setAttributes={setAttributes} name={name} />

                {inspectortab.tab === 'design' && (
                    <DesignPanel attributes={attributes} setAttributes={setAttributes} pseudoClass={pseudoClass} />
                )}

                {inspectortab.tab === 'advanced' && (
                    <AdvancedPanel attributes={attributes} setAttributes={setAttributes} />
                )}
            </InspectorControls>

            <div {...blockProps}>
                <p style={{ fontSize: '10px', color: '#f0a500', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {__('No Results', 'cwicly')}
                </p>
                <InnerBlocks template={DEFAULT_TEMPLATE} />
            </div>
        </>
    );
}
