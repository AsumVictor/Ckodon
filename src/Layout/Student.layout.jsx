import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SideNav from "../Components/Sidenav";
import NoticationIcon from "../Components/notificationIcon";
import {
  HiCurrencyDollar,
  HiHome,
  HiBookOpen,
  HiBell,
  HiUserGroup,
  HiUsers,
  HiInbox,
  HiArrowLeftOnRectangle,
} from "react-icons/hi2";
import {
  HiPencilAlt,
  HiChatAlt2,
  HiClipboardList,
  HiOutlineCog,
} from "react-icons/hi";
import "../index.css";

const StudentLayout = (props) => {
  //Navigation
  const [show, setShow] = useState(false)
  const [dropDownProfile, setDropDownProfile] = useState(false) 
   function toggledropDownProfile() {
    setDropDownProfile((prev) => !prev);
  }

  function toggleNav() {
    setShow((prevShow) => !prevShow);
  }

  function toggledropDownProfile() {
    setDropDownProfile((prev) => !prev);
  }


  const li = {
    dashboard: {
      text: "Dashboard",
      id: 1,
    },
    activity: {
      text: "Activities",
      id: 2,
    },
    essays: {
      text: "Essays",
      id: 3,
    },
    recommendation: {
      text: "Recommendation",
      id: 4,
    },
    aid: {
      text: "Aid",
      id: 5,
    },
    interview: {
      text: "interview",
      id: 6,
    },
    sat: {
      text: "sat prep",
      id: 7,
    },
    notification: {
      text: "notification",
      id: 8,
    },
    community: {
      text: "community",
      id: 9,
    },
    chat: {
      text: "chat",
      id: 10,
    },
  };

  return (
    <main>
      <Navbar isShow={show} handleToggleNav={toggleNav}>
        <div className="profile relative flex flex-row items-center space-x-5">
          <div
            className="alert hidden rounded-md items-center relative shadow-md justify-center text-4xl md:flex"
            style={{ height: "1.2cm", width: "1.2cm" }}
          >
            <HiBell />
            <NoticationIcon bg={"bg-MdBlue500"} />
          </div>
          <div
            className="message hidden rounded-md items-center relative shadow-md justify-center text-4xl md:flex"
            style={{ height: "1.2cm", width: "1.2cm" }}
          >
            <HiChatAlt2 />
            <NoticationIcon bg={"bg-MdBlue500"} />
          </div>
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
            style={{ width: "4cm",height:`${dropDownProfile? '80px': '0px'}`}}
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
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.activity.id ? "active" : null
            } `}
          >
            <HiClipboardList />
            <span> {li.activity.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.essays.id ? "active" : null
            }`}
          >
            <HiPencilAlt />
            <span> {li.essays.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.recommendation.id ? "active" : null
            }`}
          >
            <HiInbox />
            <span> {li.recommendation.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.aid.id ? "active" : null
            }`}
          >
            <HiCurrencyDollar />
            <span> {li.aid.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.interview.id ? "active" : null
            }`}
          >
            <HiUsers />
            <span> {li.interview.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <hr />
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.sat.id ? "active" : null
            }`}
          >
            <HiBookOpen />
            <span> {li.sat.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <hr />
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.notification.id ? "active" : null
            }`}
          >
            <HiBell />
            <span> {li.notification.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <hr />
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.community.id ? "active" : null
            }`}
          >
            <HiUserGroup />
            <span> {li.community.text} </span>
            <NoticationIcon textColor={"text-orange-500"} />
          </li>
          <li
            className={`sideNav-li space-x-2 ${
              props.active == li.chat.id ? "active" : null
            }`}
          >
            <HiChatAlt2 />
            <NoticationIcon textColor={"text-orange-500"} />
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

export default StudentLayout;
