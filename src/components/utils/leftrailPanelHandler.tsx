import Map from '@arcgis/core/Map';

export default function LeftrailPanelHandler(map: Map) {
	let activeWidget: any;

	const handleActionBarClick = ({ target }) => {
		if (target.tagName !== 'CALCITE-ACTION') {
			return;
		}

		if (activeWidget) {
			(
				document.querySelector(
					`[data-action-id=${activeWidget}]`
				) as HTMLCalciteActionElement
			).active = false;
			document.querySelector(`[data-panel-id=${activeWidget}]`).hidden = true;
		}

		const nextWidget = target.dataset.actionId;
		if (nextWidget !== activeWidget) {
			document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
			document.querySelector(`[data-panel-id=${nextWidget}]`).hidden = false;
			activeWidget = nextWidget;
		} else {
			activeWidget = null;
		}
	};

	document
		.querySelector('calcite-action-bar')
		.addEventListener('click', handleActionBarClick);

	let actionBarExpanded = false;

	document.addEventListener('calciteActionBarToggle', (event) => {
		actionBarExpanded = !actionBarExpanded;
		view.padding = {
			left: actionBarExpanded ? 150 : 49,
		};
	});

	document.querySelector('calcite-shell').hidden = false;
	document.querySelector('calcite-loader').hidden = true;
}
