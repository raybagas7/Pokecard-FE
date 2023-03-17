import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import AgasApp from './components/AgasApp';
import store from './store';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AgasApp />
    </Provider>
  </BrowserRouter>
);
