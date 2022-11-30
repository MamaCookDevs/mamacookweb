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
import loading from "./../img/loading_6.json";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  theme: "stripe",
  style: {
    base: {
      iconColor: "#fda329",
      color: "#1a1a1a",
      fontWeight: 500,
      fontFamily: "Poppins, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      borderRadius: "5px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#d9d9d9" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm({ amount }) {
  const [success, setSuccess] = useState(false);
  const [isLoading, setLoading] = useState('hidden');
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
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
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-10 items-center"
          >
            <p className="font-semibold text-2xl">Complete Your Payment</p>
            <fieldset className="w-[80%] gap-4 p-10 bg-white border-gray-50 border-2 drop-shadow-md rounded-lg">
              <div className="">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>

            <motion.button
              whileHover={{ scale: 1.1 }}
              className="flex flex-row w-[30%] h-20 hover:bg-background2 hover:drop-shadow-secondBackground hover:shadow-sm-light bg-secondColor text-white rounded-3xl items-center justify-center"
              onClick={() => setLoading('')}
            >
              <Lottie className={`flex w-24 h-24 align-middle ${isLoading}`} animationData={loading} loop={true} />
              <p className="flex">
                Pay
              </p>
            </motion.button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex w-72 h-72 mt-[10%]">
            <Lottie animationData={check} loop={true} />
          </div>

          <p className="flex justify-center text-center font-semibold text-2xl">
            Purchase Successful
          </p>

          <motion.h3
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            loop={true}
          ></motion.h3>

          <Link to="/*">
            <p className="underline text-background2 cursor-pointer mt-5">
              Go back home
            </p>
          </Link>
        </div>
      )}
    </>
  );
}
