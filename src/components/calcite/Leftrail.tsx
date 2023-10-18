import React, { useEffect } from 'react';
import {
	CalciteAction,
	CalciteActionBar,
	CalcitePanel,
	CalciteShellPanel,
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-shell-panel';

interface LeftrailButtonPanel {
	id: string;
	actionText: string;
	panelId: string;
	panelHeader: string;
	icon: string;
}

const leftrailProps = [
	{
		id: 'detail',
		actionText: 'Detail',
		panelHeader: 'Detail',
		icon: 'information',
	},
	{
		id: 'layer',
		actionText: 'Layers',
		panelHeader: 'Layers',
		icon: 'layers',
	},
] as LeftrailButtonPanel[];

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
								data-action-id={`${item.id}-action`}
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
							data-panel-id={`${item.id}-panel`}
							hidden
						>
							<div id={`${item.id}-container`}></div>
						</CalcitePanel>
					);
				})}
			</>
		</CalciteShellPanel>
	);
};
