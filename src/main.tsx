import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import { QueryClientProvider } from 'react-query';

import './index.css';
import App from './App';
import { store } from './store'
import queryClient from "./queryClient.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <FluentProvider theme={webLightTheme}>
        <App />
      </FluentProvider>
    </QueryClientProvider>
  </Provider>
    // </React.StrictMode>
);