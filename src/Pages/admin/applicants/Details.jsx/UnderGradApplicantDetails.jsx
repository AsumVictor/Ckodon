import React from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function UndergradApplicantDetails() {
    const params = useParams()
 const _studentId = params.id

  return (
    <section className="w-full flex flex-col px-2 md:px-10">

      <div className="flex justify-start items-center mt-10">
        <Link 
        className="flex flex-row items-center font-bold text-MdBlue"
        to='..'
        relative="path">
            
          <HiOutlineChevronLeft /> Back to all applicants
        </Link>
      </div>

<div className="w-full md:10/12 py-10 px-2 md:px-10 rounded-2xl bg-slate-200 mt-10">
    Student with ID of {_studentId}
</div>

    </section>
  );
}
