import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import GlobalClassPicker from './GlobalClassPicker.js';

/**
 * DesignPanel
 * The main container for Cwicly's "Design" tab controls.
 */
export default function DesignPanel({ attributes, setAttributes, pseudoClass }) {
    return (
        <div className="cwicly-design-panel">
            <GlobalClassPicker
                attributes={attributes}
                setAttributes={setAttributes}
            />
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
                <TypographyControl
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__('Background', 'cwicly')} initialOpen={false}>
                <BackgroundControl
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__('Border', 'cwicly')} initialOpen={false}>
                <BorderControl
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title={__('Shadow', 'cwicly')} initialOpen={false}>
                <ShadowControl
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            </PanelBody>
        </div>
    );
}
