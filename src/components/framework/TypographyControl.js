import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { SelectControl, TextControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import DynamicDataSelector from './DynamicDataSelector.js';

/**
 * TypographyControl
 * Reconstructs Cwicly's typography settings (Size, Weight, Family).
 */
export default function TypographyControl({ attributes, setAttributes }) {
    const { previewDeviceType } = useSelect((select) => ({
        previewDeviceType: select('cwicly/base').getPreviewDeviceType(),
    }), []);

    const typography = attributes.typography || {};
    const currentValues = typography[previewDeviceType] || typography.Desktop || {};

    const updateTypography = (key, value) => {
        const newTypography = { ...typography };
        if (!newTypography[previewDeviceType]) newTypography[previewDeviceType] = { ...currentValues };
        
        newTypography[previewDeviceType][key] = value;
        setAttributes({ typography: newTypography });
    };

    const updateGlobalTypography = (key, value) => {
        const newTypography = { ...typography };
        newTypography[key] = value;
        setAttributes({ typography: newTypography });
    }

    return (
        <div className="cwicly-typography-control">
            <div style={{ marginBottom: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ flexGrow: 1 }}>
                        <UnitControl
                            label={__('Font Size', 'cwicly')}
                            value={currentValues.fontSize || ''}
                            onChange={(val) => updateTypography('fontSize', val)}
                        />
                    </div>
                    <DynamicDataSelector
                        value={currentValues.fontSize || ''}
                        onSelect={(val) => updateTypography('fontSize', val)}
                    />
                </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Font Weight', 'cwicly')}
                    value={currentValues.fontWeight || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: '100', value: '100' },
                        { label: '200', value: '200' },
                        { label: '300', value: '300' },
                        { label: '400', value: '400' },
                        { label: '500', value: '500' },
                        { label: '600', value: '600' },
                        { label: '700', value: '700' },
                        { label: '800', value: '800' },
                        { label: '900', value: '900' },
                    ]}
                    onChange={(val) => updateTypography('fontWeight', val)}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <TextControl
                    label={__('Font Family', 'cwicly')}
                    value={typography.fontFamily || ''}
                    onChange={(val) => updateGlobalTypography('fontFamily', val)}
                    placeholder={__('e.g. Inter, sans-serif', 'cwicly')}
                />
            </div>
        </div>
    );
}
