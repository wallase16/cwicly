import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { getHtmlAttributes } from '../../utils/html-attributes.js';
import { getInteractions } from '../../utils/interactions-helper.js';
import { getCombinedClassName } from '../../utils/global-classes-helper.js';

export default function save({ attributes }) {
	const { uniqueID } = attributes;
	
	const blockID = attributes.id || `cc-tabcontents-${uniqueID}`;
	const interactions = getInteractions(attributes.interactions);
	const htmlAttrs = getHtmlAttributes(attributes);

	const blockProps = useBlockProps.save({
		id: blockID,
		...interactions,
		...htmlAttrs,
		className: getCombinedClassName(attributes, 'cc-tab-contents'),
		'data-cc-tab-contents': 'true',
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
