import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { getHtmlAttributes } from '../../utils/html-attributes.js';
import { getInteractions } from '../../utils/interactions-helper.js';
import { getCombinedClassName } from '../../utils/global-classes-helper.js';

export default function save({ attributes }) {
	const { uniqueID, tabIndex, tabActive } = attributes;
	
	const blockID = attributes.id || `cc-tab-${uniqueID}`;
	const interactions = getInteractions(attributes.interactions);
	const htmlAttrs = getHtmlAttributes(attributes);

	const blockProps = useBlockProps.save({
		id: blockID,
		...interactions,
		...htmlAttrs,
		className: getCombinedClassName(attributes, 'cc-tab' + (tabActive ? ' cc-tab-active' : '')),
		'data-cc-tab': 'true',
		'data-tab-index': tabIndex,
		role: 'tab',
		'aria-selected': tabActive ? 'true' : 'false',
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
