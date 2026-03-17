import { __ } from '@wordpress/i18n';
import { SelectControl, ColorPalette, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * BorderControl
 * Reconstructs Cwicly's border settings (Width, Style, Color, Radius).
 * Supports unified and per-side border radius (TL/TR/BR/BL).
 */
export default function BorderControl({ attributes, setAttributes }) {
    const border = attributes.border || {};
    const [linkedRadius, setLinkedRadius] = useState(true);

    const updateBorder = (key, value) => {
        setAttributes({ border: { ...border, [key]: value } });
    };

    const updateRadius = (corner, value) => {
        if (linkedRadius) {
            setAttributes({ border: { ...border, radiusTL: value, radiusTR: value, radiusBR: value, radiusBL: value, radius: value } });
        } else {
            setAttributes({ border: { ...border, [corner]: value } });
        }
    };

    // Determine display value for linked radius
    const sharedRadius = border.radiusTL || border.radius || '';

    return (
        <div className="cwicly-border-control">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Border Width', 'cwicly')}
                    value={border.width || ''}
                    onChange={(val) => updateBorder('width', val)}
                />
                <SelectControl
                    label={__('Border Style', 'cwicly')}
                    value={border.style || 'none'}
                    options={[
                        { label: __('None', 'cwicly'), value: 'none' },
                        { label: __('Solid', 'cwicly'), value: 'solid' },
                        { label: __('Dashed', 'cwicly'), value: 'dashed' },
                        { label: __('Dotted', 'cwicly'), value: 'dotted' },
                        { label: __('Double', 'cwicly'), value: 'double' },
                    ]}
                    onChange={(val) => updateBorder('style', val)}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                    {__('Border Color', 'cwicly')}
                </label>
                <ColorPalette value={border.color} onChange={(val) => updateBorder('color', val)} />
            </div>

            {/* Border Radius */}
            <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <label style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>{__('Border Radius', 'cwicly')}</label>
                    <button
                        style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '12px', color: '#1e1e1e' }}
                        onClick={() => setLinkedRadius(!linkedRadius)}
                        title={linkedRadius ? __('Unlink corners', 'cwicly') : __('Link corners', 'cwicly')}
                    >
                        {linkedRadius ? '🔗' : '⛓️'}
                    </button>
                </div>
                {linkedRadius ? (
                    <UnitControl
                        label={__('All Corners', 'cwicly')}
                        value={sharedRadius}
                        onChange={(val) => updateRadius('radius', val)}
                    />
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {[['radiusTL', 'Top Left'], ['radiusTR', 'Top Right'], ['radiusBL', 'Bot Left'], ['radiusBR', 'Bot Right']].map(([key, label]) => (
                            <UnitControl
                                key={key}
                                label={__(label, 'cwicly')}
                                value={border[key] || ''}
                                onChange={(val) => updateRadius(key, val)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
