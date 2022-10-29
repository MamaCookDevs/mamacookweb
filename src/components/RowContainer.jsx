import React from "react";
import FriedRice from "../img/fried rice.png";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

export default function RowContainer({ flag }) {
  return (
    <div
      className={`w-full my-12 bg-rowBg${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      <div className="w-300 md:w-340 h-auto my-12 p-2 backdrop-blur-lg hover:shadow-lg bg-gray-100 rounded-lg">
        <div className="w-full flex items-center justify-between">
          <motion.div
            className="w-40 h-40 -mt-8 drop-shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            <img
              src={FriedRice}
              alt=""
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-900 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-end justify-end -mt-8">
          <p className="text-textColor font-semibold text-base md:text-lg">
            Fried Rice
          </p>
          <p className="mt-1 text-sm text-gray-500">Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-headingColor font-semibold">
              <span className="text-sm text-orange-500">£</span> Price
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
