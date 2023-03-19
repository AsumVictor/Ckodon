import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SideNav from "../Components/Sidenav";
import { NavLink, Link, Outlet } from "react-router-dom";
import NoticationIcon from "../Components/notificationIcon";
import {
  HiHome,
  HiBookOpen,
  HiUserGroup,
  HiUsers,
  HiArrowLeftOnRectangle,
} from "react-icons/hi2";
import {
  HiChatAlt2,
  HiClipboardList,
  HiOutlineCog,
} from "react-icons/hi";
import "../index.css";

const AdminLayout = (props) => {
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
      path: ".",
    },
    {
      text: "Students",
      icon: <HiClipboardList />,
      path: "Students",
    },
    {
      text: "New applicants",
      icon: < HiUserGroup />,
      path: "New-applicants",
    },
    {
      text: "sat students",
      icon: <HiBookOpen />,
      path: "sat-students",
    },
    {
      text: "task reviews",
      icon: <HiClipboardList />,
      path: "reviews",
    },
    {
      text: "broadcast",
      icon: <HiUsers />,
      path: "broadcast",
    },
    {
      text: "chat",
      icon: <HiChatAlt2 />,
      path: "chat",
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
         end={sidelink.text=='Dashboard'? true : false}
      >
          {sidelink.icon}
          <span className="ml-2">{sidelink.text}</span>
      </NavLink>
    );
  });

  return (
    <main>
      <Navbar isShow={show} handleToggleNav={toggleNav}>
        <p className="font-bold text-2xl text-MdBlue">ADMIN</p>
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
            src="/images/selorm.jpg"
            alt="Profile-pic"
          />
        </div>
        <h3 className="text-left text-white font-bold text-2xl">Asum Victor</h3>
        <ul className="mt-10">{sidelinks}</ul>
      </SideNav>
      <div className={`content relative p-0 w-full ${show ? "space-toggle2" : null}`}>
        {/* for pages */}
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
