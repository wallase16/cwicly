import classnames from 'classnames';

/**
 * Merges block attributes into a single className string.
 * Supports both `globalClass` and `globalClasses` attribute names for compatibility.
 * @param {Object} attributes - Block attributes.
 * @param {string} localClassName - Gutenberg's default className.
 * @returns {string} - Combined className.
 */
export const getCombinedClassName = (attributes = {}, localClassName = '') => {
    const { classes } = attributes;
    // Support both `globalClass` (section) and `globalClasses` (container/other) attribute names
    const globalClass = attributes.globalClass || attributes.globalClasses || [];
    
    return classnames(
        localClassName,
        classes,
        ...globalClass
    );
};
