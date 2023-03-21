import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus, HiArrowUpTray } from "react-icons/hi2";

export default function Recommendations() {
  const [recommendation, setRecommendation] = useState( () => JSON.parse(localStorage.getItem("Recommendation")) || []
  );


  //Udate aid data
   useEffect(() => {
     localStorage.setItem("Recommendation", JSON.stringify(recommendation));
   }, [recommendation]);

  function addSchoolAndAid() {
    const newRecommendaer = {
      id: nanoid(),
      RecommenderName: "",
      Letters:[
        
       ],
    };
    setRecommendation((prevState) => [...prevState, newRecommendaer]);
    console.log(recommendation);
  }

  //Handle Recommender input
  function HanldeInput(e, index) {
    const { name, value } = e.target;
    setRecommendation((prevData) => {
      let newState = [...prevData];
      newState[index] = {
        ...newState[index],
        [name]: value,
      };
      return newState;
    });
  }

  //Handle Lettes change 
function hanldeLetterChange(e,index,letterIndex){
  const {name, value} = e.target
  setRecommendation(prevData=>{
    let newState = [...prevData]
    newState[index].Letters[letterIndex] = {...newState[index].Letters[letterIndex],
     [name]: value
    }
    return newState
  })
}


  //Add new Recommendation Letter
  function AddNewLetter(index){
    const NewLetter = {
        id: nanoid(),
        letter: '',
    }
    setRecommendation( prevState=>{
      const newState = [...prevState]
      newState[index].Letters = [...newState[index].Letters, NewLetter,]
      return newState

    })
  }

  //Handle form Submit
  function HanldeFormSubmit(e) {
    e.preventDefault();
    console.log(recommendation.length);
  }


  return (
    <section className="flex items-center w-full flex-col justify-center pb-10 px-2">
      {/* Form Element */}

      {recommendation.length == 0 && (
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <div className="animation-box">
            <Lottie
              animationData={NoContent}
              loop={false}
              style={{ width: "250px" }}
            />
          </div>

          <h1 className="font-bold text-2xl md:text-3xl text-center -mt-10 capitalize flex justify-center">
            No Recommendation Letter
          </h1>
        </div>
      )}

      {recommendation.length >= 1 && (
        <form
          className="w-full md:w-8/12 flex flex-col"
          onSubmit={HanldeFormSubmit}
        >
          {/* Aid header with school */}

          {recommendation.map((recommendation, index) => (
            <div key={recommendation.id} className="flex flex-col w-full border-2 border-MdBlue pb-10 rounded-md mt-10 overflow-hidden px-2 md:px-10">
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10 rounded-b-lg">
                <input
                  type="text"
                  name="RecommenderName"
                  autoFocus={!recommendation.RecommenderName && true}
                  value={recommendation.RecommenderName}
                  onChange={(e) => HanldeInput(e, index)}
                  required
                  placeholder="Enter Recommender role"
                  className="text-white placeholder-white placeholder-opacity-50 w-8/12 font-bold px-1 
                                md:text-20 outline-none bg-transparent invalid:border-b-2
                                invalid:border-red-800 invalid:placeholder-red-800"
                />
                <h3 className="text-white font-bold text-15">Status</h3>
              </aside>

              {/* Recommendation Letter*/}
              <div className="flex w-full flex-wrap px-2 justify-between md:px-10">
                {recommendation.Letters.map((letter, letterIndex) => (
                  <label className="w-full mt-5" key={letterIndex+1}>
                    <span className="font-bold">{` Recommendation Letter ${letterIndex+1} `}</span>
                    <br />
                    <textarea
                      name="Letter"
                      rows={17}
                      required
                      onChange={(e)=>hanldeLetterChange(e,letterIndex,index)}
                      value={recommendation.Letters.letter}
                      placeholder="Paste the Draft letter here"
                      className="text-black w-full md:w-12/12 border-2 rounded-2xl border-MdBlue500  invalid:border-red-800 px-2 outline-MdBlue"
                    />
                  </label>
                ))}
              </div>

              <div
                className="px-5 py-2 bg-white hover:bg-MdBlue hover:text-white flex flex-row
                           justify-center items-center text-MdBlue font-bold rounded-md
                           mx-5 mt-10 self-center"
                onClick={()=>AddNewLetter(index)}
              >
                <HiOutlinePlus />
                Add New Letter
              </div>
            </div>
          ))}

          {/* Button to add new Recommendaer */}
          <button
            className="px-5 py-2 bg-MdBlue hover:bg-MdBlue500 flex flex-row
                               justify-center items-center text-white font-bold rounded-md
                               mx-5 mt-10 self-center capitalize"
          >
            Submit All for review
          </button>
        </form>
      )}

      <button
        type="button"
        className="px-5 py-2 bg-white hover:bg-MdBlue hover:text-white flex flex-row
                           justify-center items-center text-MdBlue border-2 border-MdBlue font-bold rounded-md
                           mx-5 mt-10 self-center"
        onClick={addSchoolAndAid}
      >
        <HiOutlinePlus />
        Add New Recommender
      </button>
    </section>
  );
}
