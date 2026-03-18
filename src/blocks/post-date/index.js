import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/post-date', {
    title: __('Post Date', 'cwicly'),
    description: __('Displays the publish or modified date of the current post.', 'cwicly'),
    icon: 'calendar-alt',
    category: 'cwicly',
    usesContext: ['cwicly/postId', 'cwicly/queryId'],
    attributes: {
        uniqueID:     { type: 'string' },
        classID:      { type: 'string' },
        classes:      { type: 'string', default: '' },
        version:      { type: 'number', default: 2 },
        dateType:     { type: 'string', default: 'post_date' },     // 'post_date' | 'post_modified'
        dateFormat:   { type: 'string', default: 'post_date' },     // passed as field to {post_date=field}
        containerTag: { type: 'string', default: 'time' },
        // Design
        padding:        { type: 'object', default: {} },
        margin:         { type: 'object', default: {} },
        typography:     { type: 'object', default: {} },
        border:         { type: 'object', default: {} },
        shadow:         { type: 'object', default: {} },
        background:     { type: 'object', default: {} },
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
