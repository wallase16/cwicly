// src/blocks/heading/edit.js
import { useBlockProps, RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, PanelBody, SelectControl, ToggleControl, TextControl, Popover } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { getBlockID, getCombinedClassName } from '../../utils/index.js';

import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import DynamicAttributeWrapper from '../../components/framework/DynamicAttributeWrapper.js';
import { useDynamicData } from '../../hooks/use-dynamic-data.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const {
        content,
        headingTag,
        classes,
        linkWrapperActive,
        linkWrapperUrl,
        linkWrapperNewTab,
    } = attributes;

    // Auto-generate classID on first insertion
    useEffect(() => {
        if (!attributes.classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const resolvedContent = useDynamicData(content);
    const resolvedLinkURL  = useDynamicData(linkWrapperUrl);

    const displayContent = resolvedContent || content;

    const [isEditingURL, setIsEditingURL] = useState(false);

    const Tag = headingTag || 'h2';

    // Block root IS the heading tag — no extra div wrapper
    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, classes || ''),
    });

    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass:  select('cwicly/base').getPseudoClass(),
    }), []);

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    {[1, 2, 3, 4, 5, 6].map((level) => (
                        <ToolbarButton
                            key={level}
                            label={__(`Heading ${level}`, 'cwicly')}
                            isActive={Tag === `h${level}`}
                            onClick={() => setAttributes({ headingTag: `h${level}` })}
                        >
                            H{level}
                        </ToolbarButton>
                    ))}
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton
                        icon="admin-links"
                        label={__('Link', 'cwicly')}
                        onClick={() => setIsEditingURL(!isEditingURL)}
                        isActive={!!linkWrapperUrl}
                    />
                </ToolbarGroup>
            </BlockControls>

            {isEditingURL && (
                <Popover position="bottom center" onClose={() => setIsEditingURL(false)}>
                    <LinkControl
                        value={{ url: linkWrapperUrl, opensInNewTab: linkWrapperNewTab }}
                        onChange={(nextValue) => {
                            setAttributes({
                                linkWrapperUrl:    nextValue.url,
                                linkWrapperNewTab: nextValue.opensInNewTab,
                                linkWrapperActive: !!nextValue.url,
                            });
                        }}
                    />
                </Popover>
            )}

            <InspectorControls>
                <CwiclyInspector attributes={attributes} setAttributes={setAttributes} name={name} />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Heading Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Tag', 'cwicly')}
                                value={Tag}
                                options={[1,2,3,4,5,6].map((l) => ({ label: `H${l}`, value: `h${l}` }))}
                                onChange={(val) => setAttributes({ headingTag: val })}
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
                                    <DynamicAttributeWrapper attribute="linkWrapperUrl" attributes={attributes} setAttributes={setAttributes} label={__('URL', 'cwicly')}>
                                        <TextControl value={linkWrapperUrl || ''} onChange={(val) => setAttributes({ linkWrapperUrl: val })} />
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
                    <DesignPanel attributes={attributes} setAttributes={setAttributes} pseudoClass={pseudoClass} />
                )}
            </InspectorControls>

            {/* Heading tag rendered directly via RichText tagName — no wrapping div */}
            <RichText
                {...blockProps}
                tagName={Tag}
                value={displayContent}
                onChange={(newContent) => setAttributes({ content: newContent })}
                placeholder={__('Heading content...', 'cwicly')}
                allowedFormats={['core/bold', 'core/italic', 'core/link']}
            />
        </>
    );
}
