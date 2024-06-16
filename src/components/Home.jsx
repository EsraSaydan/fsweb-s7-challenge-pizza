import React from "react";
import Banner from "/Assets/mile1-assets/home-banner.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import kart1 from "/Assets/mile2-aseets/cta/kart-1.png";
import kart2 from "/Assets/mile2-aseets/cta/kart-2.png";
import kart3 from "/Assets/mile2-aseets/cta/kart-3.png";

import Food from "./Food";

export default function Home() {
  return (
    <div className="mt-[-1px]">
      <div
        className=" flex flex-col items-center justify-center w-full border-none min-h-screen bg-cover object-cover max-h-[500px] bg-center "
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
              <button className="bg-customYellow font-barlow hover:bg-yellow-600 font-bold py-3 lg:py-3 px-8 lg:px-[70px] rounded-full border-1 border-yellow-600 mt-3 cursor-pointer">
                ACIKTIM
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Navbar />

      <div className="bg-customBej  ">
        <div className="flex flex-col justify-center items-center sm:mx-4 lg:mx-40  ">
          <div className="my-8 sm:my-20 grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2 ">
            <div className="relative rounded-lg overflow-hidden hover:scale-105 duration-300">
              <img src={kart1} alt="Kart1" className="rounded-lg" />
              <div className="absolute top-0 left-0 text-white py-4 px-4 font-barlow ">
                <h2 className="font-semibold text-5xl mb-4">
                  Özel <br /> Lezzetus
                </h2>
                <p className="mt-2 text-1xl">Position:Absolute Acı Burger.</p>
                <Link to="/order">
                  <button className="shadow-lg hover:scale-105 duration-300 space-x4 lg:space-x-8 bg-white text-customRed font-semibold py-2 lg:py-3 px-4 lg:px-16 rounded-full border-1 mt-4">
                    SİPARİŞ VER
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative rounded-lg overflow-hidden hover:scale-105 duration-300">
                <img src={kart2} alt="Kart2" className="rounded-lg" />
                <div className="absolute top-0 left-0 text-white py-4 px-4 font-barlow ">
                  <h2 className="font-semibold text-2xl mb-4">
                    Hackatlon <br /> Burger Menü
                  </h2>
                  <Link to="/order">
                    <button className="shadow-lg hover:scale-105 duration-300 space-x4 lg:space-x-5 bg-white text-customRed font-semibold py-2 lg:py-3 px-3 lg:px-16 rounded-full border-1 mt-1">
                      SİPARİŞ VER
                    </button>
                  </Link>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden hover:scale-105 duration-300">
                <img src={kart3} alt="Kart3" className="rounded-lg" />
                <div className="absolute top-0 left-0 text-white py-4 px-4 font-barlow ">
                  <h2 className=" text-black font-semibold text-2xl mb-4">
                    <span className="text-customRed font-bold">Çoooook</span>{" "}
                    hızlı <br /> npm gibi kurye
                  </h2>
                  <Link to="/order">
                    <button className="shadow-lg hover:scale-105 duration-300 space-x4 lg:space-x-5 bg-white text-customRed font-semibold py-2 lg:py-3 px-3 lg:px-16 rounded-full border-1 mt-1">
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
        <Food />
      </div>

      <Footer />
    </div>
  );
}
