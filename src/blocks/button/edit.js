// src/blocks/button/edit.js
import { useBlockProps, RichText, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl, ToolbarGroup, ToolbarButton, Popover } from '@wordpress/components';
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
        linkWrapperUrl,
        linkWrapperNewTab,
        linkWrapperActive,
        linkWrapperRel,
        containerLayoutTag,
        classes,
        classID,
    } = attributes;

    // Auto-generate classID on first insertion
    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const resolvedContent = useDynamicData(content);
    const displayContent  = resolvedContent || content;

    const [isEditingURL, setIsEditingURL] = useState(false);

    // <a> or <button> based on tag selection
    const Tag = containerLayoutTag === 'button' ? 'button' : 'a';

    const tagProps = Tag === 'a'
        ? { href: linkWrapperUrl || '#', rel: linkWrapperRel, target: linkWrapperNewTab ? '_blank' : undefined }
        : { type: 'button' };

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, `cc-btn ${classes || ''}`),
        ...tagProps,
    });

    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass:  select('cwicly/base').getPseudoClass(),
    }), []);

    return (
        <>
            <BlockControls>
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
                        <PanelBody title={__('Button Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Tag', 'cwicly')}
                                value={containerLayoutTag || 'a'}
                                options={[
                                    { label: 'Link (a)', value: 'a' },
                                    { label: 'Button (button)', value: 'button' },
                                ]}
                                onChange={(val) => setAttributes({ containerLayoutTag: val })}
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
                                    <TextControl
                                        label={__('Rel attribute', 'cwicly')}
                                        value={linkWrapperRel || ''}
                                        onChange={(val) => setAttributes({ linkWrapperRel: val })}
                                        placeholder="noopener noreferrer"
                                    />
                                </>
                            )}
                        </PanelBody>
                    </div>
                )}

                {inspectortab.tab === 'design' && (
                    <DesignPanel attributes={attributes} setAttributes={setAttributes} pseudoClass={pseudoClass} />
                )}

                {inspectortab.tab === 'advanced' && (
                    <AdvancedPanel attributes={attributes} setAttributes={setAttributes} />)}
            </InspectorControls>

            {/* Render <a> or <button> directly — no wrapping div */}
            <RichText
                {...blockProps}
                tagName={Tag}
                value={displayContent || ''}
                onChange={(newContent) => setAttributes({ content: newContent })}
                placeholder={__('Button text...', 'cwicly')}
                allowedFormats={['core/bold', 'core/italic']}
            />
        </>
    );
}
