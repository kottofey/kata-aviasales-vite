import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './fonts/OpenSans/OpenSans.scss';

import './main.scss';

import App from './components/App';
import filters from './redux/reducers/filtersReducer';
import {
  ticketsReducer,
  isLoading,
  fetchError,
  searchId,
  ticketsShown,
} from './redux/reducers/ticketsReducer';

const store = configureStore({
  reducer: {
    errors: fetchError,
    ticketsShown,
    searchId,
    filters,
    isLoading,
    tickets: ticketsReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     immutableCheck: false,
  //   }),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
