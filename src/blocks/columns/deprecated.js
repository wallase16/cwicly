import save from './save.js';
import { migrateV1toV2 } from '../../utils/migrate-v1-to-v2.js';

/**
 * Columns block deprecations.
 * v1 → v2: flat CSS attrs → responsive { lg: {} } shape.
 * Includes flex and grid (layout controls for the columns container).
 */
export default [
    {
        attributes: {
            uniqueID: { type: 'string' },
            classID: { type: 'string' },
            classes: { type: 'string', default: '' },
            containerLayoutTag: { type: 'string', default: 'div' },
            columnsCount: { type: 'number', default: 2 },
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
            columnsGap: { type: 'string', default: '' },
            columnsDirection: { type: 'string', default: 'row' },
            columnsWrap: { type: 'string', default: 'wrap' },
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
