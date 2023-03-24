import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PeopleLink from "../../../Components/LinkToPeople";
import { getUsers } from "../../../api";

export default function UnderGrad() {
const users = useLoaderData()
  
  return (
    <div className="flex flex-auto justify-around mt-5 flex-wrap px-3 md:px-10 ">
      {users &&
        users.map((user) => (
          <Link key={user.id}
          to={`${user.id}`}
          >
            <PeopleLink 
            name={user.FullName}
            gender={user.Gender}
            />
          </Link>
        ))}
    </div>
  );
}

export function loader(){
  return getUsers()
}