import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Esto es código JSX (html + JS)
  //  {/* strict mode,equivalente a una funcion que cuando declaro que esta activado, todo lo encerrado tiene modo estricto*/}
  // {/* en JS se pondria "use strict" */}
  <React.StrictMode>
    {/* equivalente a: const app=()=>{pasan un monton de coss que terminan renderiazando la pantalla} */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
