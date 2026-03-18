import { subscribe, select } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Style Saver Hook
 * Watches for post saves and persists generated CSS to the server.
 * Retries up to 3 times with exponential back-off on transient errors.
 *
 * style-generator.js is dynamically imported on first save to keep it out of
 * the initial parse path (saves ~10 KB parse cost at editor boot).
 */

let isCurrentlySaving = false;

/**
 * Send CSS payload to the REST endpoint with retry.
 *
 * @param {Object} payload   The CSS payload.
 * @param {number} [attempt] Current attempt index (0-based).
 */
const saveCSSWithRetry = ( payload, attempt = 0 ) => {
    apiFetch({
        path:   '/cwicly/v1/single_make_css',
        method: 'POST',
        data:   payload,
    }).then( ( result ) => {
        console.log( 'Cwicly Rebuild: CSS persisted successfully.', result );
    }).catch( ( error ) => {
        if ( attempt < 2 ) {
            const delay = 1000 * ( attempt + 1 ); // 1s then 2s
            console.warn( `Cwicly Rebuild: CSS save failed (attempt ${ attempt + 1 }), retrying in ${ delay }ms...`, error );
            setTimeout( () => saveCSSWithRetry( payload, attempt + 1 ), delay );
        } else {
            console.error( 'Cwicly Rebuild: CSS save failed after 3 attempts.', error );
        }
    });
};

const initStyleSaver = () => {
    subscribe( async () => {
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

            // Dynamic import: style-generator is only needed after a save,
            // not at editor boot — removes ~10 KB from the critical parse path.
            const { generatePostCSSObject } = await import( '../utils/style-generator.js' );
            const cssObject = generatePostCSSObject(blocks);

            const cssPayload = {
                common:  cssObject.common  ? [cssObject.common]  : [],
                global:  cssObject.global  || [],
                fontCSS: cssObject.fontCSS || [],
                lg:      cssObject.lg      ? [cssObject.lg]      : [],
                md:      cssObject.md      ? [cssObject.md]      : [],
                sm:      cssObject.sm      ? [cssObject.sm]      : [],
            };

            const payload = {
                css: { [`post-${ postId }`]: cssPayload },
            };

            console.log( 'Cwicly Rebuild: Persisting generated CSS...', payload );
            saveCSSWithRetry( payload );
        }

        if (isSaving) {
            isCurrentlySaving = true;
        }
    });
};

export default initStyleSaver;
