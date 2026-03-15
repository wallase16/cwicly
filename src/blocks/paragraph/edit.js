// src/blocks/paragraph/edit.js
import { useBlockProps, RichText, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { getBlockID, BackgroundHelper } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: attributes.classes || '',
    });

    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass: select('cwicly/base').getPseudoClass(),
    }), []);

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    {/* Cwicly-specific toolbar buttons can be added here later */}
                </ToolbarGroup>
            </BlockControls>

            <InspectorControls>
                <CwiclyInspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    name={name}
                />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        {/* Standard WP/Cwicly primary controls */}
                        <p style={{ padding: '0 16px', fontSize: '12px' }}>
                            {__('Primary content controls go here.', 'cwicly')}
                        </p>
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
                        <p style={{ padding: '0 16px', fontSize: '12px' }}>
                            {__('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')}
                        </p>
                    </div>
                )}
            </InspectorControls>

            <RichText
                {...blockProps}
                tagName="p"
                value={attributes.content || ''}
                onChange={(content) => setAttributes({ content })}
                placeholder={__('Write your paragraph here…')}
                allowedFormats={[
                    'core/bold',
                    'core/italic',
                    'core/link',
                ]}
            />

            <BackgroundHelper attributes={attributes} />
        </>
    );
}
