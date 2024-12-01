import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './fonts/OpenSans/OpenSans.scss';

import './main.scss';

import App from './components/App';
import filters from './redux/reducers/filters';
import {
  tickets,
  isLoading,
  fetchError,
  searchId,
  ticketsShown,
} from './redux/reducers/tickets';

const store = configureStore({
  reducer: {
    tickets,
    isLoading,
    errors: fetchError,
    searchId,
    ticketsShown,
    filters,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
