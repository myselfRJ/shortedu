import React,{useState} from "react";
import "../../assets/css/sidemenu.css";
import SmButton from "./smButton";
import { NavLink } from "react-router-dom";
import maths from '../../assets/images/maths.png';
import physics from '../../assets/images/physics.png';
import chemistry from "../../assets/images/chemistry.png";
import geography from "../../assets/images/geography.png";
import biology from "../../assets/images/biology.png";

function SideMenuView(props) {

  return (

    <div className="box">
      <div className="btn">
        <NavLink style={{textDecoration:'None'}} to=".\phy">
          <SmButton id="phy" name="Physics" icon={physics}/>
        </NavLink>
        <NavLink style={{textDecoration:'None'}} to=".\ma">
          <SmButton id="ma" name="Maths" icon={maths}/>
        </NavLink>
        <NavLink style={{textDecoration:'None'}} to=".\ch">
          <SmButton id="ch" name="Chemistry" icon={chemistry}/>
        </NavLink>
        <NavLink style={{textDecoration:'None'}} to=".\geo">
          <SmButton id="geo" name="Geography" icon={geography}/>
        </NavLink>
        <a style={{textDecoration:'None'}} href="http://0.0.0.0:8000/teddy.html">
          <SmButton id="bio" name="Biology" icon={biology}/>
        </a>
      </div>
    </div>
  );
}

export default SideMenuView;
