import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { HiArrowUturnLeft } from "react-icons/hi2";
import "../../../../css/studentAdmin.css";
import axios from "axios";

export default function StudentDetailsGraduate() {
    const student = useParams();
    const [studentData, setStudentData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const URL =
      "https://sheet.best/api/sheets/dbd94950-d291-4305-8b3d-d0fe61d4b123";
  
    useEffect(() => {
      const fetchUserData = async () => {
        setIsLoading(true);
        const data = await axios(URL);
        const Data = await data.data;
        console.log(data);
        console.log(Data);
        for (let i = 0; i < Data.length; i++) {
          if (student.id == Data[i].ID) {
            const currentStudent = await Data[i];
            setStudentData(currentStudent);
            setIsLoading(false);
          }
        }
      };
  
      fetchUserData();
    }, []);
  
    return (
      <section className="w-full px-3 md:px-10">
        {/* Back to students */}
        <Link to=".." relative="path" className="">
          <button className="flex flex-row justify-center items-center px-3 font-bold bg-MdBlue py-2 rounded-lg text-white">
            <HiArrowUturnLeft /> Go back to all students
          </button>
        </Link>
  
        <section className="w-full py-3 md:px-10 flex flex-col">
          <div className="flex flex-auto md:w-10/12 self-center px-2 md:px-10 flex-wrap justify-center gap-x-14 gap-y-5 mt-10 bg-gray-100 py-5 rounded-3xl">
            <div
              className="rounded-full bg-blue-200"
              style={{ height: "5cm", width: "5cm" }}
            >
              <img
                src={`/images/${
                  studentData.Gender == "Female"
                    ? "femaleAvater.png"
                    : "maleAvater.png"
                }`}
                className="rounded-full"
                alt={studentData.FullName}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-MdBlue">
                {studentData.FullName}
              </h1>
              <p>
                <span className="text-MdBlue font-bold text-lg ">Gender:</span>
                {studentData.Gender}
              </p>
              <p>
                <span className="text-MdBlue font-bold text-lg ">School:</span>
                {studentData.School},
                <span className="font-semibold text-gray-600">
                  {studentData.YearInschool}
                </span>
              </p>
              <p>
                <span className="text-MdBlue font-bold text-lg ">Location:</span>
                {studentData.Location}
              </p>
              <p>
                <span className="text-MdBlue font-bold text-lg ">Email:</span>
                {studentData.Email}
              </p>
              <p>
                <span className="text-MdBlue font-bold text-lg ">Phone:</span>
                {studentData.Phone}
              </p>
            </div>
          </div>
        </section>
  
        {/* Temporary Loader */}
        {isLoading && (
          <div className="fixed w-full h-full flex justify-center items-center backdrop-blur-xl top-48 left-0">
            <div class="spinner"></div>
          </div>
        )}
      </section>
    );
}
