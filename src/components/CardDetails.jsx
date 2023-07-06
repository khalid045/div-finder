import React, { useContext, useState } from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BsLink45Deg, BsFillBuildingFill, BsTwitter } from "react-icons/bs";
import dp from "../assests/14.jpg";
import { devContent } from "../App";

const CardDetails = () => {
  const api = useContext(devContent);
  const { fetchData } = api;
  return (
    <div className="flex flex-col font-spacemono w-[90%] md:w-[60%] lg:w-[45%] bg-cWhite rounded-sm gap-4 p-4 ">
      <div className="flex gap-5 items-center ">
        <img
          src={dp}
          alt="profile picture"
          className="w-20 h-20 rounded-full object-cover "
        />
        <div>
          <p className="text-sm font-bold ">name</p>
          <p className="text-[11px] text-Lightblue ">name</p>
          <p className="text-[11px] text-cGray ">2008-98-123-0003766477637</p>
        </div>
      </div>
      <p className="text-[11px] text-cLightgray ml-[20%] ">Software Engineer</p>
      <div className="flex bg-[#F6F8FF] py-3 px-5 font-spacemono justify-between ml-[20%]">
        <div className="flex flex-col ">
          <p className="text-[11px] text-cGray ">repos</p>
          <p>5</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-[11px] text-cGray ">followers</p>
          <p>44</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-[11px] text-cGray ">following</p>
          <p>444</p>
        </div>
      </div>
      <div className=" grid grid-cols-2 md:grid md:grid-cols-1 lg:grid lg:grid-cols-1 ml-[20%] ">
        <div className="flex gap-2 items-center cursor-pointer ">
          <FaMapMarkerAlt />
          <p className="text-[14px] font-spacemono text-cLightgray gap-2 ">
            No location
          </p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer ">
          <BsLink45Deg />
          <p className="text-[14px] font-spacemono text-cLightgray gap-2 ">
            https://api.github.com/uesr/george
          </p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer ">
          <BsTwitter />
          <p className="text-[14px] font-spacemono text-cLightgray gap-2 ">
            Not Available
          </p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer ">
          <BsFillBuildingFill />
          <p className="text-[14px] font-spacemono text-cLightgray gap-2 ">
            @github
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
