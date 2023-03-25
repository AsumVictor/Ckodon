import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ActivityLayout() {

    const activeLink = {
        backgroundColor: '#2455FE',
        color: 'white'
    }

  return (
    <>
      <div className="flex flex-row w-full justify-center items-center py-1">
        <h3 className="font-bold text-15 md:text-2xl text-center text-MdBlue underline capitalize">
          Common app honors and activity list
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
          start
        </NavLink>

        <NavLink
          to="honors"
          className="text-15 capitalize md:text-18 font-bold px-4 text-MdBlue border-2 border-blue-600 rounded-md"
          style={({isActive})=> isActive? activeLink : null}
        >
          Honors
        </NavLink>

        <NavLink
          to="activities"
          className="text-15 capitalize md:text-18 font-bold px-4 text-MdBlue border-2 border-blue-600 rounded-md"
          style={({isActive})=> isActive? activeLink : null}
        >
          Activity
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
