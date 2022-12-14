import React, {useState, useRef, useEffect} from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import  FoodContainer  from "./FoodContainer";
import DrinkContainer from "./DrinkContainer";
import StripeContainer from "./StripeContainer";
import Footer from "./Footer";
import CartContainer from "./CartContainer";
import Carousel from "./Carousel";

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-background">
      <HomeContainer />

      <Carousel/>

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p
            className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content 
          before:w-32 before:h-1 before:-bottom-2 before:left-0 
          before:bg-red-900
          transition-all ease-in-out duration-100"
          >
            Our Cuisines
          </p>


          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-red-700 hover:bg-secondColor hover:shadow-lg cursor-pointer
          flex items-center justify-center transition-all duration-100 ease-in-out"
          onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-red-700 hover:bg-secondColor hover:shadow-lg cursor-pointer
          flex items-center justify-center transition-all duration-100 ease-in-out"
          onClick={() => setScrollValue (+200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "Main Course")}
        />
      </section>

      <FoodContainer />
      <DrinkContainer />

      <Footer />
      {cartShow && (
        <CartContainer />
      )}
    </div>
  );
};

export default MainContainer;
