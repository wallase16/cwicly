import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/post-featured-image', {
    title: __('Post Featured Image', 'cwicly'),
    description: __('Displays the featured image of the current post.', 'cwicly'),
    icon: 'format-image',
    category: 'cwicly',
    usesContext: ['cwicly/postId', 'cwicly/queryId'],
    attributes: {
        uniqueID:    { type: 'string' },
        classID:     { type: 'string' },
        classes:     { type: 'string', default: '' },
        version:     { type: 'number', default: 2 },
        imageSize:   { type: 'string', default: 'full' },
        isLink:      { type: 'boolean', default: true },
        aspectRatio: { type: 'string', default: '' },
        objectFit:   { type: 'string', default: 'cover' },
        // Design
        padding:        { type: 'object', default: {} },
        margin:         { type: 'object', default: {} },
        border:         { type: 'object', default: {} },
        shadow:         { type: 'object', default: {} },
        size:           { type: 'object', default: {} },
        background:     { type: 'object', default: {} },
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
