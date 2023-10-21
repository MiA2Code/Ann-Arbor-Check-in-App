import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/globel.scss';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { setAssetPath } from '@esri/calcite-components/dist/components';
// CDN hosted assets
setAssetPath(window.location.href);

const root = createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient();
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
