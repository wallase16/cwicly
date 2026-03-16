import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import classnames from 'classnames';
import GlobalStylesPanel from './GlobalStylesPanel.js';
import GlobalClassPicker from './GlobalClassPicker.js';


/**
 * CwiclyInspector
 * Handles the tabbed interface in the sidebar (Primary, Design, Advanced).
 */
export default function CwiclyInspector({ attributes, setAttributes, name, isComponent, isEditingComponent, noDesign, noAdvanced }) {
    const { writeInspectorPosition } = useDispatch('cwicly/base');
    const { inspectortab } = useSelect((select) => ({
        inspectortab: select('cwicly/base').getInspectorPosition(),
    }), []);

    // List of blocks that use the Cwicly tabbed interface
    const cwiclyBlocks = [
        'cwicly/heading',
        'cwicly/column',
        'cwicly/styler',
        'cwicly/paragraph',
        'cwicly/section',
        'cwicly/container',
        'cwicly/accordionheader',
        'cwicly/accordioncontent',
        'cwicly/tab',
        'cwicly/tabcontents',
        'cwicly/tabcontent',
        'cwicly/navitems'
    ];

    useEffect(() => {
        // We no longer force 'design' tab for core blocks, 
        // as they now have dynamic settings in 'primary'.
    }, []);

    const setTab = (tab) => {
        writeInspectorPosition({
            tab,
            panel: ''
        });
    };

    if (name === 'cwicly/innerblocks') return null;
    if (isComponent && !isEditingComponent) return null;

    return (
        <Fragment>
            <div className="cwicly-inspector-header" style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                <GlobalClassPicker 
                    selectedClasses={attributes.globalClasses}
                    onChange={(classes) => setAttributes({ globalClasses: classes })}
                />
            </div>
            <div className="cwicly-inspector-tabs-container" style={{ position: 'sticky', top: 0, zIndex: 15, background: '#fff', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
                <div style={{ display: 'flex', padding: '4px', gap: '8px' }}>
                    <button
                        type="button"
                        className={classnames('cwicly-tab-button', { active: inspectortab.tab === 'primary' })}
                        onClick={() => setTab('primary')}
                    >
                        {__('Primary', 'cwicly')}
                    </button>
                    <button
                        type="button"
                        className={classnames('cwicly-tab-button', { active: inspectortab.tab === 'global' })}
                        onClick={() => setTab('global')}
                    >
                        {__('Global', 'cwicly')}
                    </button>
                    {!noDesign && (
                        <button
                            type="button"
                            className={classnames('cwicly-tab-button', { active: inspectortab.tab === 'design' })}
                            onClick={() => setTab('design')}
                        >
                            {__('Design', 'cwicly')}
                        </button>
                    )}
                    {name !== 'cwicly/styler' && !noAdvanced && (
                        <button
                            type="button"
                            className={classnames('cwicly-tab-button', { active: inspectortab.tab === 'advanced' })}
                            onClick={() => setTab('advanced')}
                        >
                            {__('Advanced', 'cwicly')}
                        </button>
                    )}
                </div>
            </div>
            {inspectortab.tab === 'global' && <GlobalStylesPanel />}
        </Fragment>

    );
}
