import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.scss';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { setAssetPath } from '@esri/calcite-components/dist/components';
// CDN hosted assets
setAssetPath('https://js.arcgis.com/calcite-components/1.8.0/assets');
const root = createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient();
root.render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<App />
		<ReactQueryDevtools />
	</QueryClientProvider>
	// </React.StrictMode>
);
