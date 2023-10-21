import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer.js';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol.js';
import Color from '@arcgis/core/Color.js';
export const ParkLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.REACT_APP_FEATURE_LAYER_PARK,
	popupEnabled: true,
	renderer: new SimpleRenderer({
		symbol: new SimpleFillSymbol({
			color: new Color([34, 139, 34, 0.5]),
			outline: {
				color: new Color([128, 128, 128, 0.5]),
				width: '0.5px',
			},
		}),
	}),
};
