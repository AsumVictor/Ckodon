import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminReview() {
  
  const activeStyles = {
    backgroundColor: '#2455FE',
    color: 'white'
}

  return (
    <section className="w-full relative flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl px-3 capitalize font-bold text-MdBlue text-center">
        Documents Ready to be reviewed 
      </h2>

      <div className="flex mt-7 py-2 flex-row justify-start md:justify-center px-3 w-full overflow-x-auto bg-blue-50">
      <NavLink
      to='.'
      end
      relative
            className="px-2 py-1 border-2 border-MdBlue bg-white text-MdBlue mx-3 whitespace-nowrap transition-5 text-18 font-bold cursor-pointer rounded-md"
            style={({ isActive }) => (isActive ? activeStyles : null)}
      >
         Undergraduate Students
      </NavLink>

      <NavLink
      to='graduate'
      relative=""
            className="px-2 py-1 border-2 border-MdBlue bg-white text-MdBlue mx3 whitespace-nowrap transition-5 text-18 font-bold cursor-pointer rounded-md"
            style={({ isActive }) => (isActive ? activeStyles : null)}
      >
         Graduate Students
      </NavLink>

     </div>

     <Outlet />
    </section>
  );
}
