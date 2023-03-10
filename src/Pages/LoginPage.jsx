import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/loginpage.css";
import { HiBadgeCheck } from "react-icons/hi";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Banner from "../assets/banner.png";
import axios, { Axios } from "axios";

export default function LoginPage() {
  let [isDisabled, setIsDisabled] = useState(false);
  let [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    userRole: "",
  });

  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function FocusInput(event) {
    return event.target.parentNode.classList.add("active");
  }
  function BlurInput(event) {
    if (event.target.value == "") {
      return event.target.parentNode.classList.remove("active");
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsDisabled(true);

  };

  return (
    <main className="flex flex-row px-0 flex-wrap">
      <section
        className="hidden md:w-5/12 md:flex md:flex-col justify-center
       bg-MdBlue500 py-10 fixed"
        style={{ height: "100vh" }}
      >
        <h1 className="text-4xl p-10 font-bold text-white">
          The Impossibility, Our Speciality
        </h1>
        <img src={Banner} alt="Logo" />
      </section>
      <section
        className="hidden md:w-5/12 md:flex  "
        style={{ height: "100vh" }}
      ></section>
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
                  value="student"
                  id="student"
                  name="userRole"
                  checked={formData.userRole == "student"}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
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
                <input
                  type="radio"
                  value="mentor"
                  id="mentor"
                  name="userRole"
                  checked={formData.userRole == "mentor"}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
                <div className="label flex flex-col items-center relative">
                  <img src="/images/mentorLogo.png" alt="Mentor" />
                  <p className="font-bold">Mentor</p>
                  <div className="checked text-4xl rounded-full bg-white text-MdBlue absolute -top-3 -right-4">
                    <HiBadgeCheck />
                  </div>
                </div>
              </label>

              <label className="radio" htmlFor="admin">
                <input
                  type="radio"
                  value="admin"
                  id="admin"
                  name="userRole"
                  checked={formData.userRole == "admin"}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
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

          <div
            className={`${
              isDisabled ? "disabled" : "null"
            } form-group mt-5 border-4`}
          >
            <label htmlFor="user-email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="user-email"
              name="userEmail"
              onFocus={FocusInput}
              onBlur={BlurInput}
              onChange={handleFormData}
              value={formData.userEmail}
              required
              disabled={isDisabled ? true : false}
            />
          </div>

          <div
            className={`${
              isDisabled ? "disabled" : "null"
            } form-group mt-5 border-4`}
          >
            <label htmlFor="user-password">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="user-password"
              name="userPassword"
              onFocus={FocusInput}
              onBlur={BlurInput}
              onChange={handleFormData}
              value={formData.userPassword}
              required
              disabled={isDisabled ? true : false}
            />
          </div>

          <a href="#" className="text-MdBlue underline">
            Forgot Password
          </a>
          <button
            id="submit"
            disabled={isDisabled ? true : false}
            className="w-full bg-MdBlue text-2xl flex justify-center items-center 
                        font-bold py-3 text-white relative
                        rounded-md mt-5 hover:bg-MdBlue500"
          >
            Log in <HiArrowRightOnRectangle />
            <div
              className={` ${
                !isDisabled ? "invisible" : null
              } w-full absolute flex justify-center top-0 text-2xl left-0 py-3`}
            >
              <div class="spinner"></div>
            </div>
          </button>
          <p className="mt-10 ">
            Need an Account :
            <Link to='/apply' className="text-MdBlue font-extrabold underline ml-1">
              Apply
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
