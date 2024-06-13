import React from "react";
import footerlogo from "/Assets/mile2-aseets/footer/logo-footer.svg";
import icon1 from "/Assets/mile2-aseets/footer/icons/icon-1.png";
import icon2 from "/Assets/mile2-aseets/footer/icons/icon-2.png";
import icon3 from "/Assets/mile2-aseets/footer/icons/icon-3.png";
import Instagram1 from "/Assets/mile2-aseets/footer/insta/li-0.png";
import Instagram2 from "/Assets/mile2-aseets/footer/insta/li-1.png";
import Instagram3 from "/Assets/mile2-aseets/footer/insta/li-2.png";
import Instagram4 from "/Assets/mile2-aseets/footer/insta/li-3.png";
import Instagram5 from "/Assets/mile2-aseets/footer/insta/li-4.png";
import Instagram6 from "/Assets/mile2-aseets/footer/insta/li-5.png";
import { PiTwitterLogoFill } from "react-icons/pi";

export default function () {
  return (
    <footer className="bg-black text-customBej sm:items-center lg:px-[80px]">
      <div className="sm:flex sm:justify-between sm:items-center sm:px-8 pl-4  py-7">
        <section className=" flex">
          <section className="ml-20  ">
            <img className="w-35 lg:w-45" src={footerlogo} alt="Footer" />
            <div className="mt-4">
              <div className="flex text-xs ">
                <img className="mr-4 mt-4" src={icon1} alt="Location" />
                <p className="mr-4 mt-4">
                  341 Londonderry Road, <br /> Istanbul Türkiye
                </p>
              </div>
              <div className="flex text-xs">
                <img className="mr-4 mt-4" src={icon2} alt="Email" />

                <p className="mr-4 mt-4 p-0.5">
                  aciktim@teknolojikyemekler.com
                </p>
              </div>
              <div className="flex text-xs mb-2 ">
                <img className="mr-4 mt-4" src={icon3} alt="Phone" />
                <p className="mr-4 mt-4 p-0">+90 216 123 45 67</p>
              </div>
            </div>
          </section>
        </section>

        <section className="lg:mr-[200px] sm:flex sm:justify-between sm:items-center ">
          <div className="mt-[60px] lg:text-[13px] ml-7 ">
            <h5 className="mb-[40px] font-semibold mt-[45px]">Hot Menu</h5>

            <p className=" text-customBej mb-1">Terminal Pizza</p>
            <p className="p-1 mb-1">5 Kişilik Hackathlon Pizza</p>
            <p className="p-1 mb-1">useEffect Tavuklu Pizza</p>
            <p className="p-1 mb-1">Beyaz Console Frosty</p>
            <p className="p-1 mb-1">Testler Geçti Mutlu Burger</p>
            <p className="p-1 mb-1">Position Absolute Acı Burger</p>
          </div>
        </section>

        <section className="mb-8 sm:ml-20">
          <div className="text-[10px] lg:text-[15px] lg:mr-[30px] lg:mt-20">
            <p className="mb-9">Instagram</p>
            <div className="grid grid-cols-3 gap-2 lg:w-[200px]">
              <img src={Instagram1} alt="Instagram-1" />
              <img src={Instagram2} alt="Instagram-2" />
              <img src={Instagram3} alt="Instagram-3" />
              <img src={Instagram4} alt="Instagram-4" />
              <img src={Instagram5} alt="Instagram-5" />
              <img src={Instagram6} alt="Instagram-6" />
            </div>
          </div>
        </section>
      </div>
      <hr className="" />
      <div className="flex items-center justify-center relative ">
        <p className="text-xs w-full text-center">©2023 Teknolojik Yemekler</p>
        <span className="abdolute right-0 w-8 h-8 mt-3">
          <PiTwitterLogoFill />
        </span>
      </div>
    </footer>
  );
}
