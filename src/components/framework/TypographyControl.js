import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { SelectControl, TextControl, ColorPalette, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import DynamicDataSelector from './DynamicDataSelector.js';

/**
 * Map Cwicly previewDeviceType → CSS generator breakpoint key.
 */
const DEVICE_TO_BP = {
    Desktop: 'lg',
    Tablet: 'md',
    Mobile: 'sm',
};

/**
 * TypographyControl
 * Reconstructs Cwicly's typography settings (Size, Weight, Family, LineHeight, etc.).
 * Stores values under breakpoint keys (lg/md/sm) for style-generator.js compatibility.
 */
export default function TypographyControl({ attributes, setAttributes }) {
    const { previewDeviceType } = useSelect((select) => ({
        previewDeviceType: select('cwicly/base').getPreviewDeviceType(),
    }), []);

    const bp = DEVICE_TO_BP[previewDeviceType] || 'lg';
    const typography = attributes.typography || {};
    const currentValues = typography[bp] || {};

    const updateTypography = (key, value) => {
        const newTypography = { ...typography };
        if (!newTypography[bp]) newTypography[bp] = { ...currentValues };
        newTypography[bp] = { ...newTypography[bp], [key]: value };
        setAttributes({ typography: newTypography });
    };

    const updateGlobalTypography = (key, value) => {
        setAttributes({ typography: { ...typography, [key]: value } });
    };

    return (
        <div className="cwicly-typography-control">
            {/* Font Size — per breakpoint */}
            <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '15px' }}>
                <div style={{ flexGrow: 1 }}>
                    <UnitControl
                        label={__('Font Size', 'cwicly')}
                        value={currentValues.fontSize || ''}
                        onChange={(val) => updateTypography('fontSize', val)}
                    />
                </div>
                <DynamicDataSelector value={currentValues.fontSize || ''} onSelect={(val) => updateTypography('fontSize', val)} />
            </div>

            {/* Line Height — per breakpoint */}
            <div style={{ marginBottom: '15px' }}>
                <UnitControl
                    label={__('Line Height', 'cwicly')}
                    value={currentValues.lineHeight || ''}
                    onChange={(val) => updateTypography('lineHeight', val)}
                />
            </div>

            {/* Letter Spacing — per breakpoint */}
            <div style={{ marginBottom: '15px' }}>
                <UnitControl
                    label={__('Letter Spacing', 'cwicly')}
                    value={currentValues.letterSpacing || ''}
                    onChange={(val) => updateTypography('letterSpacing', val)}
                />
            </div>

            {/* Font Weight */}
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Font Weight', 'cwicly')}
                    value={currentValues.fontWeight || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        ...['100','200','300','400','500','600','700','800','900'].map((w) => ({ label: w, value: w })),
                    ]}
                    onChange={(val) => updateTypography('fontWeight', val)}
                />
            </div>

            {/* Text Align — per breakpoint */}
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Text Align', 'cwicly')}
                    value={currentValues.textAlign || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: __('Left', 'cwicly'), value: 'left' },
                        { label: __('Center', 'cwicly'), value: 'center' },
                        { label: __('Right', 'cwicly'), value: 'right' },
                        { label: __('Justify', 'cwicly'), value: 'justify' },
                    ]}
                    onChange={(val) => updateTypography('textAlign', val)}
                />
            </div>

            {/* Text Decoration — global */}
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Text Decoration', 'cwicly')}
                    value={typography.textDecoration || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: __('None', 'cwicly'), value: 'none' },
                        { label: __('Underline', 'cwicly'), value: 'underline' },
                        { label: __('Line Through', 'cwicly'), value: 'line-through' },
                    ]}
                    onChange={(val) => updateGlobalTypography('textDecoration', val)}
                />
            </div>

            {/* Font Family — global (not responsive) */}
            <div style={{ marginBottom: '15px' }}>
                <TextControl
                    label={__('Font Family', 'cwicly')}
                    value={typography.fontFamily || ''}
                    onChange={(val) => updateGlobalTypography('fontFamily', val)}
                    placeholder={__('e.g. Inter, sans-serif', 'cwicly')}
                />
            </div>

            {/* Text Color — global */}
            <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>
                    {__('Text Color', 'cwicly')}
                </label>
                <ColorPalette
                    value={typography.color || ''}
                    onChange={(val) => updateGlobalTypography('color', val)}
                />
            </div>
        </div>
    );
}
