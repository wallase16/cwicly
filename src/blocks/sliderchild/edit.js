import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'cc-slide-editor-wrapper',
		style: {
			border: '1px solid #dee2e6',
			padding: '10px',
			borderRadius: '8px',
			background: '#fff',
			minHeight: '100px'
		}
	});

	return (
		<div {...blockProps}>
			<div style={{ fontSize: '10px', color: '#adb5bd', marginBottom: '5px' }}>Slide</div>
			<InnerBlocks />
		</div>
	);
}
