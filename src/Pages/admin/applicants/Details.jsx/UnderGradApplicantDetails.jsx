import React from "react";
import { Link, useParams, useLoaderData } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { getApplicantDeatal_Ug } from "../../../../api";
import NoContent from "../../../../Components/NoContent";

export default function UndergradApplicantDetails() {
  const applicantDetails = useLoaderData();

  // if (!applicantDetails) {
  // return ( <NoContent
  //   message='No data for this applicant'
  //   />)
  // }

  return (
    <section className="w-full flex flex-col px-2 md:px-10 pb-10">
      <div className="flex justify-start items-center mt-10">
        <Link
          className="flex flex-row items-center font-bold text-MdBlue"
          to=".."
          relative="path"
        >
          <HiOutlineChevronLeft /> Back to all applicants
        </Link>
      </div>
      {applicantDetails && (
        <div
          className="w-full flex flex-col self-center md:w-8/12 py-10 px-2 md:px-10 rounded-2xl 
      bg-slate-200 mt-10"
        >
          {/* Head of Students File */}
          <div
            className="rounded-full bg-blue-200 overflow-hidden self-center"
            style={{ height: "5cm", width: "5cm" }}
          >
            <img
              src={`/images/${
                applicantDetails?.Gender == "Female"
                  ? "femaleAvater.png"
                  : "maleAvater.png"
              }`}
              className="rounded-full"
              alt={applicantDetails?.FirstName}
            />
          </div>
          <h3 className="flex flex-row text-center self-center text-3xl font-bold text-MdBlue mt-3 ">
            {`${applicantDetails.FirstName} ${applicantDetails.LastName}`}
          </h3>
          <h3 className="flex flex-row text-center self-center font-bold text-gray-600 mt-1">
            {`Submitted on: ${applicantDetails.DateAndTime}`}
          </h3>
          <div className="mt-5 px-2 md:px-5 flex flex-col">
            <UserInfo label="email" content={applicantDetails.Email} />
            <UserInfo label="phone" content={applicantDetails.Phone} />
            <UserInfo
              label="whatsApp number"
              content={applicantDetails.Phone}
            />
            <UserInfo label="applying as" content={applicantDetails.UserRole} />
            <UserInfo
              label="date of birth"
              content={applicantDetails.DateOfBirth}
            />
            <UserInfo label="residence" content={applicantDetails.Location} />
            <UserInfo
              label="most recent school"
              content={applicantDetails.School}
            />
            <UserInfo
              label="year of completion (High school)"
              content={applicantDetails.YearOfCompletion}
            />
            {applicantDetails.CurrentUniversity && (
              <UserInfo
                label="Cuurent University"
                content={applicantDetails.CurrentUniversity}
              />
            )}

            {applicantDetails.Level && (
              <UserInfo label="level" content={applicantDetails.Level} />
            )}

            <UserInfo
              label="WASSCE result"
              content={applicantDetails.WasscePDF}
            />

            <h3 className="flex underline flex-row text-center self-center text-2xl font-bold text-MdBlue mt-10 ">
              Essays
            </h3>
            <div className="flex flex-col mt-4 gap-1  ">
              <span className="capitalize text-MdBlue font-bold text-lg">
                essay prompt:
              </span>
              <span className="capitalize text-lg text-gray-900">
                {applicantDetails.EssayQuestion}
              </span>
            </div>

            <div className="flex flex-col mt-4 gap-1  ">
              <span className="capitalize text-MdBlue font-bold text-lg">
              answer:
              </span>
              <span className="capitalize text-lg text-gray-900">
                {applicantDetails.EssayAnswer}
              </span>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export function UserInfo(props) {
  return (
    <div className="flex flex-row mt-3 gap-3 ">
      <span className="capitalize text-MdBlue font-bold text-lg">
        {props.label}:
      </span>
      <span className="capitalize text-lg text-gray-900">{props.content}</span>
    </div>
  );
}

export function loader({ params }) {
  return getApplicantDeatal_Ug(params.id);
}
