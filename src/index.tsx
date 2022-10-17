import React  from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from 'app/store';
import { App } from 'App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <React.Fragment>
    <Provider store={store}>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      <App />
    </Provider>
  </React.Fragment>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
