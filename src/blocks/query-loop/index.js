import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';
import deprecated from './deprecated.js';

registerBlockType('cwicly/query-loop', {
    title: __('Query Loop', 'cwicly'),
    description: __('Display a list of posts with a repeating template.', 'cwicly'),
    icon: 'list-view',
    category: 'cwicly',
    attributes: {
        uniqueID:     { type: 'string' },
        classID:      { type: 'string' },
        classes:      { type: 'string', default: '' },
        version:      { type: 'number', default: 2 },
        // Query parameters
        postType:     { type: 'string',  default: 'post' },
        postsPerPage: { type: 'number',  default: 6 },
        orderBy:      { type: 'string',  default: 'date' },
        order:        { type: 'string',  default: 'DESC' },
        offset:       { type: 'number',  default: 0 },
        paged:        { type: 'boolean', default: true },
        taxQuery:     { type: 'object',  default: {} },
        metaQuery:    { type: 'object',  default: {} },
        containerTag: { type: 'string',  default: 'div' },
        // Design
        padding:     { type: 'object', default: {} },
        margin:      { type: 'object', default: {} },
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
    providesContext: {
        'cwicly/queryId': 'uniqueID',
    },
    supports: {
        anchor: true,
        html: false,
    },
    edit,
    save,
    deprecated,
});
