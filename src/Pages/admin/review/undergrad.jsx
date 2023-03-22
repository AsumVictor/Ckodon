import React, { useState } from "react";
import { HiBriefcase } from "react-icons/hi";

export default function UndergradReview() {
  return (
    <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden px-3 md:px-10">
      <div className="flex flex-auto justify-center gap-3 flex-wrap">
        <FilterButton text='all' />
        <FilterButton text='honors' />
        <FilterButton text='activities' />
        <FilterButton text='essays' />
        <FilterButton text='financial aid' />
        <FilterButton text='recommendations' />
      </div>

      <div className="flex justify-center w-full md:w-10/12 bg-slate-200 py-10 px-2 md:px-10 mt-10 rounded-2xl">
        <ReviewContainer />

      </div>
    </section>
  );
}

export function FilterButton(props) {
  return (
    <button className="py-1 px-3 bg-red-100 capitalize whitespace-nowrap rounded-md font-semibold border-2 border-red-100">
      {props.text}
    </button>
  );
}


export function ReviewContainer(props) {
  return (
     <div className="flex justify-center gap-1 flex-row items-center w-full px-2 md:px-5 md:w-10/12 py-2 bg-red-300 relative">
        <div className="absolute top-1 left-1 px-2 text-lg font-bold text-white rounded-full bg-MdBlue">
          1
        </div>
         <div className="mt-4 text-3xl">
 <HiBriefcase /> 
         </div>
         <div className="flex w-full flex-col mt-4 gap-1 items-center">
         <h3 className="self-start md:pl-10">Financial Aid</h3>
         <h3 className="">Deadline: 27/12/3838</h3>
         <h3 className="self-end">Submitted on: 27/12/3838</h3>
         </div>

     </div>
  );
}
