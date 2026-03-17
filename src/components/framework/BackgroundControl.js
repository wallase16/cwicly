import { __ } from '@wordpress/i18n';
import { ColorPalette, MediaUpload, MediaUploadCheck, Button, SelectControl, TextControl } from '@wordpress/components';
import useResponsive from '../../hooks/useResponsive.js';

/**
 * BackgroundControl — Responsive
 * Stores all values under attributes.background[bp] where bp ∈ { lg, md, sm }.
 * Shape: { lg: { type, color, gradient, image: { url, id }, imageSize, imagePosition, imageRepeat }, md: {}, sm: {} }
 */
export default function BackgroundControl({ attributes, setAttributes }) {
    const { getValues, updateAttr } = useResponsive(attributes, setAttributes, 'background');
    const background = getValues();
    const bgType = background.type || 'none';

    return (
        <div className="cwicly-background-control">
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Background Type', 'cwicly')}
                    value={bgType}
                    options={[
                        { label: __('None', 'cwicly'), value: 'none' },
                        { label: __('Color', 'cwicly'), value: 'color' },
                        { label: __('Gradient', 'cwicly'), value: 'gradient' },
                        { label: __('Image', 'cwicly'), value: 'image' },
                    ]}
                    onChange={(val) => updateAttr('type', val)}
                />
            </div>

            {bgType === 'color' && (
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                        {__('Background Color', 'cwicly')}
                    </label>
                    <ColorPalette
                        value={background.color}
                        onChange={(val) => updateAttr('color', val)}
                    />
                </div>
            )}

            {bgType === 'gradient' && (
                <div style={{ marginBottom: '15px' }}>
                    <TextControl
                        label={__('Gradient CSS', 'cwicly')}
                        value={background.gradient || ''}
                        onChange={(val) => updateAttr('gradient', val)}
                        placeholder="linear-gradient(45deg, #ff6b6b, #4ecdc4)"
                        help={__('Enter a full CSS gradient value.', 'cwicly')}
                    />
                    {background.gradient && (
                        <div style={{
                            height: '40px',
                            borderRadius: '4px',
                            marginTop: '8px',
                            background: background.gradient,
                        }} />
                    )}
                </div>
            )}

            {bgType === 'image' && (
                <div style={{ marginBottom: '15px' }}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) => updateAttr('image', { url: media.url, id: media.id })}
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
                                        <Button isLink isDestructive onClick={() => updateAttr('image', null)} style={{ marginLeft: '10px' }}>
                                            {__('Remove', 'cwicly')}
                                        </Button>
                                    )}
                                </div>
                            )}
                        />
                    </MediaUploadCheck>
                    <div style={{ marginTop: '10px' }}>
                        <SelectControl
                            label={__('Size', 'cwicly')}
                            value={background.imageSize || 'cover'}
                            options={[
                                { label: 'Cover', value: 'cover' },
                                { label: 'Contain', value: 'contain' },
                                { label: 'Auto', value: 'auto' },
                            ]}
                            onChange={(val) => updateAttr('imageSize', val)}
                        />
                        <SelectControl
                            label={__('Position', 'cwicly')}
                            value={background.imagePosition || 'center'}
                            options={[
                                { label: 'Center', value: 'center' },
                                { label: 'Top', value: 'top' },
                                { label: 'Bottom', value: 'bottom' },
                                { label: 'Left', value: 'left' },
                                { label: 'Right', value: 'right' },
                            ]}
                            onChange={(val) => updateAttr('imagePosition', val)}
                        />
                        <SelectControl
                            label={__('Repeat', 'cwicly')}
                            value={background.imageRepeat || 'no-repeat'}
                            options={[
                                { label: 'No Repeat', value: 'no-repeat' },
                                { label: 'Repeat', value: 'repeat' },
                                { label: 'Repeat X', value: 'repeat-x' },
                                { label: 'Repeat Y', value: 'repeat-y' },
                            ]}
                            onChange={(val) => updateAttr('imageRepeat', val)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
