import { useSelect } from '@wordpress/data';

const DEVICE_TO_BP = { Desktop: 'lg', Tablet: 'md', Mobile: 'sm' };

/**
 * useResponsive
 *
 * Shared hook for all Cwicly design controls that should be responsive.
 * Returns helpers tied to the current preview breakpoint (Desktop/Tablet/Mobile).
 *
 * @param {Object}   attributes    Block attributes object.
 * @param {Function} setAttributes Block setAttributes function.
 * @param {string}   attrKey       The attribute key to read/write (e.g. 'border').
 *
 * @returns {{ bp: string, getValues: () => Object, updateAttr: (key: string, val: any) => void }}
 *
 * Usage:
 *   const { bp, getValues, updateAttr } = useResponsive(attributes, setAttributes, 'border');
 *   const border = getValues();              // attributes.border?.[bp] || {}
 *   updateAttr('width', '2px');             // writes to attributes.border.{bp}.width
 */
export default function useResponsive(attributes, setAttributes, attrKey) {
    const { previewDeviceType } = useSelect((select) => ({
        previewDeviceType: select('cwicly/base').getPreviewDeviceType(),
    }), []);

    const bp = DEVICE_TO_BP[previewDeviceType] || 'lg';

    const getValues = () => attributes[attrKey]?.[bp] || {};

    const updateAttr = (key, val) => {
        const next = { ...(attributes[attrKey] || {}) };
        next[bp] = { ...(next[bp] || {}), [key]: val };
        setAttributes({ [attrKey]: next });
    };

    return { bp, getValues, updateAttr };
}
