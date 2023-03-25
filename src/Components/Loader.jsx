import React from "react";
import "../css/loader.css";

export default function Loader() {
  return (
    <div className="body flex pt-10 mt-5 md:pt-20 justify-center items-center w-full">
      <div class="custom-loader"></div>
    </div>
  );
}
