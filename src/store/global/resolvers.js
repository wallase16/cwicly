import apiFetch from '@wordpress/api-fetch';
import { actions } from './index.js';

export const getGlobalStyles = () => async ({ dispatch }) => {
    try {
        const response = await apiFetch({ path: '/cwicly/v1/options?option=cwicly_global_styles' });
        
        if (response && response.success && response.settings) {
            const data = typeof response.settings === 'string' ? JSON.parse(response.settings) : response.settings;
            dispatch({ type: 'CC_GLOBAL_SET_DATA', data });
        }
    } catch (error) {
        console.error('Failed to fetch global styles:', error);
    }
};

