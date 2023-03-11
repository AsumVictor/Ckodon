import React , {useState} from "react";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus } from "react-icons/hi2";

export default function IntroductionPage() {
const [essayFormData,setessayFormData] = useState(0)
    //Handle form submit
    function handleSubmit(e){
        e.preventDefault()
    }


//Add essay
function createEssay(){
setessayFormData(prev=>prev += 1)
}

  return (
    <section className="flex items-center w-full flex-col justify-center pb-20">
      {/* Appear when there is Essay */}
      {essayFormData==0 && 
      <div className="mt-10 w-full flex flex-col justify-center items-center">
        <div className="animation-box">
          <Lottie
            animationData={NoContent}
            loop={false}
            style={{ width: "250px" }}
          />
        </div>

        <h1 className="font-bold text-2xl md:text-3xl text-center -mt-10 capitalize flex justify-center">
          No Essay
        </h1>
      </div>
}
      {/* School Essay */}

{essayFormData > 0 &&
<div className="flex w-full bg-red-100 py-10 justify-center">
     <form onSubmit={handleSubmit} className='w-full md:w-8/12 py-10 bg-green-200'>


     </form>
</div>
}

      {/* Button to add essay */}
      <div className="flex flex-row justify-center flex-wrap items-center py-2 mt-10">
        <button
          className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                           justify-center items-center text-white font-bold rounded-md
                           mx-5 mt-3"
          onClick={createEssay}
        >
          <HiOutlinePlus />
          Add Essay
        </button>
      </div>
    </section>
  );
}
