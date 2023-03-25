import React, { useState } from "react";
import Lottie from "lottie-react";
import NoContent from "../../animations/no file.json";
import { Link, useSearchParams } from "react-router-dom";

export default function Review() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

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
    <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl px-3 capitalize font-bold text-MdBlue text-center">
        View your Reviewed documents
      </h2>
      <p className="px-3 w-full md:w-7/12">
        All your reviewed documents are here. make sure you pay attention every
        commment
      </p>

      <div className="flex flex-auto justify-center gap-3 mt-10 flex-wrap">
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

      {/* Table to show Review Document */}
     
        <div class="w-full relative overflow-x-auto mt-10 shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-blue-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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

          
                <tr class="bg-white border-b-2 hover:bg-gray-100 cursor-pointer dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4 capitalize font-bold">
                    
                    {document.type}
                  </td>
                  <td
                    class={`px-6 py-4 capitalize ${
                      document.status == "pending"
                        ? "text-blue-500"
                        : document.status == "approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {document.status}
                  </td>
                  <td class="px-6 py-4 capitalize font-bold">
                    {document.deadline}
                  </td>
                  <td class="px-6 py-4">{document.date}</td>
                  <td class="px-6 py-4">
                    <Link
                      to={`${document.id}`}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Review
                    </Link>
                  </td>
                </tr>
              
            </tbody>
          </table>
        </div>
  
    </section>
  );
}

function FilterButton(props) {
  return (
    <button
      onClick={() => props.handleFilter("type", `${props.type}`)}
      className={`py-1 px-3 ${
        props.typeFilter == props.type ? "bg-red-100" : null
      } capitalize whitespace-nowrap rounded-md font-semibold border-2 border-red-100`}
    >
      {props.text}
    </button>
  );
}
