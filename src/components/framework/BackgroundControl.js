import { __ } from '@wordpress/i18n';
import { ColorPalette, MediaUpload, MediaUploadCheck, Button, SelectControl } from '@wordpress/components';

/**
 * BackgroundControl
 * Reconstructs Cwicly's background settings (Color, Image).
 */
export default function BackgroundControl({ attributes, setAttributes }) {
    const background = attributes.background || { type: 'none' };

    const updateBackground = (key, value) => {
        setAttributes({
            background: {
                ...background,
                [key]: value
            }
        });
    };

    return (
        <div className="cwicly-background-control">
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Background Type', 'cwicly')}
                    value={background.type}
                    options={[
                        { label: __('None', 'cwicly'), value: 'none' },
                        { label: __('Color', 'cwicly'), value: 'color' },
                        { label: __('Image', 'cwicly'), value: 'image' },
                    ]}
                    onChange={(val) => updateBackground('type', val)}
                />
            </div>

            {background.type === 'color' && (
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                        {__('Background Color', 'cwicly')}
                    </label>
                    <ColorPalette
                        value={background.color}
                        onChange={(val) => updateBackground('color', val)}
                    />
                </div>
            )}

            {background.type === 'image' && (
                <div style={{ marginBottom: '15px' }}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => updateBackground('image', { url: media.url, id: media.id })}
                            allowedTypes={['image']}
                            value={background.image?.id}
                            render={({ open }) => (
                                <div>
                                    {background.image?.url && (
                                        <div style={{ marginBottom: '10px' }}>
                                            <img src={background.image.url} alt="" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
                                        </div>
                                    )}
                                    <Button isSecondary onClick={open}>
                                        {background.image?.url ? __('Replace Image', 'cwicly') : __('Select Image', 'cwicly')}
                                    </Button>
                                    {background.image?.url && (
                                        <Button 
                                            isLink 
                                            isDestructive 
                                            onClick={() => updateBackground('image', null)}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            {__('Remove', 'cwicly')}
                                        </Button>
                                    )}
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                </div>
            )}
        </div>
    );
}
