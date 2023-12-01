import PopupTemplate from '@arcgis/core/PopupTemplate';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import LayerSearchSource from '@arcgis/core/widgets/Search/LayerSearchSource';
import { RestaurantLayerConfig } from './restuarantLayerConfig';
import Layer from './Layer';
import { ContentNodeBuilder, type Line } from '../utils/ContentNode';

export default function RestaurantClass() {
	const layer = new FeatureLayer(RestaurantLayerConfig);
	const searchSource = new LayerSearchSource({
		layer,
		searchFields: ['name', 'address', 'subCategory'],
		displayField: 'name',
		suggestionTemplate: '{name}, {address}, type: {subCategory}',
		exactMatch: false,
		outFields: ['*'],
		name: 'Restaurant',
		placeholder: 'Restaurant',
		maxResults: 6,
		maxSuggestions: 6,
		suggestionsEnabled: true,
		minSuggestCharacters: 0,
		popupEnabled: true,
	});

	const layerConfig = {
		layer,
		searchSource,
	};

	const restaurantLayer = new Layer(layerConfig);

	function popup(event: any) {
		const graphic = event.graphic as __esri.Graphic;
		const { attributes } = graphic;

		const restaurantData = {
			name: attributes.name,
			address: attributes.address,
			url: attributes.url,
			phone: attributes.phone,
		};

		function InfoDrawer() {
			const container = document.getElementById(
				'detail-container'
			) as HTMLElement;
			while (container.lastChild) {
				container.removeChild(container.lastChild);
			}

			const contentData = [
				{
					type: 'label',
					class: ['textGrouping'],
					value: 'Name:',
				},
				{
					type: 'value',
					class: ['textGrouping'],
					value: restaurantData.name,
				},
				{
					type: 'label',
					class: ['textGrouping'],
					value: 'Address:',
				},
				{
					type: 'value',
					class: ['textGrouping'],
					value: restaurantData.address,
				},
				{
					type: 'label',
					class: [],
					value: 'Phone:',
				},
				{
					type: 'value',
					class: [],
					value: restaurantData.phone,
				},
				{
					type: 'label',
					class: [],
					value: 'Website:',
				},
				{
					type: 'value',
					class: [],
					value: restaurantData.url,
				},
			] as Line[];

			container.appendChild(ContentNodeBuilder(contentData));
		}

		const contentData = [
			{
				type: 'label',
				class: ['textGrouping'],
				value: 'Name:',
			},
			{
				type: 'value',
				class: ['textGrouping'],
				value: restaurantData.name,
			},
			{
				type: 'label',
				class: ['textGrouping'],
				value: 'Address:',
			},
			{
				type: 'value',
				class: ['textGrouping'],
				value: restaurantData.address,
			},
			{
				type: 'label',
				class: [],
				value: 'Phone:',
			},
			{
				type: 'value',
				class: [],
				value: restaurantData.phone,
			},
			{
				type: 'label',
				class: [],
				value: 'Website:',
			},
			{
				type: 'value',
				class: [],
				value: restaurantData.url,
			},
		] as Line[];

		InfoDrawer();

		return ContentNodeBuilder(contentData);
	}

	restaurantLayer.layer.popupTemplate = new PopupTemplate({
		title: '{name}',
		content: popup,
	});

	return restaurantLayer;
}
