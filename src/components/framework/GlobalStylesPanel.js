import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { 
    PanelBody, 
    TextControl, 
    Button, 
    PanelRow, 
    DropdownMenu,
    MenuGroup,
    MenuItemsChoice,
    BaseControl
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import classnames from 'classnames';

/**
 * GlobalStylesPanel
 * Provides UI for managing global classes, variables, and pseudo-states.
 */
export default function GlobalStylesPanel() {
    const { 
        globalClasses, 
        globalVariables, 
        activePseudoState, 
        pseudoStates 
    } = useSelect((select) => ({
        globalClasses: select('cwicly/base').getGlobalClasses(),
        globalVariables: select('cwicly/base').getGlobalVariables(),
        activePseudoState: select('cwicly/base').getActivePseudoState(),
        pseudoStates: select('cwicly/base').getPseudoStates(),
    }), []);

    const { 
        addGlobalClass, 
        updateGlobalClass,
        updateGlobalClassPseudoStyles,
        updateGlobalVariable, 
        setActivePseudoState,
        removeGlobalClass,
        saveGlobalStyles 
    } = useDispatch('cwicly/base');


    const [activeTab, setActiveTab] = useState('classes');
    const [selectedClassName, setSelectedClassName] = useState(null);
    const [newClassName, setNewClassName] = useState('');
    const [newVarName, setNewVarName] = useState('');
    const [newVarValue, setNewVarValue] = useState('');

    const activeClass = selectedClassName ? globalClasses[selectedClassName] : null;

    const handleAddClass = () => {
        if (!newClassName) return;
        const formattedName = newClassName.startsWith('.') ? newClassName : `.${newClassName}`;
        addGlobalClass(formattedName, {});
        setNewClassName('');
        saveGlobalStyles();
    };

    const handleUpdateStyle = (prop, value) => {
        if (!selectedClassName) return;
        
        if (activePseudoState) {
            const currentPseudoStyles = (activeClass.pseudoStates && activeClass.pseudoStates[activePseudoState]) || {};
            updateGlobalClassPseudoStyles(selectedClassName, activePseudoState, {
                ...currentPseudoStyles,
                [prop]: value
            });
        } else {
            updateGlobalClass(selectedClassName, {
                ...(activeClass.styles || {}),
                [prop]: value
            });
        }
        saveGlobalStyles();
    };


    const handleAddVariable = () => {
        if (!newVarName || !newVarValue) return;
        const formattedName = newVarName.startsWith('--') ? newVarName : `--${newVarName}`;
        updateGlobalVariable(formattedName, newVarValue);
        setNewVarName('');
        setNewVarValue('');
        saveGlobalStyles();
    };


    return (
        <div className="cwicly-global-styles-panel">
            <div className="panel-header" style={{ padding: '10px', background: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
                <h3 style={{ margin: 0, fontSize: '13px' }}>{__('Global Styles', 'cwicly')}</h3>
            </div>
            
            <div className="panel-tabs" style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                <Button 
                    isTertiary 
                    className={classnames({ 'is-active': activeTab === 'classes' })}
                    onClick={() => setActiveTab('classes')}
                >
                    {__('Classes', 'cwicly')}
                </Button>
                <Button 
                    isTertiary 
                    className={classnames({ 'is-active': activeTab === 'variables' })}
                    onClick={() => setActiveTab('variables')}
                >
                    {__('Variables', 'cwicly')}
                </Button>
            </div>

            <div className="panel-content" style={{ padding: '10px' }}>
                {activeTab === 'classes' && (
                    <div className="classes-tab">
                        <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                            <TextControl
                                value={newClassName}
                                onChange={setNewClassName}
                                placeholder={__('Enter class name...', 'cwicly')}
                                hideLabelFromVision
                            />
                            <Button isPrimary onClick={handleAddClass}>+</Button>
                        </div>

                        <div className="global-classes-list">
                            {Object.keys(globalClasses).map((name) => (
                                <div 
                                    key={name} 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center', 
                                        padding: '5px', 
                                        borderBottom: '1px solid #eee',
                                        background: selectedClassName === name ? '#e1f5fe' : 'transparent',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setSelectedClassName(selectedClassName === name ? null : name)}
                                >
                                    <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{name}</span>
                                    <Button 
                                        isDestructive 
                                        isSmall 
                                        icon="no-alt" 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeGlobalClass(name);
                                            if (selectedClassName === name) setSelectedClassName(null);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>

                        {selectedClassName && (
                            <div className="class-editor" style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <h4 style={{ margin: 0, fontSize: '12px' }}>{__('Editing:', 'cwicly')} {selectedClassName}</h4>
                                    <Button isSmall isTertiary onClick={() => setSelectedClassName(null)}>{__('Close', 'cwicly')}</Button>
                                </div>

                                <div className="pseudo-state-manager" style={{ marginBottom: '15px' }}>
                                    <BaseControl label={__('Active Pseudo-State', 'cwicly')}>
                                        <select 
                                            value={activePseudoState} 
                                            onChange={(e) => setActivePseudoState(e.target.value)}
                                            style={{ width: '100%', padding: '5px' }}
                                        >
                                            <option value="">{__('Normal', 'cwicly')}</option>
                                            {pseudoStates.map((state) => (
                                                <option key={state.id} value={state.id}>{state.label}</option>
                                            ))}
                                        </select>
                                    </BaseControl>
                                </div>

                                <div className="style-controls">
                                    <TextControl
                                        label={__('Color', 'cwicly')}
                                        value={(activePseudoState ? (activeClass.pseudoStates?.[activePseudoState]?.color) : activeClass.styles?.color) || ''}
                                        onChange={(val) => handleUpdateStyle('color', val)}
                                    />
                                    <TextControl
                                        label={__('Background Color', 'cwicly')}
                                        value={(activePseudoState ? (activeClass.pseudoStates?.[activePseudoState]?.['background-color']) : activeClass.styles?.['background-color']) || ''}
                                        onChange={(val) => handleUpdateStyle('background-color', val)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'variables' && (
                    <div className="variables-tab">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '5px', marginBottom: '15px' }}>
                            <TextControl
                                value={newVarName}
                                onChange={setNewVarName}
                                placeholder="--name"
                                hideLabelFromVision
                            />
                            <TextControl
                                value={newVarValue}
                                onChange={setNewVarValue}
                                placeholder="#000"
                                hideLabelFromVision
                            />
                            <Button isPrimary onClick={handleAddVariable}>+</Button>
                        </div>

                        <div className="global-variables-list">
                            {Object.entries(globalVariables).map(([name, value]) => (
                                <div key={name} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', padding: '5px', borderBottom: '1px solid #eee' }}>
                                    <span style={{ fontSize: '11px', fontFamily: 'monospace' }}>{name}</span>
                                    <TextControl
                                        value={value}
                                        onChange={(newVal) => {
                                            updateGlobalVariable(name, newVal);
                                            saveGlobalStyles();
                                        }}
                                        hideLabelFromVision
                                    />
                                    <Button 
                                        isSmall 
                                        icon="no-alt" 
                                        onClick={() => {
                                            updateGlobalVariable(name, null);
                                            saveGlobalStyles();
                                        }} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
