import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Applicants() {
  const activeLink = {
    backgroundColor: "#2455FE",
    color: "white",
  };


  return (
    <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl px-3 capitalize font-bold text-MdBlue text-center">
        New Applicants to ckodon
      </h2>
      <p className="px-3 w-full md:w-7/12 text-center">
        New applicants documents
      </p>

    {/* Content */}
    <div className="flex flex-row justify-center overflow-x-auto flex-nowrap w-full mt-10 bg-blue-100">
        <NavLink
          to="."
          className="px-3 py-1 border-2 border-MdBlue m-3 whitespace-nowrap
         transition-5 text-18 font-bold cursor-pointer rounded-md
         bg-white text-MdBlue"
          style={({ isActive }) => (isActive ? activeLink : null)}
          end="true"
        >
          Undergradutes
        </NavLink>
        <NavLink
          to="graduate"
          className="px-3 py-1 border-2 border-MdBlue m-3 whitespace-nowrap
         transition-5 text-18 font-bold cursor-pointer rounded-md
         bg-white text-MdBlue"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Gradutes
        </NavLink>
      </div>

      <Outlet/>
    </section>
  )
}

