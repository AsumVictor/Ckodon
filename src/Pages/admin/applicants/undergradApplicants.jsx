import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from '../../../Components/Loader'


export default function UndergradApplicants() {
  const [applicants, setapplicants] = useState();

  useEffect(() => {
    fetch("/api/underGraduateApplicants")
      .then((response) => response.json())
      .then((data) => {
        setapplicants(data.underGraduateApplicants);
      });
  }, []);

  return (
    <>
{applicants && (
    <section className="w-full flex flex-col items-center md:w-10/12 px-2 md:px-5 py-10 bg-gray-50 rounded-2xl">
      {/* Loop and Render each Applicant Data */}
      {applicants.map((applicant, index) => (
        <Link
          to={`${applicant.id}`}
          className="flex flex-row w-full justify-between mt-7 items-center hover:bg-slate-400 
          cursor-pointer bg-gray-300 px-2 py-1 rounded-xl"
        >
          <div className="p-2 bg-MdBlue rounded-full text-white font-bold">
            {index + 1}
          </div>
          <h3 className=" whitespace-nowrap text-20 font-bold capitalize">
            {`${applicant.FirstName} ${applicant.LastName}`}
          </h3>
          <p>{applicant.DateAndTime}</p>
        </Link>
      ))}
    </section>
)}

{!applicants && (
   <Loader />
)}


    </>
 
  );
}
