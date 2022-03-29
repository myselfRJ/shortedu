
import React, { useState, useEffect } from "react";
import HeaderMenuView from "../../component/header/HeaderMenuView";
import SideMenuView from "../../component/header/SideMenuView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Physics from './physics';
import Maths from './maths';
import Chemistry from './chemistry';
import Geography from './geography';
import Biology from './Biology';
import "../../assets/css/sidemenu.css";
import EndSideMenuView from "../../component/header/EndSideMenuView";

const Screen = () => {
  const [cbvisible, setCbvisible] = useState(false);
  const [modal, setModal] = useState('pendulum');
  
  return (
  <div style={{display:'flex', flexDirection:'column', width:'100vw'}}>
    <HeaderMenuView/>
    <div style={{ display: "flex",width:'100vw',height:'91.1vh', flexDirection: "row", position:'absolute', top:'8.9vh' }}>
      <div className='sidenav'>
        <SideMenuView/>
      </div>
      <div style={{ display:"flex",height:'90.85vh', width:"74.5vw",background: '#343434',border:'0.5px solid rgba(0, 0, 0, 0.75)'}}>
            <Routes>
              <Route path="/phy" element={<Physics cbvis={setCbvisible} modal={modal}/>} />
              <Route path="/ma" element={<Maths cbvis={setCbvisible}/>} />
              <Route path="/ch" element={<Chemistry cbvis={setCbvisible}/>} />
              <Route path="/geo" element={<Geography cbvis={setCbvisible}/>} />
              <Route path="/bio" element={<Biology cbvis={setCbvisible}/>} />
            </Routes>
      </div>
      <div style={{width:'10.2vw'}}>
        <EndSideMenuView show={cbvisible}/>
      </div>
    </div>
  </div>
  );
};
export default Screen;
