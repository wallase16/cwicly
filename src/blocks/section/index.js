import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';
import deprecated from './deprecated.js';

registerBlockType('cwicly/section', {
  title: __('Section', 'cwicly'),
  icon: 'layout',
  category: 'cwicly',
  attributes: {
    uniqueID: { type: 'string' },
    classID: { type: 'string' },
    classes: { type: 'string', default: '' },
    containerLayoutTag: { type: 'string', default: 'section' },
    // Schema version — v2 = responsive attrs (Phase 12)
    version: { type: 'number', default: 2 },
    // Consolidated Design Attributes
    padding: { type: 'object', default: {} },
    margin: { type: 'object', default: {} },
    typography: { type: 'object', default: {} },
    background: { type: 'object', default: {} },
    border: { type: 'object', default: {} },
    shadow: { type: 'object', default: {} },
    // New Phase 8 attributes
    size: { type: 'object', default: {} },
    opacity: { type: 'string', default: '' },
    layout: { type: 'object', default: {} },
    transition: { type: 'object', default: {} },
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
    globalClass: { type: 'array', default: [] },
    interactions: { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
    animateOnScrollType: { type: 'string', default: '' },
    animateOnScrollOnce: { type: 'boolean', default: false },
    animateOnScrollDuration: { type: 'string', default: '' },
    animateOnScrollDelay: { type: 'string', default: '' },
    animateOnScrollStartAnchor: { type: 'string', default: '' },
  },
  supports: {
    anchor: true,
    html: false,
  },
  edit,
  save,
  deprecated,
});
