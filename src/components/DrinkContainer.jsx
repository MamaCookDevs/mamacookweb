import React, {useEffect, useState} from 'react'
import {IoFastFood} from 'react-icons/io5'
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { drinkcategories } from '../utils/data'
import { useStateValue } from "../context/StateProvider";



const DrinkContainer = () => {
    const [filter, setFilter] = useState("Soft Drink")
    useEffect(() => {}, [filter])
    const [{ foodItems }, dispatch] = useStateValue();
  return (
    <section className="w-full flec my-6" id="menu">
    <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-secondColor transition-all ease-in-out duration-100 mr-auto">
          Drinks
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {drinkcategories &&
            drinkcategories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group ${
                  filter === category.urlParamName ? "bg-secondColor" : "bg-background2"
                } w-24 flex items-center justify-center min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex-col gap-3 hover:bg-secondColor `}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full shadow-lg ${
                    filter === category.urlParamName
                      ? "bg-white"
                      : "bg-secondColor"
                  } group-hover:bg-white flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-textColor"
                        : "text-white"
                    } group-hover:text-textColor text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == filter)}
          />
          </div>
        </div>
        </section>
  )
}

export default DrinkContainer