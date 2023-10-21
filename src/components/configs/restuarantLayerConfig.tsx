import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer.js';
import PictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol.js';
import icon from '../../icons/restaurant.png';
export const RestaurantLayerConfig: __esri.FeatureLayerProperties = {
	url: process.env.REACT_APP_FEATURE_LAYER_RESTAURANT,
	popupEnabled: true,
	renderer: new SimpleRenderer({
		symbol: new PictureMarkerSymbol({
			url: icon,
			width: '18px',
			height: '18px',
		}),
	}),
};
