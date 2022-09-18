import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import dataReducer from './Redux/Data';
import hotelApiReducer from './Redux/HotelApi';
import adminAuthenticationReducer from './Redux/AdminAuthentication';

const store = configureStore({
  reducer: {
    data: dataReducer,
    hotelApi: hotelApiReducer,
    adminAuthentication: adminAuthenticationReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
