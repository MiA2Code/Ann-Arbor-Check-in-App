import React, { useEffect } from 'react';
import ArcGISMap from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
export const MapViewDiv = () => {
	useEffect(() => {
		const map = new ArcGISMap({
			basemap: 'topo-vector',
		});

		const view = new MapView({
			map,
			container: 'viewDiv',
			center: [-118.244, 34.052],
			zoom: 12,
		});
	});
	return <div id="viewDiv"></div>;
};
