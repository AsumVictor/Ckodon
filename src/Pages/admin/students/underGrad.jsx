import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PeopleLink from "../../../Components/LinkToPeople";

export default function UnderGrad() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="flex flex-auto justify-around mt-5 flex-wrap px-3 md:px-10 ">
      {users &&
        users.map((user) => (
          <Link
          to={`${user.Id}`}
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
