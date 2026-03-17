// src/blocks/paragraph/edit.js
import { useBlockProps, RichText, InspectorControls, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getBlockID, BackgroundHelper, getCombinedClassName } from '../../utils/index.js';

import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import DynamicAttributeWrapper from '../../components/framework/DynamicAttributeWrapper.js';
import { useDynamicData } from '../../hooks/use-dynamic-data.js';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { content, classes, linkWrapperActive, linkWrapperUrl, linkWrapperNewTab, classID } = attributes;

    // Auto-generate classID on first insertion
    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
    const resolvedContent = useDynamicData(content);
    const resolvedLinkURL = useDynamicData(linkWrapperUrl);
    
    const displayContent = resolvedContent || content;
    const displayLinkURL = resolvedLinkURL || linkWrapperUrl;

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, classes || ''),
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
                        <PanelBody title={__('Paragraph Settings', 'cwicly')}>
                            <DynamicAttributeWrapper
                                attribute="content"
                                attributes={attributes}
                                setAttributes={setAttributes}
                                label={__('Content', 'cwicly')}
                            >
                                {/* We keep the RichText as the main editor, but provide a way to bind the entire block */}
                                <p style={{ fontSize: '11px', color: '#666', margin: '0' }}>
                                    {__('Use the icon above to bind the entire paragraph to a dynamic source.', 'cwicly')}
                                </p>
                            </DynamicAttributeWrapper>
                            <ToggleControl
                                label={__('Drop Cap', 'cwicly')}
                                checked={attributes.dropCap || false}
                                onChange={(val) => setAttributes({ dropCap: val })}
                                help={__('Enlarges the first letter of the paragraph.', 'cwicly')}
                            />
                        </PanelBody>
                        <PanelBody title={__('Link Settings', 'cwicly')}>
                            <ToggleControl
                                label={__('Link active', 'cwicly')}
                                checked={linkWrapperActive}
                                onChange={(val) => setAttributes({ linkWrapperActive: val })}
                            />
                            {linkWrapperActive && (
                                <>
                                    <DynamicAttributeWrapper
                                        attribute="linkWrapperUrl"
                                        attributes={attributes}
                                        setAttributes={setAttributes}
                                        label={__('URL', 'cwicly')}
                                    >
                                        <TextControl
                                            value={linkWrapperUrl}
                                            onChange={(val) => setAttributes({ linkWrapperUrl: val })}
                                        />
                                    </DynamicAttributeWrapper>
                                    <ToggleControl
                                        label={__('Open in new tab', 'cwicly')}
                                        checked={linkWrapperNewTab}
                                        onChange={(val) => setAttributes({ linkWrapperNewTab: val })}
                                    />
                                </>
                            )}
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
                    <AdvancedPanel attributes={attributes} setAttributes={setAttributes} />)}
            </InspectorControls>

            <RichText
                {...blockProps}
                tagName="p"
                value={displayContent || ''}
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
