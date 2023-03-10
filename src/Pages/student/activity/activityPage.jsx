import React from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus } from "react-icons/hi2";

export default function ActivityList() {
  return (
    <main id="Error-main" className="flex items-center flex-col justify-center">
      <div
        className="animation-box w-full flex justify-center
                      md:w-9/12"
      >
        <Lottie animationData={NoContent} loop={false} style={{ width: 250 }} />
      </div>

      <h1 className="font-bold text-3xl md:text-4xl text-center -mt-10 capitalize">
        No content
      </h1>

      <div className="flex flex-row justify-center flex-wrap items-center py-2 mt-10 ">
        <button className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
         >
          <HiOutlinePlus />
          Add honor
        </button>
        <button className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
         >
          <HiOutlinePlus />
          Add Activity
        </button>
      </div>
    </main>
  );
}
