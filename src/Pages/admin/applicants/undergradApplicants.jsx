import React, { useState, useEffect, Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import Loader from "../../../Components/Loader";
import { getUnderGraduateApplicants } from "../../../api";

export default function UndergradApplicants() {
  const loadedData = useLoaderData();

  return (
    <>
      <h1 className="mt-10 text-gray-500 underline">
        List of all undergraduate applicants 2023/2024
      </h1>
      <Suspense fallback={<Loader />}>
        <Await resolve={loadedData.applicants}>
          {(applicants) => {
            return (
              <div class="w-full relative overflow-x-auto mt-10 shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-blue-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-6 py-3">
                        NO.
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Student Name
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Residence
                      </th>
                      <th scope="col" class="px-6 py-3">
                        Date/Time
                      </th>
                      <th scope="col" class="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {applicants.map((applicant, index) => (
                      <tr class="bg-white border-b-2 hover:bg-gray-100 cursor-pointer dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {index + 1}
                        </th>
                        <td class="px-6 py-4 text-gray-900 font-bold">
                          {`${applicant.FirstName} ${applicant.LastName}`}
                        </td>
                        <td class="px-6 py-4">{applicant.Location}</td>
                        <td class="px-6 py-4">{applicant.DateAndTime}</td>
                        <td class="px-6 py-4">
                          <Link
                            to={`${applicant.id}`}
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
            );
          }}
        </Await>
      </Suspense>
    </>
  );
}

export function loader() {
  return defer({ applicants: getUnderGraduateApplicants() });
}
