import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import GlobalClassPicker from './GlobalClassPicker.js';
import SizeControl from './SizeControl.js';
import TransitionControl from './TransitionControl.js';
import FlexControl from './FlexControl.js';
import GridControl from './GridControl.js';

/**
 * DesignPanel
 * Main container for Cwicly's "Design" tab controls.
 * Flex and Grid panels appear contextually based on the `display` value in SizeControl.
 */
export default function DesignPanel({ attributes, setAttributes, pseudoClass }) {
    const display = attributes.layout?.display || '';
    const showFlex = display === 'flex' || display === 'inline-flex';
    const showGrid = display === 'grid' || display === 'inline-grid';

    return (
        <div className="cwicly-design-panel">
            <GlobalClassPicker attributes={attributes} setAttributes={setAttributes} />

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
                <TypographyControl attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>

            <PanelBody title={__('Background', 'cwicly')} initialOpen={false}>
                <BackgroundControl attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>

            <PanelBody title={__('Border', 'cwicly')} initialOpen={false}>
                <BorderControl attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>

            <PanelBody title={__('Shadow', 'cwicly')} initialOpen={false}>
                <ShadowControl attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>

            <PanelBody title={__('Size & Layout', 'cwicly')} initialOpen={false}>
                <SizeControl attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>

            {showFlex && (
                <PanelBody title={__('Flex', 'cwicly')} initialOpen={true}>
                    <FlexControl attributes={attributes} setAttributes={setAttributes} />
                </PanelBody>
            )}

            {showGrid && (
                <PanelBody title={__('Grid', 'cwicly')} initialOpen={true}>
                    <GridControl attributes={attributes} setAttributes={setAttributes} />
                </PanelBody>
            )}

            <PanelBody title={__('Transition', 'cwicly')} initialOpen={false}>
                <TransitionControl attributes={attributes} setAttributes={setAttributes} />
            </PanelBody>
        </div>
    );
}
