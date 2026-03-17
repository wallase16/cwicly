import { __ } from '@wordpress/i18n';
import { SelectControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

/**
 * TransitionControl
 * Cwicly transition settings — maps to `attributes.transition`.
 * Generates: `transition: <property> <duration> <easing>`
 */
export default function TransitionControl({ attributes, setAttributes }) {
    const transition = attributes.transition || {};

    const update = (key, val) => setAttributes({ transition: { ...transition, [key]: val } });

    return (
        <div className="cwicly-transition-control">
            <div style={{ marginBottom: '15px' }}>
                <SelectControl
                    label={__('Property', 'cwicly')}
                    value={transition.property || ''}
                    options={[
                        { label: __('None', 'cwicly'), value: '' },
                        { label: 'All', value: 'all' },
                        { label: 'Background', value: 'background' },
                        { label: 'Background Color', value: 'background-color' },
                        { label: 'Color', value: 'color' },
                        { label: 'Border', value: 'border' },
                        { label: 'Box Shadow', value: 'box-shadow' },
                        { label: 'Opacity', value: 'opacity' },
                        { label: 'Transform', value: 'transform' },
                    ]}
                    onChange={(val) => update('property', val)}
                />
            </div>

            {transition.property && (
                <>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' }}>
                        <UnitControl
                            label={__('Duration', 'cwicly')}
                            value={transition.duration || '0.3s'}
                            onChange={(val) => update('duration', val)}
                        />
                        <SelectControl
                            label={__('Easing', 'cwicly')}
                            value={transition.easing || 'ease'}
                            options={[
                                { label: 'Ease', value: 'ease' },
                                { label: 'Ease In', value: 'ease-in' },
                                { label: 'Ease Out', value: 'ease-out' },
                                { label: 'Ease In Out', value: 'ease-in-out' },
                                { label: 'Linear', value: 'linear' },
                            ]}
                            onChange={(val) => update('easing', val)}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
