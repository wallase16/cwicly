import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';
import metadata from './block.json';

registerBlockType(metadata.name, {
	...metadata,
	edit,
	save,
});
