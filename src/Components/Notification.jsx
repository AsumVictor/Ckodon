import React from "react";
import { HiXMark } from "react-icons/hi2";

export default function Notification(props) {
  return (
    <div
      className="w-full md:w-4/12 top-0 left-0 fixed z-50 overflow-hidden"
      style={{ maxHeight: "5cm" }}
    >
      {props.children}
    </div>
  );
}

export function Success(props) {
  return (
    <div className="w-full bg-green-500 p-2 rounded-sm relative pr-10">
      {props.children}
    </div>
  );
}

export function BadMessage(props) {
  return (
    <div className="w-full bg-red-500 p-2 rounded-sm relative pr-10">
      {props.children}
    </div>
  );
}
