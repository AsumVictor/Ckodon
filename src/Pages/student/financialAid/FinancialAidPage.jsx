import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";

export default function FinancialAid() {
  const [aidData, setAidData] = useState(
    () => JSON.parse(localStorage.getItem("Aids")) || []
  );

  //Udate aid data
  useEffect(() => {
    localStorage.setItem("Aids", JSON.stringify(aidData));
  }, [aidData]);

  function addSchoolAndAid() {
    const newSchoolAndAid = {
      id: nanoid(),
      schoolName: "",
      TotalAnualIncome: "",
      Totalsavings: "",
      TotalExpenses: "",
      EFC: "",
    };
    setAidData((prevState) => [...prevState, newSchoolAndAid]);
  }

  function HanldeInput(e, index) {
    const { name, value } = e.target;
    setAidData((prevData) => {
      let newState = [...prevData];
      newState[index] = {
        ...newState[index],
        [name]: value,
      };
      return newState;
    });
  }

  //Delete Aid data
  function deleteAidDoc(_id) {
    setAidData((prevData) => prevData.filter((aid) => aid.id !== _id));
  }

  //Handle form Submit
  function HanldeFormSubmit(e) {
    e.preventDefault();
    console.log(aidData);
  }

  return (
    <section className="flex items-center w-full flex-col justify-center pb-10 px-2">
      {/* Form Element */}

      {aidData.length >= 1 && (
        <form
          className="w-full md:w-8/12 flex flex-col"
          onSubmit={HanldeFormSubmit}
        >
          {/* Aid header with school */}

          {aidData.map((aiddata, index) => (
            <div className="flex flex-col w-full border-2 border-MdBlue pb-10 rounded-md mt-10 overflow-hidden px-2 md:px-10">
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10 rounded-b-lg">
                <input
                  type="text"
                  name="schoolName"
                  autoFocus={!aiddata.schoolName && true}
                  value={aiddata.schoolName}
                  onChange={(e) => HanldeInput(e, index)}
                  required
                  placeholder="Enter School Name"
                  className="text-white placeholder-white placeholder-opacity-50 w-8/12 font-bold px-1 
                                md:text-20 outline-none bg-transparent invalid:border-b-2
                                invalid:border-red-800 invalid:placeholder-red-800"
                />
                <h3 className="text-white font-bold text-15">Status</h3>
                <button
                  type="button"
                  onClick={() => deleteAidDoc(aiddata.id)}
                  className="py-1 px-2 bg-red-100 text-red-600 font-bold text-2xl mx-2 rounded-md"
                >
                  <HiOutlineTrash />
                </button>
              </aside>

              {/* Aid value and params */}
              <div className="flex w-full flex-wrap px-2 justify-between md:px-10">
                <label className="w-full md:w-5/12 mt-5">
                  <span className="font-bold">{`Total Annual Family Income ($) `}</span>
                  <br />
                  <input
                    name="TotalAnualIncome"
                    type="number"
                    required
                    value={aiddata.TotalAnualIncome}
                    onChange={(e) => HanldeInput(e, index)}
                    min={0}
                    placeholder="Family income in dollars. eg. $7,000"
                    className="text-black w-full md:w-12/12 border-2 border-MdBlue500 rounded-md invalid:border-red-800 px-2 outline-MdBlue"
                  />
                </label>

                <label className="w-full md:w-5/12 mt-5">
                  <span className="font-bold">{`Total Family Savings ($) `}</span>
                  <br />
                  <input
                    name="Totalsavings"
                    type="number"
                    required
                    value={aiddata.Totalsavings}
                    onChange={(e) => HanldeInput(e, index)}
                    min={0}
                    placeholder="Total Family Savings. eg $6,000"
                    className="text-black w-full border-2 border-MdBlue500 rounded-md invalid:border-red-800 px-2 outline-MdBlue"
                  />
                </label>

                <label className="w-full md:w-5/12 mt-5">
                  <span className="font-bold">{`Total Expenses per year ($) `}</span>
                  <br />
                  <input
                    name="TotalExpenses"
                    type="number"
                    min={0}
                    required
                    value={aiddata.TotalExpenses}
                    onChange={(e) => HanldeInput(e, index)}
                    placeholder="Total Expenses per year eg. $2,000"
                    className="text-black w-full border-2 border-MdBlue500 rounded-md invalid:border-red-800 px-2 outline-MdBlue"
                  />
                </label>

                <label className="w-full md:w-5/12 mt-5">
                  <span className="font-bold">{`Total Family Contribution/Year($) `}</span>
                  <br />
                  <input
                    name="EFC"
                    type="number"
                    min={0}
                    required
                    value={aiddata.EFC}
                    onChange={(e) => HanldeInput(e, index)}
                    placeholder="Total Family Contribution eg. $5,000"
                    className="text-black w-full border-2 border-MdBlue500 rounded-md invalid:border-red-800 px-2 outline-MdBlue"
                  />
                </label>
              </div>
            </div>
          ))}

          {/* Button to add new school */}
          <button
            className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                               justify-center items-center text-white font-bold rounded-md
                               mx-5 mt-10 self-center capitalize"
          >
            Submit All for review
          </button>
        </form>
      )}

      <button
        type="button"
        className="px-5 py-2 bg-white hover:bg-MdBlue hover:text-white flex flex-row
                           justify-center items-center text-MdBlue border-2 border-MdBlue font-bold rounded-md
                           mx-5 mt-10 self-center"
        onClick={addSchoolAndAid}
      >
        <HiOutlinePlus />
        Add New School EFC
      </button>
    </section>
  );
}
