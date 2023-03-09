import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SideNav from "../Components/Sidenav";
import {
  HiHome,
  HiBookOpen,
  HiUserGroup,
  HiArrowLeftOnRectangle,
  HiMegaphone,
  HiUserPlus
} from "react-icons/hi2";
import {
  HiPencilAlt,
  HiChatAlt2,
  HiClipboardList,
  HiOutlineCog,
} from "react-icons/hi";
import "../index.css";

const AdminLayout = (props) => {
  //Navigation
  const [show, setShow] = useState(false);
  const [dropDownProfile, setDropDownProfile] = useState(false) 
  function toggledropDownProfile() {
    setDropDownProfile((prev) => !prev);
  }


  function toggleNav() {
    setShow((prevShow) => !prevShow);
  }

  const li = {
    dashboard: {
      text: "Dashboard",
      id: 1,
    },
    students: {
      text: "Students",
      id: 2,
    },
    reviews: {
      text: "reviews tasks",
      id: 3,
    },
    broadcast: {
      text: "broadcast",
      id: 4,
    },
    Sat: {
      text: "Sat Students",
      id: 5,
    },
    community: {
      text: "community",
      id: 6,
    },
    applicants: {
      text: "new applicants",
      id: 7,
    },
    chat: {
      text: "chat",
      id: 8,
    },
  };

  return (
    <main>
      <Navbar isShow={show} handleToggleNav={toggleNav}>
        <div className="profile relative flex flex-row items-center space-x-5">
          <div
            className="profilePic bg-blue-800 rounded-full cursor-pointer p-1"
            style={{ height: "1.5cm", width: "1.5cm" }}
            onClick={toggledropDownProfile}
          >
            <img
              src="/images/selorm.jpg"
              alt=""
              className="w-full rounded-full"
              style={{ height: "100%" }}
            />
          </div>
          <div
            className="userInfo absolute bg-white px-2 overflow-hidden rounded-md"
            style={{
              width: "4cm",
              height: `${dropDownProfile ? "80px" : "0px"}`,
            }}
          >
            <ul>
              <li>
                <HiOutlineCog /> Setting
              </li>
              <li>
                <HiArrowLeftOnRectangle /> Logout
              </li>
            </ul>
          </div>
        </div>
      </Navbar>

      <SideNav isShow={show}>
        <ul>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.dashboard.id ? "active" : null
            }`}
          >
            <HiHome />
            <span> {li.dashboard.text} </span>
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.students.id ? "active" : null
            } `}
          >
            <HiClipboardList />
            <span> {li.students.text} </span>
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.reviews.id ? "active" : null
            }`}
          >
            <HiPencilAlt />
            <span> {li.reviews.text} </span>
          </li>

          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.Sat.id ? "active" : null
            }`}
          >
            <HiBookOpen />
            <span> {li.Sat.text} </span>
          </li>

          <hr />
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.applicants.id ? "active" : null
            }`}
          >
            <HiUserPlus />
            <span> {li.applicants.text} </span>
          </li>

          <hr />
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.broadcast.id ? "active" : null
            }`}
          >
            <HiMegaphone />
            <span> {li.broadcast.text} </span>
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.community.id ? "active" : null
            }`}
          >
            <HiUserGroup />
            <span> {li.community.text} </span>
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.chat.id ? "active" : null
            }`}
          >
            <HiChatAlt2 />
            <span> {li.chat.text} </span>
          </li>
        </ul>
      </SideNav>
      <div className={`content p-0 w-full ${show ? "space-toggle2" : null}`}>
        {props.children}
      </div>
    </main>
  );
};

export default AdminLayout;
