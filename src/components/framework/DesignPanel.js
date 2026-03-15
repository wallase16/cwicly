import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import SpacingControl from './SpacingControl.js';

/**
 * DesignPanel
 * The main container for Cwicly's "Design" tab controls.
 */
export default function DesignPanel({ attributes, setAttributes, pseudoClass }) {
    return (
        <div className="cwicly-design-panel">
            <PanelBody title={__('Spacing', 'cwicly')} initialOpen={true}>
                <SpacingControl
                    label={__('Padding', 'cwicly')}
                    type="padding"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    pseudoClass={pseudoClass}
                />
                <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #eee' }} />
                <SpacingControl
                    label={__('Margin', 'cwicly')}
                    type="margin"
                    attributes={attributes}
                    setAttributes={setAttributes}
                    pseudoClass={pseudoClass}
                />
            </PanelBody>

            <PanelBody title={__('Typography', 'cwicly')} initialOpen={false}>
                <p style={{ fontSize: '12px', color: '#666' }}>
                    {__('Typography controls will be extracted next...', 'cwicly')}
                </p>
            </PanelBody>

            <PanelBody title={__('Background', 'cwicly')} initialOpen={false}>
                <p style={{ fontSize: '12px', color: '#666' }}>
                    {__('Background controls will be extracted next...', 'cwicly')}
                </p>
            </PanelBody>
        </div>
    );
}
