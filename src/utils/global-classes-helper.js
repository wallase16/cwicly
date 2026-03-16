import classnames from 'classnames';

/**
 * Merges block attributes into a single className string.
 * @param {Object} attributes - Block attributes.
 * @param {string} localClassName - Gutenberg's default className.
 * @returns {string} - Combined className.
 */
export const getCombinedClassName = (attributes, localClassName = '') => {
    const { classes, globalClasses = [] } = attributes;
    
    // Convert global classes (which might be ".class-name") to "class-name"
    const parsedGlobalClasses = globalClasses.map(cls => cls.startsWith('.') ? cls.slice(1) : cls);
    
    return classnames(
        localClassName,
        classes,
        ...parsedGlobalClasses
    );
};
