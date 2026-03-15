/**
 * Cwicly Base Store Reducer
 */

const lb = {}; // Default inserter state placeholder

const initialState = {
    instances: {},
    designLibraryOpen: false,
    saveDesignLibrary: '',
    globalActiveStyle: '',
    globalFonts: '',
    classes: {},
    newBlocks: [],
    prevDevice: {},
    prevGlobalCount: {},
    globalClassesBlockEdit: {},
    shellEdit: {},
    externalClasses: [],
    roleEditor: {},
    navigatorHeight: 0,
    postTemplateSize: false,
    tabsState: {},
    inserterState: lb,
    primaryTabPosition: {},
    inspectorWindowPosition: localStorage.getItem('cwicly-window-inspector-position') || 'right',
    allImageSizes: {},
    globalParts: {},
    postsPerPage: '',
    copyLinked: 'false',
    saveGlobalStylesheet: false,
    sectionDefaults: {},
    additionalClassesBool: false,
    isResolving: [],
    wooProductTypes: {},
    wooAttributes: [],
    wooAttributesTerms: {},
    wooShippingClasses: [],
    wooTaxClasses: [],
    googleFonts: {},
    wooProducts: {},
    userCapabilities: {},
    userRoles: {},
    hideHooks: localStorage.getItem('cwicly-hook-behaviour') || 'false',
    globalInteractions: {},
    altKey: false,
    hideModals: localStorage.getItem('cwicly-modal-behaviour') || 'false',
    pseudoClass: '',
    darkMode: localStorage.getItem('cwicly-darkmode') || 'inherit',
    globalClasses: {},
    globalClassesRendered: {},
    selectedGlobalClass: '',
    globalStylesheets: [],
    inspectorPosition: {
        tab: 'primary',
        panel: '',
    },
    popoverRefs: {
        empty: {},
    },
    popoverRefsPrep: [],
    inspectorHeight: false,
    inspectorWidth: false,
    localFonts: {},
    localActiveFonts: [],
    localFontProcessing: false,
    isDownloadingGoogleFont: false,
    heartbeat: {},
    navigation: {},
    navRelativeStyles: {},
    classPreview: {},
    components: {},
    singleComponents: {},
    tailwindClasses: [],
    componentLibraryOpen: false,
    componentVariants: {},
    hoveredBlock: '',
    componentsFolders: [],
    globalDarkMode: false,
    darkModeSelectors: '.dark',
    // Fallback if cwicly_info is not available (e.g. during testing)
    previewDeviceType: (typeof cwicly_info !== 'undefined' && cwicly_info.clientView) ? cwicly_info.clientView : (typeof cwicly_info !== 'undefined' ? cwicly_info.mainBreakpoint : 'Desktop'),
    designSearch: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CC_INSPECTOR_POSITION':
            return {
                ...state,
                inspectorPosition: action.writeInspectorPosition,
            };
        case 'CC_PREVIEW_DEVICE_TYPE':
            return {
                ...state,
                previewDeviceType: action.writePreviewDeviceType,
            };
        case 'CC_PSEUDOCLASS':
            return {
                ...state,
                pseudoClass: action.writePseudoClass,
            };
        case 'CC_DARKMODE':
            return {
                ...state,
                darkMode: action.writeDarkMode,
            };
        case 'CC_GLOBAL_DARK_MODE':
            return {
                ...state,
                globalDarkMode: action.writeGlobalDarkMode,
            };
        case 'CC_CLASSES':
            return {
                ...state,
                classes: action.writeClasses,
            };
        case 'CC_GLOBAL_CLASSES':
            return {
                ...state,
                globalClasses: action.writeGlobalClasses,
            };
        case 'CC_SELECTED_GLOBAL_CLASS':
            return {
                ...state,
                selectedGlobalClass: action.writeSelectedGlobalClass,
            };
        case 'CC_WINDOW_INSPECTOR_POSITION':
            return {
                ...state,
                inspectorWindowPosition: action.writeInspectorWindowPosition,
            };
        case 'CC_NAVIGATOR_HEIGHT':
            return {
                ...state,
                navigatorHeight: action.writeNavigatorHeight,
            };
        case 'CC_INSTANCES':
            return {
                ...state,
                instances: action.writeInstances,
            };
        case 'CC_TABS_STATE':
            return {
                ...state,
                tabsState: action.writeTabsState,
            };
        // Add more cases as needed for full framework support
        default:
            return state;
    }
}
