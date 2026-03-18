import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name, context }) {
    const { classID, classes, containerTag: Tag, excerptLength } = attributes;
    const postId = context?.['cwicly/postId'];

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Try to get the real excerpt from context
    const [excerpt] = useEntityProp('postType', 'post', 'excerpt', postId);
    const rawExcerpt = excerpt?.rendered || excerpt || '';
    const cleanExcerpt = rawExcerpt.replace(/<[^>]+>/g, '');
    const displayExcerpt = cleanExcerpt
        ? cleanExcerpt.substring(0, excerptLength * 5) + (cleanExcerpt.length > excerptLength * 5 ? '…' : '')
        : __('Post excerpt will appear here…', 'cwicly');

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
                        <PanelBody title={__('Excerpt Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Container Tag', 'cwicly')}
                                value={Tag}
                                options={['p','div','span'].map((t) => ({ label: t.toUpperCase(), value: t }))}
                                onChange={(val) => setAttributes({ containerTag: val })}
                            />
                            <RangeControl
                                label={__('Preview Length (words)', 'cwicly')}
                                value={excerptLength}
                                min={10}
                                max={200}
                                onChange={(val) => setAttributes({ excerptLength: val })}
                                help={__('Controls editor preview only. Actual length set by WordPress.', 'cwicly')}
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

            <Tag {...blockProps}>{displayExcerpt}</Tag>
        </>
    );
}
