/**
 * getHtmlAttributes
 *
 * Converts the `htmlAttributes` block attribute array into a spread-able
 * React props object for use in save.js files.
 *
 * Input:  [ { key: 'data-id', value: 'foo' }, { key: 'aria-label', value: 'bar' } ]
 * Output: { 'data-id': 'foo', 'aria-label': 'bar' }
 *
 * - Empty keys are skipped.
 * - Keys are sanitized to only allow valid HTML attribute characters
 *   (letters, digits, hyphens, underscores, colons).
 */
export const getHtmlAttributes = (attributes) => {
    if (!attributes?.htmlAttributes?.length) return {};
    return attributes.htmlAttributes.reduce((acc, { key = '', value = '' }) => {
        const safeKey = key.trim().replace(/[^a-zA-Z0-9\-_:]/g, '');
        if (safeKey) acc[safeKey] = value;
        return acc;
    }, {});
};
