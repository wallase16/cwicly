import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/heading', {
  title: __('Heading', 'cwicly'),
  icon: 'heading',
  category: 'cwicly',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'h1,h2,h3,h4,h5,h6',
      default: '',
    },
    headingTag: {
      type: 'string',
      default: 'h1',
    },
    uniqueID: {
      type: 'string',
    },
    classID: {
      type: 'string',
    },
    classes: {
      type: 'string',
      default: '',
    },
    // Link attributes
    linkWrapperActive: { type: 'boolean', default: false },
    linkWrapperUrl: { type: 'string', default: '' },
    linkWrapperNewTab: { type: 'boolean', default: false },
    linkWrapperRel: { type: 'string', default: '' },
    linkWrapperTitle: { type: 'string', default: '' },
    // Consolidated Design Attributes
    padding: { type: 'object', default: {} },
    margin: { type: 'object', default: {} },
    typography: { type: 'object', default: {} },
    background: { type: 'object', default: {} },
    border: { type: 'object', default: {} },
    shadow: { type: 'object', default: {} },
    // Phase 8 attributes
    size: { type: 'object', default: {} },
    opacity: { type: 'string', default: '' },
    layout: { type: 'object', default: {} },
    transition: { type: 'object', default: {} },
    // Cwicly standard attributes
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
  edit,
  save,
});
