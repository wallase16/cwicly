import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';
import deprecated from './deprecated.js';

registerBlockType('cwicly/button', {
  title: __('Button', 'cwicly'),
  icon: 'button',
  category: 'cwicly',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: '.cc-btn',
      default: '',
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
    // Link attributes (standard across blocks)
    linkWrapperActive: { type: 'boolean', default: true }, // Button is a link by default in Cwicly
    linkWrapperUrl: { type: 'string', default: '' },
    linkWrapperNewTab: { type: 'boolean', default: false },
    linkWrapperRel: { type: 'string', default: '' },
    linkWrapperTitle: { type: 'string', default: '' },
    linkWrapperType: { type: 'string', default: 'url' },
    linkWrapperSourceType: { type: 'string', default: 'static' },
    // Schema version — v2 = responsive attrs (Phase 12)
    version: { type: 'number', default: 2 },
    // Consolidated Design Attributes
    padding: { type: 'object', default: {} },
    margin: { type: 'object', default: {} },
    typography: { type: 'object', default: {} },
    background: { type: 'object', default: {} },
    border: { type: 'object', default: {} },
    shadow: { type: 'object', default: {} },
    // Phase 8+10+11 attributes
    flex: { type: 'object', default: {} },
    grid: { type: 'object', default: {} },
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
    globalClasses: { type: 'array', default: [] },
    interactions: { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
  },
  supports: {
    anchor: true,
    html: false,
  },
  edit,
  save,
  deprecated,
});
