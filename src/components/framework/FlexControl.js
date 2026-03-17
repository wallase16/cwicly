import { __ } from '@wordpress/i18n';
import { SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import useResponsive from '../../hooks/useResponsive.js';

/**
 * FlexControl — Responsive
 * Stores all values under attributes.flex[bp] where bp ∈ { lg, md, sm }.
 * Shape: { lg: { justifyContent, alignItems, alignContent, flexGrow, flexShrink, flexBasis, order, alignSelf }, md: {}, sm: {} }
 */
export default function FlexControl({ attributes, setAttributes }) {
    const { getValues, updateAttr } = useResponsive(attributes, setAttributes, 'flex');
    const flex = getValues();

    return (
        <div className="cwicly-flex-control">
            {/* ── Container ── */}
            <p style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>
                {__('Container', 'cwicly')}
            </p>

            <SelectControl
                label={__('Justify Content', 'cwicly')}
                value={flex.justifyContent || ''}
                options={[
                    { label: __('Default', 'cwicly'),   value: '' },
                    { label: 'Flex Start',               value: 'flex-start' },
                    { label: 'Flex End',                 value: 'flex-end' },
                    { label: 'Center',                   value: 'center' },
                    { label: 'Space Between',            value: 'space-between' },
                    { label: 'Space Around',             value: 'space-around' },
                    { label: 'Space Evenly',             value: 'space-evenly' },
                ]}
                onChange={(val) => updateAttr('justifyContent', val)}
            />

            <SelectControl
                label={__('Align Items', 'cwicly')}
                value={flex.alignItems || ''}
                options={[
                    { label: __('Default', 'cwicly'), value: '' },
                    { label: 'Flex Start',             value: 'flex-start' },
                    { label: 'Flex End',               value: 'flex-end' },
                    { label: 'Center',                 value: 'center' },
                    { label: 'Stretch',                value: 'stretch' },
                    { label: 'Baseline',               value: 'baseline' },
                ]}
                onChange={(val) => updateAttr('alignItems', val)}
            />

            <SelectControl
                label={__('Align Content', 'cwicly')}
                value={flex.alignContent || ''}
                options={[
                    { label: __('Default', 'cwicly'),  value: '' },
                    { label: 'Flex Start',              value: 'flex-start' },
                    { label: 'Flex End',                value: 'flex-end' },
                    { label: 'Center',                  value: 'center' },
                    { label: 'Space Between',           value: 'space-between' },
                    { label: 'Space Around',            value: 'space-around' },
                    { label: 'Stretch',                 value: 'stretch' },
                ]}
                onChange={(val) => updateAttr('alignContent', val)}
            />

            {/* ── Child ── */}
            <hr style={{ margin: '12px 0', border: 'none', borderTop: '1px solid #eee' }} />
            <p style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>
                {__('As Child', 'cwicly')}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '8px' }}>
                <UnitControl
                    label={__('Grow', 'cwicly')}
                    value={flex.flexGrow || ''}
                    onChange={(val) => updateAttr('flexGrow', val)}
                />
                <UnitControl
                    label={__('Shrink', 'cwicly')}
                    value={flex.flexShrink || ''}
                    onChange={(val) => updateAttr('flexShrink', val)}
                />
                <UnitControl
                    label={__('Order', 'cwicly')}
                    value={flex.order || ''}
                    onChange={(val) => updateAttr('order', val)}
                />
            </div>

            <UnitControl
                label={__('Basis', 'cwicly')}
                value={flex.flexBasis || ''}
                onChange={(val) => updateAttr('flexBasis', val)}
                style={{ marginBottom: '8px' }}
            />

            <SelectControl
                label={__('Align Self', 'cwicly')}
                value={flex.alignSelf || ''}
                options={[
                    { label: __('Default', 'cwicly'), value: '' },
                    { label: 'Auto',                   value: 'auto' },
                    { label: 'Flex Start',             value: 'flex-start' },
                    { label: 'Flex End',               value: 'flex-end' },
                    { label: 'Center',                 value: 'center' },
                    { label: 'Stretch',                value: 'stretch' },
                    { label: 'Baseline',               value: 'baseline' },
                ]}
                onChange={(val) => updateAttr('alignSelf', val)}
            />
        </div>
    );
}
