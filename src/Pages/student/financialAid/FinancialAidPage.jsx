import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus, HiArrowUpTray } from "react-icons/hi2";


export default function FinancialAid() {

const [aidData, setAidData] = useState([])

function addSchoolAndAid(){
    const newSchoolAndAid = {
        id: nanoid(),
        schoolName: '',
        TotalAnualIncome: null,
        Totalsavings: null,
        TotalExpenses: null,
        EFC: null,
    }
 setAidData(prevState=>[...prevState, newSchoolAndAid])
 console.log(aidData);
} 


  return (
    <section className="flex items-center w-full flex-col justify-center pb-20 px-2">
      {/* Form Element */}
      <form className="w-full md:w-8/12 flex flex-col">
        <div className="flex flex-col w-full border-2 border-MdBlue pb-10 rounded-md mt-10 overflow-hidden px-2 md:px-10">
          {/* Aid header with school */}
          <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10 rounded-b-lg">
            <input
              type="text"
              name="schoolName"
              autoFocus
              placeholder="Enter School Name"
              className="text-white placeholder-white placeholder-opacity-50 w-8/12 font-bold px-1 
                                 md:text-20 outline-none bg-transparent"
            />
            <h3 className="text-white font-bold text-15">Status</h3>
          </aside>

          <div className="flex w-full flex-wrap px-2 justify-between md:px-10">

            <label className="w-full md:w-5/12 mt-5">
              <span className="font-bold">{`Total Annual Family Income ($) `}</span>
              <br />
              <input
                name="TotalIcome"
                type="number"
                min={0}
                placeholder="Family income in dollars. eg. $7,000"
                className="text-black w-full md:w-12/12 border-2 border-MdBlue500 rounded-md px-2 outline-MdBlue"
              />
            </label>

            <label className="w-full md:w-5/12 mt-5">
              <span className="font-bold">{`Total Family Savings ($) `}</span>
              <br />
              <input
                name="TotalIcome"
                type="number"
                min={0}
                placeholder="Total Family Savings. eg $6,000"
                className="text-black w-full border-2 border-MdBlue500 rounded-md px-2 outline-MdBlue"
              />
            </label>

            <label className="w-full md:w-5/12 mt-5">
              <span className="font-bold">{`Total Expenses per year ($) `}</span>
              <br />
              <input
                name="TotalIcome"
                type="number"
                min={0}
                placeholder="Total Expenses per year eg. $2,000"
                className="text-black w-full border-2 border-MdBlue500 rounded-md px-2 outline-MdBlue"
              />
            </label>

            <label className="w-full md:w-5/12 mt-5">
              <span className="font-bold">{`Total Family Contribution/Year($) `}</span>
              <br />
              <input
                name="TotalIcome"
                type="number"
                min={0}
                placeholder="Total Family Contribution eg. $5,000"
                className="text-black w-full border-2 border-MdBlue500 rounded-md px-2 outline-MdBlue"
              />
            </label>


          </div>
        </div>

        <button type="button"
          className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-10 self-center"
          onClick={addSchoolAndAid}
        >
          <HiOutlinePlus />
          Add New School Essay
        </button>

      </form>
    </section>
  );
}
