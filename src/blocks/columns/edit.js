import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { getBlockID, BackgroundHelper, getCombinedClassName } from '../../utils/index.js';

import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { columnsCount, containerLayoutTag, classes } = attributes;

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, `cc-columns ${classes || ''}`),
    });


    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass: select('cwicly/base').getPseudoClass(),
    }), []);

    const Tag = containerLayoutTag || 'div';

    return (
        <>
            <InspectorControls>
                <CwiclyInspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    name={name}
                />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Columns Settings', 'cwicly')}>
                            <RangeControl
                                label={__('Columns', 'cwicly')}
                                value={columnsCount}
                                onChange={(val) => setAttributes({ columnsCount: val })}
                                min={1}
                                max={12}
                            />
                            <SelectControl
                                label={__('HTML Tag', 'cwicly')}
                                value={containerLayoutTag}
                                options={[
                                    { label: 'DIV', value: 'div' },
                                    { label: 'SECTION', value: 'section' },
                                    { label: 'HEADER', value: 'header' },
                                    { label: 'FOOTER', value: 'footer' },
                                ]}
                                onChange={(val) => setAttributes({ containerLayoutTag: val })}
                            />
                        </PanelBody>
                    </div>
                )}

                {inspectortab.tab === 'design' && (
                    <DesignPanel
                        attributes={attributes}
                        setAttributes={setAttributes}
                        pseudoClass={pseudoClass}
                    />
                )}

                {inspectortab.tab === 'advanced' && (
                    <div className="cwicly-advanced-tab">
                        <div style={{ padding: '0 16px', fontSize: '12px' }}>
                            {__('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')}
                        </div>
                    </div>
                )}
            </InspectorControls>

            <Tag {...blockProps}>
                <BackgroundHelper attributes={attributes} />
                <InnerBlocks 
                    allowedBlocks={['cwicly/column']}
                    orientation="horizontal"
                />
            </Tag>
        </>
    );
}
