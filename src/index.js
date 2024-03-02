import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";

import { Toaster } from 'react-hot-toast';
 // Import ToastContainer


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <App />
        <Toaster />{/* Include ToastContainer here */}
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
