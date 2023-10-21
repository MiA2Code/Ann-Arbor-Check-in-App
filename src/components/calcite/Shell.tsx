import React, { useEffect } from 'react';
import type MapView from '@arcgis/core/views/MapView';
import ArcGISMap from '@arcgis/core/Map.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { CalciteShell } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-shell';
import { Leftrail } from './Leftrail';

import { BaseView } from '../configs/mapViewConfig';
import LeftrailPanelHandler from '../utils/leftrailPanelHandler';
import { RestaurantLayerConfig } from '../configs/restuarantLayerConfig';
import { ParkLayerConfig } from '../configs/parkLayerConfig';

export const Shell = () => {
	let view: MapView;

	useEffect(() => {
		const map = new ArcGISMap({
			basemap: 'topo-vector',
		});
		const restaurantLayer = new FeatureLayer(RestaurantLayerConfig);
		const parkLayer = new FeatureLayer(ParkLayerConfig);
		map.add(restaurantLayer);
		map.add(parkLayer);
		view = new BaseView(map, 'viewDiv').init();
		view.ui.remove('zoom');

		LeftrailPanelHandler(view);
	}, []);

	return (
		<CalciteShell contentBehind>
			<Leftrail />
			<div id="viewDiv" />
		</CalciteShell>
	);
};
