import React, { useEffect, useState, Suspense } from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import PeopleLink from "../../../Components/LinkToPeople";
import { getUsers } from "../../../api";
import Loader from "../../../Components/Loader";

export default function UnderGrad() {
  const loaderData = useLoaderData();
  console.log(loaderData.users);
  return (
    <div className="flex flex-auto justify-around mt-5 flex-wrap px-3 md:px-10 ">
      <Suspense fallback={<Loader />}>
        <Await resolve={loaderData.users}>
          {(users) => {
            console.log(users);
            return users.map((user) => (
              <Link key={user.id} to={`${user.id}`}>
                <PeopleLink
                  name={`${user.FirstName} ${user.LastName}`}
                  gender={user.Gender}
                />
              </Link>
            ));
          }}
        </Await>
      </Suspense>
    </div>
  );
}

export function loader() {
  return defer({ users: getUsers() });
}
