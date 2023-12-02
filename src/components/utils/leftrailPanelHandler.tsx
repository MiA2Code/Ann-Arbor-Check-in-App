import type MapView from '@arcgis/core/views/MapView';

export default function LeftrailPanelHandler(view: MapView) {
	// eslint-disable-next-line
	let activeWidget: any;
	// eslint-disable-next-line
	const handleActionBarClick = ({ target }: any) => {
		if (target.tagName !== 'CALCITE-ACTION') {
			return;
		}

		let button = document.querySelector(
			`[data-action-id=${activeWidget}]`
		) as HTMLCalciteActionElement;
		let panel = document.querySelector(
			`[data-panel-id=${activeWidget}]`
		) as HTMLCalcitePanelElement;

		// eslint-disable-next-line
		if (activeWidget) {
			button.active = false;
			panel.hidden = true;
		}

		const nextWidget = target.dataset.actionId;

		button = document.querySelector(
			`[data-action-id=${nextWidget}]`
		) as HTMLCalciteActionElement;
		panel = document.querySelector(
			`[data-panel-id=${nextWidget}]`
		) as HTMLCalcitePanelElement;

		if (nextWidget !== activeWidget) {
			button.active = true;
			panel.hidden = false;
			panel.closed = false;
			activeWidget = nextWidget;
		} else {
			activeWidget = null;
		}
	};

	const actionBar = document.querySelector(
		'calcite-action-bar'
	) as HTMLCalciteActionBarElement;
	actionBar.addEventListener('click', handleActionBarClick);
	// eslint-disable-next-line
	let actionBarExpanded = false;

	document.addEventListener('calciteActionBarToggle', (event) => {
		actionBarExpanded = !actionBarExpanded;
		view.padding = {
			left: actionBarExpanded ? 150 : 49,
		};
	});

	const shell = document.querySelector(
		'calcite-shell'
	) as HTMLCalciteShellElement;
	shell.hidden = false;
	const loader = document.querySelector(
		'calcite-loader'
	) as HTMLCalciteLoaderElement;
	loader.hidden = true;
}
