import React from 'react';
import { useParams, Link, useLocation } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function DetailUndergradDoc(){

  const params = useParams()
  const current_document = params.id
  const location = useLocation()
  const _path_from = location.state?.path? `?${location.state.path}` : ''
  

    return(
        <section className="w-full px-3 md:px-10">
        {/* Back to students */}
        <Link to={`..${_path_from}`}relative="path" className="">
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