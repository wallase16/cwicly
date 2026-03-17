/**
 * Cwicly Global Store Reducer
 */

const initialState = {
    classes: {},
    variables: {},
    activePseudoState: '',
    // Reusable pseudo-states configuration
    pseudoStates: [
        { id: 'hover', label: 'Hover' },
        { id: 'focus', label: 'Focus' },
        { id: 'active', label: 'Active' },
        { id: 'before', label: 'Before' },
        { id: 'after', label: 'After' }
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CC_GLOBAL_SET_DATA':
            return {
                ...state,
                ...action.data
            };
        case 'CC_GLOBAL_ADD_CLASS':
            return {
                ...state,
                classes: {
                    ...state.classes,
                    [action.className]: {
                        styles: action.styles || {},
                        pseudoStates: action.pseudoStates || {},
                        id: action.id || action.className
                    }
                }
            };
        case 'CC_GLOBAL_UPDATE_CLASS':
            return {
                ...state,
                classes: {
                    ...state.classes,
                    [action.className]: {
                        ...(state.classes[action.className] || {}),
                        styles: action.styles
                    }
                }
            };
        case 'CC_GLOBAL_UPDATE_PSEUDO_STYLES':
            const currentClass = state.classes[action.className] || { styles: {}, pseudoStates: {} };
            return {
                ...state,
                classes: {
                    ...state.classes,
                    [action.className]: {
                        ...currentClass,
                        pseudoStates: {
                            ...(currentClass.pseudoStates || {}),
                            [action.pseudoState]: action.styles
                        }
                    }
                }
            };
        case 'CC_GLOBAL_REMOVE_CLASS':
            const newClasses = { ...state.classes };
            delete newClasses[action.className];
            return {
                ...state,
                classes: newClasses
            };
        case 'CC_GLOBAL_UPDATE_VARIABLE':
            return {
                ...state,
                variables: {
                    ...state.variables,
                    [action.name]: action.value
                }
            };
        case 'CC_GLOBAL_ACTIVE_PSEUDO_STATE':
            return {
                ...state,
                activePseudoState: action.pseudoState
            };
        default:
            return state;
    }
}
