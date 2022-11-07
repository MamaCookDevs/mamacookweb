import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import {BiMinus, BiPlus} from "react-icons/bi";
import { motion } from "framer-motion";

const CartContainer = () => {
  return (
    <div
      className="fixed-top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md 
    flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {/*Bottom Section*/}
      <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
        <div className="w-full h-340 md:h-42 p x-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/*Cart Item*/}
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mama-cook-c8fe0.appspot.com/o/Images%2FJollof%20Rice.png?alt=media&token=3dc44105-778f-4b62-8376-f2b8cffc2729"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
              alt=""
            />

            {/*Name Section*/}
            <div className="flex flex-col gap-1">
              <p className="text-base text-gray-50">Jollof Rice</p>
              <p className="text-sm block text-gray-300 fornt-semibold">
                £10.00
              </p>
            </div>

            {/*Button Section*/}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50"/>
              </motion.div>

              <p className="-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center">1</p>

              <motion.div whileTap={{ scale: 0.75 }}>
              <BiPlus className="text-gray-50"/>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
