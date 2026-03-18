import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { getHtmlAttributes } from '../../utils/html-attributes.js';
import { getInteractions } from '../../utils/interactions-helper.js';
import { getCombinedClassName } from '../../utils/global-classes-helper.js';

export default function save({ attributes }) {
	const { uniqueID, tabContentsID, tabContentsActive, tabTrigger } = attributes;
	
	const blockID = attributes.id || `cc-tablist-${uniqueID}`;
	const interactions = getInteractions(attributes.interactions);
	const htmlAttrs = getHtmlAttributes(attributes);

	const blockProps = useBlockProps.save({
		id: blockID,
		...interactions,
		...htmlAttrs,
		className: getCombinedClassName(attributes, 'cc-tab-list'),
		'data-cc-tab-list': 'true',
		'data-tab-contents-id': tabContentsID,
		'data-tab-active': tabContentsActive,
		'data-tab-trigger': tabTrigger,
		role: 'tablist',
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
