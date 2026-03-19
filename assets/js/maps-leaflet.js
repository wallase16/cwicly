document.addEventListener('DOMContentLoaded', function() {
	const mapElements = document.querySelectorAll('.cc-map-leaflet');
	if (mapElements.length === 0) return;

	// Fix Leaflet icon paths
	if (typeof cwiclyMapData !== 'undefined' && cwiclyMapData.iconDir) {
		delete L.Icon.Default.prototype._getIconUrl;
		L.Icon.Default.mergeOptions({
			iconRetinaUrl: cwiclyMapData.iconDir + 'marker-icon-2x.png',
			iconUrl: cwiclyMapData.iconDir + 'marker-icon.png',
			shadowUrl: cwiclyMapData.iconDir + 'marker-shadow.png',
		});
	}

	mapElements.forEach(function(el) {
		const lat = parseFloat(el.getAttribute('data-lat'));
		const lng = parseFloat(el.getAttribute('data-lng'));
		const zoom = parseInt(el.getAttribute('data-zoom'));
		const title = el.getAttribute('data-title');
		const content = el.getAttribute('data-content');

		const map = L.map(el).setView([lat, lng], zoom);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; OpenStreetMap contributors'
		}).addTo(map);

		if (title || content) {
			const marker = L.marker([lat, lng]).addTo(map);
			if (title || content) {
				let popupContent = '';
				if (title) popupContent += `<b>${title}</b>`;
				if (title && content) popupContent += '<br>';
				if (content) popupContent += content;
				marker.bindPopup(popupContent).openPopup();
			}
		}
	});
});
