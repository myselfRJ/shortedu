import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
// import React, { useRef, useState } from "react";
// import ReactDOM from "react-dom";
// import { Canvas, useFrame } from "@react-three/fiber";
// import {OrbitControls}  from "@react-three/drei";
// import "./style.css";

// const Box = (props) => {
//   const boxRef = useRef();
//   const [active, setActive] = useState(false);
//   const [hover, setHover] = useState(false);

//   useFrame(() => {
//     if (hover) {
//       boxRef.current.rotation.y += 0.05;
//     }
//   });

//   return (
//     <group ref={boxRef} position={props.position}>
//       <mesh
//         onClick={() => {
//           setActive(!active);
//         }}
//         onPointerOver={() => {
//           setHover(true);
//         }}
//         onPointerOut={() => {
//           setHover(false);
//         }}
//       >
//         <boxGeometry attach="geometry" />
//         <meshLambertMaterial
//           attach="material"
//           color={active ? "green" : "red"}
//         />
//       </mesh>
//     </group>
//   );
// };

// const App = () => {
//   return (
//     <div>
//     <Canvas
//       style={{ height: 400, width: 400 }}
//       camera={{ fov: 55, position: [0, 2, 2] }}
//     >
//       {/* <ambientLight intensity={0.1} />
//       <pointLight position={[5, 5, 5]} /> */}
//       <Box />
//       <OrbitControls />
//     </Canvas></div>
//   );
// };

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
  
