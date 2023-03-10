import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SideNav from "../Components/Sidenav";
import { NavLink, Link, Outlet } from "react-router-dom";
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
  const [show, setShow] = useState(false);
  const [dropDownProfile, setDropDownProfile] = useState(false);
  function toggledropDownProfile() {
    setDropDownProfile((prev) => !prev);
  }

  function toggleNav() {
    setShow((prevShow) => !prevShow);
  }

  function toggledropDownProfile() {
    setDropDownProfile((prev) => !prev);
  }

  const links = [
    {
      text: "Dashboard",
      icon: <HiHome />,
      path: "/dashboard",
    },
    {
      text: "Activities",
      icon: <HiClipboardList />,
      path: "/activities",
    },
    {
      text: "Essays",
      icon: <HiPencilAlt />,
      path: "/essays",
    },
    {
      text: "Recommendation",
      icon: <HiInbox />,
      path: "/recommendation",
    },
    {
      text: "Aid",
      icon: <HiCurrencyDollar />,
      path: "/Aid",
    },
    {
      text: "interview",
      icon: <HiUsers />,
      path: "/interview",
    },
    {
      text: "notification",
      icon: <HiBell />,
      path: "/notification",
    },
    {
      text: "reviews",
      icon: <HiClipboardList />,
      path: "/reviews",
    },
    {
      text: "chat",
      icon: <HiChatAlt2 />,
      path: "/chat",
    },
  ];

  const activeStyles = {
    backgroundColor: 'white',
    color: "#2455fe",
  };

  const sidelinks = links.map((sidelink) => {
    return (
      <NavLink
        className="sideNav-li"
        to={`${sidelink.path}`}
        style={({ isActive }) => (isActive ? activeStyles : null)}
      >
          {sidelink.icon}
          <span>{sidelink.text}</span>
      </NavLink>
    );
  });

  return (
    <main>
      <Navbar isShow={show} handleToggleNav={toggleNav}>
        <p className="font-bold text-2xl text-MdBlue">CKODON</p>
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
        <div className="logoBox ml-5">
          <img
            className="w-full h-full rounded-full"
            src={""}
            alt="Profile-pic"
          />
        </div>
        <h3 className="text-left text-white font-bold text-2xl">Asum Victor</h3>
        <ul className="mt-10">{sidelinks}</ul>
      </SideNav>
      <div className={`content p-0 w-full ${show ? "space-toggle2" : null}`}>
        {/* for dashboard page */}
      </div>
    </main>
  );
};

export default StudentLayout;
