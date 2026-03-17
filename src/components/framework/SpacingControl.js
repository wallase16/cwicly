import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import classnames from 'classnames';

/**
 * Map Cwicly previewDeviceType → CSS generator breakpoint key.
 * The store uses 'Desktop', 'Tablet', 'Mobile'; the generator uses 'lg', 'md', 'sm'.
 */
const DEVICE_TO_BP = {
    Desktop: 'lg',
    Tablet: 'md',
    Mobile: 'sm',
};

/**
 * SpacingControl
 * Reconstructs Cwicly's responsive margin/padding control.
 * Stores values under breakpoint keys (lg/md/sm) for style-generator.js compatibility.
 */
export default function SpacingControl({ label, type, attributes, setAttributes, pseudoClass }) {
    const { previewDeviceType } = useSelect((select) => ({
        previewDeviceType: select('cwicly/base').getPreviewDeviceType(),
    }), []);

    const [isLinked, setIsLinked] = useState(true);

    const bp = DEVICE_TO_BP[previewDeviceType] || 'lg';
    const values = attributes[type] || {};
    const currentValues = values[bp] || { top: '', right: '', bottom: '', left: '' };

    const updateValue = (side, value) => {
        const newValues = { ...values };
        if (!newValues[bp]) newValues[bp] = { ...currentValues };

        if (isLinked) {
            newValues[bp] = { top: value, right: value, bottom: value, left: value };
        } else {
            newValues[bp] = { ...newValues[bp], [side]: value };
        }

        setAttributes({ [type]: newValues });
    };

    return (
        <div className="cwicly-spacing-control">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: '600' }}>{label}</span>
                <Button
                    isSmall
                    icon={isLinked ? 'admin-links' : 'editor-unlink'}
                    onClick={() => setIsLinked(!isLinked)}
                    label={isLinked ? __('Unlink Sides', 'cwicly') : __('Link Sides', 'cwicly')}
                />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {['top', 'right', 'bottom', 'left'].map((side) => (
                    <div key={side} className="spacing-input-wrap">
                        <label>{side[0].toUpperCase()}</label>
                        <input
                            type="text"
                            value={currentValues[side] || ''}
                            onChange={(e) => updateValue(side, e.target.value)}
                            placeholder="-"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
