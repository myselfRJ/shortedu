import React, {useState, useEffect} from "react";

import '../../assets/css/sidemenu.css';


const EsmButton= (props)=>{
  // const [color, setColor] = useState(false); 

  // const toggle=()=>{
  //   setColor(!color)
  // }
  
return(
    <div className="esmbutton">
      <div className="esmbutton-child">
        <p className="esmbutton-text" style={{display:'flex', width:'7vw',justifyContent:'flex-start'}}>{props.name}</p>
      </div>
    </div>  
)}
export default EsmButton; 