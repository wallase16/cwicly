import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/query-no-results', {
    title: __('Query No Results', 'cwicly'),
    description: __('Content displayed when the query returns no results.', 'cwicly'),
    icon: 'minus',
    category: 'cwicly',
    parent: ['cwicly/query-loop'],
    usesContext: ['cwicly/queryId'],
    attributes: {
        uniqueID:    { type: 'string' },
        classID:     { type: 'string' },
        classes:     { type: 'string', default: '' },
        version:     { type: 'number', default: 2 },
        padding:     { type: 'object', default: {} },
        margin:      { type: 'object', default: {} },
        background:  { type: 'object', default: {} },
        border:      { type: 'object', default: {} },
        shadow:      { type: 'object', default: {} },
        customCSS:        { type: 'string', default: '' },
        htmlAttributes:   { type: 'array',  default: [] },
    },
    supports: { html: false },
    edit,
    save,
});
