import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import './styles/index.css';
import { GlobalProvider } from './context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);