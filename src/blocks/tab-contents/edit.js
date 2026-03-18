import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import { getBlockID } from '../../utils/block-id.js';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { uniqueID } = attributes;

	useEffect(() => {
		if (!uniqueID) {
			setAttributes({ uniqueID: getBlockID() });
		}
	}, []);

	const blockProps = useBlockProps({
		className: 'cc-tab-contents',
		'data-cc-tab-contents': 'true',
	});

	return (
		<>
			<CwiclyInspector {...props} />
			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={['cwicly/tabcontent']}
					template={[['cwicly/tabcontent'], ['cwicly/tabcontent']]}
				/>
			</div>
		</>
	);
}
