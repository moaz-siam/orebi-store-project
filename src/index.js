import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={Store}>
      <App />
  </Provider>
  </BrowserRouter>
);

