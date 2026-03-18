import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name, context }) {
    const { classID, classes, containerTag: Tag, dateType } = attributes;
    const postId = context?.['cwicly/postId'];

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Get publish or modified date from entity
    const [publishDate] = useEntityProp('postType', 'post', 'date', postId);
    const [modifiedDate] = useEntityProp('postType', 'post', 'modified', postId);
    const rawDate = dateType === 'post_modified' ? modifiedDate : publishDate;
    const displayDate = rawDate
        ? new Date(rawDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        : __('January 1, 2025', 'cwicly');

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
                        <PanelBody title={__('Date Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Date Type', 'cwicly')}
                                value={dateType}
                                options={[
                                    { label: __('Published Date', 'cwicly'), value: 'post_date'     },
                                    { label: __('Modified Date', 'cwicly'),  value: 'post_modified' },
                                ]}
                                onChange={(val) => setAttributes({ dateType: val, dateFormat: val })}
                            />
                            <SelectControl
                                label={__('Container Tag', 'cwicly')}
                                value={Tag}
                                options={['time','span','p','div'].map((t) => ({ label: t.toUpperCase(), value: t }))}
                                onChange={(val) => setAttributes({ containerTag: val })}
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

            <Tag {...blockProps} dateTime={rawDate || undefined}>{displayDate}</Tag>
        </>
    );
}
