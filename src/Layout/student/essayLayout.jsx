import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function EssaysLayout() {

    const activeLink = {
        backgroundColor: '#2455FE',
        color: 'white'
    }

  return (
    <>
      <div className="flex flex-row w-full justify-center items-center py-1">
        <h3 className="font-bold text-15 text-2xl md:text-3xl text-center text-MdBlue underline capitalize">
          College Essays
        </h3>
      </div>
      <div
        className="flex flex-row w-full shadow-md py-2 sticky top-20 justify-center space-x-5 px-5  
                       items-center mt-8 bg-blue-100 z-10"
      >
        <NavLink
          to="."
          end
          relative=""
          className="text-15 capitalize md:text-18 font-bold px-4 text-MdBlue border-2 border-blue-600 rounded-md"
          style={({isActive})=> isActive? activeLink : null}
        >
          Introduction
        </NavLink>

        <NavLink
          to="Edit-Essays"
          className="text-15 capitalize md:text-18 font-bold px-4 text-MdBlue border-2 border-blue-600 rounded-md"
          style={({isActive})=> isActive? activeLink : null}
        >
          Essays
        </NavLink>

      </div>
      <Outlet />
    </>
  );
}
