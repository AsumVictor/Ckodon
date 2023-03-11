import React from "react";
import { HiTrash } from "react-icons/hi";

export default function ActivityInput(props) {
  return (
    <>
      {/* Activity inputs goes here */}
      <div className="Activity w-full bg-gray-200 border-2 border-t-MdBlue border-b-MdBlue py-4 rounded-md mt-10 space-y-4 flex flex-col">
        {/* Activity inputs index and delete buuton bar*/}
        <div className="Activity--header flex flex-row relative justify-between w-full items-center px-3 md:px-10">
          <h4 className="text-black font-bold">Activity {props.order}</h4>
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
              className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
            />
          </label>
          {/* Activity Position */}
          <label htmlFor="position" className="mt-7 w-full">
            <span>
              Position/Leadership description <br /> {`(Max characters: 50)`}*
            </span>
            <br />
            <textarea
              maxlength="50"
              name="position"
              id="position"
              title="position"
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
              className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
            />
          </label>

          {/* Activity description */}
          <label className="mt-7 w-full" htmlFor="odescription">
            <span>
              * Please describe this activity, including what you accomplished
              and any recognition you received, etc. <br />{" "}
              {`(Max characters: 150)`}
            </span>
            <br />
            <textarea
              maxlength="150"
              name="odescription"
              id="odescription"
              title="odescription"
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
              <input type="checkbox" name="GradeLevel9" id="GradeLevel9" />
              <span className="flex flex-row">9</span>
            </label>
            {/* Grade Level 10 checkbox */}
            <label
              htmlFor="GradeLevel10"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input type="checkbox" name="GradeLevel10" id="GradeLevel10" />
              <span className="flex flex-row">10</span>
            </label>
            {/* Grade Level 11 checkbox */}
            <label
              htmlFor="GradeLevel11"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input type="checkbox" name="GradeLevel11" id="GradeLevel11" />
              <span className="flex flex-row">11</span>
            </label>
            {/* Grade Level 12 checkbox */}
            <label
              htmlFor="GradeLevel12"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input type="checkbox" name="GradeLevel12" id="GradeLevel12" />
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
              <input type="checkbox" name="schoolDay" id="schoolDay" />
              <span className="flex flex-row">During school year</span>
            </label>
            {/* Activity Timing of participation schoolBreak  */}
            <label
              htmlFor="schoolBreak"
              className="flex flex-row space-x-2 mt-1 pr-5 "
            >
              <input type="checkbox" name="schoolBreak" id="schoolBreak" />
              <span className="flex flex-row">During school Break</span>
            </label>
            {/* Activity Timing of participation allYear */}
            <label
              htmlFor="allYear"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input type="checkbox" name="allYear" id="allYear" />
              <span className="flex flex-row">All year</span>
            </label>
          </div>
          {/* Hour spent on activtity */}
          <label htmlFor="hourUsed" className="mt-7 w-full">
            <span>* Hours spent per week </span> <br />
            <input
              type="number"
              name="hourUsed"
              min='0'
              id="hourUsed"
              title="hourUsed"
              className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
            />
          </label>

          {/* weeks per year spent on activtity */}
          <label  htmlFor="weekPerYear" className="mt-7 w-full">
            <span>* Weeks spent per year </span> <br />
            <input
              type="number"
              name="weekPerYear"
              min='0'
              id="weekPerYear"
              title="weekPerYear"
              className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
            />
          </label>
        </div>
      </div>
    </>
  );
}
