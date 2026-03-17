import { __ } from '@wordpress/i18n';
import { ColorPalette, __experimentalUnitControl as UnitControl, ToggleControl } from '@wordpress/components';
import useResponsive from '../../hooks/useResponsive.js';

/**
 * ShadowControl — Responsive
 * Stores all values under attributes.shadow[bp] where bp ∈ { lg, md, sm }.
 * Shape: { lg: { x, y, blur, spread, color, inset }, md: {}, sm: {} }
 */
export default function ShadowControl({ attributes, setAttributes }) {
    const { getValues, updateAttr } = useResponsive(attributes, setAttributes, 'shadow');
    const shadow = getValues();

    return (
        <div className="cwicly-shadow-control">
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                    {__('Shadow Color', 'cwicly')}
                </label>
                <ColorPalette
                    value={shadow.color}
                    onChange={(val) => updateAttr('color', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Offset X', 'cwicly')}
                    value={shadow.x || '0px'}
                    onChange={(val) => updateAttr('x', val)}
                />
                <UnitControl
                    label={__('Offset Y', 'cwicly')}
                    value={shadow.y || '0px'}
                    onChange={(val) => updateAttr('y', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Blur', 'cwicly')}
                    value={shadow.blur || '0px'}
                    onChange={(val) => updateAttr('blur', val)}
                />
                <UnitControl
                    label={__('Spread', 'cwicly')}
                    value={shadow.spread || '0px'}
                    onChange={(val) => updateAttr('spread', val)}
                />
            </div>

            <ToggleControl
                label={__('Inset Shadow', 'cwicly')}
                checked={shadow.inset || false}
                onChange={(val) => updateAttr('inset', val)}
            />
        </div>
    );
}
