import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/tabcontents', {
	title: __('Tab Contents', 'cwicly'),
	description: __('Group together your different Tab Content blocks in a clear and logical layout.', 'cwicly'),
	category: 'cwicly',
	icon: 'media-text',
	attributes: {
		uniqueID: { type: 'string' },
		htmlAttributes: { type: 'array', default: [] },
		interactions: {
			type: 'object',
			default: {
				click: [],
				dbclick: [],
				scrollinview: [],
			},
		},
		classID: { type: 'string' },
		id: { type: 'string' },
		tabContentsID: { type: 'string' },
	},
	providesContext: {
		'cwicly/tabContentsID': 'tabContentsID',
	},
	supports: {
		anchor: true,
		html: false,
	},
	edit,
	save,
});
