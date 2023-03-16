import React, { useState } from "react";
import Lottie from "lottie-react";
import NoContent from "../../animations/no file.json";

export default function Applicants() {
  const [activeTab, setactiveTab] = useState(1);

  return (
    <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl px-3 capitalize font-bold text-MdBlue text-center">
        New Applicants to ckodon
      </h2>
      <p className="px-3 w-full md:w-7/12 text-center">
        New applicants documents
      </p>

      {/* Content */}
      <div className="flex flex-col w-full mt-10">
        {/* TABS*/}
        <div className="tabs flex flex-row justify-start md:justify-center px-3 w-full overflow-x-scroll bg-blue-100">
          <div
            className={`px-2 py-2 border-2 border-MdBlue ${
              activeTab == 1 ? "bg-MdBlue text-white" : "bg-white text-MdBlue"
            }  m-3 whitespace-nowrap transition-5 text-18 font-bold cursor-pointer rounded-md`}
            onClick={() => setactiveTab(1)}
          >
            <p>Undergraduate school</p>
          </div>
          <div
            className={`px-2 py-2 border-2 border-MdBlue ${
              activeTab == 2 ? "bg-MdBlue text-white" : "bg-white text-MdBlue"
            }  m-3 whitespace-nowrap transition-all text-18 font-bold cursor-pointer rounded-md`}
            onClick={() => setactiveTab(2)}
          >
            <p>Graduate School</p>
          </div>

        </div>
      </div>

      {/* Reviewed Documents content */}
      {activeTab == 1 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Undergraduates Students
          </p>

          <div className="mt-10 w-full flex flex-col justify-center items-center">
            <div className="animation-box">
              <Lottie
                animationData={NoContent}
                loop={false}
                style={{ width: "250px" }}
              />
            </div>

            <h1 className="font-bold text-18 md:text-2xl text-center -mt-10 capitalize flex justify-center">
              No Undergraduate yet
            </h1>
          </div>
        </div>
      )}

      {activeTab == 2 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Graduate Students
          </p>

          <div className="mt-10 w-full flex flex-col justify-center items-center">
            <div className="animation-box">
              <Lottie
                animationData={NoContent}
                loop={false}
                style={{ width: "250px" }}
              />
            </div>

            <h1 className="font-bold text-18 md:text-2xl text-center -mt-10 capitalize flex justify-center">
              No Graduate student yet
            </h1>
          </div>
        </div>
      )}

    </section>
  );
}
