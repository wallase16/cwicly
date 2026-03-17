import { __ } from '@wordpress/i18n';
import { Button, Popover, SelectControl, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { blockMeta } from '@wordpress/icons';

/**
 * DynamicDataSelector
 * UI for linking block attributes to dynamic sources.
 */
export default function DynamicDataSelector({ value, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    
    // Parse current value if it's a dynamic tag
    // Format: {source=field}
    const isDynamic = value?.startsWith('{') && value?.endsWith('}');
    const match = isDynamic ? value.match(/^\{([\w-]+)=([\w-]+)\}$/) : null;
    
    const [source, setSource] = useState(match ? match[1] : 'acf');
    const [field, setField] = useState(match ? match[2] : '');

    const togglePopover = () => setIsOpen(!isOpen);

    const applyDynamicData = () => {
        if (field) {
            onSelect(`{${source}=${field}}`);
        } else {
            onSelect('');
        }
        setIsOpen(false);
    };

    const clearDynamicData = () => {
        onSelect('');
        setIsOpen(false);
        setSource('acf');
        setField('');
    };

    return (
        <div className="cwicly-dynamic-selector-wrapper" style={{ display: 'inline-block', marginLeft: '5px' }}>
            <Button
                icon={blockMeta}
                isSmall
                isPressed={isDynamic}
                onClick={togglePopover}
                label={__('Dynamic Data', 'cwicly')}
            />
            {isOpen && (
                <Popover position="bottom left" onClose={togglePopover}>
                    <div style={{ padding: '15px', width: '250px' }}>
                        <SelectControl
                            label={__('Source', 'cwicly')}
                            value={source}
                            options={[
                                { label: __('ACF Field', 'cwicly'), value: 'acf' },
                                { label: __('Post Meta', 'cwicly'), value: 'meta' },
                                { label: __('Post Title', 'cwicly'), value: 'post_title' },
                                { label: __('Post Content', 'cwicly'), value: 'post_content' },
                                { label: __('Author Name', 'cwicly'), value: 'author_name' },
                            ]}
                            onChange={setSource}
                        />
                        <TextControl
                            label={__('Field / Key', 'cwicly')}
                            value={field}
                            onChange={setField}
                            placeholder={__('e.g. hero_summary', 'cwicly')}
                        />
                        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                            <Button isPrimary onClick={applyDynamicData}>
                                {__('Apply', 'cwicly')}
                            </Button>
                            <Button isDestructive onClick={clearDynamicData}>
                                {__('Clear', 'cwicly')}
                            </Button>
                        </div>
                    </div>
                </Popover>
            )}
        </div>
    );
}
