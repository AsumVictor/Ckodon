import React, { useState, useEffect } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import { nanoid } from "nanoid";

export default function ActivityTips() {
  const [Honor, setHonor] = useState(
    JSON.parse(localStorage.getItem("Honors")) || []
  ); //Honors List

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

  //Add new honor
  const addHonor = () => {
    const newHonor = {
      id: nanoid(6),
      title: "",
      Grade9: false,
      Grade10: false,
      Grade11: false,
      Grade12: false,
      School: false,
      Region: false,
      National: false,
      International: false,
      GradePost: false,
    };
    setHonor((prevState) => [...prevState, newHonor]);
  };

  //Delete honnor
  function deleteHonor(id) {
    setHonor((prevData) => {
      const newState = prevData.filter((child) => child.id !== id);
      return newState;
    });
  }

  //Handlesubmit
  function HandleSubmit(e) {
    e.preventDefault();
  }

  //  Save to Database
  // async function Save() {
  // try {
  //   const res = await fetch("/api/users", {method:'POST', body: JSON.stringify({

  //   })})
  // } catch (error) {

  // }
  // }

  // save form DATA to local storage
  useEffect(() => {
    localStorage.setItem("Honors", JSON.stringify(Honor));
  }, [Honor]);

  return (
    <section className="w-full flex flex-col relative px-2 md:px-10">
      <h1 className="self-center mt-2 text-2xl text-MdBlue font-semibold">
        My Honor Lists
      </h1>

      <form className="self-center w-full md:w-8/12 flex items-center flex-col pb-20">
        <div
          className="honors--wrapper w-full flex flex-col justify-start items-center
              md:w-full border-l-2 border-r-2 border-MdBlue rounded-lg mt-10 overflow-hidden"
        >
          <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
            <h3 className="text-white font-bold text-20">Honors</h3>
            <h3 className="text-white font-bold text-15">Status</h3>
          </aside>
        </div>

        {Honor.map((Honor, index) => (
          // Each Honor component
          <div
            key={Honor.id}
            className="honor w-full md:w-11/12 bg-white border-2 border-MdBlue py-4 rounded-md mt-10"
          >
            <div className="honor--header flex flex-row relative justify-between w-full items-center px-3 md:px-10">
              <h2 className="text-black font-bold">Honor {index + 1}</h2>
              <div
                className="text-20 md:text-2xl cursor-pointer px-3 md:px-4 py-2 md:py-3 bg-slate-200 rounded-md text-red-600 flex flex-row items-center 
                                 justify-center space-x-2"
                onClick={() => deleteHonor(`${Honor.id}`)}
              >
                <HiTrash />
              </div>
            </div>

            {/* Honors inputs*/}
            <div className="honor--inputs w-full py-10 bg-tranparent mt-3 px-3 md:px-10">
              {/* Honor title */}
              <label htmlFor="title">
                <span className="font-bold">* Honor {index + 1} Title</span>
                <br />
                <textarea
                  maxlength="100"
                  name="title"
                  id="title"
                  value={Honor.title}
                  onChange={(e) => handleHonorChange(e, index)}
                  title="Honor title"
                  className="text-black w-full md:w-12/12 border-2 border-blue-300 rounded-md px-2 hover:border-MdBlue focus:border-MdBlue"
                />
              </label>

              {/* Honor Grade level */}
              <div className="flex flex-auto flex-wrap justify-around">
                {/* Grade Level */}
                <div className="flex flex-col">
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                    Grade Level
                  </h3>

                  <ul className="w-48 mt-2 file:text-sm font-bold text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`Grade9${index}`}
                          type="checkbox"
                          name="Grade9"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.Grade9}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for={`Grade9${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md font-bold text-sm text-gray-900 dark:text-gray-300"
                        >
                          9
                        </label>
                      </div>
                    </li>

                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`Grade10${index}`}
                          type="checkbox"
                          name="Grade10"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.Grade10}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for={`Grade10${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                        >
                          10
                        </label>
                      </div>
                    </li>

                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`Grade11${index}`}
                          type="checkbox"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.Grade11}
                          name="Grade11"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for={`Grade11${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                        >
                          11
                        </label>
                      </div>
                    </li>

                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`Grade12${index}`}
                          type="checkbox"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.Grade12}
                          name="Grade12"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for={`Grade12${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                        >
                          12
                        </label>
                      </div>
                    </li>

                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`GradePost${index}`}
                          type="checkbox"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.GradePost}
                          name="GradePost"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for={`GradePost${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                        >
                          Post Graduate
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Level of Recognition */}
                <div className="flex flex-col">
                  <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                    Level of Recognition
                  </h3>
                  <ul className="w-48 text-sm mt-2 font-bold text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`School${index}`}
                          type="checkbox"
                          name="School"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.School}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for={`School${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md font-bold text-sm text-gray-900 dark:text-gray-300"
                        >
                          School
                        </label>
                      </div>
                    </li>

                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`Region${index}`}
                          type="checkbox"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.Region}
                          name="Region"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                        />
                        <label
                          for={`Region${index}`}
                          className="w-full font-bold py-3 ml-2 text-sm  text-gray-900 dark:text-gray-300"
                        >
                          Region State
                        </label>
                      </div>
                    </li>

                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`National${index}`}
                          type="checkbox"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.National}
                          name="National"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for={`National${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                        >
                          National
                        </label>
                      </div>
                    </li>

                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div className="flex items-center pl-3">
                        <input
                          id={`International${index}`}
                          type="checkbox"
                          onChange={(e) => handleHonorChange(e, index)}
                          checked={Honor.International}
                          name="International"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for={`International${index}`}
                          className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                        >
                          International
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="self-end mr-20 bg-MdBlue text-white px-3 py-1 rounded-md mt-4"
        >
          Save Changes
        </button>

        <div
          className="cursor-pointer flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20"
          onClick={addHonor}
        >
          <HiOutlinePlus /> <span>Add new Honor</span>
        </div>

        {/* Submit when Honor is 5 or more and Activity is 10 or more */}
        {Honor.length >= 5 && (
          <button
            className="capitalize px-5 py-2 bg-MdBlue rounded-md text-white font-bold mt-20"
            type="submit"
            onClick={HandleSubmit}
          >
            Submit for review
          </button>
        )}
      </form>
    </section>
  );
}
