import React from "react";
import {Link, useOutletContext } from "react-router-dom";
import PeopleLink from "../../../Components/LinkToPeople";

export default function Graduate() {
  const studentData = useOutletContext();
  const graduate = studentData.graduate;

  return (
    <div className="flex flex-auto justify-around mt-5 flex-wrap px-3 md:px-10 ">
      {graduate.map((user) => (
        <Link key={user.ID} to={`${user.ID}`}>
          <PeopleLink name={user.FullName} gender={user.Gender} />
        </Link>
      ))}
    </div>
  );
}
