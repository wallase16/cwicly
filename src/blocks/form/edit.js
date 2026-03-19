import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { actionType, emailTo, emailSubject, webhookUrl, redirectUrl, successMessage, errorMessage, uniqueID } = attributes;

	useEffect(() => {
		if (!uniqueID) {
			setAttributes({ uniqueID: `cc-form-${clientId.substring(0, 8)}` });
		}
	}, [clientId, uniqueID, setAttributes]);

	const blockProps = useBlockProps({
		className: 'cc-form-editor',
	});

	const actionOptions = [
		{ label: __('Email', 'cwicly'), value: 'email' },
		{ label: __('Webhook', 'cwicly'), value: 'webhook' },
		{ label: __('Redirect Only', 'cwicly'), value: 'redirect' },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Form Actions', 'cwicly')}>
					<SelectControl
						label={__('Action Type', 'cwicly')}
						value={actionType}
						options={actionOptions}
						onChange={(val) => setAttributes({ actionType: val })}
					/>
					{actionType === 'email' && (
						<>
							<TextControl
								label={__('Send To', 'cwicly')}
								value={emailTo}
								onChange={(val) => setAttributes({ emailTo: val })}
								placeholder={__('Enter email address', 'cwicly')}
							/>
							<TextControl
								label={__('Subject', 'cwicly')}
								value={emailSubject}
								onChange={(val) => setAttributes({ emailSubject: val })}
							/>
						</>
					)}
					{actionType === 'webhook' && (
						<TextControl
							label={__('Webhook URL', 'cwicly')}
							value={webhookUrl}
							onChange={(val) => setAttributes({ webhookUrl: val })}
							placeholder={__('https://example.com/webhook', 'cwicly')}
						/>
					)}
					{actionType === 'redirect' && (
						<TextControl
							label={__('Redirect URL', 'cwicly')}
							value={redirectUrl}
							onChange={(val) => setAttributes({ redirectUrl: val })}
							placeholder={__('/thank-you', 'cwicly')}
						/>
					)}
				</PanelBody>
				<PanelBody title={__('Messages', 'cwicly')} initialOpen={false}>
					<TextareaControl
						label={__('Success Message', 'cwicly')}
						value={successMessage}
						onChange={(val) => setAttributes({ successMessage: val })}
					/>
					<TextareaControl
						label={__('Error Message', 'cwicly')}
						value={errorMessage}
						onChange={(val) => setAttributes({ errorMessage: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<form {...blockProps} onSubmit={(e) => e.preventDefault()}>
				<InnerBlocks
					template={[
						['cwicly/field', { label: __('Name', 'cwicly'), inputType: 'text' }],
						['cwicly/field', { label: __('Email', 'cwicly'), inputType: 'email' }],
						['cwicly/button', { text: __('Submit', 'cwicly') }],
					]}
				/>
			</form>
		</>
	);
}
