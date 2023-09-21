import React, { useEffect } from 'react';
import {
	CalciteAction,
	CalciteActionBar,
	CalcitePanel,
	CalciteShell,
	CalciteShellPanel,
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import { MapViewDiv } from '../arcgis/MapViewDiv';
export const Shell = () => {
	useEffect(() => {
		const panel = document.getElementById(
			'panel-start'
		) as HTMLCalcitePanelElement;
		const shellPanel = document.getElementById(
			'shell-panel-start'
		) as HTMLCalciteShellPanelElement;
		const actions = shellPanel?.querySelectorAll('calcite-action');
		// eslint-disable-next-line
		actions[0].addEventListener('click', function (event: any) {
			console.log('clicked');
			panel.closed = !panel.closed;
			panel.heading = event.target.text;
		});
	}, []);
	return (
		<CalciteShell contentBehind>
			<CalciteShellPanel
				slot="panel-start"
				position="start"
				id="shell-panel-start"
				displayMode="float"
			>
				<CalciteActionBar slot="action-bar">
					<CalciteAction text={'Detail'}></CalciteAction>
				</CalciteActionBar>
				<CalcitePanel id="panel-start"></CalcitePanel>
			</CalciteShellPanel>
			<MapViewDiv />
		</CalciteShell>
	);
};
