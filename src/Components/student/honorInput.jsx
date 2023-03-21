import React from "react";
import { HiTrash } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi2";

export default function HonorInput(props) {
  const ID = props.id;
  return (
    <>
      {/* Honors inputs goes here */}
      <div className="honor w-full bg-gray-200 border-2 border-t-MdBlue border-b-MdBlue py-4 rounded-md mt-10">
        {/* Honors inputs index and delete buuton bar*/}
        <div className="honor--header flex flex-row relative justify-between w-full items-center px-3 md:px-10">
          <h4 className="text-black font-bold">Honor {props.honorNumber}</h4>
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
          <label htmlFor="honorTitle">
            <span>* Honor {props.honorNumber} Title</span> <br />
            <textarea
              onChange={props.handleChange}
              maxlength="100"
              name="honorTitle"
              id="honorTitle"
              title="Honor title"
              className="w-full md:w-10/12 border-2 border-gray-400 rounded-md focus:border-MdBlue px-2 flex flex-wrap flex-row resize-y"
            />
          </label>

          {/* Honor Grade level */}
          <div className="honorGradeLevel mt-7">
            {/* Grade Level 9 checkbox */}
            <span>* Grade Level</span> <br />
            <label
              htmlFor="honorGradeLevel9"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorGradeLevel9"
                id="honorGradeLevel9"
              />
              <span className="flex flex-row">9</span>
            </label>
            {/* Grade Level 10 checkbox */}
            <label
              htmlFor="honorGradeLevel10"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorGradeLevel10"
                id="honorGradeLevel10"
              />
              <span className="flex flex-row">10</span>
            </label>
            {/* Grade Level 11 checkbox */}
            <label
              htmlFor="honorGradeLevel11"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorGradeLevel11"
                id="honorGradeLevel11"
              />
              <span className="flex flex-row">11</span>
            </label>
            {/* Grade Level 12 checkbox */}
            <label
              htmlFor="honorGradeLevel12"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorGradeLevel12"
                id="honorGradeLevel12"
              />
              <span className="flex flex-row">12</span>
            </label>
            {/* Grade Level PostGraduate checkbox */}
            <label
              htmlFor="honorGradeLevelPostGraduate"
              className="flex flex-row space-x-2 pr-5 mt-1"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorGradeLevelPostGraduate"
                id="honorGradeLevelPostGraduate"
              />
              <span className="flex flex-row">Post Graduate</span>
            </label>
          </div>

          {/* Honor Level(s) of recognition */}
          <div className="honorLevelOfRecognition mt-7">
            <span>* {`Level(s) of recognition`}</span> <br />
            {/* Level(s) of recognition School checkbox */}
            <label
              htmlFor="honorLevelOfRecognitionSchool"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorLevelOfRecognitionSchool"
                id="honorLevelOfRecognitionSchool"
              />
              <span className="flex flex-row">School</span>
            </label>
            {/* Level(s) of recognition regional checkbox */}
            <label
              htmlFor="honorLevelOfRecognitionStateRegional"
              className="flex flex-row space-x-2 mt-1 pr-5 "
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorLevelOfRecognitionStateRegional"
                id="honorLevelOfRecognitionStateRegional"
              />
              <span className="flex flex-row">State/Regional</span>
            </label>
            {/* Level(s) of recognition National checkbox */}
            <label
              htmlFor="honorLevelOfRecognitionNational"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorLevelOfRecognitionNational"
                id="honorLevelOfRecognitionNational"
              />
              <span className="flex flex-row">National</span>
            </label>
            {/* Level(s) of recognition International checkbox */}
            <label
              htmlFor="honorLevelOfRecognitionInternational"
              className="flex flex-row space-x-2 mt-1 pr-5"
            >
              <input
                onChange={props.handleChange}
                type="checkbox"
                name="honorLevelOfRecognitionInternational"
                id="honorLevelOfRecognitionInternational"
              />
              <span className="flex flex-row">International</span>
            </label>
          </div>
        </div>
      </div>

      {/* Add new Honor button */}
    </>
  );
}
