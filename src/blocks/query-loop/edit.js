import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, RangeControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEntityRecords } from '@wordpress/core-data';
import { useEffect } from '@wordpress/element';
import { getCombinedClassName, getBlockID } from '../../utils/index.js';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';
import AdvancedPanel from '../../components/framework/AdvancedPanel.js';

// The inner blocks template: always starts with a query-template
const QUERY_TEMPLATE = [
    ['cwicly/query-template', {}],
];

const ALLOWED_BLOCKS = [
    'cwicly/query-template',
    'cwicly/query-no-results',
    'cwicly/query-pagination',
];

export default function Edit({ attributes, setAttributes, clientId, name }) {
    const {
        classID, classes,
        postType, postsPerPage, orderBy, order, containerTag,
    } = attributes;

    // Auto-generate classID
    useEffect(() => {
        if (!classID) {
            setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Get registered post types for the dropdown
    const postTypes = useSelect((select) => {
        const types = select('core').getPostTypes({ per_page: -1 });
        if (!types) return [{ label: __('Post', 'cwicly'), value: 'post' }];
        return types
            .filter((t) => t.viewable && t.slug !== 'attachment')
            .map((t) => ({ label: t.name, value: t.slug }));
    }, []);

    // Live query preview in the editor
    const { records: posts, isResolving } = useEntityRecords('postType', postType, {
        per_page: postsPerPage,
        orderby: orderBy,
        order,
        _embed: true,
    });

    const { inspectortab, pseudoClass } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
        pseudoClass:  select('cwicly/base').getPseudoClass(),
    }), []);

    const blockProps = useBlockProps({
        id: getBlockID(attributes, clientId),
        className: getCombinedClassName(attributes, classes || ''),
        'data-cwicly-query': 'true',
    });

    return (
        <>
            <InspectorControls>
                <CwiclyInspector attributes={attributes} setAttributes={setAttributes} name={name} />

                {inspectortab.tab === 'primary' && (
                    <div className="cwicly-primary-tab">
                        <PanelBody title={__('Query Settings', 'cwicly')} initialOpen={true}>
                            <SelectControl
                                label={__('Post Type', 'cwicly')}
                                value={postType}
                                options={postTypes}
                                onChange={(val) => setAttributes({ postType: val })}
                            />
                            <RangeControl
                                label={__('Posts Per Page', 'cwicly')}
                                value={postsPerPage}
                                min={1}
                                max={100}
                                onChange={(val) => setAttributes({ postsPerPage: val })}
                            />
                            <SelectControl
                                label={__('Order By', 'cwicly')}
                                value={orderBy}
                                options={[
                                    { label: __('Date', 'cwicly'),        value: 'date' },
                                    { label: __('Title', 'cwicly'),       value: 'title' },
                                    { label: __('Menu Order', 'cwicly'), value: 'menu_order' },
                                    { label: __('Random', 'cwicly'),     value: 'rand' },
                                    { label: __('Modified', 'cwicly'),   value: 'modified' },
                                ]}
                                onChange={(val) => setAttributes({ orderBy: val })}
                            />
                            <SelectControl
                                label={__('Order', 'cwicly')}
                                value={order}
                                options={[
                                    { label: __('Descending', 'cwicly'), value: 'DESC' },
                                    { label: __('Ascending', 'cwicly'),  value: 'ASC' },
                                ]}
                                onChange={(val) => setAttributes({ order: val })}
                            />
                            <ToggleControl
                                label={__('Enable Pagination', 'cwicly')}
                                checked={attributes.paged}
                                onChange={(val) => setAttributes({ paged: val })}
                            />
                            <SelectControl
                                label={__('Container Tag', 'cwicly')}
                                value={containerTag}
                                options={[
                                    { label: 'DIV',     value: 'div' },
                                    { label: 'SECTION', value: 'section' },
                                    { label: 'UL',      value: 'ul' },
                                    { label: 'OL',      value: 'ol' },
                                ]}
                                onChange={(val) => setAttributes({ containerTag: val })}
                            />
                        </PanelBody>

                        {/* Editor preview status */}
                        <PanelBody title={__('Preview', 'cwicly')} initialOpen={false}>
                            <p style={{ fontSize: '11px', color: '#666' }}>
                                {isResolving
                                    ? __('Loading preview…', 'cwicly')
                                    : posts
                                    ? `${posts.length} ${__('posts loaded for preview', 'cwicly')}`
                                    : __('No posts found', 'cwicly')
                                }
                            </p>
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

            <div {...blockProps}>
                {isResolving && (
                    <p style={{ padding: '20px', textAlign: 'center', color: '#999' }}>
                        {__('Loading query…', 'cwicly')}
                    </p>
                )}
                <InnerBlocks
                    template={QUERY_TEMPLATE}
                    allowedBlocks={ALLOWED_BLOCKS}
                />
            </div>
        </>
    );
}
