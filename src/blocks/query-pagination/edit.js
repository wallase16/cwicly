import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const { classID, classes, paginationType, prevLabel, nextLabel, midSize } = attributes;

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
                        <PanelBody title={__('Pagination Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Type', 'cwicly')}
                                value={paginationType}
                                options={[
                                    { label: __('Next / Previous', 'cwicly'), value: 'nextprev' },
                                    { label: __('Numbered', 'cwicly'),        value: 'numbered' },
                                ]}
                                onChange={(val) => setAttributes({ paginationType: val })}
                            />
                            {paginationType === 'nextprev' && (
                                <>
                                    <TextControl
                                        label={__('Previous Label', 'cwicly')}
                                        value={prevLabel}
                                        onChange={(val) => setAttributes({ prevLabel: val })}
                                    />
                                    <TextControl
                                        label={__('Next Label', 'cwicly')}
                                        value={nextLabel}
                                        onChange={(val) => setAttributes({ nextLabel: val })}
                                    />
                                </>
                            )}
                            {paginationType === 'numbered' && (
                                <RangeControl
                                    label={__('Mid Size (pages on each side of current)', 'cwicly')}
                                    value={midSize}
                                    min={1}
                                    max={5}
                                    onChange={(val) => setAttributes({ midSize: val })}
                                />
                            )}
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

            {/* Editor preview */}
            <nav {...blockProps} aria-label={__('Pagination', 'cwicly')} style={{ padding: '8px', opacity: 0.6 }}>
                {paginationType === 'nextprev' ? (
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <span style={{ padding: '6px 12px', border: '1px solid #ccc', borderRadius: '4px' }}>{prevLabel}</span>
                        <span style={{ padding: '6px 12px', border: '1px solid #ccc', borderRadius: '4px' }}>{nextLabel}</span>
                    </div>
                ) : (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {[1, 2, 3, '…', 10].map((n, i) => (
                            <span key={i} style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: '4px', background: n === 1 ? '#000' : '', color: n === 1 ? '#fff' : '' }}>{n}</span>
                        ))}
                    </div>
                )}
                <p style={{ fontSize: '10px', color: '#999', marginTop: '4px' }}>
                    {__('(Rendered server-side)', 'cwicly')}
                </p>
            </nav>
        </>
    );
}
