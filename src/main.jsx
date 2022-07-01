import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './redux/store';


axios.defaults.baseURL = 'https://api.github.com/users/';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
)
