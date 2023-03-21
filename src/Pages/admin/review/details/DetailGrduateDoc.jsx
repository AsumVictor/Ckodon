import React from 'react';
import { useParams, Link } from "react-router-dom";
import { HiArrowUturnLeft } from "react-icons/hi2";


export default function DetailGraduateDoc(){
    return(
        <section className="w-full px-3 md:px-10">
        {/* Back to students */}
        <Link to=".." relative="path">
          <button className="flex flex-row justify-center items-center px-3 font-bold py-2 rounded-lg text-MdBlue">
            <HiArrowUturnLeft /> Go back to all documents
          </button>
        </Link>
  
      </section>
    )
}