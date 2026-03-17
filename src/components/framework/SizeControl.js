import { __ } from '@wordpress/i18n';
import { SelectControl, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

/**
 * SizeControl
 * Cwicly width, height (with min/max variants), opacity, and layout (display/overflow/position/z-index/cursor).
 * All stored on `attributes.size`, `attributes.opacity`, and `attributes.layout`.
 */
export default function SizeControl({ attributes, setAttributes }) {
    const size   = attributes.size   || {};
    const layout = attributes.layout || {};
    const opacity = attributes.opacity !== undefined ? attributes.opacity : '';

    const updateSize   = (key, val) => setAttributes({ size:   { ...size,   [key]: val } });
    const updateLayout = (key, val) => setAttributes({ layout: { ...layout, [key]: val } });

    return (
        <div className="cwicly-size-control">
            {/* Width */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' }}>
                <UnitControl label={__('Width', 'cwicly')}    value={size.width    || ''} onChange={(v) => updateSize('width', v)} />
                <UnitControl label={__('Height', 'cwicly')}   value={size.height   || ''} onChange={(v) => updateSize('height', v)} />
                <UnitControl label={__('Min W', 'cwicly')}    value={size.minWidth || ''} onChange={(v) => updateSize('minWidth', v)} />
                <UnitControl label={__('Max W', 'cwicly')}    value={size.maxWidth || ''} onChange={(v) => updateSize('maxWidth', v)} />
                <UnitControl label={__('Min H', 'cwicly')}    value={size.minHeight || ''} onChange={(v) => updateSize('minHeight', v)} />
                <UnitControl label={__('Max H', 'cwicly')}    value={size.maxHeight || ''} onChange={(v) => updateSize('maxHeight', v)} />
            </div>

            {/* Opacity */}
            <div style={{ marginBottom: '15px' }}>
                <RangeControl
                    label={__('Opacity', 'cwicly')}
                    value={opacity !== '' ? parseFloat(opacity) : 1}
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={(val) => setAttributes({ opacity: String(val) })}
                />
            </div>

            {/* Display & Layout */}
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Display', 'cwicly')}
                    value={layout.display || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Block', value: 'block' },
                        { label: 'Flex', value: 'flex' },
                        { label: 'Grid', value: 'grid' },
                        { label: 'Inline', value: 'inline' },
                        { label: 'Inline Block', value: 'inline-block' },
                        { label: 'Inline Flex', value: 'inline-flex' },
                        { label: 'None', value: 'none' },
                    ]}
                    onChange={(val) => updateLayout('display', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' }}>
                <SelectControl
                    label={__('Position', 'cwicly')}
                    value={layout.position || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Static', value: 'static' },
                        { label: 'Relative', value: 'relative' },
                        { label: 'Absolute', value: 'absolute' },
                        { label: 'Fixed', value: 'fixed' },
                        { label: 'Sticky', value: 'sticky' },
                    ]}
                    onChange={(val) => updateLayout('position', val)}
                />
                <SelectControl
                    label={__('Overflow', 'cwicly')}
                    value={layout.overflow || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Visible', value: 'visible' },
                        { label: 'Hidden', value: 'hidden' },
                        { label: 'Scroll', value: 'scroll' },
                        { label: 'Auto', value: 'auto' },
                    ]}
                    onChange={(val) => updateLayout('overflow', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Z-Index', 'cwicly')}
                    value={layout.zIndex || ''}
                    onChange={(val) => updateLayout('zIndex', val)}
                />
                <SelectControl
                    label={__('Cursor', 'cwicly')}
                    value={layout.cursor || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Pointer', value: 'pointer' },
                        { label: 'Default', value: 'default' },
                        { label: 'Not Allowed', value: 'not-allowed' },
                        { label: 'Grab', value: 'grab' },
                        { label: 'Text', value: 'text' },
                        { label: 'None', value: 'none' },
                    ]}
                    onChange={(val) => updateLayout('cursor', val)}
                />
            </div>
        </div>
    );
}
