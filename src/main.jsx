import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './main.scss';
import App from './components/App';
import * as filters from './redux/reducers/filters';

const store = configureStore({
  reducer: {
    top: filters.topFilterReducer,
    side: filters.sideFilterReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
