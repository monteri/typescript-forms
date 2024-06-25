import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import './index.css';
import App from './App';

import queryClient from './queryClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <FluentProvider theme={webLightTheme}>
          <App />
        </FluentProvider>
      </QueryClientProvider>
    </React.StrictMode>
);