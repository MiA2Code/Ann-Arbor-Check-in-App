import React from 'react';
import './css/globel.scss';
import { Shell } from './components/calcite/Shell';
import { CalciteLoader } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-loader';
function App() {
	return (
		<div className="App">
			<CalciteLoader label={''} />
			<Shell />
		</div>
	);
}

export default App;
