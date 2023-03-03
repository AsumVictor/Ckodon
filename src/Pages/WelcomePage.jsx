import React from "react";
import "../index.css";
import Student1 from "../assets/student4.jpg";
import Student2 from "../assets/top3.jpg";
import Student3 from "../assets/student5.jpg";
import Article from "../Components/Article";
import SampleData from "../Layout/SampleData";

import WelcomePageLayout from "../Layout/WelcomePage.Layout";

export default function WelcomePage() {

let articles = SampleData.map((articleData)=>{
    return(
        <Article 
        image = {articleData.image}
        date = {articleData.date}
        title = {articleData.title}
        story = {articleData.story}
        />
    )
})

  return (
    <WelcomePageLayout>
      <section
        id="hero"
        className="w-full bg-red-300 relative flex justify-center"
        style={{ height: "12cm" }}
      >
        <div className="heroImg-wrapper w-full flex flex-row absolute">
          <img
            src={Student3}
            alt=""
            style={{ height: "12cm" }}
            className="brightness-75"
          />
          <img
            src={Student2}
            alt=""
            style={{ height: "12cm" }}
            className="brightness-75"
          />
          <img
            src={Student1}
            alt=""
            style={{ height: "12cm" }}
            className="brightness-75"
          />
          <img
            src={Student3}
            alt=""
            style={{ height: "12cm" }}
            className="brightness-75"
          />
        </div>
        <div className="call-to-action absolute bottom-0 py-20 w-full flex justify-center">
          <button className="font-bold  text-white text-center py-2 px-10 bg-MdBlue500 z-20">
            Apply to Ckodon Now!
          </button>
        </div>
      </section>
      <section className="info w-full flex flex-col md:flex-row px-20 pb-20 justify-between">
        <aside className="w-full md:w-5/12">
          <section className="mt-10">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p>
              At CKODON, our mission is to identify and support talented
              students from underserved communities in achieving their academic
              and career goals. We believe that every student deserves the
              opportunity to realize their full potential, regardless of their
              background or financial situation. Our commitment to excellence,
              integrity, and equity guides everything we do, from providing SAT
              preparation courses to offering college application support and
              mentorship opportunities.
            </p>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl font-bold">Program overview</h3>
            <ul className="list-disc">
              <li>
                SAT preparation courses: We offer intensive courses designed to
                help students achieve their best possible score on the SAT.
              </li>
              <li>
                College application support: We provide guidance and support
                throughout the college application process, from identifying the
                right schools to crafting compelling personal statements.
              </li>
              <li>
                Mentorship opportunities: Our scholars have access to mentorship
                from experienced professionals in a variety of fields, providing
                them with valuable insights and guidance.
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl font-bold">Eligibility criteria</h3>
            <p>
              To be eligible for CKODON scholarships, students must meet the
              following criteria:
            </p>
            <ul>
                <li>Be committed to achieving their academic and career goals.</li>
                <li>Have a strong academic record, with a minimum GPA of NAN</li>
            </ul>
          </section>

          <section className="mt-10">
            <h3 className="text-2xl font-bold">Donate</h3>
            <p>Your donation can make a real difference in the lives of talented students from underserved communities. Your support can help us provide SAT preparation courses, college application support, and mentorship opportunities to students who might not otherwise have access to these resources. Please consider making a donation today and help us support the next generation of leaders.</p>
          </section>
          <section className="mt-10">
            <h3 className="text-2xl font-bold">Contact information</h3>
            <p>We would love to hear from you! If you have any questions or concerns, please don't hesitate to contact us. You can reach us by phone at [insert phone number], by email at [{`email address`}], or by mail at [{`mail address`}]. Thank you for your interest in CKODON!</p>
          </section>
        </aside>
        <aside className="w-full md:w-6/12 flex flex-auto flex-wrap justify-around">
        {articles}
        </aside>
      </section>
    </WelcomePageLayout>
  );
}
