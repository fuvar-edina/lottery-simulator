import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/scss/main.css";
import LotterySimulator from "./LotterySimulator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <LotterySimulator />
    </React.StrictMode>
);
