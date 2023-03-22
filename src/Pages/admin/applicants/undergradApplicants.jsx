import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";

export default function UndergradApplicants() {
  const [applicants, setapplicants] = useState();

  useEffect(() => {
    fetch("/api/underGraduateApplicants")
      .then((response) => response.json())
      .then((data) => {
        setapplicants(data.underGraduateApplicants);
      });
  }, []);

  return (
    <section className="w-full md:w-8/12 px-2 md:px-5 py-10 bg-gray-100 rounded-2xl">
klk
    </section>
  )
}
