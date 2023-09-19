import React, { useEffect } from 'react';
import ArcGISMap from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import { BaseView } from '../configs/mapViewConfig';
export const MapViewDiv = () => {
	useEffect(() => {
		const map = new ArcGISMap({
			basemap: 'topo-vector',
		});
		const view = new BaseView(map, 'viewDiv').init();

		console.log(process.env.REACT_APP_MAP_DEFAULT_ZOOM);
		view.when(() => {
			console.log('load');
		});
	});
	return <div id="viewDiv"></div>;
};
