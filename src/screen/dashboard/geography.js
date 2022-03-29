import React from "react";
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'

const Geography=(props)=>{
    props.cbvis(false)
    function Plane(props) {
        const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
        return (
          <mesh ref={ref}>
            <planeGeometry args={[100, 100]} />
          </mesh>
        )
      }
      
      function Cube(props) {
        const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }))
        return (
          <mesh ref={ref}>
            <boxGeometry />
          </mesh>
        )
      }
    return(

        <div>
           <Canvas>
    <Physics>
      <Plane />
      <Cube />
    </Physics>
  </Canvas>
        </div>
    )
}

export default Geography