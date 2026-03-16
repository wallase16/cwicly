import { useState } from '@wordpress/element';
import { Popover, Button, SelectControl, TextControl, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

/**
 * Database Icon Component (Exported for reuse)
 */
export const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
        <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v-3.48c1.7.98 4.67 1.48 8 1.48s6.3-.5 8-1.48v3.48c0 2.48-4.48 4.5-10 4.5zM2 9.52v2.48c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5V9.52c-1.7.98-4.67 1.48-8 1.48s-6.3-.5-8-1.48z"></path>
    </svg>
);

/**
 * DynamicDataControl
 * Handles selecting dynamic data sources for block attributes.
 */
export default function DynamicDataControl({ attribute, attributes, setAttributes, label }) {
    const [isOpen, setIsOpen] = useState(false);
    const [source, setSource] = useState('');
    const [field, setField] = useState('');

    const togglePopover = () => setIsOpen(!isOpen);

    const applyBinding = () => {
        if (!source || !field) return;
        
        const tag = `{${source}=${field}}`;
        setAttributes({ [attribute]: tag });
        setIsOpen(false);
    };

    const clearBinding = () => {
        setAttributes({ [attribute]: '' });
        setIsOpen(false);
    };

    const currentValue = attributes[attribute] || '';
    const isDynamic = currentValue.startsWith('{') && currentValue.endsWith('}');

    return (
        <div className="cwicly-dynamic-data-control" style={{ display: 'inline-block', marginLeft: '5px' }}>
            <Button
                isSmall
                icon={<DatabaseIcon />}
                onClick={togglePopover}
                className={isDynamic ? 'is-active' : ''}
                label={__('Dynamic Data', 'cwicly')}
                style={{ color: isDynamic ? '#2271b1' : 'inherit', padding: '0', minWidth: '20px' }}
            />
            {isOpen && (
                <Popover position="bottom left" onClose={() => setIsOpen(false)}>
                    <div style={{ padding: '15px', width: '250px' }}>
                        <h4 style={{ margin: '0 0 10px 0', fontSize: '13px' }}>{__('Dynamic Data Source', 'cwicly')}</h4>
                        <SelectControl
                            label={__('Source', 'cwicly')}
                            value={source}
                            options={[
                                { label: __('Select Source', 'cwicly'), value: '' },
                                { label: __('Post Meta', 'cwicly'), value: 'meta' },
                                { label: __('ACF Field', 'cwicly'), value: 'acf' },
                                { label: __('Site Info', 'cwicly'), value: 'site' },
                                { label: __('Author Info', 'cwicly'), value: 'author' },
                            ]}
                            onChange={setSource}
                        />
                        {source && (
                            <TextControl
                                label={__('Field Key', 'cwicly')}
                                value={field}
                                onChange={setField}
                                placeholder={source === 'acf' ? __('e.g. hero_image', 'cwicly') : __('e.g. my_meta_key', 'cwicly')}
                            />
                        )}
                        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                            <Button isPrimary onClick={applyBinding} disabled={!source || !field}>
                                {__('Apply', 'cwicly')}
                            </Button>
                            {isDynamic && (
                                <Button isDestructive onClick={clearBinding}>
                                {__('Clear', 'cwicly')}
                                </Button>
                            )}
                        </div>
                        {isDynamic && (
                            <div style={{ marginTop: '10px', fontSize: '11px', color: '#666' }}>
                                <strong>{__('Current:', 'cwicly')}</strong> {currentValue}
                            </div>
                        )}
                    </div>
                </Popover>
            )}
        </div>
    );
}
