import React, { useState, useEffect } from "react";
import { useParams, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import "../../../../css/studentAdmin.css";
import { FilterButton } from "../../review/undergrad";
import { getUser } from "../../../../api";

export default function StudentDetailsUnderGrad() {
  const studentData = useLoaderData();

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const reviews = useLoaderData();

  // let reviewDocument = typeFilter
  //   ? reviews.filter((child) => child.type.toLowerCase() == typeFilter)
  //   : reviews;

  function FilterSearch(key, value) {
    setSearchParams((prevParams) => {
      if (value == null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }


  return (
    <section className="w-full px-3 md:px-10 pb-10">
      {/* Back to students */}
      <Link to=".." relative="path" className="">
        <button className="flex flex-row justify-center items-center px-3 font-bold py-2 rounded-lg text-MdBlue gap-1">
          <HiChevronLeft /> Go back to all students
        </button>
      </Link>

      <section className="w-full py-3 md:px-10 flex flex-col">
        {studentData && (
          <div className="flex flex-auto md:w-10/12 self-center px-2 md:px-10 flex-wrap justify-center items-center gap-x-14 gap-y-5 mt-10 bg-gray-100 py-5 rounded-3xl">
            <div
              className="rounded-full bg-blue-200 overflow-hidden"
              style={{ height: "5cm", width: "5cm" }}
            >
              <img
                src={`/images/${
                  studentData?.Gender == "Female"
                    ? "femaleAvater.png"
                    : "maleAvater.png"
                }`}
                className="rounded-full"
                alt={studentData?.FullName}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-MdBlue flex flex-row gap-1">
                {`${studentData.FirstName} ${studentData.LastName}`}
              </h1>
              <p>
                <span className="text-MdBlue flex mt-5 flex-row gap-1 font-bold text-lg ">
                  Gender:
                </span>
                {studentData?.Gender}
              </p>
              <p>
                <span className="text-MdBlue flex flex-row gap-1 font-bold text-lg ">
                  School:
                </span>
                {studentData?.School},
                <span className="font-semibold text-gray-600">
                  {studentData?.YearInschool}
                </span>
              </p>
              <p>
                <span className="text-MdBlue flex flex-row gap-1 font-bold text-lg ">
                  Location:
                </span>
                {studentData?.Location}
              </p>
              <p>
                <span className="text-MdBlue flex flex-row gap-1 font-bold text-lg ">
                  Email:
                </span>
                {studentData?.Email}
              </p>
              <p>
                <span className="text-MdBlue flex flex-row gap-1 font-bold text-lg ">
                  Phone:
                </span>
                {studentData?.Phone}
              </p>
            </div>
          </div>
        )}

        <h2 className="self-center text-xl md:text-2xl font-bold mt-5 text-gray-500 underline">
          {` ${studentData.FirstName}'s Documents`}
        </h2>

        <div className="flex mt-5 flex-auto justify-center gap-3 flex-wrap">
            <FilterButton
              text="honors"
              handleFilter={FilterSearch}
              type={"honors"}
              typeFilter={typeFilter}
            />
            <FilterButton
              text="activities"
              handleFilter={FilterSearch}
              type={"activities"}
              typeFilter={typeFilter}
            />
            <FilterButton
              text="essays"
              handleFilter={FilterSearch}
              type={"essays"}
              typeFilter={typeFilter}
            />
            <FilterButton
              text="financial aid"
              handleFilter={FilterSearch}
              type={"financial aid"}
              typeFilter={typeFilter}
            />
            <FilterButton
              text="recommendations"
              handleFilter={FilterSearch}
              type={"recommendation"}
              typeFilter={typeFilter}
            />

            <button
              className="text-red-500 underline"
              onClick={() => FilterSearch("type", null)}
            >
              Clear Filter
            </button>
          </div>
        {/* pROBLEM TO resolve: fetch and display data from student submitted documents */}

        <div class="relative w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs uppercase text-MdBlue bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  NO.
                </th>
                <th scope="col" class="px-6 py-3">
                  Document Type
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Deadline
                </th>
                <th scope="col" class="px-6 py-3">
                  Submitted on
                </th>
                <th scope="col" class="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-100 cursor-pointer dark:bg-gray-900 dark:border-gray-700">
                <td
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </td>
                <td class="px-6 py-4">Financial Aid</td>
                <td class="px-6 py-4">Pending</td>
                <td class="px-6 py-4">25th feb 2023</td>
                <td class="px-6 py-4">16th feb 2023</td>
                <td class="px-6 py-4">
                  <Link
                    to="1"
                    state={{
                      studentID: studentData.id,
                      DocumentType: "aid",
                      StudentsName: studentData.FirstName,
                    }}
                    class=" text-blue-600 dark:text-blue-500 hover:underline font-bold"
                  >
                    View
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

export function getUserLoader({ params }) {
  return getUser(params.id);
}
