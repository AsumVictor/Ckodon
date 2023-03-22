import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";

import { NavLink, Outlet } from "react-router-dom";

export default function StudentsLayout() {
  const activeLink = {
    backgroundColor: "#2455FE",
    color: "white",
  };

  
  return (
    <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden">
      <p className="px-3 w-full md:w-7/12 text-center">
        All enrolled students from both Graduate and Undergrate
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
          Undergradute
        </NavLink>
        <NavLink
          to="graduate"
          className="px-3 py-1 border-2 border-MdBlue m-3 whitespace-nowrap
         transition-5 text-18 font-bold cursor-pointer rounded-md
         bg-white text-MdBlue"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Gradute
        </NavLink>
      </div>

      <Outlet/>
      {/* Reviewed Documents content
      {activeTab == 1 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Undergraduates Students
          </p>

          {userData.length == 0 && (
            <div className="mt-10 w-full flex flex-col justify-center items-center">
              <div className="animation-box">
                <Lottie
                  animationData={NoContent}
                  loop={false}
                  style={{ width: "250px" }}
                />
              </div>

              <h1 className="font-bold text-18 md:text-2xl text-center -mt-10 capitalize flex justify-center">
                No Undergraduate yet
              </h1>
            </div>
          )}

          {userData.length >= 1 && (
            <div className="flex flex-auto justify-around mt-5 flex-wrap px-3 md:px-10 ">
              {userData.map(
                (user) =>
                  user.UserRole == "Undergraduate" && (
                    <Link key={user.ID} to={`${user.ID}`}>
                      <PeopleLink name={user.FullName} gender={user.Gender} />
                    </Link>
                  )
              )}
            </div>
          )}
        </div>
      )}

      {activeTab == 2 && (
        <div className="w-full py-3 mt-10 pb-10 flex flex-col justify-center">
          <p className="text-MdBlue text-center font-bold text-18 underline capitalize">
            Graduate Students
          </p>

          {userData.length == 0 && (
            <div className="mt-10 w-full flex flex-col justify-center items-center">
              <div className="animation-box">
                <Lottie
                  animationData={NoContent}
                  loop={false}
                  style={{ width: "250px" }}
                />
              </div>

              <h1 className="font-bold text-18 md:text-2xl text-center -mt-10 capitalize flex justify-center">
                No Undergraduate yet
              </h1>
            </div>
          )}

          {userData.length >= 1 && (
            <div className="flex flex-auto justify-around mt-5 flex-wrap px-3 md:px-10 ">
              {userData.map(
                (user) =>
                  user.UserRole == "Graduate" && (
                    <Link key={user.ID} to={`${user.ID}`}>
                      <PeopleLink name={user.FullName} gender={user.Gender} />
                    </Link>
                  )
              )}
            </div>
          )}
        </div>
      )} */}
    </section>
  );
}
