import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus, HiArrowUpTray } from "react-icons/hi2";

export default function EssayForm() {
  const [schools, setSchools] = useState(
    () => JSON.parse(localStorage.getItem("Essays")) || []
  );

  //Store to local storage
  useEffect(() => {
    localStorage.setItem("Essays", JSON.stringify(schools));
  }, [schools]);

  const addSchool = () => {
    const newSchool = {
      id: schools.length + 1,
      schoolName: "",
      essays: [],
    };
    setSchools((prevState) => [...prevState, newSchool]);
  };

  const addEssay = (schoolIndex) => {
    const newEssay = {
      id: schools[schoolIndex].essays.length + 1,
      essayQuestion: "",
      essayAnswer: "",
    };

    setSchools((prevState) => {
      const newState = [...prevState];
      newState[schoolIndex].essays = [
        ...newState[schoolIndex].essays,
        newEssay,
      ];
      return newState;
    });
  };

  const handleSchoolChange = (event, index) => {
    const { name, value } = event.target;
    setSchools((prevState) => {
      const newState = [...prevState];
      newState[index] = { ...newState[index], [name]: value };
      return newState;
    });
  };

  const handleEssayChange = (event, schoolIndex, essayIndex) => {
    const { name, value } = event.target;
    setSchools((prevState) => {
      const newState = [...prevState];
      newState[schoolIndex].essays[essayIndex] = {
        ...newState[schoolIndex].essays[essayIndex],
        [name]: value,
      };
      return newState;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(schools);
    // Code to submit the form data goes here
  };
  return (
    <section className="flex items-center w-full flex-col justify-center pb-20 px-2">
      {/* Appear when there is Essay */}
      {schools.length == 0 && (
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

      {/* School form here */}
      {schools.length >= 1 && (
        <div className="flex w-full py-10 justify-center">
          {/* School form  */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-7/12 flex flex-col"
          >
            {/* Each school and its essay */}
            {schools.map((school, schoolIndex) => (
              <div
                key={school.id}
                className="w-full flex rounded-md flex-col items-start border-2 border-MdBlue pb-5 mt-10 px-2 md:px-10"
              >
                {/* School and essay header */}

                {/* Essays Title, status bar and collasp button */}
                <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
                  <input
                    type="text"
                    name="schoolName"
                    autoFocus
                    placeholder="Enter School Name"
                    value={school.schoolName}
                    onChange={(e) => handleSchoolChange(e, schoolIndex)}
                    className="text-white placeholder-white placeholder-opacity-50 w-8/12 font-bold px-1 
                                 md:text-20 outline-none bg-transparent"
                  />
                  <h3 className="text-white font-bold text-15">Status</h3>
                </aside>

                {/* Essays here  */}

                {school.essays.map((essay, essayIndex) => (
                  <div
                    key={essay.id}
                    className="w-full mt-10 border-t-2 border-b-2 border-MdBlue rounded-md overflow-hidden"
                  >
                    <div className=" w-full flex justify-center bg-MdBlue ">
                      <h3 className="text-white font-bold text-18">
                        Essay {essayIndex + 1}
                      </h3>
                    </div>

                    <div className="w-full px-3 md:px-8 bg-gray-200 shadow-md">
                      <label className="w-full">
                        <span className="font-bold">Essay Question</span> <br />
                        <textarea
                          name="essayQuestion"
                          value={essay.essayQuestion}
                          placeholder="Enter Essay Question here"
                          onChange={(e) =>
                            handleEssayChange(e, schoolIndex, essayIndex)
                          }
                          className="text-black w-full rounded-md px-2 outline-none"
                        />
                      </label>

                      <label className="w-full">
                        <span className="font-bold">Your written essay</span>{" "}
                        <br />
                        <textarea
                          name="essayAnswer"
                          rows={10}
                          value={essay.essayAnswer}
                          placeholder="Paste your essay here"
                          onChange={(e) =>
                            handleEssayChange(e, schoolIndex, essayIndex)
                          }
                          className="text-black w-full rounded-md px-2 outline-none"
                        />
                      </label>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => addEssay(schoolIndex)}
                  className="cursor-pointer justify-center w-full flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20"
                >
                  <HiOutlinePlus /> <span>Add New essay</span>
                </button>

                <div className="w-full flex flex-row px-3 mt-10 md:px-10  flex-wrap justify-between">
                  <button
                    type="button"
                    className="px-2 font-bold text-white border-2 rounded-md py-2 bg-MdBlue border-MdBlue"
                  >
                    Save
                  </button>

                  {school.essays.length > 0 && (
                    <button
                      type="button"
                      className="px-2 font-bold text-MdBlue border-2 rounded-md py-2 border-MdBlue"
                    >
                      Submit for Review
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="mt-7 px-3 py-2 bg-MdBlue text-white font-bold rounded-md self-end flex flex-row justify-center items-center"
            >
              <HiArrowUpTray /> Submit All Essays
            </button>
          </form>
        </div>
      )}

      <div className="flex flex-row justify-center flex-wrap items-center py-2 mt-10">
        <button
          className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 -mt-3"
          onClick={addSchool}
        >
          <HiOutlinePlus />
          Add New School Essay
        </button>
      </div>
    </section>
  );
}
