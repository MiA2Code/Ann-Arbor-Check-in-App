import React, { useEffect } from 'react';
import {
	CalciteAction,
	CalciteActionBar,
	CalcitePanel,
	CalciteShellPanel,
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-shell-panel';

import '../../css/leftrail.scss';

interface LeftrailButtonPanel {
	id: string;
	actionText: string;
	panelHeader: string;
	icon: string;
	container: string;
}

const leftrailProps = [
	{
		id: 'detail',
		actionText: 'Detail',
		panelHeader: 'Detail',
		icon: 'information',
		container: 'detail-container',
	},
	{
		id: 'layer',
		actionText: 'Layers',
		panelHeader: 'Layers',
		icon: 'layers',
		container: 'layers-container',
	},
] as LeftrailButtonPanel[];
// eslint-disble-next-line
function panelCloseHander(event: any) {
	const panel = event.target as HTMLCalcitePanelElement;
	const id = panel.getAttribute('data-panel-id');
	const button = document.querySelector(
		`[data-action-id=${id}]`
	) as HTMLCalciteActionElement;
	button.active = false;
}
export const Leftrail = () => {
	return (
		<CalciteShellPanel
			slot="panel-start"
			position="start"
			id="shell-panel-start"
			displayMode="float"
		>
			<CalciteActionBar slot="action-bar">
				<>
					{leftrailProps.map((item, index) => {
						return (
							<CalciteAction
								key={index}
								data-action-id={`${item.id}`}
								text={item.actionText}
								icon={item.icon}
							></CalciteAction>
						);
					})}
				</>
			</CalciteActionBar>
			<>
				{leftrailProps.map((item, index) => {
					return (
						<CalcitePanel
							key={index}
							heading={item.panelHeader}
							data-panel-id={`${item.id}`}
							hidden
							closed
							closable
							onCalcitePanelClose={panelCloseHander}
						>
							<div
								className="leftrail-panel-container"
								id={`${item.container}`}
							></div>
						</CalcitePanel>
					);
				})}
			</>
		</CalciteShellPanel>
	);
};
