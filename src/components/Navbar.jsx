import React from "react";
import logo1 from "/Assets/mile2-aseets/icons/1.svg";
import logo2 from "/Assets/mile2-aseets/icons/2.svg";
import logo3 from "/Assets/mile2-aseets/icons/3.svg";
import logo4 from "/Assets/mile2-aseets/icons/4.svg";
import logo5 from "/Assets/mile2-aseets/icons/5.svg";
import logo6 from "/Assets/mile2-aseets/icons/6.svg";

export default function Navbar() {
  return (
    <div className="flex space-x-1 lg:space-x-3 mt-0 mb-0 font-roboto lg:px-[160px] gap-4  lg:mx-auto">
      <div className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 mt-2">
        <img className="w-4 lg:w-6 h-5 lg:h-8" src={logo1} alt="Icon 1" />
        <p className="font-semibold text-[13px] lg:text-[10px]">YENİ! Kore</p>
      </div>

      <div className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 mt-2">
        <img className="w-4 lg:w-6 h-5 lg:h-8" src={logo2} alt="Icon 2" />
        <p className="font-semibold text-[13px] lg:text-[10px]">Pizza</p>
      </div>

      <div className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 mt-2">
        <img className="w-4 lg:w-6 h-5 lg:h-8" src={logo3} alt="Icon 3" />
        <p className="font-semibold text-[13px] lg:text-[10px]">Burger</p>
      </div>

      <div className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 mt-2">
        <img className="w-4 lg:w-6 h-5 lg:h-8" src={logo4} alt="Icon 4" />
        <p className="font-semibold text-[13px] lg:text-[10px]">Kızartmalar</p>
      </div>

      <div className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 mt-2">
        <img className="w-4 lg:w-6 h-5 lg:h-8" src={logo5} alt="Icon 5" />
        <p className="font-semibold text-[13px] lg:text-[10px]">Fast food</p>
      </div>

      <div className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 mt-2">
        <img className="w-4 lg:w-6 h-5 lg:h-8" src={logo6} alt="Icon 6" />
        <p className="flex font-semibold text-[13px] lg:text-[10px]">
          Gazlı İçecek
        </p>
      </div>
    </div>
  );
}
