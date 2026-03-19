import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl, SelectControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';

const TEMPLATE = [
	['cwicly/sliderchild', {}],
	['cwicly/sliderchild', {}],
	['cwicly/sliderchild', {}],
];

export default function Edit({ attributes, setAttributes }) {
	const {
		sliderAutoPlay,
		sliderAutoPlayDuration,
		sliderLoop,
		sliderDirection,
		sliderFade,
		sliderNumberPerWindow,
		sliderSpaceBetween,
		sliderDots,
		sliderButtons,
		sliderGrabCursor,
		sliderCentered,
	} = attributes;

	const blockProps = useBlockProps({
		className: 'cc-slider-editor-wrapper',
		style: {
			border: '2px dashed #7b2cbf',
			padding: '20px',
			borderRadius: '12px',
			background: 'rgba(123, 44, 191, 0.05)',
		}
	});

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Slider Settings', 'cwicly')}>
					<ToggleControl
						label={__('Autoplay', 'cwicly')}
						checked={sliderAutoPlay}
						onChange={(val) => setAttributes({ sliderAutoPlay: val })}
					/>
					{sliderAutoPlay && (
						<TextControl
							label={__('Autoplay Duration (ms)', 'cwicly')}
							value={sliderAutoPlayDuration}
							onChange={(val) => setAttributes({ sliderAutoPlayDuration: val })}
						/>
					)}
					<ToggleControl
						label={__('Loop', 'cwicly')}
						checked={sliderLoop}
						onChange={(val) => setAttributes({ sliderLoop: val })}
					/>
					<SelectControl
						label={__('Direction', 'cwicly')}
						value={sliderDirection}
						options={[
							{ label: __('Horizontal', 'cwicly'), value: 'horizontal' },
							{ label: __('Vertical', 'cwicly'), value: 'vertical' },
						]}
						onChange={(val) => setAttributes({ sliderDirection: val })}
					/>
					<ToggleControl
						label={__('Fade Effect', 'cwicly')}
						checked={sliderFade}
						onChange={(val) => setAttributes({ sliderFade: val })}
					/>
					<ToggleControl
						label={__('Grab Cursor', 'cwicly')}
						checked={sliderGrabCursor}
						onChange={(val) => setAttributes({ sliderGrabCursor: val })}
					/>
					<ToggleControl
						label={__('Centered Slides', 'cwicly')}
						checked={sliderCentered}
						onChange={(val) => setAttributes({ sliderCentered: val })}
					/>
				</PanelBody>
				<PanelBody title={__('Pagination & Navigation', 'cwicly')} initialOpen={false}>
					<ToggleControl
						label={__('Show Dots', 'cwicly')}
						checked={sliderDots}
						onChange={(val) => setAttributes({ sliderDots: val })}
					/>
					<ToggleControl
						label={__('Show Arrows', 'cwicly')}
						checked={sliderButtons}
						onChange={(val) => setAttributes({ sliderButtons: val })}
					/>
				</PanelBody>
			</InspectorControls>

			<div className="cc-slider-header" style={{ marginBottom: '15px', fontWeight: 'bold', color: '#7b2cbf', display: 'flex', alignItems: 'center', gap: '8px' }}>
				<span className="dashicons dashicons-images-alt2"></span>
				{__('Cwicly Slider Container', 'cwicly')}
			</div>

			<InnerBlocks
				allowedBlocks={['cwicly/sliderchild']}
				template={TEMPLATE}
				orientation={sliderDirection}
			/>
		</div>
	);
}
