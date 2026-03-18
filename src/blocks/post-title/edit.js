import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name, context }) {
    const { classID, classes, headingTag: Tag, isLink } = attributes;
    const postId   = context['cwicly/postId'];

    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Try to get the actual post title from context if available
    const [title] = useEntityProp('postType', 'post', 'title', postId);
    const displayTitle = (title?.rendered || title) ?? __('Post Title Placeholder', 'cwicly');

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
                        <PanelBody title={__('Post Title Settings', 'cwicly')}>
                            <SelectControl
                                label={__('Heading Tag', 'cwicly')}
                                value={Tag}
                                options={['h1','h2','h3','h4','h5','h6','p'].map((t) => ({ label: t.toUpperCase(), value: t }))}
                                onChange={(val) => setAttributes({ headingTag: val })}
                            />
                            <ToggleControl
                                label={__('Link to Post', 'cwicly')}
                                checked={isLink}
                                onChange={(val) => setAttributes({ isLink: val })}
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

            <Tag {...blockProps}>
                {isLink ? (
                    <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {displayTitle}
                    </a>
                ) : (
                    displayTitle
                )}
            </Tag>
        </>
    );
}
