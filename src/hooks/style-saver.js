import { subscribe, select } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { generatePostCSSObject } from '../utils/style-generator.js';

/**
 * Style Saver Hook
 * Watches for post saves and persists generated CSS to the server.
 */

let isCurrentlySaving = false;

const initStyleSaver = () => {
    subscribe(() => {
        const isSaving = select('core/editor').isSavingPost();
        
        // Check if saving just finished
        if (isCurrentlySaving && !isSaving) {
            isCurrentlySaving = false;
            
            // Check if save was successful
            if (!select('core/editor').didPostSaveRequestSucceed()) {
                return;
            }

            const postId = select('core/editor').getCurrentPostId();
            if (!postId) return;

            const blocks = select('core/editor').getBlocks();
            const cssObject = generatePostCSSObject(blocks);

            // Construct payload for Cwicly REST API
            // single_make_css expects arrays for common/global/fontCSS/breakpoints
            const cssPayload = {
                common: cssObject.common ? [cssObject.common] : [],
                global: cssObject.global || [],
                fontCSS: cssObject.fontCSS || [],
                lg: cssObject.lg ? [cssObject.lg] : [],
                md: cssObject.md ? [cssObject.md] : [],
                sm: cssObject.sm ? [cssObject.sm] : [],
            };
            const payload = {
                css: {
                    [`post-${postId}`]: cssPayload
                }
            };

            console.log('Cwicly Rebuild: Persisting generated CSS...', payload);

            apiFetch({
                path: '/cwicly/v1/single_make_css',
                method: 'POST',
                data: payload,
            }).then((result) => {
                console.log('Cwicly Rebuild: CSS persisted successfully.', result);
            }).catch((error) => {
                console.error('Cwicly Rebuild: Failed to persist CSS.', error);
            });
        }

        if (isSaving) {
            isCurrentlySaving = true;
        }
    });
};

export default initStyleSaver;
