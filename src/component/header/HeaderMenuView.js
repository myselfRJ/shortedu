import React, {useState, useEffect} from "react";
import "../../assets/css/header.css";
import { Menu, Dropdown } from 'antd';


function HeaderMenuView(props) {
 
  return (
    <>
    <div className="cont">
      <div className="head-button" onClick={()=>console.log('clicked')}>
        <p className="head-text">Switch to  WhiteBoard</p>
      </div>
    </div>
    </>
  );
}

export default HeaderMenuView;
