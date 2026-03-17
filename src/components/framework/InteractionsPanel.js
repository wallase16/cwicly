import { __ } from '@wordpress/i18n';
import { Button, PanelBody, SelectControl, TextControl } from '@wordpress/components';

/**
 * InteractionsPanel
 * Reconstructs Cwicly's interactions UI for click, hover, and scroll events.
 */
export default function InteractionsPanel({ attributes, setAttributes }) {
    const interactions = attributes.interactions || { click: [], dbclick: [], scrollinview: [] };

    const addInteraction = (type) => {
        const newInteractions = { ...interactions };
        newInteractions[type] = [...newInteractions[type], { 
            action: 'none', 
            targets: [{ target: 'current', data: '' }],
            conditions: [],
            value: '' 
        }];
        setAttributes({ interactions: newInteractions });
    };

    const updateInteraction = (type, index, key, value) => {
        const newInteractions = { ...interactions };
        newInteractions[type][index][key] = value;
        setAttributes({ interactions: newInteractions });
    };

    const removeInteraction = (type, index) => {
        const newInteractions = { ...interactions };
        newInteractions[type].splice(index, 1);
        setAttributes({ interactions: newInteractions });
    };

    const renderInteractionList = (type, label) => (
        <div className="interaction-group" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontWeight: '600', fontSize: '11px', textTransform: 'uppercase' }}>{label}</span>
                <Button isSmall isSecondary onClick={() => addInteraction(type)}>{__('Add', 'cwicly')}</Button>
            </div>
            {interactions[type].map((item, index) => (
                <div key={index} className="interaction-item" style={{ padding: '12px', background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '4px', marginBottom: '12px' }}>
                    <SelectControl
                        label={__('Action', 'cwicly')}
                        value={item.action}
                        options={[
                            { label: __('None', 'cwicly'), value: 'none' },
                            { label: __('Add Class', 'cwicly'), value: 'addClass' },
                            { label: __('Remove Class', 'cwicly'), value: 'removeClass' },
                            { label: __('Toggle Class', 'cwicly'), value: 'toggleClass' },
                            { label: __('Show/Hide', 'cwicly'), value: 'visibility' },
                        ]}
                        onChange={(val) => updateInteraction(type, index, 'action', val)}
                    />
                    
                    {(item.action === 'addClass' || item.action === 'removeClass' || item.action === 'toggleClass') && (
                        <TextControl
                            label={__('Class Name', 'cwicly')}
                            value={item.value}
                            onChange={(val) => updateInteraction(type, index, 'value', val)}
                        />
                    )}

                    <div style={{ marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>{__('TARGETS', 'cwicly')}</span>
                        <SelectControl
                            value={item.targets?.[0]?.target || 'current'}
                            options={[
                                { label: __('Current Element', 'cwicly'), value: 'current' },
                                { label: __('Parent Element', 'cwicly'), value: 'parent' },
                                { label: __('Custom Selector', 'cwicly'), value: 'selector' },
                            ]}
                            onChange={(val) => {
                                const newTargets = [{ target: val, data: item.targets?.[0]?.data || '' }];
                                updateInteraction(type, index, 'targets', newTargets);
                            }}
                        />
                        {item.targets?.[0]?.target === 'selector' && (
                            <TextControl
                                placeholder={__('.target-selector', 'cwicly')}
                                value={item.targets?.[0]?.data || ''}
                                onChange={(val) => {
                                    const newTargets = [{ target: 'selector', data: val }];
                                    updateInteraction(type, index, 'targets', newTargets);
                                }}
                            />
                        )}
                    </div>

                    <Button 
                        isDestructive 
                        isLink 
                        isSmall 
                        onClick={() => removeInteraction(type, index)}
                        style={{ marginTop: '10px' }}
                    >
                        {__('Remove Action', 'cwicly')}
                    </Button>
                </div>
            ))}
        </div>
    );

    return (
        <div className="cwicly-interactions-panel">
            <PanelBody title={__('Click Interactions', 'cwicly')} initialOpen={true}>
                {renderInteractionList('click', __('Click Events', 'cwicly'))}
            </PanelBody>
            <PanelBody title={__('Scroll Interactions', 'cwicly')} initialOpen={false}>
                {renderInteractionList('scrollinview', __('On Scroll in View', 'cwicly'))}
            </PanelBody>
        </div>
    );
}
