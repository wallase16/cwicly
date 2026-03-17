/**
 * Cwicly Style Generator Utility
 * Converts block attributes into structured CSS objects for the REST API.
 */

const breakpoints = {
    lg: { width: 1366, isMain: true },
    md: { width: 992 },
    sm: { width: 576 },
};

/**
 * Generate structured CSS for a single block.
 * 
 * @param {string} classID The unique class ID of the block.
 * @param {Object} attributes The block attributes.
 * @returns {Object} Structured CSS object: { lg: '', md: '', sm: '', common: '' }
 */
export const generateBlockCSSObject = (classID, attributes) => {
    const cssObject = {
        lg: '',
        md: '',
        sm: '',
        common: '',
        global: [],
        fontCSS: [],
    };

    const selector = `.cc-${classID}`;

    Object.keys(breakpoints).forEach((bp) => {
        let bpStyles = '';

        // Padding
        if (attributes.padding && attributes.padding[bp]) {
            const p = attributes.padding[bp];
            if (p.top) bpStyles += `  padding-top: ${p.top};\n`;
            if (p.right) bpStyles += `  padding-right: ${p.right};\n`;
            if (p.bottom) bpStyles += `  padding-bottom: ${p.bottom};\n`;
            if (p.left) bpStyles += `  padding-left: ${p.left};\n`;
        }

        // Margin
        if (attributes.margin && attributes.margin[bp]) {
            const m = attributes.margin[bp];
            if (m.top) bpStyles += `  margin-top: ${m.top};\n`;
            if (m.right) bpStyles += `  margin-right: ${m.right};\n`;
            if (m.bottom) bpStyles += `  margin-bottom: ${m.bottom};\n`;
            if (m.left) bpStyles += `  margin-left: ${m.left};\n`;
        }

        // Typography
        if (attributes.typography) {
            const t = attributes.typography;
            const currentT = t[bp] || {};
            
            if (currentT.fontSize) bpStyles += `  font-size: ${currentT.fontSize};\n`;
            if (currentT.fontWeight) bpStyles += `  font-weight: ${currentT.fontWeight};\n`;
            
            // Global typography attributes (if on main breakpoint)
            if (breakpoints[bp].isMain && t.fontFamily) {
                bpStyles += `  font-family: ${t.fontFamily};\n`;
            }
        }

        // Background (Global only for now, can be responsive later)
        if (breakpoints[bp].isMain && attributes.background) {
            const b = attributes.background;
            if (b.type === 'color' && b.color) {
                bpStyles += `  background-color: ${b.color};\n`;
            } else if (b.type === 'image' && b.image?.url) {
                bpStyles += `  background-image: url('${b.image.url}');\n`;
                bpStyles += `  background-size: cover;\n`;
                bpStyles += `  background-position: center;\n`;
            }
        }

        // Border
        if (breakpoints[bp].isMain && attributes.border) {
            const b = attributes.border;
            if (b.width) bpStyles += `  border-width: ${b.width};\n`;
            if (b.style) bpStyles += `  border-style: ${b.style};\n`;
            if (b.color) bpStyles += `  border-color: ${b.color};\n`;
            if (b.radius) bpStyles += `  border-radius: ${b.radius};\n`;
        }

        // Shadow
        if (breakpoints[bp].isMain && attributes.shadow) {
            const s = attributes.shadow;
            const x = s.x || '0px';
            const y = s.y || '0px';
            const blur = s.blur || '0px';
            const spread = s.spread || '0px';
            const color = s.color || 'rgba(0,0,0,0.5)';
            const inset = s.inset ? 'inset' : '';
            
            if (s.x || s.y || s.blur || s.spread) {
                bpStyles += `  box-shadow: ${inset} ${x} ${y} ${blur} ${spread} ${color};\n`;
            }
        }

        if (bpStyles) {
            cssObject[bp] += `${selector} {\n${bpStyles}}\n`;
        }
    });

    return cssObject;
};

/**
 * Combine structured CSS objects from all blocks.
 * 
 * @param {Array} blocks Array of Gutenberg blocks.
 * @returns {Object} Combined structured CSS object.
 */
export const generatePostCSSObject = (blocks) => {
    const combined = {
        lg: '',
        md: '',
        sm: '',
        common: '',
        global: [],
        fontCSS: [],
    };

    const processBlocks = (innerBlocks) => {
        innerBlocks.forEach((block) => {
            if (block.attributes && block.attributes.classID) {
                const blockCSS = generateBlockCSSObject(block.attributes.classID, block.attributes);
                Object.keys(combined).forEach((key) => {
                    if (Array.isArray(combined[key])) {
                        combined[key] = [...combined[key], ...blockCSS[key]];
                    } else {
                        combined[key] += blockCSS[key];
                    }
                });
            }
            if (block.innerBlocks && block.innerBlocks.length > 0) {
                processBlocks(block.innerBlocks);
            }
        });
    };

    processBlocks(blocks);
    return combined;
};
