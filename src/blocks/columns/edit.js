import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getBlockID, BackgroundHelper, getCombinedClassName } from '../../utils/index.js';

import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';
import DesignPanel from '../../components/framework/DesignPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { columnsCount, containerLayoutTag, columnsGap, columnsDirection, columnsWrap, classes, classID } = attributes;

    // Auto-generate classID on first insertion
    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, `cc-columns ${classes || ''}`),
    });


    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass: select('cwicly/base').getPseudoClass(),
    }), []);

    const Tag = containerLayoutTag || 'div';

    return (
        <>
            <InspectorControls>
                <CwiclyInspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    name={name}
                />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Columns Settings', 'cwicly')}>
                            <RangeControl
                                label={__('Columns', 'cwicly')}
                                value={columnsCount}
                                onChange={(val) => setAttributes({ columnsCount: val })}
                                min={1}
                                max={12}
                            />
                            <UnitControl
                                label={__('Column Gap', 'cwicly')}
                                value={columnsGap || ''}
                                onChange={(val) => setAttributes({ columnsGap: val })}
                            />
                            <SelectControl
                                label={__('Direction', 'cwicly')}
                                value={columnsDirection || 'row'}
                                options={[
                                    { label: 'Row', value: 'row' },
                                    { label: 'Row Reverse', value: 'row-reverse' },
                                    { label: 'Column', value: 'column' },
                                    { label: 'Column Reverse', value: 'column-reverse' },
                                ]}
                                onChange={(val) => setAttributes({ columnsDirection: val })}
                            />
                            <SelectControl
                                label={__('Wrap', 'cwicly')}
                                value={columnsWrap || 'wrap'}
                                options={[
                                    { label: 'Wrap', value: 'wrap' },
                                    { label: 'Nowrap', value: 'nowrap' },
                                    { label: 'Wrap Reverse', value: 'wrap-reverse' },
                                ]}
                                onChange={(val) => setAttributes({ columnsWrap: val })}
                            />
                            <SelectControl
                                label={__('HTML Tag', 'cwicly')}
                                value={containerLayoutTag}
                                options={[
                                    { label: 'DIV', value: 'div' },
                                    { label: 'SECTION', value: 'section' },
                                    { label: 'HEADER', value: 'header' },
                                    { label: 'FOOTER', value: 'footer' },
                                ]}
                                onChange={(val) => setAttributes({ containerLayoutTag: val })}
                            />
                        </PanelBody>
                    </div>
                )}

                {inspectortab.tab === 'design' && (
                    <DesignPanel
                        attributes={attributes}
                        setAttributes={setAttributes}
                        pseudoClass={pseudoClass}
                    />
                )}

                {inspectortab.tab === 'advanced' && (
                    <AdvancedPanel attributes={attributes} setAttributes={setAttributes} />)}
            </InspectorControls>

            <Tag {...blockProps}>
                <BackgroundHelper attributes={attributes} />
                <InnerBlocks 
                    allowedBlocks={['cwicly/column']}
                    orientation="horizontal"
                />
            </Tag>
        </>
    );
}
