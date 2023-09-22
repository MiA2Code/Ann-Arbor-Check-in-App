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
import { Leftrail } from './Leftrail';
export const Shell = () => {
	return (
		<CalciteShell contentBehind>
			<Leftrail />
			<MapViewDiv />
		</CalciteShell>
	);
};
