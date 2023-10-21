import React, { useEffect } from 'react';
import type MapView from '@arcgis/core/views/MapView';
import ArcGISMap from '@arcgis/core/Map.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import {
	CalciteShell,
	CalciteAction,
	CalciteActionBar,
	CalcitePanel,
	CalciteShellPanel,
} from '@esri/calcite-components-react';

import { Leftrail } from './Leftrail';

import { BaseView } from '../configs/mapViewConfig';
import LeftrailPanelHandler from '../utils/leftrailPanelHandler';
import { restaurantLayerConfig } from '../configs/restuarantLayerConfig';

export const Shell = () => {
	let view: MapView;

	useEffect(() => {
		const map = new ArcGISMap({
			basemap: 'topo-vector',
		});
		const restaurantLayer = new FeatureLayer(restaurantLayerConfig);
		map.add(restaurantLayer);
		view = new BaseView(map, 'viewDiv').init();
		view.ui.remove('zoom');

		LeftrailPanelHandler(view);
	});

	return (
		<CalciteShell contentBehind>
			<Leftrail />
			<div id="viewDiv" />
		</CalciteShell>
	);
};
