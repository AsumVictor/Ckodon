import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import HonorInput from "../../../Components/student/honorInput";
import ActivityInput from "../../../Components/student/activity";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus } from "react-icons/hi2";

export default function ActivityList() {
  const [actFormData, setActFormData] = useState(
    () => JSON.parse(localStorage.getItem("Activities")) || []
  ); //State for adding honors
  const [honorformData, setHonorFormData] = useState(
    () => JSON.parse(localStorage.getItem("Honors")) || []
  ); //State for form data handling

  //When honor and activity array changes, push to local storage
  useEffect(() => {
    localStorage.setItem("Honors", JSON.stringify(honorformData));
    localStorage.setItem("Activities", JSON.stringify(actFormData));
  }, [honorformData, actFormData]);

  // Handle form change
  function handleChange(event) {
    console.log(event);
  }

  //Create new Activity and Honor
  function createNewHonor() {
    let honorNumber = honorformData.length + 1;
    setHonorFormData((prevHonors) => [
      ...prevHonors,
      {
        honorId: nanoid(),
        honorOrder: honorNumber,
        honorTitle: " ",
        honorGradeLevel9: true,
        honorGradeLevel10: false,
        honorGradeLevel11: false,
        honorGradeLevel12: false,
        honorGradeLevelPostGraduate: false,
        honorLevelOfRecognitionSchool: false,
        honorLevelOfRecognitionStateRegional: false,
        honorLevelOfRecognitionNational: false,
        honorLevelOfRecognitionInternational: false,
      },
    ]);
  }

  function createNewActivity() {
    let honorNumber = actFormData.length + 1;
    setActFormData((prevActivity) => [
      ...prevActivity,
      {
        id: nanoid(),
        order: honorNumber,
        type: "",
        position: " ",
        organisationName: "",
        description: "",
        GradeLevel9: false,
        GradeLevel10: false,
        GradeLevel11: false,
        GradeLevel12: false,
        GradeLevelPostGraduate: false,
        LevelOfRecognitionSchool: false,
        schoolDay: false,
        schoolBreak: false,
        allYear: false,
        hourUsed: null,
        weekPerYear: null,
      },
    ]);
  }

  //Valuable to display activity and honor honor content
  const honorContent = honorformData.map((content) => {
    return (
      <HonorInput
        key={content.honorId}
        id={content.honorId}
        handleChange={handleChange}
        honorNumber={content.honorOrder}
      />
    );
  });

  const ActivityContent = actFormData.map((content) => {
    return (
      <ActivityInput key={content.id} id={content.id} order={content.order} />
    );
  });

  //Hanlde form submittion
  function handleSubmit(e) {
    e.preventDefault();
    console.log(honorformData);
  }
  return (
    <section className="flex items-center flex-col justify-center pb-20">
      {/* Appear when there is no activity and honors */}
      {honorformData.length == 0 && actFormData.length == 0 && (
        <div className="mt-10">
          <div
            className="animation-box w-full flex justify-center
                      md:w-9/12"
          >
            <Lottie
              animationData={NoContent}
              loop={false}
              style={{ width: 250 }}
            />
          </div>

          <h1 className="font-bold text-3xl md:text-4xl text-center -mt-10 capitalize">
            No content
          </h1>
        </div>
      )}
      {(honorformData.length >= 1 || actFormData.length >= 1) && (
        <form
          onSubmit={handleSubmit}
          className="w-full py-10 px-3 mt-10 flex flex-col items-center justify-center"
        >
          {/* Honors input */}
          {honorformData.length >= 1 && (
            <div
              className="honors--wrapper w-full flex flex-col justify-start items-center
              md:w-7/12 border-l-2 border-r-2 border-MdBlue rounded-lg mt-10"
            >
              {/* Honors Title, status bar and collasp button */}
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
                <h3 className="text-white font-bold text-20">Honors</h3>
                <h3 className="text-white font-bold text-15">Status</h3>
                <button className="collasped-toggler right-5 absolute">
                  ^
                </button>
              </aside>
              {/* Honors inputs goes here */}
              {honorContent}
              <div
                className="cursor-pointer flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20"
                onClick={createNewHonor}
              >
                <HiOutlinePlus /> <span>Add new block</span>
              </div>
            </div>
          )}

          {/* Activity input */}
          {actFormData.length >= 1 && (
            <div
              className="Activity--wrapper w-full flex flex-col justify-start items-center
              md:w-7/12 border-l-2 border-r-2 border-MdBlue rounded-lg mt-20"
            >
              {/* Activity Title, status bar and collasp button */}
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
                <h3 className="text-white font-bold text-20">Activity</h3>
                <h3 className="text-white font-bold text-15">Status</h3>
                <button className="collasped-toggler right-5 absolute">
                  ^
                </button>
              </aside>
              {/* Activity inputs goes here */}
              {ActivityContent}
              <div
                className="cursor-pointer flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20"
                onClick={createNewActivity}
              >
                <HiOutlinePlus /> <span>Add new block</span>
              </div>
            </div>
          )}

          {/* Submit and add new honor block */}
          {honorformData.length >= 10 && actFormData.length >= 0 && (
            <button className="capitalize px-5 py-2 bg-MdBlue rounded-md text-white font-bold mt-20">
              Submit for review
            </button>
          )}
        </form>
      )}

      {/* add your first honor and activity */}
      <div className="flex flex-row justify-center flex-wrap items-center py-2 mt-10">
        {honorformData.length < 1 && (
          <button
            className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
            onClick={createNewHonor}
          >
            <HiOutlinePlus />
            Add honor
          </button>
        )}
        {actFormData.length == 0 && (
          <button
            className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
            onClick={createNewActivity}
          >
            <HiOutlinePlus />
            Add Activity
          </button>
        )}
      </div>
    </section>
  );
}
