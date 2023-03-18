import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import PeopleLink from "../../../Components/LinkToPeople";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Students() {
  const [activeTab, setactiveTab] = useState(1);
  const URL = "https://api.sheety.co/6bac5f6ac5eac36da3d4457faca93361/userData/sheet1";
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await axios(URL);
       setUserData(data.data.sheet1);
    };

    fetchUserData();
  }, []);

  console.log(userData);

  return (
    <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl px-3 capitalize font-bold text-MdBlue text-center">
        Current Students documents
      </h2>
      <p className="px-3 w-full md:w-7/12 text-center">
        All current students and their files
      </p>

      {/* Content */}
      <div className="flex flex-col w-full mt-10">
        {/* TABS*/}
        <div className="tabs flex flex-row justify-start md:justify-center px-3 w-full overflow-x-scroll bg-blue-100">
          <div
            className={`px-2 py-2 border-2 border-MdBlue ${
              activeTab == 1 ? "bg-MdBlue text-white" : "bg-white text-MdBlue"
            }  m-3 whitespace-nowrap transition-5 text-18 font-bold cursor-pointer rounded-md`}
            onClick={() => setactiveTab(1)}
          >
            <p>Undergraduate school</p>
          </div>
          <div
            className={`px-2 py-2 border-2 border-MdBlue ${
              activeTab == 2 ? "bg-MdBlue text-white" : "bg-white text-MdBlue"
            }  m-3 whitespace-nowrap transition-all text-18 font-bold cursor-pointer rounded-md`}
            onClick={() => setactiveTab(2)}
          >
            <p>Graduate School</p>
          </div>
        </div>
      </div>

      {/* Reviewed Documents content */}
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
                    <Link key={user.ID}>
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
                    <Link key={user.ID}>
                      <PeopleLink name={user.FullName} gender={user.Gender} />
                    </Link>
                  )
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
