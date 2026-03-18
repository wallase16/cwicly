import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/tablist', {
	title: __('Tab List', 'cwicly'),
	description: __('Organise your different tab blocks in a logical layout.', 'cwicly'),
	category: 'cwicly',
	icon: 'index-card',
	attributes: {
		uniqueID: { type: 'string' },
		tabContentsID: { type: 'string' },
		tabContentsActive: { type: 'number', default: 1 },
		tabTrigger: { type: 'string', default: 'click' },
		htmlAttributes: { type: 'array', default: [] },
		interactions: {
			type: 'object',
			default: {
				click: [],
				dbclick: [],
				scrollinview: [],
			},
		},
		// Simplified common attributes for now
		classID: { type: 'string' },
		id: { type: 'string' },
		// ... more attributes would be here in a full port
	},
	supports: {
		anchor: true,
		html: false,
	},
	providesContext: {
		'cwicly/tabContentsID': 'tabContentsID',
	},
	edit,
	save,
});
