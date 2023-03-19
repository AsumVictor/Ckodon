import React from "react";
import {Link, useOutletContext } from "react-router-dom";
import PeopleLink from "../../../Components/LinkToPeople";

export default function UnderGrad() {
  const studentData = useOutletContext();
  const underGradute = studentData.underGrade;

  return (
    <div className="flex flex-auto justify-around mt-5 flex-wrap px-3 md:px-10 ">
      {underGradute.map((user) => (
        <Link key={user.ID} to={`${user.ID}`}>
          <PeopleLink name={user.FullName} gender={user.Gender} />
        </Link>
      ))}
    </div>
  );
}
