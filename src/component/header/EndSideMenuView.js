import React,{useState} from "react";
import "../../assets/css/sidemenu.css";
import EsmButton from "./esmButton";

function EndSideMenuView(props) {
if (props.show){
  return (
    <div style={{display:'flex',flexDirection:'column',height:'91.1vh', justifyContent:'flex-start',alignItems:'center', backgroundColor:'#007EA7'}}>
        <div style={{borderBottom:'0.3px solid #00A8E8',height:'6vh',width:'10vw', alignItems:'center', justifyContent:'center'}}>
            <p className="endside-title">Model</p>
        </div>
        <div style={{display:'flex',flexDirection:'column', borderBottom:'0.3px solid #00A8E8', height:'20vh', width:'10vw' }}>
        <EsmButton name='Pendulum'/>
        <EsmButton name='Friction'/>
        <EsmButton name='Archimedes'/>
        </div>
    </div>
  );}
  else{
    return(<div style={{display:'flex',flexDirection:'column',height:'91.1vh', justifyContent:'flex-start',alignItems:'center', backgroundColor:'#007EA7'}}>
</div>)
  }
}

export default EndSideMenuView;
