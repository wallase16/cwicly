import { useBlockProps, InspectorControls, BlockControls, MediaPlaceholder, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, Button, ToolbarGroup, ToolbarButton, ToggleControl, SelectControl, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { getBlockID, getCombinedClassName } from '../../utils/index.js';

import CwiclyInspector from '../../components/framework/CwiclyInspector.js';
import DesignPanel from '../../components/framework/DesignPanel.js';

export default function Edit({ attributes, setAttributes, clientId, name }) {
	const {
		images,
		galleryLayout,
		columns,
		gap,
		imageLightbox,
		classID,
	} = attributes;

	// Auto-generate classID on first insertion
	useEffect(() => {
		if (!classID) {
			setAttributes({ classID: clientId.replace(/-/g, '').substring(0, 8) });
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const blockProps = useBlockProps({
		id: getBlockID(attributes, clientId),
		className: getCombinedClassName(attributes, `cc-gallery cc-${galleryLayout}`),
	});

	const { inspectortab, pseudoClass } = useSelect((select) => ({
		inspectortab: select('cwicly/base').getInspectorPosition(),
		pseudoClass: select('cwicly/base').getPseudoClass(),
	}), []);

	const onSelectImages = (newImages) => {
		const formattedImages = newImages.map(img => ({
			id: img.id,
			url: img.url,
			alt: img.alt,
		}));
		setAttributes({ images: formattedImages });
	};

	const removeImages = () => {
		setAttributes({ images: [] });
	};

	return (
		<>
			<BlockControls>
				{images.length > 0 && (
					<ToolbarGroup>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectImages}
								allowedTypes={['image']}
								multiple={true}
								value={images.map(img => img.id)}
								render={({ open }) => (
									<ToolbarButton
										onClick={open}
										icon="edit"
										label={__('Edit Gallery', 'cwicly')}
									/>
								)}
							/>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
			</BlockControls>
			<InspectorControls>
				<CwiclyInspector
					attributes={attributes}
					setAttributes={setAttributes}
					name={name}
				/>

				{inspectortab.tab === 'primary' && (
					<PanelBody title={__('Gallery Settings', 'cwicly')}>
						<SelectControl
							label={__('Layout', 'cwicly')}
							value={galleryLayout}
							options={[
								{ label: __('Grid', 'cwicly'), value: 'grid' },
								{ label: __('Masonry', 'cwicly'), value: 'masonry' },
							]}
							onChange={(val) => setAttributes({ galleryLayout: val })}
						/>
						<RangeControl
							label={__('Columns (Desktop)', 'cwicly')}
							value={columns.lg}
							onChange={(val) => setAttributes({ columns: { ...columns, lg: val } })}
							min={1}
							max={12}
						/>
						<ToggleControl
							label={__('Lightbox', 'cwicly')}
							checked={imageLightbox}
							onChange={(val) => setAttributes({ imageLightbox: val })}
						/>
						{images.length > 0 && (
							<Button isDestructive onClick={removeImages}>
								{__('Clear Gallery', 'cwicly')}
							</Button>
						)}
					</PanelBody>
				)}

				{inspectortab.tab === 'design' && (
					<DesignPanel
						attributes={attributes}
						setAttributes={setAttributes}
						pseudoClass={pseudoClass}
					/>
				)}
			</InspectorControls>
			<div {...blockProps}>
				{images.length > 0 ? (
					<div className="cc-gallery-preview" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns.lg}, 1fr)`, gap: gap.lg }}>
						{images.map((img) => (
							<div key={img.id} className="cc-gallery-item">
								<img src={img.url} alt={img.alt} style={{ width: '100%', height: 'auto', display: 'block' }} />
							</div>
						))}
					</div>
				) : (
					<MediaPlaceholder
						onSelect={onSelectImages}
						allowedTypes={['image']}
						multiple={true}
						labels={{ title: __('Cwicly Gallery', 'cwicly') }}
					/>
				)}
			</div>
		</>
	);
}
