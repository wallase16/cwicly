import { useBlockProps, RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, Popover } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { getBlockID, BackgroundHelper, getCombinedClassName } from '../../utils/index.js';

import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import DynamicAttributeWrapper from '../../components/framework/DynamicAttributeWrapper.js';
import { useDynamicData } from '../../hooks/use-dynamic-data.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { content, linkWrapperUrl, linkWrapperNewTab, classes, linkWrapperActive } = attributes;
    
    const resolvedContent = useDynamicData(content);
    const resolvedLinkURL = useDynamicData(linkWrapperUrl);
    
    const displayContent = resolvedContent || content;
    const displayLinkURL = resolvedLinkURL || linkWrapperUrl;
    const [isEditingURL, setIsEditingURL] = useState(false);

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, `cc-btn ${classes || ''}`),
    });


    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass: select('cwicly/base').getPseudoClass(),
    }), []);

    return (
        <>
            <BlockControls>
                <div className="wp-block-button__inline-link">
                    <button
                        className="button wp-block-button__link"
                        onClick={() => setIsEditingURL(!isEditingURL)}
                    >
                        {__('Link', 'cwicly')}
                    </button>
                    {isEditingURL && (
                        <Popover position="bottom center" onClose={() => setIsEditingURL(false)}>
                            <LinkControl
                                value={{ url: linkWrapperUrl, opensInNewTab: linkWrapperNewTab }}
                                onChange={(nextValue) => {
                                    setAttributes({
                                        linkWrapperUrl: nextValue.url,
                                        linkWrapperNewTab: nextValue.opensInNewTab,
                                        linkWrapperActive: !!nextValue.url,
                                    });
                                }}
                            />
                        </Popover>
                    )}
                </div>
            </BlockControls>
            <InspectorControls>
                <CwiclyInspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    name={name}
                />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
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
                                            onChange={(newUrl) => setAttributes({ linkWrapperUrl: newUrl })}
                                        />
                                    </DynamicAttributeWrapper>
                                    <ToggleControl
                                        label={__('Open in new tab', 'cwicly')}
                                        checked={linkWrapperNewTab}
                                        onChange={(isChecked) => setAttributes({ linkWrapperNewTab: isChecked })}
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
                    <div className="cwicly-advanced-tab">
                        <div style={{ padding: '0 16px', fontSize: '12px' }}>
                            {__('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')}
                        </div>
                    </div>
                )}
            </InspectorControls>
            <div {...blockProps}>
                <BackgroundHelper attributes={attributes} />
                <RichText
                    tagName="span"
                    value={displayContent || ''}
                    onChange={(newContent) => setAttributes({ content: newContent })}
                    placeholder={__('Button text...', 'cwicly')}
                />
            </div>
        </>
    );
}
