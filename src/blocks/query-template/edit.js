import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

// Default inner blocks for a useful starting template
const DEFAULT_TEMPLATE = [
    ['cwicly/heading', { content: '{post_title=post_title}', headingTag: 'h2' }],
    ['cwicly/paragraph', { content: '{post_excerpt=post_excerpt}' }],
];

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { classID, classes, containerTag } = attributes;

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
        style: {
            border: '1px dashed #ccc',
            padding: '8px',
            marginBottom: '6px',
        },
    });

    return (
        <>
            <InspectorControls>
                <CwiclyInspector attributes={attributes} setAttributes={setAttributes} name={name} />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Template Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Item Tag', 'cwicly')}
                                value={containerTag}
                                options={[
                                    { label: 'ARTICLE', value: 'article' },
                                    { label: 'DIV',     value: 'div' },
                                    { label: 'LI',      value: 'li' },
                                ]}
                                onChange={(val) => setAttributes({ containerTag: val })}
                            />
                            <p style={{ fontSize: '11px', color: '#888', marginTop: '8px' }}>
                                {__('Add blocks inside. Use {post_title=post_title}, {post_excerpt=post_excerpt}, {featured_image=full}, {permalink=permalink} etc. for dynamic data.', 'cwicly')}
                            </p>
                        </PanelBody>
                    </div>
                )}

                {inspectortab.tab === 'design' && (
                    <DesignPanel attributes={attributes} setAttributes={setAttributes} pseudoClass={pseudoClass} />
                )}

                {inspectortab.tab === 'advanced' && (
                    <AdvancedPanel attributes={attributes} setAttributes={setAttributes} />
                )}
            </InspectorControls>

            <article {...blockProps}>
                <p style={{ fontSize: '10px', color: '#999', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    ↻ {__('Query Item Template', 'cwicly')}
                </p>
                <InnerBlocks template={DEFAULT_TEMPLATE} />
            </article>
        </>
    );
}
