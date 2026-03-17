import save from './save.js';
import { migrateV1toV2 } from '../../utils/migrate-v1-to-v2.js';

/**
 * Paragraph block deprecations.
 * v1 → v2: flat CSS attrs → responsive { lg: {} } shape.
 * Note: `content` has `source: 'html'` and IS in the HTML output — save() still matches because
 * content rendering is unchanged. Only CSS attrs change shape, and they're never serialized.
 */
export default [
    {
        attributes: {
            content: { type: 'string', source: 'html', selector: 'p', default: '' },
            uniqueID: { type: 'string' },
            classID: { type: 'string' },
            classes: { type: 'string', default: '' },
            linkWrapperActive: { type: 'boolean', default: false },
            linkWrapperUrl: { type: 'string', default: '' },
            linkWrapperNewTab: { type: 'boolean', default: false },
            linkWrapperRel: { type: 'string', default: '' },
            linkWrapperTitle: { type: 'string', default: '' },
            padding: { type: 'object', default: {} },
            margin: { type: 'object', default: {} },
            typography: { type: 'object', default: {} },
            background: { type: 'object', default: {} },
            border: { type: 'object', default: {} },
            shadow: { type: 'object', default: {} },
            flex: { type: 'object', default: {} },
            grid: { type: 'object', default: {} },
            dropCap: { type: 'boolean', default: false },
            size: { type: 'object', default: {} },
            opacity: { type: 'string', default: '' },
            layout: { type: 'object', default: {} },
            transition: { type: 'object', default: {} },
            isStyling: { type: 'boolean', default: true },
            skeletonActive: { type: 'boolean', default: true },
            htmlAttributes: { type: 'array', default: [] },
            relativeStyles: { type: 'array', default: [] },
            customCSS: { type: 'string', default: '' },
            globalClasses: { type: 'array', default: [] },
            interactions: { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
        },
        save,
        migrate: migrateV1toV2,
    },
];
