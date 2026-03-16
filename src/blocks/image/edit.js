import { useBlockProps, InspectorControls, BlockControls, MediaPlaceholder, MediaUpload, MediaUploadCheck, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, Button, ToolbarGroup, ToolbarButton, ToggleControl, TextControl, Popover, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { getBlockID, BackgroundHelper, getCombinedClassName } from '../../utils/index.js';

import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import DynamicDataControl from '../../components/framework/DynamicDataControl.js';
import DynamicAttributeWrapper from '../../components/framework/DynamicAttributeWrapper.js';
import { useDynamicData } from '../../hooks/use-dynamic-data.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { 
        imageURL, 
        imageID, 
        imageAlt, 
        classes, 
        imageLightbox,
        linkWrapperActive,
        linkWrapperUrl,
        linkWrapperNewTab,
        imageThumbnailSize
    } = attributes;
    
    const resolvedImageURL = useDynamicData(imageURL);
    const resolvedImageAlt = useDynamicData(imageAlt);
    
    // Use resolved values if they exist, otherwise fallback to static attributes
    const displayImageURL = resolvedImageURL || imageURL;
    const displayImageAlt = resolvedImageAlt || imageAlt;

    const [isEditingURL, setIsEditingURL] = useState(false);

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, classes || ''),
    });


    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass: select('cwicly/base').getPseudoClass(),
    }), []);

    const onSelectImage = (media) => {
        setAttributes({
            imageURL: media.url,
            imageID: media.id,
            imageAlt: media.alt,
        });
    };

    const removeImage = () => {
        setAttributes({
            imageURL: undefined,
            imageID: undefined,
            imageAlt: '',
        });
    };

    return (
        <>
            <BlockControls>
                {imageURL && (
                    <ToolbarGroup>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onSelectImage}
                                allowedTypes={['image']}
                                value={imageID}
                                render={({ open }) => (
                                    <ToolbarButton
                                        onClick={open}
                                        icon="edit"
                                        label={__('Replace Image', 'cwicly')}
                                    />
                                )}
                            />
                        </MediaUploadCheck>
                    </ToolbarGroup>
                )}
                <ToolbarGroup>
                    <ToolbarButton
                        icon="admin-links"
                        label={__('Link', 'cwicly')}
                        onClick={() => setIsEditingURL(!isEditingURL)}
                        isActive={linkWrapperActive}
                    />
                </ToolbarGroup>
            </BlockControls>
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
            <InspectorControls>
                <CwiclyInspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    name={name}
                />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Image Settings', 'cwicly')}>
                            <DynamicAttributeWrapper
                                attribute="imageThumbnailSize"
                                attributes={attributes}
                                setAttributes={setAttributes}
                                label={__('Size', 'cwicly')}
                            >
                                <SelectControl
                                    value={imageThumbnailSize}
                                    options={[
                                        { label: __('Full', 'cwicly'), value: 'full' },
                                        { label: __('Large', 'cwicly'), value: 'large' },
                                        { label: __('Medium', 'cwicly'), value: 'medium' },
                                        { label: __('Thumbnail', 'cwicly'), value: 'thumbnail' },
                                    ]}
                                    onChange={(val) => setAttributes({ imageThumbnailSize: val })}
                                />
                            </DynamicAttributeWrapper>
                            
                            <DynamicAttributeWrapper
                                attribute="imageAlt"
                                attributes={attributes}
                                setAttributes={setAttributes}
                                label={__('Alternative Text', 'cwicly')}
                            >
                                <TextareaControl
                                    value={imageAlt}
                                    onChange={(newAlt) => setAttributes({ imageAlt: newAlt })}
                                    help={__('Describe the purpose of the image for accessibility.', 'cwicly')}
                                />
                            </DynamicAttributeWrapper>
                            <ToggleControl
                                label={__('Lightbox', 'cwicly')}
                                checked={imageLightbox}
                                onChange={(val) => setAttributes({ imageLightbox: val })}
                            />
                            {imageURL && (
                                <Button isDestructive onClick={removeImage}>
                                    {__('Remove Image', 'cwicly')}
                                </Button>
                            )}
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
                    <div className="cwicly-advanced-tab">
                        <div style={{ padding: '0 16px', fontSize: '12px' }}>
                            {__('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')}
                        </div>
                    </div>
                )}
            </InspectorControls>
            <div {...blockProps}>
                <BackgroundHelper attributes={attributes} />
                {displayImageURL ? (
                    <img src={displayImageURL} alt={displayImageAlt} />
                ) : (
                    <MediaPlaceholder
                        onSelect={onSelectImage}
                        allowedTypes={['image']}
                        multiple={false}
                        labels={{ title: __('Cwicly Image', 'cwicly') }}
                    />
                )}
            </div>
        </>
    );
}
