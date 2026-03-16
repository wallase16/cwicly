import DynamicDataControl from './DynamicDataControl.js';
import { __ } from '@wordpress/i18n';

/**
 * DynamicAttributeWrapper
 * Wraps a control with a DynamicData icon.
 */
export default function DynamicAttributeWrapper({ 
    attribute, 
    attributes, 
    setAttributes, 
    children,
    label 
}) {
    return (
        <div className="cwicly-dynamic-attribute-wrapper" style={{ position: 'relative', marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                {label && <label style={{ fontSize: '11px', fontWeight: '500', textTransform: 'uppercase', color: '#757575' }}>{label}</label>}
                <DynamicDataControl
                    attribute={attribute}
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </div>
            {children}
        </div>
    );
}

export { DynamicAttributeWrapper };
