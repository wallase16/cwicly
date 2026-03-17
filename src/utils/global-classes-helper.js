import classnames from 'classnames';

/**
 * Merges block attributes into a single className string.
 * Supports both `globalClass` and `globalClasses` attribute names for compatibility.
 * Adds `cc-{classID}` prefix class if classID is present, so that generated CSS selectors match.
 * @param {Object} attributes - Block attributes.
 * @param {string} localClassName - Gutenberg's default className.
 * @returns {string} - Combined className.
 */
export const getCombinedClassName = (attributes = {}, localClassName = '') => {
    const { classes, classID } = attributes;
    // Support both `globalClass` (section) and `globalClasses` (container/other) attribute names
    const globalClass = attributes.globalClass || attributes.globalClasses || [];
    
    return classnames(
        localClassName,
        classID ? `cc-${classID}` : null,
        classes,
        ...globalClass
    );
};
