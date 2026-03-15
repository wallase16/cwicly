import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PanelBody, Popover, Button } from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import classnames from 'classnames';

/**
 * SpacingControl
 * Reconstructs Cwicly's responsive margin/padding control.
 */
export default function SpacingControl({ label, type, attributes, setAttributes, pseudoClass }) {
    const { previewDeviceType } = useSelect((select) => ({
        previewDeviceType: select('cwicly/base').getPreviewDeviceType(),
    }), []);

    const [isLinked, setIsLinked] = useState(true);

    const values = attributes[type] || {};
    const currentValues = values[previewDeviceType] || values.Desktop || { top: '', right: '', bottom: '', left: '' };

    const updateValue = (side, value) => {
        const newValues = { ...values };
        if (!newValues[previewDeviceType]) newValues[previewDeviceType] = { ...currentValues };

        if (isLinked) {
            newValues[previewDeviceType] = {
                top: value,
                right: value,
                bottom: value,
                left: value,
            };
        } else {
            newValues[previewDeviceType][side] = value;
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
                <div className="spacing-input-wrap">
                    <label>T</label>
                    <input
                        type="text"
                        value={currentValues.top}
                        onChange={(e) => updateValue('top', e.target.value)}
                        placeholder="-"
                    />
                </div>
                <div className="spacing-input-wrap">
                    <label>R</label>
                    <input
                        type="text"
                        value={currentValues.right}
                        onChange={(e) => updateValue('right', e.target.value)}
                        placeholder="-"
                    />
                </div>
                <div className="spacing-input-wrap">
                    <label>B</label>
                    <input
                        type="text"
                        value={currentValues.bottom}
                        onChange={(e) => updateValue('bottom', e.target.value)}
                        placeholder="-"
                    />
                </div>
                <div className="spacing-input-wrap">
                    <label>L</label>
                    <input
                        type="text"
                        value={currentValues.left}
                        onChange={(e) => updateValue('left', e.target.value)}
                        placeholder="-"
                    />
                </div>
            </div>
            {/* Tailwind toggle and pseudo-class support can be added here */}
        </div>
    );
}
