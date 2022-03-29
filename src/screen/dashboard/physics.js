import React from "react";
import Pendulum from "./pendulum";
const Physics=(props)=>{
    props.cbvis(true)
    console.log(props)
    Pendulum()
    return(

        <div style={{justifyContent:"center","alignItems":"center",borderWidth:'1px solid red'}}>
            <Pendulum />
        </div>
    )
}

export default Physics