import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/post-link', {
    title: __('Post Link', 'cwicly'),
    description: __('A styled "Read More" link to the current post.', 'cwicly'),
    icon: 'admin-links',
    category: 'cwicly',
    usesContext: ['cwicly/postId', 'cwicly/queryId'],
    attributes: {
        uniqueID:    { type: 'string' },
        classID:     { type: 'string' },
        classes:     { type: 'string', default: '' },
        version:     { type: 'number', default: 2 },
        label:       { type: 'string',  default: 'Read More' },
        showArrow:   { type: 'boolean', default: false },
        newTab:      { type: 'boolean', default: false },
        // Design
        padding:        { type: 'object', default: {} },
        margin:         { type: 'object', default: {} },
        typography:     { type: 'object', default: {} },
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
    supports: { html: false },
    edit,
    save,
});
