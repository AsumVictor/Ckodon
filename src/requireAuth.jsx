import React from 'react';
import { redirect } from 'react-router-dom';

export default function RequireAuth(){
    const isLogin = false
    if (!isLogin) {
        throw redirect('/')
    } 

}