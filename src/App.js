import React, {useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import { CreateContainer,Header,MainContainer } from './components'
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems} from "./utils/firebaseFunctions";
import { getAllDrinkItems } from './utils/firebaseFunctions';
import { actionType } from "./context/reducer";
import "@stripe/stripe-js";

const App = () => {

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
   
  return (
    <AnimatePresence exitBeforeEnter>
    
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />

    <main className='mt-24 p-8 w-full'>
      <Routes>
        <Route path ='/*' element={<MainContainer />} />
        <Route path ='/createItem' element={<CreateContainer/>} />
         </Routes>
         </main>
    </div>
    </AnimatePresence>
    
  )
}

export default App;
