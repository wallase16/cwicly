import save from './save.js';
import { migrateV1toV2 } from '../../utils/migrate-v1-to-v2.js';

/**
 * Section block deprecations.
 * v1 → v2: flat CSS attrs (border, shadow, background, size, layout) → responsive { lg: {} } shape.
 * Save output is identical (CSS attrs are never serialized to HTML), so migration is transparent.
 */
export default [
    {
        // v1 schema: no version stamp, flat CSS attribute objects
        attributes: {
            uniqueID: { type: 'string' },
            classID: { type: 'string' },
            classes: { type: 'string', default: '' },
            containerLayoutTag: { type: 'string', default: 'section' },
            padding: { type: 'object', default: {} },
            margin: { type: 'object', default: {} },
            typography: { type: 'object', default: {} },
            background: { type: 'object', default: {} },
            border: { type: 'object', default: {} },
            shadow: { type: 'object', default: {} },
            size: { type: 'object', default: {} },
            opacity: { type: 'string', default: '' },
            layout: { type: 'object', default: {} },
            transition: { type: 'object', default: {} },
            linkWrapperActive: { type: 'boolean', default: false },
            linkWrapperUrl: { type: 'string', default: '' },
            linkWrapperNewTab: { type: 'boolean', default: false },
            linkWrapperRel: { type: 'string', default: '' },
            linkWrapperTitle: { type: 'string', default: '' },
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
        save,
        migrate: migrateV1toV2,
    },
];
