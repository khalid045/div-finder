import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex w-[90%] md:w-[60%] lg:w-[45%] mx-auto justify-between items-center pt-[30px] ">
      <h1 className="font-spacemono text-lg text-dDark ">devfinder</h1>
      <div className="flex gap-2 items-center ">
        <span className=" uppercase text-sm text-mDark font-spacemono ">
          Dark
        </span>
        <MdLightMode className="text-cLightgray text-lg " />
      </div>
    </div>
  );
};

export default Header;
