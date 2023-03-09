import React from 'react';

export default function NoticationIcon(props){
    return(
        <div className={`rounded-full ${props.bg} absolute -top-1 -right-1 ${props.notify? 'flex': 'hidden' } justify-center items-center text-xl ${props.textColor}`} style={{height:'0.7cm',width:'0.7cm'}}>{props.notify}</div>
    )
}