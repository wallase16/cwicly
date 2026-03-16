/**
 * Cwicly Global Store Selectors
 */

export const getGlobalClasses = (state) => state.classes || {};

export const getClassByName = (state, className) => (state.classes || {})[className];

export const getGlobalVariables = (state) => state.variables || {};

export const getActivePseudoState = (state) => state.activePseudoState;

export const getPseudoStates = (state) => state.pseudoStates;
