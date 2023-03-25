import React, { useState, useEffect } from "react";
import { HiBriefcase, HiCurrencyDollar } from "react-icons/hi";
import Loader from "../../../Components/Loader";
import NoContent from "../../../Components/NoContent";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getUndergradReviews } from "../../../api";

export default function UndergradReview() {
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  const reviews = useLoaderData();

  let reviewDocument = typeFilter
    ? reviews.filter((child) => child.type.toLowerCase() == typeFilter)
    : reviews;

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
    <>
      {reviews?.length && (
        <section className="w-full py-3 relative flex flex-col items-center overflow-x-hidden px-3 md:px-10">
          <div className="flex flex-auto justify-center gap-3 flex-wrap">
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
        </section>
      )}

      {reviewDocument && (
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
              {reviewDocument.map((document, index) => (
                <tr class="bg-white border-b-2 hover:bg-gray-100 cursor-pointer dark:bg-gray-900 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td class="px-6 py-4 capitalize font-bold"> {document.type}</td>
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
                  <td class="px-6 py-4 capitalize font-bold">{document.deadline}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export function FilterButton(props) {
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

export function loader() {
  return getUndergradReviews();
}
