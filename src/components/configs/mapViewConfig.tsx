import type Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Extent from '@arcgis/core/geometry/Extent.js';
import RestaurantClass from './RestaurantLayerClass';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { ParkLayerConfig } from './parkLayerConfig';

export class BaseView {
	view: MapView;
	constructor(map: Map, container: string) {
		const restLayerConfig = RestaurantClass();
		const restaurantLayer = restLayerConfig.layer;
		const parkLayer = new FeatureLayer(ParkLayerConfig);

		map.add(restaurantLayer);
		map.add(parkLayer);
		this.view = new MapView({
			map,
			container,
			zoom: 13,
			center: [
				process.env.REACT_APP_MAP_DEFAULT_CENTER_X,
				process.env.REACT_APP_MAP_DEFAULT_CENTER_Y,
			],
			constraints: {
				minZoom: 12,
				geometry: new Extent({
					xmax: process.env.REACT_APP_MAP_DEFAULT_EXTEND_MAX_X,
					xmin: process.env.REACT_APP_MAP_DEFAULT_EXTEND_MIN_X,
					ymax: process.env.REACT_APP_MAP_DEFAULT_EXTEND_MAX_Y,
					ymin: process.env.REACT_APP_MAP_DEFAULT_EXTEND_MIN_Y,
				}),
			},
			popup: {
				defaultPopupTemplateEnabled: true,
			},
			padding: {
				left: 49,
			},
		});
	}

	init() {
		return this.view;
	}
}
