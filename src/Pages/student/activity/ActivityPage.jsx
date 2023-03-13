import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import { nanoid } from "nanoid";

function AcitivityPage() {


  const [activityAndHonors, setactivityAndHonrs] = useState(() => JSON.parse(localStorage.getItem("activityAndHonors")) || {
    id: nanoid(),
    Honors: null,
    Activities: null,
  })
  const [Honor, setHonor] = useState( activityAndHonors.Honors || []); //Honors List
  const [Activity, setActivity] = useState( activityAndHonors.Activities || []); //activity list

  //Add new honor
  const addHonor = () => {
    const newHonor = {
      id: Honor.length + 1,
      title: "",
      gradeLevel9: false,
      gradeLevel10: false,
      gradeLevel11: false,
      gradeLevel12: false,
      gradeLevelPostGraduate: false,
      LevelOfRecognitionSchool: false,
      LevelOfRecognitionStateRegional: false,
      LevelOfRecognitionNational: false,
      LevelOfRecognitionInternational: false,
    };
    setHonor((prevState) => [...prevState, newHonor]);
  };

  //Add new activity
  function addActivity() {
    const newActivity = {
      id: Activity.length + 1,
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
    };
    setActivity((prevActivity) => [...prevActivity, newActivity]);
    console.log(Activity);
  }

  //Handle Honor Data value
  const handleHonorChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    setHonor((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        ...newState[index],
        [name]: type == "checkbox" ? checked : value,
      };
      return newState;
    });
  };

  //Handle Activity form
  function HanldeActivityChange(event, index) {
    const { name, value, type, checked } = event.target;
    setActivity((prevState) => {
      const newState = [...prevState];
      newState[index] = {
        ...newState[index],
        [name]: type == "checkbox" ? checked : value,
      };
      return newState;
    });
  }

  //Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
   console.log(activityAndHonors);
  };

    //When honor and activity array changes, push to local storage
    useEffect(() => {
        setactivityAndHonrs(prevState=>{
            return{
                ...prevState,
                Honors: Honor,
                Activities: Activity,
            }
        })
        localStorage.setItem("activityAndHonors", JSON.stringify(activityAndHonors));
        console.log('rendered');
      }, [Honor, Activity]);
    

  return (
    <section className="flex items-center flex-col justify-center pb-20">
      {/* Display when Honors and Activity is empty */}
      {Honor.length == 0 && Activity.length == 0 && (
        <div className="mt-10 flex flex-col justify-center items-center">
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

          <h1 className="font-bold text-2xl md:text-3xl text-center -mt-5 capitalize">
            No content
          </h1>
        </div>
      )}

      {/* Form Data of Honor */}
      {(Honor.length >= 1 || Activity.length >= 1) && (
        <form
          onSubmit={handleSubmit}
          className="w-full py-10 px-3 flex flex-col items-center justify-center"
        >
          {/* Honor Inputs */}
          {Honor.length >= 1 && (
            <div
              className="honors--wrapper w-full flex flex-col justify-start items-center
              md:w-7/12 border-l-2 border-r-2 border-MdBlue rounded-lg mt-10 overflow-hidden"
            >
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
                <h3 className="text-white font-bold text-20">Honors</h3>
                <h3 className="text-white font-bold text-15">Status</h3>
                <button className="collasped-toggler right-5 absolute" type="button">
                  ^
                </button>
              </aside>

              {Honor.map((Honor, index) => (
                // Each Honor component
                <div
                  key={Honor.id}
                  className="honor w-full bg-gray-200 border-2 border-t-MdBlue border-b-MdBlue py-4 rounded-md mt-10"
                >
                  <div className="honor--header flex flex-row relative justify-between w-full items-center px-3 md:px-10">
                    <h2 className="text-black font-bold">Honor {index + 1}</h2>
                    <div
                      className="py-1 cursor-pointer px-4 bg-red-500 rounded-md text-white flex flex-row items-center 
                                 justify-center space-x-2"
                    >
                      <HiTrash /> <span>Delete</span>
                    </div>
                  </div>

                  {/* Honors inputs*/}
                  <div className="honor--inputs w-full py-10 bg-tranparent mt-5 px-3 md:px-10">
                    {/* Honor title */}

                    <label htmlFor="title">
                      <span>* Honor {index + 1} Title</span> <br />
                      <textarea
                        onChange={(e) => handleHonorChange(e, index)}
                        maxlength="100"
                        name="title"
                        id="title"
                        value={Honor.title}
                        title="Honor title"
                        className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                      />
                    </label>

                    {/* Honor Grade level */}
                    <div className="honorGradeLevel mt-7">
                      <span>* Grade Level</span> <br />
                      {/* Grade Level 9 checkbox */}
                      <label
                        htmlFor="GradeLevel9"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="gradeLevel9"
                          id="gradeLevel9"
                          value={Honor.gradeLevel9}
                        />
                        <span className="flex flex-row">9</span>
                      </label>
                      {/* Grade Level 10 checkbox */}
                      <label
                        htmlFor="GradeLevel10"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="gradeLevel10"
                          id="gradeLevel10"
                          value={Honor.gradeLevel10}
                        />
                        <span className="flex flex-row">10</span>
                      </label>
                      {/* Grade Level 11 checkbox */}
                      <label
                        htmlFor="GradeLevel11"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="gradeLevel11"
                          id="gradeLevel11"
                          value={Honor.gradeLevel11}
                        />
                        <span className="flex flex-row">11</span>
                      </label>
                      {/* Grade Level 12 checkbox */}
                      <label
                        htmlFor="GradeLevel12"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="gradeLevel12"
                          id="gradeLevel12"
                          value={Honor.gradeLevel12}
                        />
                        <span className="flex flex-row">12</span>
                      </label>
                      {/* Grade Level postGraduate checkbox */}
                      <label
                        htmlFor="GradeLevelpostGraduate"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="gradeLevelPostGraduate"
                          id="gradeLevelpostGraduate"
                          value={Honor.gradeLevelPostGraduate}
                        />
                        <span className="flex flex-row">postGraduate</span>
                      </label>
                    </div>

                    <div className="honorLevelOfRecognition mt-7">
                      <span>* {`Level(s) of recognition`}</span> <br />
                      {/* Level(s) of recognition School checkbox */}
                      <label
                        htmlFor="LevelOfRecognitionSchool"
                        className="flex flex-row space-x-2 mt-1 pr-5 px-2 w-2/12"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="LevelOfRecognitionSchool"
                          id="LevelOfRecognitionSchool"
                          value={Honor.LevelOfRecognitionSchool}
                        />
                        <span className="flex flex-row">School</span>
                      </label>
                      {/* Level(s) of recognition StateRegional checkbox */}
                      <label
                        htmlFor="LevelOfRecognitionStateRegional"
                        className="flex flex-row space-x-2 mt-1 pr-5 px-2 w-2/12"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="LevelOfRecognitionStateRegional"
                          id="LevelOfRecognitionStateRegional"
                          value={Honor.LevelOfRecognitionStateRegional}
                        />
                        <span className="flex flex-row">State/Regional</span>
                      </label>
                      {/* Level(s) of recognition National checkbox */}
                      <label
                        htmlFor="LevelOfRecognitionNational"
                        className="flex flex-row space-x-2 mt-1 pr-5 px-2 w-2/12"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="LevelOfRecognitionNational"
                          id="LevelOfRecognitionNational"
                          value={Honor.LevelOfRecognitionNational}
                        />
                        <span className="flex flex-row">National</span>
                      </label>
                      {/* Level(s) of recognition International checkbox */}
                      <label
                        htmlFor="LevelOfRecognitionInternational"
                        className="flex flex-row space-x-2 mt-1 pr-5 px-2 w-2/12"
                      >
                        <input
                          onChange={(e) => handleHonorChange(e, index)}
                          type="checkbox"
                          name="LevelOfRecognitionInternational"
                          value={Honor.LevelOfRecognitionInternational}
                        />
                        <span className="flex flex-row">International</span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="cursor-pointer flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20"
                onClick={addHonor}
              >
                <HiOutlinePlus /> <span>Add new Honor</span>
              </div>
            </div>
          )}

          {/* Activity form  */}

          {Activity.length >= 1 && (
            <div
              className="Activity--wrapper w-full flex flex-col justify-start items-center
              md:w-7/12 border-l-2 border-r-2 border-MdBlue rounded-lg mt-20"
            >
              {/* Activity Title, status bar and collasp button */}
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
                <h3 className="text-white font-bold text-20">Activity</h3>
                <h3 className="text-white font-bold text-15">Status</h3>
                <button className="collasped-toggler right-5 absolute" type="button">
                  ^
                </button>
              </aside>

              {/* Activity inputs goes here */}

              {Activity.map((Activity, index) => (
                <div
                  className="Activity w-full bg-gray-200 border-2 border-t-MdBlue border-b-MdBlue py-4 rounded-md mt-10 space-y-4 flex flex-col"
                  key={Activity.id}
                >
                  {/* Activity inputs index and delete buuton bar*/}
                  <div className="Activity--header flex flex-row relative justify-between w-full items-center px-3 md:px-10">
                    <h4 className="text-black font-bold">
                      Activity {index + 1}
                    </h4>
                    <div
                      className="py-1 cursor-pointer px-4 bg-red-500 rounded-md text-white flex flex-row items-center 
                              justify-center space-x-2"
                    >
                      <HiTrash /> <span>Delete</span>
                    </div>
                  </div>

                  {/* Activity inputs*/}
                  <div className="Activity--inputs w-full py-10 bg-tranparent mt-5 px-3 md:px-10 flex flex-col">
                    {/* Activity title */}
                    <label htmlFor="type">
                      <span>* Activity Type</span> <br />
                      <textarea
                        maxlength="100"
                        name="type"
                        id="type"
                        title="type"
                        value={Activity.type}
                        onChange={(event) => HanldeActivityChange(event, index)}
                        className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                      />
                    </label>
                    {/* Activity Position */}
                    <label htmlFor="position" className="mt-7 w-full">
                      <span>
                        Position/Leadership description <br />
                        {`(Max characters: 50)`}*
                      </span>
                      <br />
                      <textarea
                        maxlength="50"
                        name="position"
                        id="position"
                        title="position"
                        value={Activity.position}
                        onChange={(event) => HanldeActivityChange(event, index)}
                        className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                      />
                    </label>
                    {/* Activity organisation Name */}
                    <label className="mt-7 w-full" htmlFor="organisationName">
                      <span>
                        * Organization Name <br /> {`(Max characters: 100)`}
                      </span>
                      <br />
                      <textarea
                        maxlength="100"
                        name="organisationName"
                        id="organisationName"
                        title="organisationName"
                        value={Activity.organisationName}
                        onChange={(event) => HanldeActivityChange(event, index)}
                        className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                      />
                    </label>

                    {/* Activity description */}
                    <label className="mt-7 w-full" htmlFor="odescription">
                      <span>
                        * Please describe this activity, including what you
                        accomplished and any recognition you received, etc.{" "}
                        <br /> {`(Max characters: 150)`}
                      </span>
                      <br />
                      <textarea
                        maxlength="150"
                        name="description"
                        id="description"
                        title="description"
                        value={Activity.description}
                        onChange={(event) => HanldeActivityChange(event, index)}
                        className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                      />
                    </label>

                    {/* Activity Grade level */}
                    <div className="ActivityGradeLevel mt-7 w-full">
                      {/* Grade Level 9 checkbox */}
                      <span>* Participation grade levels </span> <br />
                      <label
                        htmlFor="GradeLevel9"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          type="checkbox"
                          name="GradeLevel9"
                          id="GradeLevel9"
                          value={Activity.GradeLevel9}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">9</span>
                      </label>
                      {/* Grade Level 10 checkbox */}
                      <label
                        htmlFor="GradeLevel10"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          type="checkbox"
                          name="GradeLevel10"
                          id="GradeLevel10"
                          value={Activity.GradeLevel10}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">10</span>
                      </label>
                      {/* Grade Level 11 checkbox */}
                      <label
                        htmlFor="GradeLevel11"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          type="checkbox"
                          name="GradeLevel11"
                          id="GradeLevel11"
                          value={Activity.GradeLevel11}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">11</span>
                      </label>
                      {/* Grade Level 12 checkbox */}
                      <label
                        htmlFor="GradeLevel12"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          type="checkbox"
                          name="GradeLevel12"
                          id="GradeLevel12"
                          value={Activity.GradeLevel12}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">12</span>
                      </label>
                      {/* Grade Level PostGraduate checkbox */}
                      <label
                        htmlFor="GradeLevelPostGraduate"
                        className="flex flex-row space-x-2 pr-5 mt-1"
                      >
                        <input
                          type="checkbox"
                          name="GradeLevelPostGraduate"
                          id="GradeLevelPostGraduate"
                          value={Activity.GradeLevelPostGraduate}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">Post Graduate</span>
                      </label>
                    </div>

                    {/* Activity Timing of participation */}
                    <div className="TimingOfParticipation mt-7 w-full">
                      <span>* Timing of participation</span> <br />
                      {/* Activity Timing of participation school year */}
                      <label
                        htmlFor="schoolDay"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          type="checkbox"
                          name="schoolDay"
                          id="schoolDay"
                          value={Activity.schoolDay}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">
                          During school year
                        </span>
                      </label>
                      {/* Activity Timing of participation schoolBreak  */}
                      <label
                        htmlFor="schoolBreak"
                        className="flex flex-row space-x-2 mt-1 pr-5 "
                      >
                        <input
                          type="checkbox"
                          name="schoolBreak"
                          id="schoolBreak"
                          value={Activity.schoolBreak}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">
                          During school Break
                        </span>
                      </label>
                      {/* Activity Timing of participation allYear */}
                      <label
                        htmlFor="allYear"
                        className="flex flex-row space-x-2 mt-1 pr-5"
                      >
                        <input
                          type="checkbox"
                          name="allYear"
                          id="allYear"
                          value={Activity.allYear}
                          onChange={(event) =>
                            HanldeActivityChange(event, index)
                          }
                        />
                        <span className="flex flex-row">All year</span>
                      </label>
                    </div>
                    {/* Hour spent on activtity */}
                    <label htmlFor="hourUsed" className="mt-7 w-full">
                      <span>* Hours spent per week </span> <br />
                      <input
                        type="number"
                        name="hourUsed"
                        min="0"
                        id="hourUsed"
                        title="hourUsed"
                        value={Activity.hourUsed}
                        onChange={(event) => HanldeActivityChange(event, index)}
                        className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                      />
                    </label>

                    {/* weeks per year spent on activtity */}
                    <label htmlFor="weekPerYear" className="mt-7 w-full">
                      <span>* Weeks spent per year </span> <br />
                      <input
                        type="number"
                        name="weekPerYear"
                        min="0"
                        id="weekPerYear"
                        title="weekPerYear"
                        value={Activity.weekPerYear}
                        onChange={(event) => HanldeActivityChange(event, index)}
                        className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
                      />
                    </label>
                  </div>
                </div>
              ))}

              {/* Button to new Activity */}
              <div
                className="cursor-pointer flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20"
                onClick={addActivity}
              >
                <HiOutlinePlus /> <span>Add new Activity</span>
              </div>
            </div>
          )}

          {/* Submit when Honor is 5 or more and Activity is 10 or more */}
          {(Honor.length >= 5 && Activity.length >= 10 ) && (
            <button className="capitalize px-5 py-2 bg-MdBlue rounded-md text-white font-bold mt-20" type="submit"
            onClick={handleSubmit}>
              Submit for review
            </button>
          )}
        </form>
      )}

      {/* add your first honor and activity */}
      <div className="flex flex-row justify-center flex-wrap items-center py-2 mt-10">
        {Honor.length < 1 && (
          <button
            className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
            onClick={addHonor}
          >
            <HiOutlinePlus />
            Add honor
          </button>
        )}

        {Activity.length < 1 && (
          <button
            className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
            onClick={addActivity}
          >
            <HiOutlinePlus />
            Add Activity
          </button>
        )}
      </div>
    </section>
  );
}

export default AcitivityPage;
