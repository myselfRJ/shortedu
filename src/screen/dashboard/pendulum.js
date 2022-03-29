import React, {
  useState,
  useEffect,
  useRef
} from "react";
import Matter from "https://cdn.skypack.dev/matter-js";
import { Button, Input } from "antd";
const {
  Engine,
  Render,
  Mouse,
  MouseConstraint,
  Runner,
  Body,
  Bodies,
  Composite,
  Composites,
  Events,
  World,
  Constraint
} = Matter;
//   import {Composites} from '../../matter'
//   import {Engine, Render,
//   Runner,
//   Composites,
//   MouseConstraint,
//   Mouse,
//   World ,
//   Constraint,
//   Bodies,
//   Events,
//   Composite,
//   Body} from "matter-js";

console.clear();

function Pendulum(props) {
    console.log('p12',props)
  const [intro, setIntro] = useState(false);

  return (
    <div className="app" onClick={() => setIntro(false)}>
      <JellyBoard show={!intro} />
    </div>
  );
}

function JellyBoard({ show }) {
    console.log('p13')
  const canvas = useRef();
  const world = useRef();
  const engineRef = useRef();
const [length,setL]=useState(120)
const [radius,setR]=useState(20)
const addWorld=()=>{
  var engine = Engine.create();
  engineRef.current = engine;
  world.current = engine.world;

  console.log("Creating world!");

  // create a renderer
  var render = Render.create({
    canvas: canvas.current,
    engine: engine,
    options: {
      width: 1000,
      height: 800,
      background: "transparent",
      //showAngleIndicator: true,
      //showCollisions: true,
      showVelocity: true,
      showAxes: false,
      wireframes: false
    }
  });

  // add mouse control
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

// keep the mouse in sync with rendering
Composite.add(engine.world, mouseConstraint);
render.mouse = mouse;
Runner.run(engine);
Render.run(render);
}
  useEffect(() => {
      console.log('p14')
      if (show && canvas.current && !world.current) {
         addWorld();
}}, [show, canvas, world]);

  useEffect(() => {
    if ((show, world.current)) {
      init();
    }
  }, [show, world.current]);

  function init() {
    var ground = Bodies.rectangle(0, 800, 2000, 30, { isStatic: true });
  }
  function reset() {
    Composite.clear(world.current);
    init();
    num=0;
addWorld();
  }
  let num=0;
const addPendulum=()=>{
  console.log(length,radius)
  const pendulum = Bodies.circle(400+2*num*radius, parseInt(length)+100, parseInt(radius), { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 });
          Composite.add(world.current, [pendulum]);

          Composite.add(
              world.current,
              Constraint.create({
                  pointA: { x: 400+2*num*radius, y: 100 },
                  bodyB: pendulum,
                  stiffness: 0.9,
                  render: {
                      strokeStyle: "#4a485b"
                  }
              })
          );
          //var cradle = Composites.newtonsCradle(160+num*40, 15, 1, 20, 200);
          //World.add(world,[cradle]);
          num=num+1;
          
}
  return (
    <div >
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:20}}>
      <div className="controls">
        
      </div>

      <canvas style={{border:'1px solid white'}}ref={canvas} width="1000" height="800" />
    </div>
    <div style={{display:'flex',flexDirection:'column',position:'absolute',top:5,right:250,margin:20}}>
    <Button style={{margin:5}} type="ghost" onClick={reset}>Reset</Button>
      <Input style={{margin:5}} placeholder="Enter length" onChange={(e)=>setL(e.target.value)}/>
      <Input style={{margin:5}} placeholder="Enter radius" onChange={(e)=>setR(e.target.value)}/>
    <Button style={{margin:5}} onClick={addPendulum}>Add</Button>
    </div>
    </div>
  );
}
export default Pendulum;