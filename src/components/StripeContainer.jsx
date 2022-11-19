import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51M1wtOK5OOmq9dlGCM4kLJY0gcy7IBMguQzfhxQhrlG0C0DsfkIOvCmqM3MtL7xx0FWiku81RQ69buR3foIAWIL400WFW6E5Ps"
  );

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
