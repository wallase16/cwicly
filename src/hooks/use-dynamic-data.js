import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { useSelect } from '@wordpress/data';

const cache = new Map();

/**
 * Hook to resolve dynamic data tags in the editor.
 * @param {string} tag The dynamic tag (e.g., {acffield=hero_image})
 * @returns {any} The resolved value.
 */
export function useDynamicData(tag) {
    const [resolvedValue, setResolvedValue] = useState(null);
    const postId = useSelect((select) => select('core/editor').getCurrentPostId(), []);

    useEffect(() => {
        if (!tag || !tag.startsWith('{') || !tag.endsWith('}')) {
            setResolvedValue(null);
            return;
        }

        const cacheKey = `${tag}-${postId}`;
        if (cache.has(cacheKey)) {
            setResolvedValue(cache.get(cacheKey));
            return;
        }

        // Parse tag for batch-style dynamics endpoint
        // Format: {source=field}
        const match = tag.match(/^\{([\w-]+)=([\w-]+)\}$/);
        if (!match) return;

        const [, source, field] = match;

        // Construct request body matching Backend_API::dynamics expectations
        const body = {
            backend_info: [
                {
                    [Date.now()]: {
                        [source === 'acf' ? 'acffield' : source]: {
                            [source === 'acf' ? 'acffield' : 'field']: field,
                            postid: postId
                        }
                    }
                }
            ]
        };

        apiFetch({
            path: 'cwicly/v1/dynamics',
            method: 'POST',
            data: body
        }).then((response) => {
            // response structure: { acffield: { time: { ... } } }
            // This is a bit complex due to the nested loops in PHP.
            // We'll try to find the value in the response.
            let value = null;
            const sourceKey = source === 'acf' ? 'acffield' : source;
            if (response[sourceKey]) {
                const times = Object.values(response[sourceKey]);
                if (times.length > 0) {
                    value = times[0];
                }
            }

            // Handle special cases (e.g., ACF Image object)
            if (value && typeof value === 'object' && value.url) {
                value = value.url;
            }

            cache.set(cacheKey, value);
            setResolvedValue(value);
        }).catch((err) => {
            console.error('Cwicly Dynamic Data Error:', err);
            setResolvedValue(null);
        });
    }, [tag, postId]);

    return resolvedValue;
}
