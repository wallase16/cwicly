import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { classID, classes, label, showArrow, newTab } = attributes;

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass:  select('cwicly/base').getPseudoClass(),
    }), []);

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, classes || ''),
    });

    return (
        <>
            <InspectorControls>
                <CwiclyInspector attributes={attributes} setAttributes={setAttributes} name={name} />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Link Settings', 'cwicly')}>
                            <TextControl
                                label={__('Label', 'cwicly')}
                                value={label}
                                onChange={(val) => setAttributes({ label: val })}
                            />
                            <ToggleControl
                                label={__('Show Arrow (→)', 'cwicly')}
                                checked={showArrow}
                                onChange={(val) => setAttributes({ showArrow: val })}
                            />
                            <ToggleControl
                                label={__('Open in New Tab', 'cwicly')}
                                checked={newTab}
                                onChange={(val) => setAttributes({ newTab: val })}
                            />
                        </PanelBody>
                    </div>
                )}

                {inspectortab.tab === 'design' && (
                    <DesignPanel attributes={attributes} setAttributes={setAttributes} pseudoClass={pseudoClass} />
                )}

                {inspectortab.tab === 'advanced' && (
                    <AdvancedPanel attributes={attributes} setAttributes={setAttributes} />
                )}
            </InspectorControls>

            {/* Editor preview — real href replaced by # */}
            <a
                {...blockProps}
                href="#"
                onClick={(e) => e.preventDefault()}
                rel={newTab ? 'noopener noreferrer' : undefined}
                aria-label={label}
            >
                {label}{showArrow ? ' →' : ''}
            </a>
        </>
    );
}
