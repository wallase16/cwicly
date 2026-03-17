import apiFetch from '@wordpress/api-fetch';

export const addGlobalClass = (className, styles = {}) => ({
    type: 'CC_GLOBAL_ADD_CLASS',
    className,
    styles,
});

export const updateGlobalClass = (className, styles) => ({
    type: 'CC_GLOBAL_UPDATE_CLASS',
    className,
    styles,
});

export const removeGlobalClass = (className) => ({
    type: 'CC_GLOBAL_REMOVE_CLASS',
    className,
});

export const updateGlobalClassPseudoStyles = (className, pseudoState, styles) => ({
    type: 'CC_GLOBAL_UPDATE_PSEUDO_STYLES',
    className,
    pseudoState,
    styles,
});

export const updateGlobalVariable = (name, value) => ({
    type: 'CC_GLOBAL_UPDATE_VARIABLE',
    name,
    value,
});

export const setActivePseudoState = (pseudoState) => ({
    type: 'CC_GLOBAL_ACTIVE_PSEUDO_STATE',
    pseudoState,
});

/**
 * Persistence action
 */
export const saveGlobalStyles = () => async (dispatch, getState) => {
    const state = getState();
    const globalStyles = {
        classes: state.classes || [],
        variables: state.variables || [],
        pseudoStates: state.pseudoStates || {},
    };

    try {
        await apiFetch({
            path: '/cwicly/v1/options',
            method: 'POST',
            data: {
                option: 'cwicly_global_styles',
                value: JSON.stringify(globalStyles),
            },
        });
    } catch (error) {
        console.error('Failed to save global styles:', error);
    }
};
