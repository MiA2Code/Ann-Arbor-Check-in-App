import React, { useEffect } from 'react';
import type MapView from '@arcgis/core/views/MapView';
import ArcGISMap from '@arcgis/core/Map.js';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { CalciteShell } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-shell';
import { Leftrail } from './Leftrail';

import { BaseView } from '../configs/mapViewConfig';
import LeftrailPanelHandler from '../utils/leftrailPanelHandler';
import { ParkLayerConfig } from '../configs/parkLayerConfig';
// widget
import LayerList from '@arcgis/core/widgets/LayerList';
import Legend from '@arcgis/core/widgets/Legend';
import Search from '@arcgis/core/widgets/Search';
import RestaurantClass from '../configs/RestaurantLayerClass';
export const Shell = () => {
	let view: MapView;

	useEffect(() => {
		const map = new ArcGISMap({
			basemap: 'topo-vector',
		});

		view = new BaseView(map, 'viewDiv').init();
		view.ui.remove('zoom');

		const layerList = new LayerList({
			view,
			selectionEnabled: true,
			container: 'layers-container',
		});

		const legend = new Legend({
			view,
			container: 'legends-container',
		});

		// const search = new Search({
		// 	view,
		// 	sources: [restLayerConfig.searchSource as __esri.SearchSourceProperties],
		// 	includeDefaultSources: false,
		// });

		// view.ui.add(search, 'top-right');
		view.when(() => {
			LeftrailPanelHandler(view);
		});
	});

	return (
		<CalciteShell contentBehind>
			<Leftrail />
			<div id="viewDiv" />
		</CalciteShell>
	);
};
