import React from "react";
import { HiOutlinePlus } from "react-icons/hi2";

export default function EssayHeader(props) {
  return (
    <div
      className="w-full flex flex-col items-start border-2 border-MdBlue pb-5 mt-10 "
      id={props.id}
    >
      {/* Essays Title, status bar and collasp button */}
      <aside className="flex flex-row relative justify-between w-full py-3 bg-MdBlue items-center pl-3 pr-10 md:px-10">
        <input
          onChange={props.handleInput}
          type="text"
          name="schoolname"
          id={props.id}
          value={props.schoolname}
          placeholder='Which school essay'
          autoFocus
          className="text-white w-1/2 font-bold  md:text-20 outline-none bg-transparent"
        />
        <h3 className="text-white font-bold text-15">Status</h3>
        <button className="collasped-toggler right-5 absolute">^</button>
      </aside>

      {/* Essay prompt inputs */}
      <div className="w-full px-3 md:px-10 mt-3">
        <label htmlFor="link" className="w-full">
          <span>Link to essays</span> <br />
          <textarea
            name="link"
            id={props.id}
            onChange={props.handleInput}
            value={props.linkValue}
            title="link to your essays"
            placeholder="Paste the google docs link here"
            className="text-black w-full border-2 border-gray-400 rounded-md px-2"
          />
        </label>
      </div>
      {/* Add new prompt button */}
    </div>
  );
}
