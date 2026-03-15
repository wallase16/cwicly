/**
 * Cwicly Base Store Selectors
 */

export const getBase = (state) => state;

export const getInspectorPosition = (state) => state.inspectorPosition;

export const getPreviewDeviceType = (state) => state.previewDeviceType;

export const getPseudoClass = (state) => state.pseudoClass;

export const getDarkMode = (state) => state.darkMode;

export const getGlobalDarkMode = (state) => state.globalDarkMode;

export const getClasses = (state) => state.classes;

export const getGlobalClasses = (state) => state.globalClasses;

export const getSelectedGlobalClass = (state) => state.selectedGlobalClass;

export const getNavigatorHeight = (state) => state.navigatorHeight;

export const getInspectorWindowPosition = (state) => state.inspectorWindowPosition;

export const getInstances = (state) => state.instances;

export const getTabsState = (state) => state.tabsState;

export const getGlobalClassesRendered = (state) => state.globalClassesRendered;
