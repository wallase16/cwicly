/**
 * Cwicly Base Store
 */
import { combineReducers, registerStore } from '@wordpress/data';
import baseReducer from './reducer.js';
import * as baseActions from './actions.js';
import * as baseSelectors from './selectors.js';
import { reducer as globalReducer, actions as globalActions, selectors as globalSelectors, resolvers as globalResolvers } from '../global/index.js';

// Combine reducers – keeping base at top level for compatibility
// but adding global as a dedicated slice might be safer.
// However, existing blocks might expect flat state.
// Let's use a custom root reducer to merge them.

const rootReducer = (state, action) => {
    // If we want to keep it flat:
    const nextBaseState = baseReducer(state, action);
    const nextGlobalState = globalReducer(state, action);
    
    // We should probably partition the state if we want true modularity, 
    // but the user said "Merge global slice".
    // For now, let's keep it simple and just run both across the same state.
    // This allows the global reducer to manage its specific keys.
    
    // Actually, a better way for @wordpress/data is separate slices if we use combineReducers,
    // but that changes state structure (state.global.classes).
    // The user's selectors expect state.classes (based on base selectors).
    
    return {
        ...nextBaseState,
        ...nextGlobalState
    };
};

registerStore('cwicly/base', {
    reducer: rootReducer,
    actions: { ...baseActions, ...globalActions },
    selectors: { ...baseSelectors, ...globalSelectors },
    resolvers: { ...globalResolvers },
});


