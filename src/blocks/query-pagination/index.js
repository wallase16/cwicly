import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/query-pagination', {
    title: __('Query Pagination', 'cwicly'),
    description: __('Next/previous or numbered pagination for a query loop.', 'cwicly'),
    icon: 'leftright',
    category: 'cwicly',
    parent: ['cwicly/query-loop'],
    usesContext: ['cwicly/queryId'],
    attributes: {
        uniqueID:         { type: 'string' },
        classID:          { type: 'string' },
        classes:          { type: 'string', default: '' },
        version:          { type: 'number', default: 2 },
        paginationType:   { type: 'string', default: 'nextprev' }, // 'nextprev' | 'numbered'
        prevLabel:        { type: 'string', default: '← Previous' },
        nextLabel:        { type: 'string', default: 'Next →' },
        midSize:          { type: 'number', default: 2 },
        padding:          { type: 'object', default: {} },
        margin:           { type: 'object', default: {} },
        background:       { type: 'object', default: {} },
        border:           { type: 'object', default: {} },
        shadow:           { type: 'object', default: {} },
        customCSS:        { type: 'string', default: '' },
        htmlAttributes:   { type: 'array', default: [] },
    },
    supports: { html: false },
    edit,
    save,
});
