import React from 'react';
import { useParams, Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function DetailUndergradDoc(){

  const params = useParams()
  const current_document = params.id

    return(
        <section className="w-full px-3 md:px-10">
        {/* Back to students */}
        <Link to=".." relative="path" className="">
          <button className="flex flex-row justify-center items-center px-3 font-bold py-2 rounded-lg text-MdBlue">
            <HiOutlineChevronLeft /> Go back to all documents
          </button>
        </Link>

        <div className="w-full md:10/12 py-10 px-2 md:px-10 rounded-2xl bg-slate-200 mt-10">
    Document with ID of <span className='text-red-400'>{current_document}</span> 
</div>
  
      </section>
    )
}