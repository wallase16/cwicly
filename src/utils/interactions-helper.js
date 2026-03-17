/**
 * Cwicly Interactions Helper
 */

/**
 * Generates the data-interaction attribute value for the block wrapper.
 * 
 * @param {Object} interactions The interactions attribute from the block.
 * @returns {string|null} The JSON string of interactions or null if empty.
 */
export const getInteractions = (interactions) => {
    if (!interactions) return {};

    // Filter out empty event arrays to match Cwicly's behavior
    const filtered = Object.keys(interactions).reduce((acc, event) => {
        if (interactions[event] && interactions[event].length > 0) {
            acc[event] = interactions[event];
        }
        return acc;
    }, {});

    if (Object.keys(filtered).length === 0) return {};

    return {
        'data-interaction': JSON.stringify(filtered)
    };
};

/**
 * Generates the AOS (Animate On Scroll) attributes for the block wrapper.
 * 
 * @param {Object} attributes The block attributes.
 * @returns {Object} The AOS attributes object.
 */
export const getAOSAttributes = (attributes) => {
    const aos = {};
    if (attributes.animateOnScrollType) {
        aos['data-aos'] = attributes.animateOnScrollType;
        if (attributes.animateOnScrollStartAnchor) {
            aos['data-aos-anchor-placement'] = attributes.animateOnScrollStartAnchor;
        }
        if (attributes.animateOnScrollOnce) {
            aos['data-aos-once'] = attributes.animateOnScrollOnce;
        }
        if (attributes.animateOnScrollDuration) {
            aos['data-aos-duration'] = attributes.animateOnScrollDuration;
        }
        if (attributes.animateOnScrollDelay) {
            aos['data-aos-delay'] = attributes.animateOnScrollDelay;
        }
    }
    return aos;
};
