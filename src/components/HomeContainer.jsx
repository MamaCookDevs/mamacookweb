import React from "react";

import Hero from "../img/heroBg.png";
import {heroData} from "../utils/data"


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full id="home" '>
      <div
        className="py-2 flex-1 flex flex-col items-start md:items-center
   justify-center gap-4"
      >
        <div className="flex items-center gap-4 justify-center px-4 py-2 rounded full"></div>
        <div className="p-4 flex-1">
          <p className="text-[3.5rem] items-center lg:text-[4rem] font-bold tracking-wide text-headingColor">
            Enjoy the{" "}
          </p>
          <p className="text-orange-900 text-[3.5rem] lg:text-[4rem] font-bold">
            African Taste {""}
          </p>

          <p className="text-base text-textColor text-center md:text-left font-regular">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            impedit atque nostrum ipsa maxime tempore quisquam mollitia deleniti
            in provident ratione earum fugit dolorem quas, minima pariatur.
            Harum, qui doloremque!
          </p>

          <div className="flex flex-row gap-4 py-5">
            <button
              type="button"
              className=" bg-red-900 w-full md:w-auto px-4 py-2 
 hover:shadow-lg transition-all ease-in-out text-white rounded-full"
            >
              {" "}
              Get Started
            </button>

            <button
              type="button"
              className=" bg-white w-full md:w-auto px-4 py-2 
              rounded-full hover:shadow-lg transition-all ease-in-out"
            >
              {" "}
              Customer Care
            </button>
          </div>
        </div>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={Hero}
          className=" ml-auto h-370 w-full lg:w-auto lg:h-650 "
          alt="heroBg.png"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
         {
          heroData && heroData.map(n => (
            <div
                key={n.id}
                className="  lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-12 lg:-mt-20 "
                  alt="I1"
                  
                />
                
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.sub}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
          ))
         }
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;