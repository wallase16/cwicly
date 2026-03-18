import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

// Image size options for the dropdown
const IMAGE_SIZES = [
    { label: __('Thumbnail', 'cwicly'), value: 'thumbnail' },
    { label: __('Medium', 'cwicly'),    value: 'medium' },
    { label: __('Large', 'cwicly'),     value: 'large' },
    { label: __('Full', 'cwicly'),      value: 'full' },
];

export default function Edit({ attributes, setAttributes, clientId, name, context }) {
    const { classID, classes, imageSize, isLink, aspectRatio, objectFit } = attributes;
    const postId = context?.['cwicly/postId'];

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Fetch the featured image URL from the post
    const featuredImageUrl = useSelect((select) => {
        if (!postId) return null;
        const post  = select('core').getEntityRecord('postType', 'post', postId);
        const mediaId = post?.featured_media;
        if (!mediaId) return null;
        const media = select('core').getMedia(mediaId, { context: 'view' });
        return media?.media_details?.sizes?.[imageSize]?.source_url || media?.source_url || null;
    }, [postId, imageSize]);

    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass:  select('cwicly/base').getPseudoClass(),
    }), []);

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, classes || ''),
    });

    const imgStyle = {
        width: '100%',
        height: aspectRatio ? 'auto' : undefined,
        aspectRatio: aspectRatio || undefined,
        objectFit: objectFit || 'cover',
        display: 'block',
        background: '#eee',
        minHeight: '120px',
    };

    return (
        <>
            <InspectorControls>
                <CwiclyInspector attributes={attributes} setAttributes={setAttributes} name={name} />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Image Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Image Size', 'cwicly')}
                                value={imageSize}
                                options={IMAGE_SIZES}
                                onChange={(val) => setAttributes({ imageSize: val })}
                            />
                            <ToggleControl
                                label={__('Link to Post', 'cwicly')}
                                checked={isLink}
                                onChange={(val) => setAttributes({ isLink: val })}
                            />
                            <SelectControl
                                label={__('Object Fit', 'cwicly')}
                                value={objectFit}
                                options={[
                                    { label: 'Cover',   value: 'cover' },
                                    { label: 'Contain', value: 'contain' },
                                    { label: 'Fill',    value: 'fill' },
                                    { label: 'None',    value: 'none' },
                                ]}
                                onChange={(val) => setAttributes({ objectFit: val })}
                            />
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

            <figure {...blockProps} style={{ margin: 0 }}>
                {isLink ? (
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <img
                            src={featuredImageUrl || undefined}
                            alt={__('Featured Image', 'cwicly')}
                            style={imgStyle}
                        />
                    </a>
                ) : (
                    <img
                        src={featuredImageUrl || undefined}
                        alt={__('Featured Image', 'cwicly')}
                        style={imgStyle}
                    />
                )}
                {!featuredImageUrl && (
                    <div style={{ ...imgStyle, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', fontSize: '12px' }}>
                        {__('Featured Image', 'cwicly')}
                    </div>
                )}
            </figure>
        </>
    );
}
