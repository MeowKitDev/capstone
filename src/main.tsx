import '@/i18n';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { ConfigProvider } from 'antd';
import App from './App.tsx';
import { store } from './data/index.ts';
import MySnackBarProvider from './providers/MySnackbarProvider.tsx';
import ReduxProvider from './providers/ReduxProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <MySnackBarProvider>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ff8904',
              colorPrimaryBg: '#EBEEF6',
              colorPrimaryBgHover: '#ff8904',
            },
            components: {
              Select: {
                optionActiveBg: '#E1EFFE',
              },
            },
          }}>
          <App />
        </ConfigProvider>
      </MySnackBarProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
