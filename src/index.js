import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51M1wtOK5OOmq9dlGCM4kLJY0gcy7IBMguQzfhxQhrlG0C0DsfkIOvCmqM3MtL7xx0FWiku81RQ69buR3foIAWIL400WFW6E5Ps"
);

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
