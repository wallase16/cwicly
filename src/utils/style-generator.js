/**
 * Cwicly Style Generator Utility
 * Converts block attributes into structured CSS objects for the REST API.
 */

const breakpoints = {
    lg: { width: 1366, isMain: true },
    md: { width: 992 },
    sm: { width: 576 },
};

/** Helper: build a CSS rule block from a props object. Returns '' if empty. */
const buildRuleBlock = (selector, props) => {
    const lines = Object.entries(props)
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => `  ${k}: ${v};`)
        .join('\n');
    return lines ? `${selector} {\n${lines}\n}\n` : '';
};

/**
 * Generate structured CSS for a single block.
 *
 * @param {string} classID     The unique class ID of the block.
 * @param {Object} attributes  The block attributes.
 * @returns {Object} Structured CSS object: { lg, md, sm, common, global:[], fontCSS:[] }
 */
export const generateBlockCSSObject = (classID, attributes) => {
    const cssObject = { lg: '', md: '', sm: '', common: '', global: [], fontCSS: [] };
    const sel = `.cc-${classID}`;
    const selHover = `${sel}:hover`;

    // ---------- Per-breakpoint properties ----------
    Object.keys(breakpoints).forEach((bp) => {
        const isMain = breakpoints[bp].isMain;
        const bpProps = {};
        const bpHoverProps = {};

        // — Spacing —
        const pad = attributes.padding?.[bp];
        if (pad) {
            if (pad.top)    bpProps['padding-top']    = pad.top;
            if (pad.right)  bpProps['padding-right']  = pad.right;
            if (pad.bottom) bpProps['padding-bottom'] = pad.bottom;
            if (pad.left)   bpProps['padding-left']   = pad.left;
        }
        const padHover = attributes.padding?.hover?.[bp];
        if (padHover) {
            if (padHover.top)    bpHoverProps['padding-top']    = padHover.top;
            if (padHover.right)  bpHoverProps['padding-right']  = padHover.right;
            if (padHover.bottom) bpHoverProps['padding-bottom'] = padHover.bottom;
            if (padHover.left)   bpHoverProps['padding-left']   = padHover.left;
        }

        const mgn = attributes.margin?.[bp];
        if (mgn) {
            if (mgn.top)    bpProps['margin-top']    = mgn.top;
            if (mgn.right)  bpProps['margin-right']  = mgn.right;
            if (mgn.bottom) bpProps['margin-bottom'] = mgn.bottom;
            if (mgn.left)   bpProps['margin-left']   = mgn.left;
        }

        // — Typography (responsive fields) —
        const typo = attributes.typography?.[bp];
        if (typo) {
            if (typo.fontSize)     bpProps['font-size']     = typo.fontSize;
            if (typo.lineHeight)   bpProps['line-height']   = typo.lineHeight;
            if (typo.letterSpacing) bpProps['letter-spacing'] = typo.letterSpacing;
            if (typo.fontWeight)   bpProps['font-weight']   = typo.fontWeight;
            if (typo.textAlign)    bpProps['text-align']    = typo.textAlign;
        }

        // — Typography (global fields, emit only on main breakpoint) —
        if (isMain && attributes.typography) {
            const t = attributes.typography;
            if (t.fontFamily)     bpProps['font-family']      = t.fontFamily;
            if (t.color)          bpProps['color']             = t.color;
            if (t.textDecoration) bpProps['text-decoration']  = t.textDecoration;
        }

        // — Background —
        const bg = attributes.background;
        if (isMain && bg) {
            if (bg.type === 'color' && bg.color) {
                bpProps['background-color'] = bg.color;
            } else if (bg.type === 'gradient' && bg.gradient) {
                bpProps['background'] = bg.gradient;
            } else if (bg.type === 'image' && bg.image?.url) {
                bpProps['background-image']    = `url('${bg.image.url}')`;
                bpProps['background-size']     = bg.imageSize     || 'cover';
                bpProps['background-position'] = bg.imagePosition || 'center';
                bpProps['background-repeat']   = bg.imageRepeat   || 'no-repeat';
            }
        }

        // — Border —
        const bdr = attributes.border;
        if (isMain && bdr) {
            if (bdr.width) bpProps['border-width'] = bdr.width;
            if (bdr.style && bdr.style !== 'none') bpProps['border-style'] = bdr.style;
            if (bdr.color) bpProps['border-color'] = bdr.color;

            // Per-side radius support
            if (bdr.radiusTL || bdr.radiusTR || bdr.radiusBR || bdr.radiusBL) {
                bpProps['border-radius'] = [
                    bdr.radiusTL || '0',
                    bdr.radiusTR || '0',
                    bdr.radiusBR || '0',
                    bdr.radiusBL || '0',
                ].join(' ');
            } else if (bdr.radius) {
                bpProps['border-radius'] = bdr.radius;
            }
        }

        // — Box Shadow —
        const shd = attributes.shadow;
        if (isMain && shd && (shd.x || shd.y || shd.blur || shd.spread)) {
            const x      = shd.x      || '0px';
            const y      = shd.y      || '0px';
            const blur   = shd.blur   || '0px';
            const spread = shd.spread || '0px';
            const color  = shd.color  || 'rgba(0,0,0,0.5)';
            const inset  = shd.inset  ? 'inset ' : '';
            bpProps['box-shadow'] = `${inset}${x} ${y} ${blur} ${spread} ${color}`;
        }

        // — Opacity —
        if (isMain && attributes.opacity !== undefined && attributes.opacity !== '') {
            bpProps['opacity'] = attributes.opacity;
        }

        // — Size (Width / Height) —
        const size = attributes.size;
        if (isMain && size) {
            if (size.width)     bpProps['width']      = size.width;
            if (size.minWidth)  bpProps['min-width']  = size.minWidth;
            if (size.maxWidth)  bpProps['max-width']  = size.maxWidth;
            if (size.height)    bpProps['height']     = size.height;
            if (size.minHeight) bpProps['min-height'] = size.minHeight;
            if (size.maxHeight) bpProps['max-height'] = size.maxHeight;
        }

        // — Layout (display, overflow, position, z-index, cursor) —
        const layout = attributes.layout;
        if (isMain && layout) {
            if (layout.display)  bpProps['display']  = layout.display;
            if (layout.overflow) bpProps['overflow']  = layout.overflow;
            if (layout.position) bpProps['position']  = layout.position;
            if (layout.zIndex)   bpProps['z-index']   = layout.zIndex;
            if (layout.cursor)   bpProps['cursor']    = layout.cursor;
        }

        // — Transition —
        const trans = attributes.transition;
        if (isMain && trans?.property) {
            const duration = trans.duration || '0.3s';
            const easing   = trans.easing   || 'ease';
            bpProps['transition'] = `${trans.property} ${duration} ${easing}`;
        }

        cssObject[bp] += buildRuleBlock(sel, bpProps);
        cssObject[bp] += buildRuleBlock(selHover, bpHoverProps);
    });

    return cssObject;
};

/**
 * Combine structured CSS objects from all blocks (recursive).
 *
 * @param {Array} blocks Array of Gutenberg blocks.
 * @returns {Object} Combined structured CSS object.
 */
export const generatePostCSSObject = (blocks) => {
    const combined = { lg: '', md: '', sm: '', common: '', global: [], fontCSS: [] };

    const processBlocks = (innerBlocks) => {
        innerBlocks.forEach((block) => {
            if (block.attributes?.classID) {
                const blockCSS = generateBlockCSSObject(block.attributes.classID, block.attributes);
                Object.keys(combined).forEach((key) => {
                    if (Array.isArray(combined[key])) {
                        combined[key] = [...combined[key], ...blockCSS[key]];
                    } else {
                        combined[key] += blockCSS[key];
                    }
                });
            }
            if (block.innerBlocks?.length > 0) {
                processBlocks(block.innerBlocks);
            }
        });
    };

    processBlocks(blocks);
    return combined;
};
