import { __ } from '@wordpress/i18n';
import { ColorPalette, __experimentalUnitControl as UnitControl, ToggleControl } from '@wordpress/components';

/**
 * ShadowControl
 * Reconstructs Cwicly's box-shadow settings.
 */
export default function ShadowControl({ attributes, setAttributes }) {
    const shadow = attributes.shadow || {};

    const updateShadow = (key, value) => {
        setAttributes({
            shadow: {
                ...shadow,
                [key]: value
            }
        });
    };

    return (
        <div className="cwicly-shadow-control">
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                    {__('Shadow Color', 'cwicly')}
                </label>
                <ColorPalette
                    value={shadow.color}
                    onChange={(val) => updateShadow('color', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Offset X', 'cwicly')}
                    value={shadow.x || '0px'}
                    onChange={(val) => updateShadow('x', val)}
                />
                <UnitControl
                    label={__('Offset Y', 'cwicly')}
                    value={shadow.y || '0px'}
                    onChange={(val) => updateShadow('y', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Blur', 'cwicly')}
                    value={shadow.blur || '0px'}
                    onChange={(val) => updateShadow('blur', val)}
                />
                <UnitControl
                    label={__('Spread', 'cwicly')}
                    value={shadow.spread || '0px'}
                    onChange={(val) => updateShadow('spread', val)}
                />
            </div>

            <ToggleControl
                label={__('Inset Shadow', 'cwicly')}
                checked={shadow.inset || false}
                onChange={(val) => updateShadow('inset', val)}
            />
        </div>
    );
}
