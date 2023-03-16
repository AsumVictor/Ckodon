import React, { useState } from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";

export default function GradReview() {
  const [activeTab, setactiveTab] = useState(1);

  return (
    <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden">

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
            <p>Activity and Hornors</p>
          </div>
          <div
            className={`px-2 py-2 border-2 border-MdBlue ${
              activeTab == 2 ? "bg-MdBlue text-white" : "bg-white text-MdBlue"
            }  m-3 whitespace-nowrap transition-all text-18 font-bold cursor-pointer rounded-md`}
            onClick={() => setactiveTab(2)}
          >
            <p>Personal Essays</p>
          </div>
          <div
            className={`px-2 py-2 border-2 border-MdBlue ${
              activeTab == 3 ? "bg-MdBlue text-white" : "bg-white text-MdBlue"
            }  m-3 whitespace-nowrap transition-5 text-18 font-bold cursor-pointer rounded-md`}
            onClick={() => setactiveTab(3)}
          >
            <p>Recommendations</p>
          </div>
          <div
            className={`px-2 py-2 border-2 border-MdBlue ${
              activeTab == 4 ? "bg-MdBlue text-white" : "bg-white text-MdBlue"
            }  m-3 whitespace-nowrap transition-5 text-18 font-bold cursor-pointer rounded-md`}
            onClick={() => setactiveTab(4)}
          >
            Financial Aid
          </div>
        </div>
      </div>

      {/* Reviewed Documents content */}
      {activeTab == 1 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Activity and Honor Documents
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
              No Reviewed Documents
            </h1>
          </div>
        </div>
      )}

      {activeTab == 2 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Personal Essay Documents
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
              No Reviewed Documents
            </h1>
          </div>
        </div>
      )}

      {activeTab == 3 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Recommendation Letters
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
              No Reviewed Documents
            </h1>
          </div>
        </div>
      )}

      {activeTab == 4 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Financial Aid Documents
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
              No Reviewed Documents
            </h1>
          </div>
        </div>
      )}
    </section>
  );
}
