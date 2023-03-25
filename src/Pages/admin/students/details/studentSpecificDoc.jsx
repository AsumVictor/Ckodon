import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";

export default function StudentSpficDoc() {
  const params = useParams();
  const location = useLocation();
  const studentId = location.state.studentID
  const studentName = location.state.StudentsName

  return (
    <section className="w-full px-3 md:px-10 pb-10">
      {/* Back to students */}
      <Link to=".." relative="path" className="">
        <button className="flex flex-row justify-center items-center px-3 font-bold py-2 rounded-lg text-MdBlue gap-1">
          <HiChevronLeft />{` Go back to ${studentName}'s files`}
        </button>
      </Link>

      <h1>Students document and Id of {params.id}</h1>
    </section>
  );
}
