import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/container', {
  title: __('Container', 'cwicly'),
  icon: 'editor-table',
  category: 'cwicly',
  attributes: {
    uniqueID: { type: 'string' },
    classID: { type: 'string' },
    classes: { type: 'string', default: '' },
    containerLayoutTag: { type: 'string', default: 'div' },
    // Link attributes
    linkWrapperActive: { type: 'boolean', default: false },
    linkWrapperUrl: { type: 'string', default: '' },
    linkWrapperNewTab: { type: 'boolean', default: false },
    linkWrapperRel: { type: 'string', default: '' },
    linkWrapperTitle: { type: 'string', default: '' },
    // Cwicly standard attributes
    isStyling: { type: 'boolean', default: true },
    skeletonActive: { type: 'boolean', default: true },
    htmlAttributes: { type: 'array', default: [] },
    relativeStyles: { type: 'array', default: [] },
    customCSS: { type: 'string', default: '' },
    interactions: { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
  },
  supports: {
    anchor: true,
    html: false,
  },
  edit,
  save,
});
