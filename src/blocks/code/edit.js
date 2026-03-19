import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function Edit({ attributes, setAttributes }) {
	const { content, language, showLineNumbers } = attributes;

	const blockProps = useBlockProps({
		className: 'cc-code-block-editor',
	});

	const languages = [
		{ label: 'JavaScript', value: 'javascript' },
		{ label: 'PHP', value: 'php' },
		{ label: 'CSS', value: 'css' },
		{ label: 'HTML', value: 'markup' },
		{ label: 'JSON', value: 'json' },
		{ label: 'Python', value: 'python' },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Code Settings', 'cwicly')}>
					<SelectControl
						label={__('Language', 'cwicly')}
						value={language}
						options={languages}
						onChange={(val) => setAttributes({ language: val })}
					/>
					<ToggleControl
						label={__('Show Line Numbers', 'cwicly')}
						checked={showLineNumbers}
						onChange={(val) => setAttributes({ showLineNumbers: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div style={{ background: '#2d2d2d', padding: '10px', borderRadius: '4px' }}>
					<div style={{ color: '#ccc', marginBottom: '5px', fontSize: '12px' }}>
						{language.toUpperCase()}
					</div>
					<TextareaControl
						value={content}
						onChange={(val) => setAttributes({ content: val })}
						rows={10}
						style={{
							backgroundColor: 'transparent',
							color: '#f8f8f2',
							fontFamily: 'monospace',
							border: 'none',
							resize: 'vertical',
							width: '100%',
						}}
					/>
				</div>
			</div>
		</>
	);
}
