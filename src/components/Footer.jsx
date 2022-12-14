import React from "react";
import Location from "../img/mapLocation.png";
import MamaLogo from "../img/MamaLogo.png";
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="w-full h-auto rounded-t-3xl bg-secondColor" id="footer">
      <div className="py-2 gap-4">
        {/*Desktop Mode*/}
        <div className="md:flex hidden p-10 flex-col">
          <div className="flex items-center w-full">
          <img
            src={Location}
            className="w-3/6 md:w-[300px] rounded-2xl object-cover m-10 "
            alt="location"
          />

          <p className="flex flex-col text-white justify-center w-4/6 gap-1">
            <span className="font-bold">Help & Information</span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              FAQs
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              About Us
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Contact
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>

          <p className="flex flex-col text-white justify-center w-5/6 gap-1">
            <span className="font-bold">Address</span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
            1, Rochester Parade, High St, Feltham, 
                      United Kingdom.
            </span>
          </p>

          <p className="flex flex-col text-white justify-center w-5/6 gap-1">
            <span className="font-bold">Contact</span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Email: manager.gh@hslafrica.com
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Phone: +233-57-881-3209
            </span>
          </p>
          </div>

          <div className="flex flex-row gap-6 justify-center items-center">
            <BsFacebook color="#E1B0A9" size={32} onClick={() => openInNewTab('https://facebook.com/mamacookrestaurant')}/>
            <BsInstagram color="#E1B0A9" size={32} onClick={() => openInNewTab('https://instagram.com/mamacookrestaurant')}/>
            <FaTiktok color="#E1B0A9" size={32} onClick={() => openInNewTab('https://tiktok.com/mamacookrestaurant')}/>
          </div>
      
          <p className="flex flex-col font-semibold text-footerText
           w-auto gap-1 text-center mt-5">
            ?? 2022 by Mama Cook. All Rights Reserved
          </p>
        </div>

        {/*Mobile Mode*/}
        <div className="md:hidden flex flex-col justify-center items-center p-5">
          <img
            src={Location}
            className="w-3/6 md:w-[400px] rounded-lg object-cover"
            alt="location"
          />

          <p className="flex flex-col text-white text-center align-middle w-full gap-1 mt-10 ">
            <span className="font-bold">Help & Information</span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              FAQs
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              About Us
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Contact
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Privacy Policy
            </span>
          </p>

          <p className="flex flex-col text-white text-center align-middle w-full gap-1 mt-10 ">
            <span className="font-bold">Address</span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              London, United Kingdom
            </span>
          </p>

          <p className="flex flex-col text-white text-center align-middle w-full gap-1 mt-10 ">
            <span className="font-bold">Contact</span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Email: manager.gh@hslafrica.com
            </span>
            <span className="text-footerText font-semibold cursor-pointer hover:underline">
              Phone: +233-57-881-3209
            </span>
          </p>

          <p className="flex flex-col font-semibold text-footerText text-center align-middle w-full gap-1 mt-10 ">
            ?? 2022 by Mama Cook. All Rights Reserved
          </p>
        </div>
      </div>

      {/*<div className=' flex-1 w-full h-full md:w-auto px-4 py-40 mx:auto text-white'>
        Help & Information
  </div>*/}
    </section>
  );
};

export default Footer;
