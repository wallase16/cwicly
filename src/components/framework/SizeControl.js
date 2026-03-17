import { __ } from '@wordpress/i18n';
import { SelectControl, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import useResponsive from '../../hooks/useResponsive.js';

/**
 * SizeControl — Responsive
 * `size` and `layout` are both stored per-breakpoint.
 * `opacity` remains a global (non-responsive) attribute.
 *
 * Shape:
 *   attributes.size   = { lg: { width, height, minWidth, maxWidth, minHeight, maxHeight }, md: {}, sm: {} }
 *   attributes.layout = { lg: { display, position, overflow, zIndex, cursor }, md: {}, sm: {} }
 *   attributes.opacity = "0.9"  (flat string, unchanged)
 */
export default function SizeControl({ attributes, setAttributes }) {
    const sizeHook   = useResponsive(attributes, setAttributes, 'size');
    const layoutHook = useResponsive(attributes, setAttributes, 'layout');

    const size   = sizeHook.getValues();
    const layout = layoutHook.getValues();
    const opacity = attributes.opacity !== undefined ? attributes.opacity : '';

    return (
        <div className="cwicly-size-control">
            {/* Width / Height */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' }}>
                <UnitControl label={__('Width', 'cwicly')}     value={size.width     || ''} onChange={(v) => sizeHook.updateAttr('width', v)} />
                <UnitControl label={__('Height', 'cwicly')}    value={size.height    || ''} onChange={(v) => sizeHook.updateAttr('height', v)} />
                <UnitControl label={__('Min W', 'cwicly')}     value={size.minWidth  || ''} onChange={(v) => sizeHook.updateAttr('minWidth', v)} />
                <UnitControl label={__('Max W', 'cwicly')}     value={size.maxWidth  || ''} onChange={(v) => sizeHook.updateAttr('maxWidth', v)} />
                <UnitControl label={__('Min H', 'cwicly')}     value={size.minHeight || ''} onChange={(v) => sizeHook.updateAttr('minHeight', v)} />
                <UnitControl label={__('Max H', 'cwicly')}     value={size.maxHeight || ''} onChange={(v) => sizeHook.updateAttr('maxHeight', v)} />
            </div>

            {/* Opacity — global, not per-breakpoint */}
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

            {/* Display */}
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Display', 'cwicly')}
                    value={layout.display || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Block',        value: 'block' },
                        { label: 'Flex',         value: 'flex' },
                        { label: 'Grid',         value: 'grid' },
                        { label: 'Inline',       value: 'inline' },
                        { label: 'Inline Block', value: 'inline-block' },
                        { label: 'Inline Flex',  value: 'inline-flex' },
                        { label: 'None',         value: 'none' },
                    ]}
                    onChange={(val) => layoutHook.updateAttr('display', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' }}>
                <SelectControl
                    label={__('Position', 'cwicly')}
                    value={layout.position || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Static',   value: 'static' },
                        { label: 'Relative', value: 'relative' },
                        { label: 'Absolute', value: 'absolute' },
                        { label: 'Fixed',    value: 'fixed' },
                        { label: 'Sticky',   value: 'sticky' },
                    ]}
                    onChange={(val) => layoutHook.updateAttr('position', val)}
                />
                <SelectControl
                    label={__('Overflow', 'cwicly')}
                    value={layout.overflow || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Visible', value: 'visible' },
                        { label: 'Hidden',  value: 'hidden' },
                        { label: 'Scroll',  value: 'scroll' },
                        { label: 'Auto',    value: 'auto' },
                    ]}
                    onChange={(val) => layoutHook.updateAttr('overflow', val)}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' }}>
                <UnitControl
                    label={__('Z-Index', 'cwicly')}
                    value={layout.zIndex || ''}
                    onChange={(val) => layoutHook.updateAttr('zIndex', val)}
                />
                <SelectControl
                    label={__('Cursor', 'cwicly')}
                    value={layout.cursor || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Pointer',     value: 'pointer' },
                        { label: 'Default',     value: 'default' },
                        { label: 'Not Allowed', value: 'not-allowed' },
                        { label: 'Grab',        value: 'grab' },
                        { label: 'Text',        value: 'text' },
                        { label: 'None',        value: 'none' },
                    ]}
                    onChange={(val) => layoutHook.updateAttr('cursor', val)}
                />
            </div>
        </div>
    );
}
