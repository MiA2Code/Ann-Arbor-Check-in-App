import type Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Extent from '@arcgis/core/geometry/Extent.js';

export class BaseView {
	view: MapView;
	constructor(map: Map, container: string) {
		this.view = new MapView({
			map,
			container,
			zoom: process.env.REACT_APP_MAP_DEFAULT_ZOOM,
			center: [-83.732124, 42.279594],
			// extent: new Extent()
		});
	}

	init() {
		return this.view;
	}
}
