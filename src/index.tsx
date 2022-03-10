import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import * as serviceWorker from "./serviceWorker";
// import { HistoryRouter } from "./history-router";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { Link, Route, Routes } from "react-router-dom";
const history = createBrowserHistory();
const Foo = () => <div>1</div>;
const Bar = () => <div>2</div>;
const Qux = () => <div>123</div>;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <CssBaseline />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
