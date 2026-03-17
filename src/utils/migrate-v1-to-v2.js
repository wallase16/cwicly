/**
 * migrate-v1-to-v2.js
 *
 * Migration utility for Cwicly block deprecations.
 * Lifts flat (Phase 1) CSS attribute objects into the Phase 2 responsive shape { lg: value }.
 *
 * Safe to run on already-migrated blocks — blocks with responsive attrs are unchanged.
 */

/** Attribute keys that moved from flat → responsive shape in Phase 12 (v1→v2). */
const RESPONSIVE_KEYS = ['background', 'border', 'shadow', 'size', 'layout', 'flex', 'grid'];

/**
 * Returns true if an attribute value is in the OLD flat shape
 * (i.e. it is a non-null object that does NOT have any breakpoint key).
 */
const isFlat = (val) =>
    val !== null &&
    val !== undefined &&
    typeof val === 'object' &&
    !Array.isArray(val) &&
    !('lg' in val) &&
    !('md' in val) &&
    !('sm' in val);

/**
 * migrateV1toV2
 *
 * Converts block attributes from the v1 (flat) schema to the v2 (responsive) schema.
 * Called from each block's `deprecated[n].migrate()` callback.
 *
 * @param {Object} attrs - Old block attributes (v1 shape).
 * @returns {Object} Migrated attributes (v2 shape).
 *
 * @example
 * // Old: { border: { width: '2px', style: 'solid', color: '#000' } }
 * // New: { border: { lg: { width: '2px', style: 'solid', color: '#000' } }, version: 2 }
 */
export function migrateV1toV2(attrs) {
    const next = { ...attrs };
    for (const key of RESPONSIVE_KEYS) {
        if (next[key] !== undefined && isFlat(next[key])) {
            next[key] = { lg: next[key] };
        }
    }
    // Stamp the version so future migrations can detect schema generation
    next.version = 2;
    return next;
}
