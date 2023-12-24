import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './../src/redux/store'
import { Provider } from 'react-redux';
import TagManager from 'react-gtm-module';


const root = ReactDOM.createRoot(document.getElementById('root'));



  const tagManagerArgs = {
    gtmId: 'GTM-MV5V2HW2',
    events: {
    sendUserInfo: 'userInfo'
    }
    }
    TagManager.initialize(tagManagerArgs)

root.render(
  <Provider store ={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />

  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
