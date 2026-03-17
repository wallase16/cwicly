import classnames from 'classnames';

/**
 * Merges block attributes into a single className string.
 * @param {Object} attributes - Block attributes.
 * @param {string} localClassName - Gutenberg's default className.
 * @returns {string} - Combined className.
 */
export const getCombinedClassName = (attributes, localClassName = '') => {
    const { classes, globalClass = [] } = attributes;
    
    return classnames(
        localClassName,
        classes,
        ...globalClass
    );
};
