import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/accordion-header', {
  title: __('Accordion Header', 'cwicly'),
  icon: 'heading',
  category: 'cwicly',
  parent: ['cwicly/accordion'],
  attributes: {
    uniqueID: { type: 'string' },
    classID: { type: 'string' },
    classes: { type: 'string', default: '' },
    containerLayoutTag: { type: 'string', default: 'div' },
    // Standard Design Attributes
    version: { type: 'number', default: 2 },
    padding: { type: 'object', default: {} },
    margin: { type: 'object', default: {} },
    typography: { type: 'object', default: {} },
    background: { type: 'object', default: {} },
    border: { type: 'object', default: {} },
    shadow: { type: 'object', default: {} },
    flex: { type: 'object', default: {} },
    grid: { type: 'object', default: {} },
    size: { type: 'object', default: {} },
    layout: { type: 'object', default: {} },
    transition: { type: 'object', default: {} },
    // Hooks & Helpers
    isStyling: { type: 'boolean', default: true },
    skeletonActive: { type: 'boolean', default: true },
    htmlAttributes: { type: 'array', default: [] },
    relativeStyles: { type: 'array', default: [] },
    customCSS: { type: 'string', default: '' },
    interactions: { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
    globalClasses: { type: 'array', default: [] },
  },
  supports: {
    anchor: true,
    html: false,
  },
  usesContext: ['cwicly/uniqueID', 'cwicly/accordionOpen'],
  edit,
  save,
});
