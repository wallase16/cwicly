import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { message, showLoader, isOverlay } = attributes;

	const blockProps = useBlockProps({
		className: 'cc-wait-editor',
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Wait Block Settings', 'cwicly')}>
					<TextControl
						label={__('Message', 'cwicly')}
						value={message}
						onChange={(val) => setAttributes({ message: val })}
					/>
					<ToggleControl
						label={__('Show Loader', 'cwicly')}
						checked={showLoader}
						onChange={(val) => setAttributes({ showLoader: val })}
					/>
					<ToggleControl
						label={__('Full Overlay', 'cwicly')}
						checked={isOverlay}
						onChange={(val) => setAttributes({ isOverlay: val })}
						help={__('If enabled, this will cover the entire form during submission.', 'cwicly')}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="cc-wait-preview" style={{ 
					padding: '20px', 
					background: '#f9f9f9', 
					border: '1px dashed #ccc',
					textAlign: 'center',
					borderRadius: '4px'
				}}>
					{showLoader && (
						<div className="cc-loader-spinner" style={{ 
							width: '30px', 
							height: '30px', 
							border: '3px solid #eee', 
							borderTop: '3px solid #007cba', 
							borderRadius: '50%', 
							margin: '0 auto 10px',
						}}></div>
					)}
					<p style={{ margin: 0, fontWeight: '500' }}>{message}</p>
					<small style={{ color: '#666' }}>{__('(Hidden on frontend by default)', 'cwicly')}</small>
				</div>
			</div>
		</>
	);
}
