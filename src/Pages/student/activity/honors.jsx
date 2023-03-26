import React, { useState, Suspense } from "react";
import { useLoaderData, Await, defer, useNavigation } from "react-router-dom";
import { HiOutlinePlus } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";
import NoContent from "../../../Components/NoContent";
import { nanoid } from "nanoid";
import Loader from "../../../Components/Loader";
import { getUserHonor } from "../../../api";
import "../../../css/loader.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ActivityTips() {
  const loadedData = useLoaderData();
  const [savingState, setSavingState] = useState("iddle");
  const [creatingState, setCreatingState] = useState("iddle");
  const [navigation, setNavigation] = useState("iddle");
  const disableInputs =
    savingState == "Saving" ||
    creatingState == "Creating" ||
    navigation == "submitting";
  

  return (
    <>
      <section className="w-full flex flex-col relative px-2 md:px-10">
        <h1 className="self-center mt-2 text-2xl text-MdBlue font-semibold">
          My Honor Lists
        </h1>

        {/* Wait while Data is Loading */}
        <Suspense fallback={<Loader />}>
          {/* Await to resolved */}
          <Await resolve={loadedData?.studentHonors}>
            {(studentHonors) => {
              const [Honor, setHonor] = useState(studentHonors?.honors || []); //Honors List

              //Handle Honor Data value
              const handleHonorChange = (event, index) => {
                const { name, value, type, checked } = event.target;
                setHonor((prevState) => {
                  const newState = [...prevState];
                  newState[index] = {
                    ...newState[index],
                    [name]: type == "checkbox" ? checked : value,
                  };
                  return newState;
                });
              };

              //Add new honor
              const addHonor = () => {
                const newHonor = {
                  id: nanoid(6),
                  title: "",
                  Grade9: false,
                  Grade10: false,
                  Grade11: false,
                  Grade12: false,
                  School: false,
                  Region: false,
                  National: false,
                  International: false,
                  GradePost: false,
                };
                setHonor((prevState) => [...prevState, newHonor]);
              };

              //Delete honnor
              function deleteHonor(id) {
                setHonor((prevData) => {
                  const newState = prevData.filter((child) => child.id !== id);
                  return newState;
                });
              }
              //Save changes to database
              function saveChanges() {
                setSavingState("Saving");
                const newHonor = { ...studentHonors, honors: Honor };

                fetch(`/api/honors/${studentHonors.id}`, {
                  method: "PATCH",
                  body: JSON.stringify(newHonor),
                })
                  .then((res) => {
                    setSavingState("Saving");
                    if (res.ok) {
                      toast.success("Changes saved successfully", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                    } else {
                      throw {
                        message: "Unable to save Data. Try Again!",
                        statusText: res.statusText,
                        status: res.status,
                      };
                    }
                  })
                  .catch((error) => {
                    toast.error(error.message, {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  })
                  .finally(() => {
                    setSavingState("iddle");
                  });
              }

              //Change Stastus to Submitted
              function submittedMode() {
                const newHonor = { ...studentHonors, mode: "submitted" };

                fetch(`/api/honors/${studentHonors.id}`, {
                  method: "PATCH",
                  body: JSON.stringify(newHonor),
                })
                  .then((res) => {
                    if (!res.ok) {
                      throw {
                        message: " Submittion Failed",
                        statusText: res.statusText,
                        status: res.status,
                      };
                    }
                  })
                  .catch((error) => {
                    toast.error(error.message, {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  })
        
              }

              //Hanlde form Submitt
              function HandleSubmit(e) {
                setNavigation("submitting");
                e.preventDefault();
                const Review = {
                  id: nanoid(6),
                  student_id: "3",
                  document_id: "1",
                  type: "Honors",
                  date: "Feb 20, 2022",
                  deadline: "feb 15, 2016",
                  status: "Pending",
                };

                fetch("/api/uGReviews", {
                  method: "POST",
                  body: JSON.stringify(Review),
                })
                  .then((res) => {
                    submittedMode()
                    getUserHonor("guS6Fg")
                    if (res.ok) {
                      toast.success("Susbmitted for reviews", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                    } else {
                      throw {
                        message: "Unable to Create Data",
                        statusText: res.statusText,
                        status: res.status,
                      };
                    }
                  })
                  .catch((error) => {
                    toast.error(error.message, {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  })
                  .finally(() => {
                    setNavigation("iddle");
                    console.log(studentHonors.mode);
                  });
              }

              //Create new Honor for fresh Account
              // function CreateHonor() {
              //   setCreatingState("Creating");

              //   const newHonor = {
              //     id: "4Kc_sY",
              //     user: null,
              //     status: "Pending",
              //     mode: "editing",
              //     honors: [
              //       {
              //         id: "x6TePg",
              //         title: "",
              //         Grade9: false,
              //         Grade10: false,
              //         Grade11: false,
              //         Grade12: false,
              //         School: false,
              //         Region: false,
              //         National: false,
              //         International: false,
              //         GradePost: false,
              //       },
              //     ],
              //   };
              //   fetch(`/api/honors`, {
              //     method: "POST",
              //     body: JSON.stringify(newHonor),
              //   })
              //     .then((res) => {
              //       if (res.ok) {
              //         toast.success("Created new honor successfully", {
              //           position: "bottom-right",
              //           autoClose: 5000,
              //           hideProgressBar: true,
              //           closeOnClick: true,
              //           pauseOnHover: true,
              //           draggable: true,
              //           progress: undefined,
              //           theme: "colored",
              //         });
              //       } else {
              //         throw {
              //           message: "Unable to Create Data",
              //           statusText: res.statusText,
              //           status: res.status,
              //         };
              //       }
              //     })
              //     .catch((error) => {
              //       toast.error(error.message, {
              //         position: "bottom-right",
              //         autoClose: 5000,
              //         hideProgressBar: true,
              //         closeOnClick: true,
              //         pauseOnHover: true,
              //         draggable: true,
              //         progress: undefined,
              //         theme: "colored",
              //       });
              //     })
              //     .finally(() => {
              //       addHonor();
              //       setCreatingState("iddle");
              //     });
              // }

              return (
                <>
                  {/* Show when Student Data is in the Honor table */}
                  {(Honor.length && studentHonors.mode == "editing") && (
                    <form className="self-center w-full md:w-8/12 flex items-center flex-col pb-20">
                      <div
                        className="honors--wrapper w-full flex flex-col justify-start items-center
                              md:w-full border-l-2 border-r-2 border-MdBlue rounded-lg mt-10 overflow-hidden"
                      >
                        <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
                          <h3 className="text-white font-bold text-20">
                            Honors
                          </h3>
                          <h3 className="text-white font-bold text-15">
                            Status
                          </h3>
                        </aside>
                      </div>

                      {Honor.map((Honor, index) => (
                        // Each Honor component
                        <div
                          key={Honor.id}
                          className="honor w-full md:w-11/12 bg-white border-2 border-MdBlue py-4 rounded-md mt-10"
                        >
                          <div className="honor--header flex flex-row relative justify-between w-full items-center px-3 md:px-10">
                            <h2 className="text-black font-bold">
                              Honor {index + 1}
                            </h2>
                            <div
                              className="text-20 md:text-2xl cursor-pointer px-3 md:px-4 py-2 md:py-3 bg-slate-200 rounded-md text-red-600 flex flex-row items-center 
                                 justify-center space-x-2"
                              onClick={() => deleteHonor(`${Honor.id}`)}
                            >
                              <HiTrash />
                            </div>
                          </div>

                          {/* Honors inputs*/}
                          <div className="honor--inputs w-full py-10 bg-tranparent mt-3 px-3 md:px-10">
                            {/* Honor title */}
                            <label htmlFor="title">
                              <span className="font-bold">
                                * Honor {index + 1} Title
                              </span>
                              <br />
                              <textarea
                                maxlength="100"
                                name="title"
                                id="title"
                                disabled={disableInputs}
                                value={Honor.title}
                                onChange={(e) => handleHonorChange(e, index)}
                                title="Honor title"
                                className="text-black w-full md:w-12/12 border-2 border-blue-300 disabled:cursor-not-allowed disabled:border-gray-200
                          rounded-md px-2 hover:border-MdBlue focus:border-MdBlue"
                              />
                            </label>

                            {/* Honor Grade level */}
                            <div className="flex flex-auto flex-wrap justify-around">
                              {/* Grade Level */}
                              <div className="flex flex-col">
                                <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                                  Grade Level
                                </h3>

                                <ul
                                  className="w-48 mt-2 file:text-sm font-bold text-gray-900 bg-white border border-gray-200 
                                       rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`Grade9${index}`}
                                        type="checkbox"
                                        name="Grade9"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.Grade9}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      />
                                      <label
                                        for={`Grade9${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md font-bold text-sm text-gray-900 dark:text-gray-300"
                                      >
                                        9
                                      </label>
                                    </div>
                                  </li>

                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`Grade10${index}`}
                                        type="checkbox"
                                        name="Grade10"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.Grade10}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                                      />
                                      <label
                                        for={`Grade10${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                                      >
                                        10
                                      </label>
                                    </div>
                                  </li>

                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`Grade11${index}`}
                                        type="checkbox"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.Grade11}
                                        name="Grade11"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      />
                                      <label
                                        for={`Grade11${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                                      >
                                        11
                                      </label>
                                    </div>
                                  </li>

                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`Grade12${index}`}
                                        type="checkbox"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.Grade12}
                                        name="Grade12"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      />
                                      <label
                                        for={`Grade12${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                                      >
                                        12
                                      </label>
                                    </div>
                                  </li>

                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`GradePost${index}`}
                                        type="checkbox"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.GradePost}
                                        name="GradePost"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      />
                                      <label
                                        for={`GradePost${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                                      >
                                        Post Graduate
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>

                              {/* Level of Recognition */}
                              <div className="flex flex-col">
                                <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">
                                  Level of Recognition
                                </h3>
                                <ul className="w-48 text-sm mt-2 font-bold text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`School${index}`}
                                        type="checkbox"
                                        name="School"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.School}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      />
                                      <label
                                        for={`School${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md font-bold text-sm text-gray-900 dark:text-gray-300"
                                      >
                                        School
                                      </label>
                                    </div>
                                  </li>

                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`Region${index}`}
                                        type="checkbox"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.Region}
                                        name="Region"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 "
                                      />
                                      <label
                                        for={`Region${index}`}
                                        className="w-full font-bold py-3 ml-2 text-sm  text-gray-900 dark:text-gray-300"
                                      >
                                        Region State
                                      </label>
                                    </div>
                                  </li>

                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`National${index}`}
                                        type="checkbox"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.National}
                                        name="National"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      />
                                      <label
                                        for={`National${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                                      >
                                        National
                                      </label>
                                    </div>
                                  </li>

                                  <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    <div className="flex items-center pl-3">
                                      <input
                                        id={`International${index}`}
                                        type="checkbox"
                                        onChange={(e) =>
                                          handleHonorChange(e, index)
                                        }
                                        disabled={disableInputs}
                                        checked={Honor.International}
                                        name="International"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                      />
                                      <label
                                        for={`International${index}`}
                                        className="w-full py-3 ml-2 cursor-pointer hover:bg-slate-50 rounded-t-md text-sm font-bold text-gray-900 dark:text-gray-300"
                                      >
                                        International
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={saveChanges}
                        disabled={disableInputs}
                        className="self-end mr-20 bg-MdBlue text-white px-3 py-2 font-bold rounded-md flex gap-2 flex-row items-center justify-centerrounded-md mt-4 disabled:cursor-not-allowed disabled:bg-gray-400"
                      >
                        {`${
                          savingState == "Saving" ? "Saving..." : "Save changes"
                        }`}{" "}
                        {savingState == "Saving" && (
                          <div class="custom-loader small white"></div>
                        )}
                      </button>

                      <div
                        className="cursor-pointer flex flex-row items-center mt-3 font-semibold text-MdBlue text-18 md:text-20"
                        onClick={addHonor}
                      >
                        <HiOutlinePlus /> <span>Add new Honor</span>
                      </div>

                      {/* Submit when Honor is 5 or more and Activity is 10 or more */}
                      {Honor.length >= 5 && (
                        <button
                          className="capitalize px-5 flex flex-row justify-center items-center disabled:bg-gray-400 py-2 bg-MdBlue rounded-md text-white font-bold mt-20"
                          type="submit"
                          onClick={HandleSubmit}
                          disabled={disableInputs}
                        >
                          {navigation == "submitting" ? (
                            <>
                              Submitting...
                              <div class="custom-loader small white"></div>
                            </>
                          ) : (
                            <>Submit for review</>
                          )}
                        </button>
                      )}
                    </form>
                  )}

                  {/* Show when Student Honor is zero or Student Data is not in the Honor table */}
                  {(!Honor.length || !studentHonors) && (
                    <>
                      <NoContent message="No Honor" />
                      <button
                        disabled={disableInputs}
                        className="flex justify-between items-center  disabled:cursor-not-allowed disabled:bg-gray-400
                               self-center py-2 px-4 rounded-lg mb-10 mt-3 bg-MdBlue font-bold text-white"
                        onClick={studentHonors ? addHonor : CreateHonor}
                      >
                        {creatingState == "Creating" ? (
                          <>
                            Creating...
                            <div class="custom-loader small white"></div>
                          </>
                        ) : (
                          <>
                            <HiOutlinePlus /> Add New Honors
                          </>
                        )}
                      </button>
                    </>
                  )}
                  
                </>
              );
            }}
          </Await>
        </Suspense>
      </section>

      <ToastContainer />
    </>
  );
}

export function HonorLoader() {
  return defer({ studentHonors: getUserHonor("guS6Fg") });
}
