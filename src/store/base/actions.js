/**
 * Cwicly Base Store Actions
 */

export const writeInspectorPosition = (position) => ({
    type: 'CC_INSPECTOR_POSITION',
    writeInspectorPosition: position,
});

export const writePreviewDeviceType = (deviceType) => ({
    type: 'CC_PREVIEW_DEVICE_TYPE',
    writePreviewDeviceType: deviceType,
});

export const writePseudoClass = (pseudoClass) => ({
    type: 'CC_PSEUDOCLASS',
    writePseudoClass: pseudoClass,
});

export const writeDarkMode = (darkMode) => ({
    type: 'CC_DARKMODE',
    writeDarkMode: darkMode,
});

export const writeGlobalDarkMode = (enabled) => ({
    type: 'CC_GLOBAL_DARK_MODE',
    writeGlobalDarkMode: enabled,
});

export const writeNavigatorHeight = (height) => ({
    type: 'CC_NAVIGATOR_HEIGHT',
    writeNavigatorHeight: height,
});

export const writeInspectorWindowPosition = (position) => {
    localStorage.setItem('cwicly-window-inspector-position', position);
    return {
        type: 'CC_WINDOW_INSPECTOR_POSITION',
        writeInspectorWindowPosition: position,
    };
};

export const writeInstances = (instances) => ({
    type: 'CC_INSTANCES',
    writeInstances: instances,
});

export const writeTabsState = (tabsState) => ({
    type: 'CC_TABS_STATE',
    writeTabsState: tabsState,
});

export const writeClasses = (classes, merge = true) => {
    let finalClasses = classes;
    if (merge) {
        // This would typically involve a select() which is better handled in a resolver or middle-ware like logic
        // For simplicity in this standalone action:
        const currentClasses = wp.data.select('cwicly/base').getClasses() || {};
        finalClasses = { ...currentClasses, ...classes };
    }
    return {
        type: 'CC_CLASSES',
        writeClasses: finalClasses,
    };
};

export const writeGlobalClasses = (globalClasses) => ({
    type: 'CC_GLOBAL_CLASSES',
    writeGlobalClasses: globalClasses,
});

export const writeSelectedGlobalClass = (selectedClass) => ({
    type: 'CC_SELECTED_GLOBAL_CLASS',
    writeSelectedGlobalClass: selectedClass,
});
