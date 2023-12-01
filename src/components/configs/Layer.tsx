import PopupTemplate from '@arcgis/core/PopupTemplate';
import MapView from '@arcgis/core/views/MapView';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';

export interface LayerProps {
	layer: FeatureLayer;
	searchSource?: LayerSearchSource;
}

export default class Layer {
	layer: __esri.FeatureLayer;
	searchSource?: __esri.LayerSearchSource;

	constructor(layerProps: LayerProps) {
		this.layer = layerProps.layer;
		this.searchSource = layerProps.searchSource;
	}
}
