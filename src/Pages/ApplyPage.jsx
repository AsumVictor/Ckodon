import React, { useState } from "react";
import "../css/loginpage.css";
import { HiInformationCircle, HiArrowRightOnRectangle } from "react-icons/hi2";
import Banner from "../assets/banner.png";
import Lottie from "lottie-react";
import SubmitCheack from "../submitCheckmark.json";
import { HiBadgeCheck } from "react-icons/hi";

import axios, { Axios } from "axios";
export default function LoginPage() {
  let [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  let [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    userRole: "",
  });
  function handleFormData(event) {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
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
    setTimeout(() => {
      setIsSubmitted(true);
    }, 3000);
  };
  return (
    <main className="flex flex-row px-0 flex-wrap">
      <section
        className="hidden md:w-5/12 md:flex md:flex-col justify-center bg-MdBlue py-10 fixed"
        style={{ height: "100vh" }}
      >
        <h1 className="text-4xl p-10 font-bold text-white">
          The Impossibility, Our Speciality
        </h1>
        <img src={Banner} alt="Logo" />
      </section>
      <section
        className="hidden md:w-4/12 md:flex "
        style={{ height: "100vh" }}
      ></section>
      <section className="w-full flex flex-col items-center md:w-8/12 py-10">
        <h2 className="text-center text-MdBlue font-bold text-4xl mt-10">
          Welcome to Ckodon!
        </h2>
        <p className="text-center text-gray-500 font-bold text-1xl">
          Unlock Your Potential with Ckodon
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full px-5 flex flex-col md:w-7/12"
        >
          <div className="w-full border-2 p-2 rounded-md flex flex-col bg-white text-red-400 font-bold">
            <HiInformationCircle /> Please input 'N/A' in any field that is not
            applicable to your current situation.
          </div>

          <div className="w-full  px-1 rounded-md flex flex-col pb-3">
            <h4 className="text-center mt-5 ">
              <span className="bg-white px-2 text-center">I'm Applying Us</span>
              <span className="required bg-white pr-2">*</span>
            </h4>
            <div className="applicantLevel flex flex-row -mt-3 space-x-4 justify-center">
              <label htmlFor="underGrade" className="radio">
                <input
                  type="radio"
                  value="underGrade"
                  id="underGrade"
                  name="userRole"
                  checked={formData.userRole == "underGrade"}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />

                <div className="label flex flex-col items-center relative">
                  <img src="/images/studentLogo.png" alt="Student" />
                  <p className="font-bold bg-white">Undergrad</p>
                  <div className="checked text-4xl rounded-full bg-white text-MdBlue absolute -top-3 -right-4">
                    <HiBadgeCheck />
                  </div>
                </div>
              </label>

              <label className="radio" htmlFor="graduate">
                <input
                  type="radio"
                  value="graduate"
                  id="graduate"
                  name="userRole"
                  checked={formData.userRole == "graduate"}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
                <div className="label flex flex-col items-center relative">
                  <img src="/images/mentorLogo.png" alt="Mentor" />
                  <p className="font-bold">Gradute</p>
                  <div className="checked text-4xl rounded-full bg-white text-MdBlue absolute -top-3 -right-4">
                    <HiBadgeCheck />
                  </div>
                </div>
              </label>
            </div>
          </div>

          {formData.userRole == "underGrade" && (
            <div className="">
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="user-email">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="Fullname"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
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
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
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
                  {`Phone Number (Call)`} <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                  pattern="[0]{1}[0-9]{9}"
                />
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="user-password">{`WhatsApp Number`}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  disabled={isDisabled ? true : false}
                  pattern="[0]{1}[0-9]{9}"
                />
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="user-password">
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="DoB"
                  name="DoB"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="currentSchool">
                  Current Univerity 
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentSchool"
                  name="currentSchool"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
                <div className="nb absolute">
                  <p className="flex flex-row justify-center items-center">
                    ** NB: If you are not in school, state the last school you
                    attended.
                  </p>
                </div>
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-20 border-4`}
              >
                <label htmlFor="highschooldate">
                  {`Year of completion(High school)`}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="highschooldate"
                  name="highschooldate"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-10 border-4`}
              >
                <label htmlFor="user-password">
                  {`Year/Level`} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentSchool"
                  name="currentSchool"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
                <div className="nb absolute flex flex-row justify-center">
                  <p className="flex flex-row justify-center items-center">
                    <HiInformationCircle /> If you are in the university
                  </p>
                </div>
              </div>

              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group border-4 mt-20`}
              >
                <label htmlFor="user-password">
                  Place of residence <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentSchool"
                  name="currentSchool"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
              </div>

              <div className="mt-10">
                <p className="font-bold flex flex-row items-center">
                  <HiInformationCircle /> Upload Wassce Results here
                </p>
                <input type="file" name="wassce" id="wassce" className="mt-3" />
              </div>
              <p className="font-bold flex flex-row items-start mt-10">
                * NB: If you do not have a copy of your WASSCE results, type the
                subject and the grade obtained in each of them in the space
                provided below
              </p>
              <textarea
                name="wassce"
                id="wassce"
                rows="5"
                cols={2}
                className="border-4 rounded-md w-full"
              />
              <p>
                <span className="font-bold">Example: </span> <br />* English
                Language- A1, *Social Studies- A1 ...
              </p>
              <div className="essays mt-10">
                <p className="font-bold text-2xl underline">Essays</p>
                <p className="mt-2">
                  <span className="text-red-600">NB: </span> The purpose of this
                  essay is not to assess your ability to write. We hope to learn
                  more about you through this essay. This will assist us in
                  providing the assistance you require during the college
                  application process.
                </p>
                <p className="mt-5">
                  <HiInformationCircle /> Write an essay of 300-400 words or
                  more on one of the topics listed below.
                  <span className="underline font-bold">{`(for people who wish to apply for undergraduate only). `}</span>
                </p>
                <div className="prompt mt-4">
                  <label htmlFor="question1" className="mt-5">
                    <input
                      type="radio"
                      name="question"
                      id="question1"
                      value={"Prompt-1"}
                      required
                    />
                    <div className="checkbtn">
                      <span>1. Tell us about yourself</span>
                      <div className="box"></div>
                    </div>
                  </label>
                </div>
                <div className="prompt mt-4">
                  <label htmlFor="question2" className="mt-5">
                    <input
                      type="radio"
                      name="question"
                      id="question2"
                      value={"Prompt-2"}
                      required
                    />
                    <div className="checkbtn">
                      2. Share a personal achievement, incident, or insight that
                      prompted personal growth and a new knowledge of yourself
                      or others. <div className="box"></div>
                    </div>
                  </label>
                </div>
                <div className="prompt mt-4">
                  <label htmlFor="question3" className="mt-5">
                    <input
                      type="radio"
                      name="question"
                      id="question3"
                      value={"Prompt-3"}
                      required
                    />
                    <div className="checkbtn">
                      3. The lessons we learn from our setbacks might be crucial
                      to our long-term success. Recount a period when you were
                      confronted with a problem, a setback, or a failure. What
                      effect did it have on you, and what did you learn from it?
                      <div className="box"></div>
                    </div>
                  </label>
                </div>
                <div className="prompt mt-4">
                  <label htmlFor="question4" className="mt-5">
                    <input
                      type="radio"
                      name="question"
                      id="question4"
                      value={"Prompt-4"}
                      required
                    />
                    <div className="checkbtn">
                      4.Share an essay on any subject you want. It can be one
                      that you've already written, one that responds to a new
                      scenario, or one that you've created yourself.
                      <div className="box"></div>
                    </div>
                  </label>
                </div>
              </div>
              <p className="font-bold mt-10">
                Upload your essay here in a PDF form
                <span className="required">*</span>
              </p>
              <input
                type="file"
                name="essay"
                id="essay"
                className="bg-blue-100"
                required
              />
              <button
                id="submit"
                disabled={isDisabled ? true : false}
                className="w-full bg-MdBlue text-2xl flex justify-center items-center font-bold py-3 text-white relative rounded-md mt-10 hover:bg-MdBlue500"
              >
                Submit Application
                <div
                  className={` ${
                    !isDisabled ? "invisible" : null
                  } w-full absolute flex justify-center top-0 text-2xl left-0 py-3`}
                >
                  <div class="spinner"></div>
                </div>
              </button>
            </div>
          )}
          {formData.userRole == "graduate" && (
            <div className="">
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="user-email">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="Fullname"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
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
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
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
                  {`Phone Number (Call)`} <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                  pattern="[0]{1}[0-9]{9}"
                />
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="user-password">{`WhatsApp Number`}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  disabled={isDisabled ? true : false}
                  pattern="[0]{1}[0-9]{9}"
                />
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="user-password">
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  type="date"
                  id="DoB"
                  name="DoB"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
              </div>
              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-5 border-4`}
              >
                <label htmlFor="currentSchool">
                  Current Univerity
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentSchool"
                  name="currentSchool"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
                <div className="nb absolute">
                  <p className="flex flex-row justify-center items-center">
                    ** NB: If you are not in school, state the last school you
                    attended.
                  </p>
                </div>
              </div>

              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group mt-20 border-4`}
              >
                <label htmlFor="user-password">
                  {`Year/Level`} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentSchool"
                  name="currentSchool"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
                <div className="nb absolute flex flex-row justify-center">
                  <p className="flex flex-row justify-center items-center">

                  </p>
                </div>
              </div>

              <div
                className={`${
                  isDisabled ? "disabled" : "null"
                } form-group border-4 mt-10`}
              >
                  
                <label htmlFor="user-password">
                  Place of residence <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="currentSchool"
                  name="currentSchool"
                  onFocus={FocusInput}
                  onBlur={BlurInput}
                  onChange={handleFormData}
                  required
                  disabled={isDisabled ? true : false}
                />
              </div>
            </div>
          )}
        </form>
      </section>

      {isSubmitted && (
        <div className="submittedAlert px-10">
          <Lottie
            animationData={SubmitCheack}
            loop={false}
            style={{ width: 200 }}
            autoplay={true}
          />
          <p className="text-2xl text-MdBlue500 font-bold text-center">
            Congratulations! Your application has been successfully submitted.
          </p>
          <p className="w-full md:w-6/12 mt-5 text-center">
            Thank you for your interest in Ckodon. We appreciate your time and
            effort in completing the application. We will review your
            application carefully and get back to you as soon as possible.
          </p>
        </div>
      )}
    </main>
  );
}
