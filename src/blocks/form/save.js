import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { actionType, emailTo, webhookUrl, redirectUrl, uniqueID } = attributes;
	const blockProps = useBlockProps.save({
		className: 'cc-form',
		'data-action-type': actionType,
		'data-email-to': actionType === 'email' ? emailTo : undefined,
		'data-webhook-url': actionType === 'webhook' ? webhookUrl : undefined,
		'data-redirect-url': actionType === 'redirect' ? redirectUrl : undefined,
		'data-form-id': uniqueID,
	});

	return (
		<form {...blockProps}>
			<InnerBlocks.Content />
		</form>
	);
}
