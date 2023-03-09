import React from "react";

export default function (props) {
  return (
    <article
      style={{ width: "260px" }}
      className="border-4 rounded-md md:ml-10 self-center mt-10"
    >
      <div className="w-full" style={{ height: "184px" }}>
        <img
          src={`./images/${props.image}`}
          alt={props.title}
          style={{ height: "184px", width: "260px" }}
        />
      </div>
      <div className="w-full px-15 flex justify-center flex-col">
        <h3 className="font-bold text-18 font-sans mt-5">{props.title}</h3>
        <p>{props.date}</p>
        <p className="mt-1">My story: </p>
        <div
          className="w-full overflow-hidden relative"
          style={{ height: "120px" }}
        >
          <p className="mt-1 font-extralight">{props.story}</p>
          <div
            className="w-full py-10 absolute bottom-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.7),rgba(255,255,255,0.9))",
            }}
          ></div>
        </div>
        <button className="-mt-6 text-MdBlue z-10 font-bold underline">
          Read more
        </button>
      </div>
    </article>
  );
}
