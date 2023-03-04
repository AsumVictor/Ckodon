import React, { useState } from "react";
import Header from "../Components/Header";
import SideNav from "../Components/Sidenav";
import "../index.css";
import Logo from "../assets/logo.png";
import {
  HiArrowRightOnRectangle,
  HiBookmark,
  HiPencilSquare,
  HiArrowUpOnSquareStack,
  HiChatBubbleLeftRight,
  HiGift,
} from "react-icons/hi2";

const WelcomePageLayout = (props) => {
  //Navigation
  const [show, setShow] = useState(false);
  function toggleNav() {
    setShow((prevShow) => !prevShow);
  }

  //Scroll Effect
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 50){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);


  return (
    <main>
      <div className={`WelcomeHeader${colorChange? 'shadow-md bg-white': 'bg-transparent'}`}>
        <Header handleToggleNav={toggleNav} isShow={show} extraClass={`${colorChange? 'changeColor' : null}`}>
          <button
            className="navSignin space-x-2 rounded-md self-center
          border-2 flex flex-row items-center px-3 text-2xl font-bold"
          >
            <HiArrowRightOnRectangle />
            <span> Sign In </span>
          </button>
        </Header>
      </div>
      <SideNav isShow={show}>
        <div className="flex flex-col mt-10">
          <img src={Logo} alt="Logo" className={`${show ? null : "hide"}`} />
          <button className="sideNav-link space-x-2">
            <HiArrowUpOnSquareStack />
            <span> Apply Now </span>
          </button>
          <hr />
          <button className="sideNav-link space-x-2">
            <HiGift />
            <span> Donate </span>
          </button>
          <button className="sideNav-link space-x-2">
            <HiChatBubbleLeftRight />
            <span> Contact Us </span>
          </button>
          <hr />
          <button className="sideNav-link space-x-2">
            <HiPencilSquare />
            <span> Inquire </span>
          </button>
          <button className="sideNav-link space-x-2">
            <HiBookmark />
            <span> Blog </span>
          </button>
          <hr />
        </div>

        <button
          className="sideNav-link space-x-2 signin rounded-md absolute bottom-2 
                           self-center w-9/12 py-1"
        >
          <HiArrowRightOnRectangle />
          <span> Sign In </span>
        </button>
      </SideNav>
      <div className={`content p-0 w-full ${show ? "space-toggle2" : null}`}>
        {props.children}
      </div>
    </main>
  );
};

export default WelcomePageLayout;
