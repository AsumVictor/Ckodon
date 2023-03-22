import React from 'react';
import "../css/studentAdmin.css";


export default function Loader(){
    return(
        <div className="fixed w-full h-full flex justify-center items-center backdrop-blur-xl top-0 left-0">
          <div class="spinner"></div>
        </div>
    )
}