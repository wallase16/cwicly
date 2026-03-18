import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/tab', {
	title: __('Tab', 'cwicly'),
	description: __('Describe your tab content with a clear and readable description.', 'cwicly'),
	category: 'cwicly',
	icon: 'button',
	parent: ['cwicly/tablist'],
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
