import React from "react";
import logo from "/Assets/mile1-assets/logo.svg";

export default function Header() {
  return (
    <div className="bg-customRed flex flex-col items-center justify-center ">
      <img className="flex text-center rounded-lg - p-7 mt-0  " src={logo} />
    </div>
  );
}
