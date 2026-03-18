import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/post-title', {
    title: __('Post Title', 'cwicly'),
    description: __('Displays the title of the current post. Use inside a Query Template.', 'cwicly'),
    icon: 'heading',
    category: 'cwicly',
    usesContext: ['cwicly/postId', 'cwicly/queryId'],
    attributes: {
        uniqueID:    { type: 'string' },
        classID:     { type: 'string' },
        classes:     { type: 'string', default: '' },
        version:     { type: 'number', default: 2 },
        headingTag:  { type: 'string', default: 'h2' },
        isLink:      { type: 'boolean', default: true },
        // Design
        padding:     { type: 'object', default: {} },
        margin:      { type: 'object', default: {} },
        typography:  { type: 'object', default: {} },
        background:  { type: 'object', default: {} },
        border:      { type: 'object', default: {} },
        shadow:      { type: 'object', default: {} },
        size:        { type: 'object', default: {} },
        layout:      { type: 'object', default: {} },
        transition:  { type: 'object', default: {} },
        opacity:     { type: 'string', default: '' },
        customCSS:   { type: 'string', default: '' },
        globalClasses:  { type: 'array',  default: [] },
        htmlAttributes: { type: 'array',  default: [] },
        interactions:   { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
    },
    supports: { html: false },
    edit,
    save,
});
