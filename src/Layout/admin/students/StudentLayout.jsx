import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AdminCurrentStudentLayout(){
    return(
        <>
        <h1 className='text-center text-MdBlue font-semibold text-2xl'>Enrolled Students</h1>
         <Outlet />
        </>
    )
}