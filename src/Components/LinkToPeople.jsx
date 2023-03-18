import React from "react";

export default function PeopleLink(props) {
  return (
    <div
      className=" bg-blue-400 mt-10 rounded-tr-3xl px-5 overflow-hidden flex flex-col py-2 justify-between rounded-md"
      style={{ height: "3cm", width: "5cm" }}
    >
      <div
        className="profilePic rounded-full bg-blue-200"
        style={{ height: "1.5cm", width: "1.5cm" }}
      >
        <img src={`/images/${props.gender=='Female'? 'femaleAvater.png': 'maleAvater.png'}`} alt={props.name} className="rounded-full" />
      </div>
      <h2 className="text-white flex flex-row whitespace-nowrap overflow-visible font-bold">
      {props.name}
      </h2>
    </div>
  );
}
