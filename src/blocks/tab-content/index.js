import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/tabcontent', {
	title: __('Tab Content', 'cwicly'),
	description: __('Place and organise your Tab content here.', 'cwicly'),
	category: 'cwicly',
	icon: 'media-document',
	parent: ['cwicly/tabcontents'],
	attributes: {
		uniqueID: { type: 'string' },
		tabIndex: { type: 'number', default: 1 },
		tabActive: { type: 'boolean', default: false },
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
	},
	usesContext: ['cwicly/tabContentsID'],
	edit,
	save,
});
