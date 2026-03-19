import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl, ToggleControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

export default function Edit({ attributes, setAttributes, clientId }) {
	const { inputType, label, name, placeholder, required, uniqueID } = attributes;

	useEffect(() => {
		if (!uniqueID) {
			setAttributes({ uniqueID: `cc-field-${clientId.substring(0, 8)}` });
		}
		if (!name) {
			setAttributes({ name: `field_${clientId.substring(0, 4)}` });
		}
	}, [clientId, uniqueID, name, setAttributes]);

	const blockProps = useBlockProps({
		className: 'cc-field-editor',
	});

	const typeOptions = [
		{ label: __('Text', 'cwicly'), value: 'text' },
		{ label: __('Email', 'cwicly'), value: 'email' },
		{ label: __('Number', 'cwicly'), value: 'number' },
		{ label: __('Textarea', 'cwicly'), value: 'textarea' },
		{ label: __('Checkbox', 'cwicly'), value: 'checkbox' },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Field Settings', 'cwicly')}>
					<SelectControl
						label={__('Field Type', 'cwicly')}
						value={inputType}
						options={typeOptions}
						onChange={(val) => setAttributes({ inputType: val })}
					/>
					<TextControl
						label={__('Label', 'cwicly')}
						value={label}
						onChange={(val) => setAttributes({ label: val })}
					/>
					<TextControl
						label={__('Name (ID)', 'cwicly')}
						value={name}
						onChange={(val) => setAttributes({ name: val })}
						help={__('The programmatic name used for submission.', 'cwicly')}
					/>
					<TextControl
						label={__('Placeholder', 'cwicly')}
						value={placeholder}
						onChange={(val) => setAttributes({ placeholder: val })}
					/>
					<ToggleControl
						label={__('Required', 'cwicly')}
						checked={required}
						onChange={(val) => setAttributes({ required: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div className="cc-field-wrapper" style={{ marginBottom: '15px' }}>
					<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
						{label} {required && <span style={{ color: 'red' }}>*</span>}
					</label>
					{inputType === 'textarea' ? (
						<textarea
							placeholder={placeholder}
							style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', height: '80px' }}
							disabled
						/>
					) : inputType === 'checkbox' ? (
						<input type="checkbox" disabled />
					) : (
						<input
							type={inputType}
							placeholder={placeholder}
							style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
							disabled
						/>
					)}
				</div>
			</div>
		</>
	);
}
