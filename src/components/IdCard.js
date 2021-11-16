import React from "react";

const IdCard =(props)=>{

    return(
        <div>
        <p><b>Last Name:</b>{props.lastName}</p>
        <p><b>First Name:</b>{props.firstName}</p>
        <p><b>Gender:</b>{props.gender}</p>
        <p><b>Height:</b>{props.height}</p>
        <p><b>Date of Birth:</b>{props.birth}</p>
        <img src={props.picture} alt=''/>
        </div>
    )
}


export default IdCard

