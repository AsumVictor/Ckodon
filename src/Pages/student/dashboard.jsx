import React from "react";

export default function dashboard() {
  return (
    <section className="w-full px-2 pt-10 flex flex-col items-center">
      <div className="w-full md:w-10/12 py-4 px-2 shadow-lg bg-white border-t-2 border-gray-100 rounded-xl flex flex-col items-center">
        <h1 className="text-18 md:text-2xl text-black font-bold text-center capitalize">
          Hey you are welcome back
          <span className="text-MdBlue"> victor asum</span>
        </h1>
        <p className="w-full md:w-7/12 text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quasi
          quo provident dolorum assumenda eligendi impedit ullam laborum quae
          debitis similique delectus quos ipsam praesentium.
        </p>
      </div>

      <div className="w-full md:w-10/12 flex-col md:flex-row flex justify-between">
        <div className="flex flex-col w-full md:w-5/12  mt-10 ">
          <div className="flex flex-col py-5 bg-MdBlue rounded-xl px-2 justify-center items-center">
            <p className="text-white md:px-3 text-center font-bold text-18 md:text-2xl">
              The college application require series of effort and dedication to
              achieve.
            </p>
            <button
              className="py-3 text-white font-bold mt-10 px-5 border-2 border-white 
                              whitespace-nowrap rounded-md hover:bg-white hover:text-MdBlue transition-all"
            >
              Get started
            </button>
          </div>

          <div className="flex flex-col mt-10 py-5  shadow-lg bg-white border-t-2 border-gray-100 rounded-xl px-2 justify-center items-center">
            <strong className="text-18 md:text-2xl text-MdBlue">
              CSS PROFILE
            </strong>
            <p className="text-black md:px-3 text-center text-18 md:text-2xl">
              Quia temporibus pariatur enim iure architecto est harum esse
              expedita, repellat ipsam quis dolor.
            </p>
            <button
              className="py-3 text-MdBlue bg-white font-bold mt-10 px-5 border-2 border-MdBlue 
                              whitespace-nowrap rounded-md hover:bg-MdBlue hover:text-white transition-all"
            >
              Get started
            </button>
          </div>
        </div>

        <div className="flex px-3 py-7 flex-col w-full md:w-5/12 mt-10 shadow-lg bg-MdBlue rounded-xl">
          <strong className="text-18 text-center md:text-2xl text-white">
            SAT
          </strong>
          <br />
          <p className="font-semibold text-left px-2 text-white md:px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit architecto aspernatur harum ipsum odio cumque repellat
            voluptas eaque quaerat distinctio in quo omnis expedita cum, commodi
            officia voluptates praesentium. Commodi?
          </p>
          <p className="font-semibold text-left mt-2 text-white px-2 md:px-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit architecto aspernatur harum ipsum odio cumque repellat
            voluptas eaque quaerat distinctio in quo omnis expedita cum, commodi
            officia voluptates praesentium. Commodi?
          </p>

          <button
            className=" py-3 text-white capitalize font-bold mt-10 px-3 border-2 border-white  
                              whitespace-nowrap rounded-md hover:bg-white hover:text-MdBlue transition-all"
          >
            learn more
          </button>
        </div>
      </div>

      <div className="w-full bg-MdBlue py-20 mt-10 text-center font-bold text-white text-2xl">
        Content Later. <br />
        walk through the process
      </div>
    </section>
  );
}
