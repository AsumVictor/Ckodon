import React from "react";
import "../css/loginpage.css";
import { HiBadgeCheck, HiLogin } from "react-icons/hi";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

export default function LoginPage() {
  function handleFormData() {
    console.log("Data Updated");
  }

  function FocusInput(event) {
    return event.target.parentNode.classList.add("active");
  }
  function BlurInput(event) {
    if (event.target.value == "") {
      return event.target.parentNode.classList.remove("active");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted");
  }

  return (
    <main className="flex flex-row px-0">
      <section className="hidden md:w-5/12 md:flex md:flex-col justify-center bg-MdBlue py-10">
        <h1 className="text-4xl p-10 font-bold text-white">The Impossibility, Our Speciality</h1>
        <img src="" alt="Logo" />
      </section>
      <section className="w-full flex flex-col items-center md:w-7/12 py-10">
        <h2 className="text-center text-MdBlue font-bold text-4xl mt-10">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500 font-bold text-1xl">
          We're are excited to see again!
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col">
          <div className="w-full border-2 px-5 rounded-md flex flex-col pb-3">
            <h4 className="-mt-3 ">
              <span className="bg-white px-2">I'm signing in as</span>
              <span className="required bg-white pr-2">*</span>
            </h4>
            <div className="role flex flex-row -mt-3 space-x-4 justify-between">
              <label htmlFor="student" className="radio">
                <input
                  type="radio"
                  id="student"
                  name="role"
                  value={"student"}
                />

                <div className="label flex flex-col items-center relative">
                  <img src="/images/studentLogo.png" alt="Student" />
                  <p className="font-bold">Student</p>
                  <div className="checked text-4xl rounded-full bg-white text-MdBlue absolute -top-3 -right-4">
                    <HiBadgeCheck />
                  </div>
                </div>
              </label>

              <label className="radio" htmlFor="mentor">
                <input type="radio" id="mentor" name="role" value={"mentor"} />
                <div className="label flex flex-col items-center relative">
                  <img src="/images/mentorLogo.png" alt="Mentor" />
                  <p className="font-bold">Mentor</p>
                  <div className="checked text-4xl rounded-full bg-white text-MdBlue absolute -top-3 -right-4">
                    <HiBadgeCheck />
                  </div>
                </div>
              </label>

              <label className="radio" htmlFor="admin">
                <input type="radio" id="admin" name="role" value={"admin"} />
                <div className="label flex flex-col items-center relative">
                  <img src="/images/adminLogo.png" alt="Admin" />
                  <p className="font-bold">Admin</p>
                  <div className="checked text-4xl rounded-full bg-white text-MdBlue absolute -top-3 -right-4">
                    <HiBadgeCheck />
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="form-group mt-5 border-4">
            <label htmlFor="user-email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="user-email"
              name="user-email"
              onFocus={FocusInput}
              onBlur={BlurInput}
            />
          </div>

          <div className="form-group mt-5 border-4">
            <label htmlFor="user-password">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="user-password"
              name="user-password"
              onFocus={FocusInput}
              onBlur={BlurInput}
            />
          </div>

          <a href="#" className="text-MdBlue">
            Forgot Password
          </a>
          <button
            className="w-full bg-MdBlue text-2xl flex justify-center items-center 
                            font-bold py-3 text-white rounded-md mt-5 hover:bg-MdBlue500"
          >
            Log in <HiArrowRightOnRectangle />
          </button>
          <p className="mt-10 ">
            Need an Account:{" "}
            <a href="#" className="text-MdBlue font-bold underline">
              Apply
            </a>
          </p>
        </form>
      </section>
    </main>
  );
}
