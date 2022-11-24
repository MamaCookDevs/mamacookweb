import React from "react";

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51M1wtOK5OOmq9dlGCM4kLJY0gcy7IBMguQzfhxQhrlG0C0DsfkIOvCmqM3MtL7xx0FWiku81RQ69buR3foIAWIL400WFW6E5Ps');
  }
  
  return stripePromise;
};

export default getStripe;
