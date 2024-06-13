import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CardBody, CardSubtitle, CardTitle } from "reactstrap";
import banner from "/Assets/mile2-aseets/pictures/form-banner.png";

export default function Inform() {
  return (
    <CardBody className="bg-customBej ml-8 p-0">
      <div className="mx-auto max-w-2xl border-none">
        <div className="flex flex-col items-center justify-center ">
          <img
            className="flex flex-col items-center justify-center text-center mt-0 w-[500px] "
            src={banner}
          />
        </div>

        <div className="flex text-customGray font-roboto ml-4 mt-10 mb-10 space-x-1 text-s">
          <NavLink exact to="/" activeStyle={{ color: "red" }}>
            Anasayfa
          </NavLink>
          <p>-</p>
          <NavLink to="/order" activeStyle={{ color: "red" }}>
            Sipariş Oluştur
          </NavLink>
        </div>

        <CardTitle className="mb-7 mt-4 ml-4 text-lg font-bold text-gray-800">
          Position Absolute Acı Pizza
        </CardTitle>
        <CardSubtitle className="text-lg font-bold">
          <span className="text-xl ml-4 font-bold">85.50 ₺</span>
          <span className="text-xs text-gray-400 float-right flex item ml-auto abdolute right-0 w-8 h-8">
            (200)
          </span>
          <span className="text-gray-400 mr-[150px] float-right text-xs">
            4.9
          </span>
        </CardSubtitle>
        <CardSubtitle className="mb-7 mt-4 ml-4 text-s font-roboto text-customGray">
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
          <br />
          <br />
        </CardSubtitle>
      </div>
    </CardBody>
  );
}
