import { __ } from '@wordpress/i18n';
import { SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

/**
 * GridControl
 * Cwicly grid-container and grid-child controls.
 * Data stored on `attributes.grid` as a flat object.
 *
 * Container: gridTemplateColumns, gridTemplateRows, gap (column-gap / row-gap handled together)
 * Child:     gridColumn (span), gridRow (span)
 */
export default function GridControl({ attributes, setAttributes }) {
    const grid = attributes.grid || {};
    const update = (key, val) => setAttributes({ grid: { ...grid, [key]: val } });

    return (
        <div className="cwicly-grid-control">
            {/* ── Container ── */}
            <p style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>
                {__('Container', 'cwicly')}
            </p>

            <UnitControl
                label={__('Template Columns', 'cwicly')}
                value={grid.gridTemplateColumns || ''}
                onChange={(val) => update('gridTemplateColumns', val)}
                help={__('e.g. repeat(3, 1fr) or 200px 1fr', 'cwicly')}
            />

            <UnitControl
                label={__('Template Rows', 'cwicly')}
                value={grid.gridTemplateRows || ''}
                onChange={(val) => update('gridTemplateRows', val)}
                help={__('e.g. auto 1fr', 'cwicly')}
                style={{ marginTop: '8px' }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
                <UnitControl
                    label={__('Column Gap', 'cwicly')}
                    value={grid.columnGap || ''}
                    onChange={(val) => update('columnGap', val)}
                />
                <UnitControl
                    label={__('Row Gap', 'cwicly')}
                    value={grid.rowGap || ''}
                    onChange={(val) => update('rowGap', val)}
                />
            </div>

            <SelectControl
                label={__('Justify Items', 'cwicly')}
                value={grid.justifyItems || ''}
                options={[
                    { label: __('Default', 'cwicly'), value: '' },
                    { label: 'Start',   value: 'start' },
                    { label: 'End',     value: 'end' },
                    { label: 'Center',  value: 'center' },
                    { label: 'Stretch', value: 'stretch' },
                ]}
                onChange={(val) => update('justifyItems', val)}
                style={{ marginTop: '8px' }}
            />

            <SelectControl
                label={__('Align Items', 'cwicly')}
                value={grid.alignItems || ''}
                options={[
                    { label: __('Default', 'cwicly'), value: '' },
                    { label: 'Start',     value: 'start' },
                    { label: 'End',       value: 'end' },
                    { label: 'Center',    value: 'center' },
                    { label: 'Stretch',   value: 'stretch' },
                    { label: 'Baseline',  value: 'baseline' },
                ]}
                onChange={(val) => update('alignItems', val)}
            />

            {/* ── Child ── */}
            <hr style={{ margin: '12px 0', border: 'none', borderTop: '1px solid #eee' }} />
            <p style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 8px' }}>
                {__('As Child', 'cwicly')}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <UnitControl
                    label={__('Column Span', 'cwicly')}
                    value={grid.gridColumn || ''}
                    onChange={(val) => update('gridColumn', val)}
                    help="e.g. span 2"
                />
                <UnitControl
                    label={__('Row Span', 'cwicly')}
                    value={grid.gridRow || ''}
                    onChange={(val) => update('gridRow', val)}
                    help="e.g. span 2"
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
                <SelectControl
                    label={__('Justify Self', 'cwicly')}
                    value={grid.justifySelf || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Start',   value: 'start' },
                        { label: 'End',     value: 'end' },
                        { label: 'Center',  value: 'center' },
                        { label: 'Stretch', value: 'stretch' },
                    ]}
                    onChange={(val) => update('justifySelf', val)}
                />
                <SelectControl
                    label={__('Align Self', 'cwicly')}
                    value={grid.alignSelf || ''}
                    options={[
                        { label: __('Default', 'cwicly'), value: '' },
                        { label: 'Start',    value: 'start' },
                        { label: 'End',      value: 'end' },
                        { label: 'Center',   value: 'center' },
                        { label: 'Stretch',  value: 'stretch' },
                        { label: 'Baseline', value: 'baseline' },
                    ]}
                    onChange={(val) => update('alignSelf', val)}
                />
            </div>
        </div>
    );
}
