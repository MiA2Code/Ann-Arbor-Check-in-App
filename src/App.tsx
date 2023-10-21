import React, { useEffect } from 'react';
import './css/globel.scss';
import { Shell } from './components/calcite/Shell';
import { CalciteLoader } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-loader';
import '@esri/calcite-components/dist/calcite/calcite.css';
function App() {
	useEffect(() => {}, []);
	return (
		<div className="App">
			<CalciteLoader label={''} />
			<Shell />
		</div>
	);
}

export default App;
