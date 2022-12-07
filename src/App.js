import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  CreateContainer,
  Header,
  MainContainer,
  StripeContainer,
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { getAllDrinkItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Services from "./components/Services";

const App = () => {
  const [/*{ foodItems, drinkItems },*/ dispatch] = useStateValue();

  useEffect(() => {
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

    fetchData()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //  const [showItem, setShowItem] = useState(false);

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
