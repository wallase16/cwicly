import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('cwicly/gallery', {
	title: __('Gallery', 'cwicly'),
	description: __('Showcase your images in a perfect-layout masonry or grid gallery.', 'cwicly'),
	category: 'cwicly',
	icon: 'images-alt2',
	attributes: {
		uniqueID: { type: 'string' },
		classID: { type: 'string' },
		classes: { type: 'string', default: '' },
		images: { type: 'array', default: [] },
		galleryType: { type: 'string', default: 'grid' },
		galleryDynamic: { type: 'string', default: 'static' },
		columns: { type: 'object', default: { lg: 3, md: 2, sm: 1 } },
		gap: { type: 'object', default: { lg: '20px' } },
		linkWrapperType: { type: 'string', default: 'lightbox' },
		imageLightbox: { type: 'boolean', default: true },
		// Standard Design Attributes (v2 responsive pattern)
		version: { type: 'number', default: 2 },
		padding: { type: 'object', default: {} },
		margin: { type: 'object', default: {} },
		typography: { type: 'object', default: {} },
		background: { type: 'object', default: {} },
		border: { type: 'object', default: {} },
		shadow: { type: 'object', default: {} },
		flex: { type: 'object', default: {} },
		grid: { type: 'object', default: {} },
		size: { type: 'object', default: {} },
		layout: { type: 'object', default: {} },
		transition: { type: 'object', default: {} },
		// Cwicly standard attributes
		isStyling: { type: 'boolean', default: true },
		skeletonActive: { type: 'boolean', default: true },
		htmlAttributes: { type: 'array', default: [] },
		relativeStyles: { type: 'array', default: [] },
		customCSS: { type: 'string', default: '' },
		globalClasses: { type: 'array', default: [] },
		interactions: { type: 'object', default: { click: [], dbclick: [], scrollinview: [] } },
	},
	supports: {
		anchor: true,
		html: false,
	},
	edit,
	save,
});
