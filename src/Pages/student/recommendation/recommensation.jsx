import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Lottie from "lottie-react";
import NoContent from "../../../animations/no file.json";
import { HiOutlinePlus, HiOutlineTrash } from "react-icons/hi2";

export default function Recommendations() {
  const [recommendation, setRecommendation] = useState(
    () => JSON.parse(localStorage.getItem("Recommendation")) || []
  );

  //Udate aid data
  useEffect(() => {
    localStorage.setItem("Recommendation", JSON.stringify(recommendation));
  }, [recommendation]);

  function addSchoolAndAid() {
    const newRecommendaer = {
      id: nanoid(6),
      RecommenderName: "",
      Letters: [],
    };
    setRecommendation((prevState) => [...prevState, newRecommendaer]);
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
  function hanldeLetterChange(e, index, letterIndex) {
    const { name, value } = e.target;
    setRecommendation((prevData) => {
      let newState = [...prevData];
      newState[index].Letters[letterIndex] = {
        ...newState[index].Letters[letterIndex],
        [name]: value,
      };
      return newState;
    });
  }

  //Add new Recommendation Letter
  function AddNewLetter(index) {
    const NewLetter = {
      id: nanoid(6),
      letter: "",
    };
    setRecommendation((prevState) => {
      const newState = [...prevState];
      newState[index].Letters = [...newState[index].Letters, NewLetter];
      return newState;
    });
  }

  //delete Recommender
  function deleteRecommender(_id) {
    setRecommendation((prevData) => {
      const newData = prevData.filter((eachchild) => eachchild.id !== _id);
      return newData;
    });
  }

  //Delete recommendation Letter
  function deleteletter(_id, index) {
    setRecommendation((prevData) => {
      let newState = [...prevData];
      newState[index].Letters = newState[index].Letters.filter(
        (letter) => letter.id !== _id
      );
      return newState;
    });
  }

  //Handle form Submit
  function HanldeFormSubmit(e) {
    e.preventDefault();
    console.log(recommendation.length);
  }

  return (
    <section className="flex items-center w-full flex-col justify-center pb-10 px-2">
      {/* Form Element */}

      {recommendation.length >= 1 && (
        <form
          className="w-full md:w-8/12 flex flex-col"
          onSubmit={HanldeFormSubmit}
        >
          {/* Aid header with school */}

          {recommendation.map((recommendation, index) => (
            <div
              key={recommendation.id}
              className="flex flex-col w-full border-2 border-MdBlue pb-10 rounded-md mt-10 overflow-hidden px-2 md:px-10"
            >
              <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center px-2 md:px-10 rounded-b-lg">
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
                <button
                  type="button"
                  onClick={() => deleteRecommender(recommendation.id)}
                  className="py-1 px-2 bg-red-100 text-red-600 font-bold text-2xl mx-2 rounded-md"
                >
                  <HiOutlineTrash />
                </button>
              </aside>

              {/* Recommendation Letter*/}
              <div className="flex w-full flex-wrap px-2 justify-between md:px-10">
                {recommendation.Letters.map((letter, letterIndex) => (
                  <label className="w-full mt-5" key={letter.id}>
                    <div className="flex flex-row px-1 md:px-5 py-2 justify-between items-center bg-MdBlue text-white">
                      <div className="font-bold">{` Recommendation ${
                        letterIndex + 1
                      } `}</div>
                      <button
                        type="button"
                        onClick={() => deleteletter(letter.id, index)}
                        className="py-1 px-2 bg-red-100 text-red-600 font-bold text-2xl mx-2 rounded-md"
                      >
                        <HiOutlineTrash />
                      </button>
                    </div>
                    <textarea
                      name="Letter"
                      rows={17}
                      required
                      onChange={(e) =>
                        hanldeLetterChange(e, letterIndex, index)
                      }
                      value={recommendation.Letters.letter}
                      placeholder="Paste the Draft letter here"
                      className="text-black mt-1 w-full border-2 rounded-md border-MdBlue500  invalid:border-red-800 px-2 outline-MdBlue"
                    />
                  </label>
                ))}
              </div>

              <div
                className="px-5 py-2 bg-white hover:bg-MdBlue hover:text-white flex flex-row
                           justify-center items-center text-MdBlue font-bold rounded-md
                           mx-5 mt-10 self-center"
                onClick={() => AddNewLetter(index)}
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
