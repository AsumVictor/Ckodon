import React from "react";
import "../index.css";

export default function SideNav(props) {
  return (
    <aside className={`sidebar ${props.isShow ? "show" : null}`}>
      <nav className="nav px-5">{props.children}</nav>
    </aside>
  );
}
