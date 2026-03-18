import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName } from '../../utils/index.js';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { classID, classes, paginationType, prevLabel, nextLabel, midSize } = attributes;

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const blockProps = useBlockProps({
        className: getCombinedClassName(attributes, classes || ''),
    });

    return (
        <>
            <InspectorControls>
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
