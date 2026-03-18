import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/query-template', {
    title: __('Query Template', 'cwicly'),
    description: __('The repeating template for each item in the query.', 'cwicly'),
    icon: 'networking',
    category: 'cwicly',
    parent: ['cwicly/query-loop'],
    usesContext: ['cwicly/queryId'],
    providesContext: {
        'cwicly/postId': 'postId',
    },
    attributes: {
        uniqueID:     { type: 'string' },
        classID:      { type: 'string' },
        classes:      { type: 'string', default: '' },
        version:      { type: 'number', default: 2 },
        postId:       { type: 'number', default: 0 }, // populated by PHP context at render
        containerTag: { type: 'string', default: 'article' },
        // Design
        padding:        { type: 'object', default: {} },
        margin:         { type: 'object', default: {} },
        background:     { type: 'object', default: {} },
        border:         { type: 'object', default: {} },
        shadow:         { type: 'object', default: {} },
        size:           { type: 'object', default: {} },
        layout:         { type: 'object', default: {} },
        transition:     { type: 'object', default: {} },
        opacity:        { type: 'string', default: '' },
        customCSS:      { type: 'string', default: '' },
        globalClasses:  { type: 'array',  default: [] },
        htmlAttributes: { type: 'array',  default: [] },
        interactions:   { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
    },
    supports: {
        html: false,
    },
    edit,
    save,
});
