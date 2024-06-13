import React from "react";
import Banner from "/Assets/mile1-assets/home-banner.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import kart1 from "/Assets/mile2-aseets/cta/kart-1.png";
import kart2 from "/Assets/mile2-aseets/cta/kart-2.png";
import kart3 from "/Assets/mile2-aseets/cta/kart-3.png";
import logo1 from "/Assets/mile2-aseets/icons/1.svg";
import logo2 from "/Assets/mile2-aseets/icons/2.svg";
import logo3 from "/Assets/mile2-aseets/icons/3.svg";
import logo4 from "/Assets/mile2-aseets/icons/4.svg";
import logo5 from "/Assets/mile2-aseets/icons/5.svg";
import logo6 from "/Assets/mile2-aseets/icons/6.svg";
import food1 from "/Assets/mile2-aseets/pictures/food-1.png";
import food2 from "/Assets/mile2-aseets/pictures/food-2.png";
import food3 from "/Assets/mile2-aseets/pictures/food-3.png";
import { CardBody, CardTitle, CardSubtitle, Card } from "reactstrap";
import MenuItem from "./MenuItem";

export default function Home() {
  return (
    <div className="">
      <div
        className=" flex flex-col items-center justify-center w-full rounded-lg min-h-screen bg-cover bg-center "
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="flex flex-col justify-start items-center h-screen mt-8 ">
          <h3 className="font-satisfy text-customYellow text-xl lg:text-2xl">
            fırsatı kaçırma
          </h3>
          <h1 className="text-3xl lg:text-6xl font-barlow text-customBej mb-2">
            KOD ACIKTIRIR{" "}
          </h1>
          <h1 className="text-3xl lg:text-6xl font-barlow text-customBej">
            PIZZA, DOYURUR
          </h1>
          <div className="order">
            <Link to="/order">
              <button className="bg-customYellow font-barlow hover:bg-yellow-600 font-bold py-3 lg:py-3 px-8 lg:px-[70px] rounded-full border-1 border-yellow-600 mt-3">
                ACIKTIM
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Navbar />

      <div className="bg-customBej">
        <div className="flex flex-col justify-center items-center sm:mx-4 lg:mx-40">
          <div className="my-8 sm:my-20 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="relative rounded-lg overflow-hidden">
              <img src={kart1} alt="Kart1" className="rounded-lg" />
              <div className="absolute top-0 left-0 text-white py-4 px-4 font-barlow ">
                <h2 className="font-semibold text-5xl mb-4">
                  Özel <br /> Lezzetus
                </h2>
                <p className="mt-2 text-1xl">Position:Absolute Acı Burger.</p>
                <Link to="/order">
                  <button className="space-x4 lg:space-x-8 bg-white text-customRed font-semibold py-2 lg:py-3 px-4 lg:px-16 rounded-full border-1 mt-4">
                    SİPARİŞ VER
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative rounded-lg overflow-hidden">
                <img src={kart2} alt="Kart2" className="rounded-lg" />
                <div className="absolute top-0 left-0 text-white py-4 px-4 font-barlow ">
                  <h2 className="font-semibold text-2xl mb-4">
                    Hackatlon <br /> Burger Menü
                  </h2>
                  <Link to="/order">
                    <button className="space-x4 lg:space-x-5 bg-white text-customRed font-semibold py-2 lg:py-3 px-3 lg:px-16 rounded-full border-1 mt-1">
                      SİPARİŞ VER
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <img src={kart3} alt="Kart3" className="rounded-lg" />
                <div className="absolute top-0 left-0 text-white py-4 px-4 font-barlow ">
                  <h2 className=" text-black font-semibold text-2xl mb-4">
                    <span className="text-customRed font-bold">Çoooook</span>{" "}
                    hızlı <br /> npm gibi kurye
                  </h2>
                  <Link to="/order">
                    <button className="space-x4 lg:space-x-5 bg-white text-customRed font-semibold py-2 lg:py-3 px-3 lg:px-16 rounded-full border-1 mt-1">
                      SİPARİŞ VER
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h5 className="text-customRed font-satisfy text-l lg:text-2xl">
              en çok paketlenen menüler
            </h5>
            <h1 className="font-roboto font-semibold text-xl lg:text-3xl mt-3 mb-4">
              Acıktıran Kodlara Doyuran Lezzetler
            </h1>
          </div>
        </div>

        <div className="flex space-x-1 lg:space-x-6 mt-0 mb-0 font-roboto lg:px-[140px] gap-3 lg:mx-auto">
          <button className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 rounded-full  mt-4 ">
            <img className="w-6 h-6" src={logo1} alt="Icon 1" />
            <p className="font-semibold text-[13px]">Ramen</p>
          </button>
          <button className="flex items-center space-x-1 bg-current lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 rounded-full mt-4 ">
            <img className="w-6 h-6" src={logo2} alt="Icon 2" />
            <p className="font-semibold text-[13px] text-customBej">Pizza</p>
          </button>
          <button className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 rounded-full mt-4 ">
            <img className="w-6 h-6" src={logo3} alt="Icon 3" />
            <p className="font-semibold text-[13px]">Burger</p>
          </button>
          <button className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 rounded-full mt-4 ">
            <img className="w-6 h-6" src={logo4} alt="Icon 4" />
            <p className="font-semibold text-[13px]">French fries</p>
          </button>
          <button className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 rounded-full mt-4 ">
            <img className="w-6 h-6" src={logo5} alt="Icon 5" />
            <p className="font-semibold text-[13px]">Fast food</p>
          </button>
          <button className="flex items-center space-x-1 bg-white lg:space-x-2 font-barlow  py-2 lg:py-3 px-4 rounded-full mt-4 ">
            <img className="w-6 h-6" src={logo6} alt="Icon 6" />
            <p className="font-semibold text-[13px]">Soft drinks</p>
          </button>
        </div>

        <div className="lg:px-[140px] flex gap-5 mt-5 ">
          <Card className="mb-5 border-none w-[350px] ">
            <img className="w-[300px] px-[30px] py-[30px]" src={food1} />
            <CardBody>
              <CardTitle className="font-semibold font-roboto text-l" tag="h1">
                Terminal Pizza
              </CardTitle>
              <CardSubtitle className="flex items-center justify-between relative mt-3">
                <span className=" text-xs text-gray-400 font-semibold">
                  4.9
                </span>
                <span className=" text-xs text-gray-400 font-semibold">
                  (200)
                </span>
                <span className="text-l ml-4 font-bold">60₺</span>
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card className="mb-5 border-none w-[350px]">
            <img className="w-[300px] px-[30px] py-[30px]" src={food2} />
            <CardBody>
              <CardTitle className="font-semibold font-roboto text-l" tag="h1">
                Terminal Pizza
              </CardTitle>
              <CardSubtitle className="flex items-center justify-between relative mt-3">
                <span className=" text-xs text-gray-400 font-semibold">
                  4.9
                </span>
                <span className=" text-xs text-gray-400 font-semibold">
                  (928)
                </span>
                <span className="text-l ml-4 font-bold">85₺</span>
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card className="mb-5 border-none w-[350px]">
            <img className="w-[300px] px-[30px] py-[30px]" src={food3} />
            <CardBody>
              <CardTitle className="font-semibold font-roboto text-l" tag="h1">
                useEffect Tavuklu Burger
              </CardTitle>
              <CardSubtitle className="flex items-center justify-between relative mt-3">
                <span className=" text-xs text-gray-400 font-semibold">
                  4.9
                </span>
                <span className=" text-xs text-gray-400 font-semibold">
                  (462)
                </span>
                <span className="text-l ml-4 font-bold">75₺</span>
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
        <MenuItem />
      </div>

      <Footer />
    </div>
  );
}
