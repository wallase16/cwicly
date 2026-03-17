import { __ } from '@wordpress/i18n';
import { Button, FormTokenField, PanelBody } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

/**
 * GlobalClassPicker
 * UI for selecting and attaching global classes to blocks.
 */
export default function GlobalClassPicker({ selectedClasses, onChange }) {
    const globalClass = selectedClasses || [];
    
    // Fetch global classes from the cwicly_global_classes option
    // In a real scenario, this might be synced via a custom store or pre-loaded.
    // For now, we'll simulate fetching from site settings or a similar rest source.
    const [availableClasses, setAvailableClasses] = useState({});

    useEffect(() => {
        // Fetch global classes from REST API
        wp.apiFetch({ path: '/wp/v2/settings' }).then(settings => {
            const globals = settings.cwicly_global_classes;
            if (globals) {
                try {
                    setAvailableClasses(JSON.parse(globals));
                } catch (e) {
                    console.error('Cwicly Rebuild: Failed to parse global classes', e);
                }
            }
        });
    }, []);

    const classOptions = Object.keys(availableClasses).map(id => ({
        id,
        name: availableClasses[id].name,
        classID: availableClasses[id].attributes?.classID || id
    }));

    const tokens = globalClass.map(id => {
        const found = classOptions.find(opt => opt.id === id);
        return found ? found.name : id;
    });

    const onTokenChange = (newTokens) => {
        const newClassIDs = newTokens.map(token => {
            const found = classOptions.find(opt => opt.name === token);
            return found ? found.id : token;
        });
        onChange(newClassIDs);
    };

    const suggestions = classOptions.map(opt => opt.name);

    return (
        <div className="cwicly-global-class-picker" style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: '600', fontSize: '11px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                {__('Global Classes', 'cwicly')}
            </span>
            <FormTokenField
                value={tokens}
                suggestions={suggestions}
                onChange={onTokenChange}
                placeholder={__('Add global class...', 'cwicly')}
            />
        </div>
    );
}
