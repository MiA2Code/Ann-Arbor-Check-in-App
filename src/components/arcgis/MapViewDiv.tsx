import React, { useEffect } from 'react';
import ArcGISMap from '@arcgis/core/Map.js';
import type MapView from '@arcgis/core/views/MapView.js';
import { BaseView } from '../configs/mapViewConfig';

export const MapViewDiv = () => {
	let view: MapView;

	useEffect(() => {
		const map = new ArcGISMap({
			basemap: 'topo-vector',
		});
		view = new BaseView(map, 'viewDiv').init();
	});

	return <div id="viewDiv"></div>;
};
