import React, { useState } from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus } from "react-icons/hi2";

export default function IntroductionPage() {
  const [essayFormData, setessayFormData] = useState(0);
  const [formData, setFormData] = useState("School Name");
  //Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
  }

  //Add essay
  function createEssay() {
    setessayFormData((prev) => (prev += 1));
  }

  //temporal resolve
  function handleInput(e) {
    setFormData(e.target.value);
    console.log();
  }
  return (
    <section className="flex items-center w-full flex-col justify-center pb-20">
      {/* Appear when there is Essay */}
      {essayFormData == 0 && (
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <div className="animation-box">
            <Lottie
              animationData={NoContent}
              loop={false}
              style={{ width: "250px" }}
            />
          </div>

          <h1 className="font-bold text-2xl md:text-3xl text-center -mt-10 capitalize flex justify-center">
            No Essay
          </h1>
        </div>
      )}
      {/* School Essay */}

      {essayFormData > 0 && (
        <div className="flex w-full py-10 justify-center">
          <form onSubmit={handleSubmit} className="w-full md:w-7/12">
            <div className="w-full flex flex-col items-start border-2 border-MdBlue pb-5">
              {/* Honors Title, status bar and collasp button */}
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
                <input
                  type="text"
                  name="schoolname"
                  value={formData}
                  onChange={handleInput}
                  className="text-white w-1/2 font-bold text-20 outline-none bg-transparent"
                />
                <h3 className="text-white font-bold text-15">Status</h3>
                <button className="collasped-toggler right-5 absolute">
                  ^
                </button>
              </aside>

              {/* Essay prompt inputs */}
              <div className="px-3 md:px-10 w-full mt-7 flex flex-col bg-blue-50 border-y-2 border-y-MdBlue py-5">
                <label htmlFor="prompt">
                  <span>Essay Prompt</span> <br />
                  <textarea
                    name="prompt"
                    id="type"
                    placeholder="Paste the prompt here"
                    title="essay prompt"
                    className="w-full md:w-11/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                  />
                </label>
                <label htmlFor="answer" className="mt-7">
                  <span className="capitalize">Written Essay</span> <br />
                  <textarea
                    name="answer"
                    rows={10}
                    id="type"
                    placeholder="Paste the written essay here"
                    title="essay prompt"
                    className="w-full md:w-11/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                  />
                </label>
              </div>

              {/* Add new prompt button */}
              <div className="cursor-pointer justify-center w-full flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20">
                <HiOutlinePlus /> <span>Add essay prompt</span>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Button to add essay */}
      <div className="flex flex-row justify-center flex-wrap items-center py-2 mt-10">
        <button
          className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
          onClick={createEssay}
        >
          <HiOutlinePlus />
          Add Essay
        </button>
      </div>
    </section>
  );
}
