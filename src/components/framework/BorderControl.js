import { __ } from '@wordpress/i18n';
import { SelectControl, ColorPalette, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import useResponsive from '../../hooks/useResponsive.js';

/**
 * BorderControl — Responsive
 * Stores all values under attributes.border[bp] where bp ∈ { lg, md, sm }.
 * Shape: { lg: { width, style, color, radius, radiusTL, radiusTR, radiusBR, radiusBL }, md: {}, sm: {} }
 */
export default function BorderControl({ attributes, setAttributes }) {
    const { bp, getValues, updateAttr } = useResponsive(attributes, setAttributes, 'border');
    const border = getValues();
    const [linkedRadius, setLinkedRadius] = useState(true);

    // For "link all" radius we need to update multiple keys in one setAttributes call.
    const updateRadiusAll = (value) => {
        const next = { ...(attributes.border || {}) };
        next[bp] = {
            ...(next[bp] || {}),
            radius: value,
            radiusTL: value,
            radiusTR: value,
            radiusBR: value,
            radiusBL: value,
        };
        setAttributes({ border: next });
    };

    const sharedRadius = border.radiusTL || border.radius || '';

    return (
        <div className="cwicly-border-control">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Border Width', 'cwicly')}
                    value={border.width || ''}
                    onChange={(val) => updateAttr('width', val)}
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
                    onChange={(val) => updateAttr('style', val)}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                    {__('Border Color', 'cwicly')}
                </label>
                <ColorPalette value={border.color} onChange={(val) => updateAttr('color', val)} />
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
                        onChange={(val) => updateRadiusAll(val)}
                    />
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        {[['radiusTL', 'Top Left'], ['radiusTR', 'Top Right'], ['radiusBL', 'Bot Left'], ['radiusBR', 'Bot Right']].map(([key, label]) => (
                            <UnitControl
                                key={key}
                                label={__(label, 'cwicly')}
                                value={border[key] || ''}
                                onChange={(val) => updateAttr(key, val)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
