import React, {useState, useEffect} from "react";
import { Image } from "antd";
import '../../assets/css/sidemenu.css';


const SmButton= (props)=>{
  
return(
    <div className="button">
      <div className="button-child">
        <div style={{display:'flex', alignItems:'flex-start',width:'5vw', justifyContent:'center'}}>
          {/* <SvgIcon name={props.icon}/> */}
          <Image src={props.icon} preview={false} height='2.5vw' width='2.5vw'/>
        </div>
        <p className="button-text" style={{display:'flex', width:'7vw',justifyContent:'flex-start'}}>{props.name}</p>
      </div>
    </div>  
)}
export default SmButton; 