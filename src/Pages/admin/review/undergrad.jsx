import React, { useState, useEffect } from "react";
import { HiBriefcase, HiCurrencyDollar } from "react-icons/hi";
import Loader from "../../../Components/Loader";
import NoContent from "../../../Components/NoContent";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function UndergradReview() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

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

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/uGReviews")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.uGReviews);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

            <button className="text-red-500 underline"
            onClick={() => FilterSearch("type", null)}
            >Clear Filter</button>
          </div>

          <div
            className="flex flex-col items-center w-full md:w-10/12 bg-slate-100 py-10 px-2
           md:px-10 mt-10 rounded-2xl"
          >
            {reviewDocument?.map((reviewDocument, index) => (
              <ReviewContainer
                key={reviewDocument.id}
                order={index + 1}
                type={reviewDocument.type}
                deadline={reviewDocument.deadline}
                date={reviewDocument.date}
                path={`${reviewDocument.id}`}
                search={{path: searchParams.toString() }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Tempory Loader */}
      {isLoading && <Loader />}
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

export function ReviewContainer(props) {
  return (
    <Link
      to={props.path}
      state={props.search}
      className="flex justify-center gap-2 flex-row items-center w-full px-2 mt-10 md:px-5 md:w-10/12 py-2 bg-blue-200 rounded-lg relative"
    >
      <div className="absolute top-1 left-1 px-2 text-lg font-bold text-white rounded-full bg-MdBlue">
        {props.order}
      </div>
      <div className="mt-4 text-3xl">
        <HiCurrencyDollar />
      </div>
      <div className="flex w-full flex-col mt-4 gap-1 items-center">
        <h3 className="self-start md:pl-10 font-bold text-2xl capitalize">
          {props.type}
        </h3>
        <h3 className="md:self-start md:pl-20 text-red-700">
          Deadline: {props.deadline}
        </h3>
        <h3 className="self-end text-gray-600">Submitted on: {props.date}</h3>
      </div>
    </Link>
  );
}
