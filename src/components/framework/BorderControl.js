import { __ } from '@wordpress/i18n';
import { PanelRow, SelectControl, ColorPalette, __experimentalUnitControl as UnitControl } from '@wordpress/components';

/**
 * BorderControl
 * Reconstructs Cwicly's border settings (Width, Style, Color, Radius).
 */
export default function BorderControl({ attributes, setAttributes }) {
    const border = attributes.border || {};

    const updateBorder = (key, value) => {
        setAttributes({
            border: {
                ...border,
                [key]: value
            }
        });
    };

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
                <ColorPalette
                    value={border.color}
                    onChange={(val) => updateBorder('color', val)}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <UnitControl
                    label={__('Border Radius', 'cwicly')}
                    value={border.radius || ''}
                    onChange={(val) => updateBorder('radius', val)}
                />
            </div>
        </div>
    );
}
