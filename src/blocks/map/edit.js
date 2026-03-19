import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
	const { latitude, longitude, zoom, markerTitle, markerContent, minHeight } = attributes;
	const mapRef = useRef(null);
	const leafletInstance = useRef(null);

	const blockProps = useBlockProps({
		style: {
			minHeight: minHeight,
			width: '100%',
			background: '#f0f0f0',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
		},
	});

	// Simplified Leaflet initialization for the editor
	useEffect(() => {
		if (typeof window.L === 'undefined') return;

		if (!leafletInstance.current && mapRef.current) {
			leafletInstance.current = window.L.map(mapRef.current).setView([latitude, longitude], zoom);
			window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; OpenStreetMap contributors'
			}).addTo(leafletInstance.current);

			if (markerTitle) {
				window.L.marker([latitude, longitude]).addTo(leafletInstance.current)
					.bindPopup(`<b>${markerTitle}</b><br>${markerContent}`)
					.openPopup();
			}
		} else if (leafletInstance.current) {
			leafletInstance.current.setView([latitude, longitude], zoom);
		}

		return () => {
			if (leafletInstance.current) {
				leafletInstance.current.remove();
				leafletInstance.current = null;
			}
		};
	}, [latitude, longitude, zoom, markerTitle, markerContent]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Map Settings', 'cwicly')}>
					<TextControl
						label={__('Latitude', 'cwicly')}
						type="number"
						value={latitude}
						onChange={(val) => setAttributes({ latitude: parseFloat(val) })}
					/>
					<TextControl
						label={__('Longitude', 'cwicly')}
						type="number"
						value={longitude}
						onChange={(val) => setAttributes({ longitude: parseFloat(val) })}
					/>
					<RangeControl
						label={__('Zoom', 'cwicly')}
						value={zoom}
						onChange={(val) => setAttributes({ zoom: val })}
						min={1}
						max={20}
					/>
					<TextControl
						label={__('Min Height', 'cwicly')}
						value={minHeight}
						onChange={(val) => setAttributes({ minHeight: val })}
					/>
				</PanelBody>
				<PanelBody title={__('Marker Settings', 'cwicly')}>
					<TextControl
						label={__('Marker Title', 'cwicly')}
						value={markerTitle}
						onChange={(val) => setAttributes({ markerTitle: val })}
					/>
					<TextareaControl
						label={__('Marker Content', 'cwicly')}
						value={markerContent}
						onChange={(val) => setAttributes({ markerContent: val })}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<div
					ref={mapRef}
					style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
				/>
				{!window.L && (
					<div style={{ zIndex: 1, textAlign: 'center', padding: '20px' }}>
						<p>{__('Leaflet Map Preview', 'cwicly')}</p>
						<small>{__('Lat: ', 'cwicly')}{latitude}, {__('Lng: ', 'cwicly')}{longitude}</small>
					</div>
				)}
			</div>
		</>
	);
}
