import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";

import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import {store} from "store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </GlobalStyles>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
