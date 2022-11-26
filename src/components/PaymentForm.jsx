import axios from "axios";
import React, { useState } from "react";
import Lottie from "lottie-react";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import check from "./../img/check.json";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm({ amount }) {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardNumberElement,
        CardCvcElement,
        CardExpiryElement
      ),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 100,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  return (
    <>
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-10 items-center"
        >
          <p className="font-semibold text-2xl">Complete Your Payment</p>
          <fieldset className="w-[80%] p-10 bg-[#7795f8]">
            <div className="FormRow">
              <CardNumberElement options={CARD_OPTIONS} />
              <CardCvcElement options={CARD_OPTIONS} />
              <CardExpiryElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="flex w-[30%] h-20 hover:bg-background2 hover:drop-shadow-secondBackground hover:shadow-sm-light bg-secondColor text-white rounded-3xl items-center justify-center"
          >
            Pay
          </motion.button>
        </form>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex w-72 h-72 mt-[10%]">
          <Lottie animationData={check} loop={true}/>
          </div>
        
          <h2 className="flex justify-center text-center font-semibold text-2xl">
            Purchase Successful
          </h2>
        </div>
      )}
    </>
  );
}
