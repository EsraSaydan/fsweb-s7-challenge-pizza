import React from "react";
import { useState } from "react";
import { data } from "../data/data.js";
import logo1 from "/Assets/mile2-aseets/icons/1.svg";
import logo2 from "/Assets/mile2-aseets/icons/2.svg";
import logo3 from "/Assets/mile2-aseets/icons/3.svg";
import logo4 from "/Assets/mile2-aseets/icons/4.svg";
import logo5 from "/Assets/mile2-aseets/icons/5.svg";
import logo6 from "/Assets/mile2-aseets/icons/6.svg";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

export default function () {
  const [foods, setFoods] = useState(data);
  const [activeCategory, setActiveCategory] = useState("");

  const filterType = (category) => {
    setActiveCategory(category);
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const getButtonClass = (category) => {
    return category === activeCategory
      ? "bg-black text-white"
      : "bg-white text-black";
  };

  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-6 space-x-1 lg:space-x-6 mt-0 mb-0 font-roboto px-[20px] lg:px-[140px] md:gap-3 lg:mx-auto">
        <button
          onClick={() => filterType("ramen")}
          className={`flex items-center space-x-1 hover:scale-105 duration-300 ${getButtonClass(
            "ramen"
          )} lg:space-x-2 font-barlow py-2 lg:py-3 px-4 rounded-full mt-4`}
        >
          <img className="w-6 h-6" src={logo1} alt="Icon 1" />
          <p className="font-semibold text-[13px]">Ramen</p>
        </button>

        <button
          onClick={() => filterType("pizza")}
          className={`flex items-center space-x-1 hover:scale-105 duration-300 ${getButtonClass(
            "pizza"
          )} lg:space-x-2 font-barlow py-2 lg:py-3 px-4 rounded-full mt-4`}
        >
          <img className="w-6 h-6" src={logo2} alt="Icon 2" />
          <p className="font-semibold text-[13px]">Pizza</p>
        </button>

        <button
          onClick={() => filterType("burger")}
          className={`flex items-center space-x-1 hover:scale-105 duration-300 ${getButtonClass(
            "burger"
          )} lg:space-x-2 font-barlow py-2 lg:py-3 px-4 rounded-full mt-4`}
        >
          <img className="w-6 h-6" src={logo3} alt="Icon 3" />
          <p className="font-semibold text-[13px]">Burger</p>
        </button>

        <button
          onClick={() => filterType("French fries")}
          className={`flex items-center space-x-1 hover:scale-105 duration-300 ${getButtonClass(
            "French fries"
          )} lg:space-x-2 font-barlow py-2 lg:py-3 px-4 rounded-full mt-4`}
        >
          <img className="w-6 h-6" src={logo4} alt="Icon 4" />
          <p className="font-semibold text-[13px]">French fries</p>
        </button>

        <button
          onClick={() => filterType("Fast food")}
          className={`flex items-center space-x-1 hover:scale-105 duration-300 ${getButtonClass(
            "Fast food"
          )} lg:space-x-2 font-barlow py-2 lg:py-3 px-4 rounded-full mt-4`}
        >
          <img className="w-6 h-6" src={logo5} alt="Icon 5" />
          <p className="font-semibold text-[13px]">Fast food</p>
        </button>

        <button
          onClick={() => filterType("Soft drinks")}
          className={`flex items-center space-x-1 hover:scale-105 duration-300 ${getButtonClass(
            "Soft drinks"
          )} lg:space-x-2 font-barlow py-2 lg:py-3 px-4 rounded-full mt-4`}
        >
          <img className="w-6 h-6" src={logo6} alt="Icon 6" />
          <p className="font-semibold text-[13px]">Soft drinks</p>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-7 mx-auto md:p-[5px] px-[20px] lg:px-[140px] mt-5 border-none ">
        {foods.map((item, index) => (
          <Card
            key={index}
            className="mb-5 border-none  md:w-[320px]  sm:h-[1s00px] md:h-[400px] shadow-lg hover:scale-105 duration-300 "
          >
            <div className="ml-[6rem] md:ml-[2rem]">
              <img
                className="h-[150px] md:h-[300px] w-[200px] md:w-[300px] px-[30px] py-[30px] rounded-full py-[30px"
                src={item.image}
                alt={item.name}
              />
            </div>
            <CardBody>
              <CardTitle
                className="font-semibold font-roboto text-s md:text-l"
                tag="h1"
              >
                {item.name}
              </CardTitle>
              <CardSubtitle className="flex items-center justify-between relative mt-3">
                <span className="text-xs sm:space-x-4 text-gray-400 font-semibold">
                  {item.like}
                </span>

                <span className="text-xs text-gray-400 font-semibold">
                  {item.comment}
                </span>
                <span className="text-xs md:text-l ml-4 font-bold">
                  {item.price}
                </span>
              </CardSubtitle>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
