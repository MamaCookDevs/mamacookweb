import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  CreateContainer,
  Header,
  MainContainer,
  CheckoutForm,
  StripeContainer
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { getAllDrinkItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Services from "./components/Services";

import Mama from './../src/img/MamaLogo.png'

const stripePromise = loadStripe(
  "pk_test_51M1wtOK5OOmq9dlGCM4kLJY0gcy7IBMguQzfhxQhrlG0C0DsfkIOvCmqM3MtL7xx0FWiku81RQ69buR3foIAWIL400WFW6E5Ps"
);

const App = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51M1wtOK5OOmq9dlGEyFkDa635JQtqBV7C6BB1YzuVhNNMlDkKsZeCZoAiHMiLcWRIjSdha6hntEWUzVHWeY32NrI00fNCTpXbM",
  };

  const [{ foodItems, drinkItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
    await getAllDrinkItems().then((data) => {
      dispatch({
        type: actionType.SET_DRINK_ITEMS,
        drinkItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [showItem, setShowItem] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-background">
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
        <Header />

        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/services" element={<Services />} />
            <Route path="/payment" element={<StripeContainer />} />
          </Routes>
        </main>
        
      </div>
    </AnimatePresence>
  );
};

export default App;
