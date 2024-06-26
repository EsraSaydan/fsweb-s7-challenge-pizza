import React from "react";

export default function Success({ currentOrder }) {
  // currentOrder tanımsızsa, null döndürerek render etmeyi engelliyoruz
  if (!currentOrder) {
    return null;
  }

  //console.log("currentOrder:", currentOrder);

  const formatEkMalzemeler = (ekMalzeme) => {
    return ekMalzeme.join(",\n");
  };

  //console.log("currentOrder:", currentOrder);

  return (
    <div className="flex flex-col justify-start items-center  bg-customRed">
      <h3 className="font-satisfy text-2xl text-customYellow mt-[30px]">
        Lezzetin Yolda
      </h3>
      <div className="font-barlow text-customBej text-4xl lg:text-6xl mt-4">
        <h1> SİPARİŞ ALINDI</h1>
        <hr className="text-white mt-3 font-bold" />
      </div>
      <p className="text-customBej mt-4 text-2xl">
        Position Absolute Acı Pizza
      </p>

      <hr className="text-white font-bold" />

      <div className="text-customBej px-25 md:mr-8 bg-customRed mb-[1rem]">
        <br />
        <p className="mt-5 ">Boyut: {currentOrder.boyutSec}</p>
        <br />
        <p>Hamur: {currentOrder.hamurKalinligi}</p>
        <br />
        <p>Ek Malzemeler: {formatEkMalzemeler(currentOrder.ekMalzeme)}</p>
      </div>

      <div className="gap-0 border-1 p-10 rounded-2 mb-[3rem] text-customBej mt-[3rem] px-20 ">
        <h4 className="mb-4 text-xl">Sipariş Toplamı</h4>
        <p className="mb-2">Seçimler: {currentOrder.totalMalzemePrice}₺</p>
        <p className="toplam-success">Toplam: {currentOrder.toplamUcret}₺</p>
      </div>
    </div>
  );
}
