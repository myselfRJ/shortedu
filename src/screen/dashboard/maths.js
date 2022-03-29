
import ReactDOM from "react-dom"
import * as CANNON from "cannon";
import React, { useState } from "react"
import { Canvas, useThree, useFrame } from "@react-three/fiber"
import { useDrag } from "react-use-gesture";
import * as THREE from 'three';
// import "./index.css"
import { useCannon, Provider } from './useCannon';
import useEventListener from '@use-it/event-listener';
import {OrbitControls}  from "@react-three/drei";
function DraggableDodecahedron({ position: initialPosition }) {
    const { camera, mouse } = useThree();
    const [position, setPosition] = useState(initialPosition);
    const [quaternion, setQuaternion] = useState([0, 0, 0, 0]);

    const { ref, body } = useCannon({ bodyProps: { mass: 100000 } }, body => {
        body.addShape(new CANNON.Box(new CANNON.Vec3(1, 1, 1)))
        body.position.set(...position);
    }, []);

    const bind = useDrag(({ event, offset: [,], xy: [x, y], first, last }) => {
        if (first) {
            body.mass = 0;
            body.updateMassProperties();
        } else if (last) {
            body.mass = 10000;
            body.updateMassProperties();
        }
        const pos = get3DPosition({ screenX: mouse.x, screenY: mouse.y, camera });
        body.position.set(pos[0], pos[1], -0.7);
    }, { pointerEvents: true });

    useFrame(() => {
        // Sync cannon body position with three js
        const deltaX = Math.abs(body.position.x - position[0]);
        const deltaY = Math.abs(body.position.y - position[1]);
        const deltaZ = Math.abs(body.position.z - position[2]);
        if (deltaX > 0.001 || deltaY > 0.001 || deltaZ > 0.001) {
            setPosition(body.position.clone().toArray());
        }
        const bodyQuaternion = body.quaternion.toArray();
        const quaternionDelta = bodyQuaternion.map((n, idx) => Math.abs(n - quaternion[idx]))
            .reduce((acc, curr) => acc + curr);
        if (quaternionDelta > 0.01) {
            setQuaternion(body.quaternion.toArray());
        }
    });
    return (
        <mesh ref={ref} castShadow position={position} quaternion={quaternion} {...bind()}
            onClick={e => {
                e.stopPropagation();
            }}
        >

            <dodecahedronBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="yellow" />

        </mesh>
    )
}

function Plane({ position, onPlaneClick }) {
    const { ref } = useCannon({ bodyProps: { mass: 0 } }, body => {
        body.addShape(new CANNON.Plane())
        body.position.set(...position)
    })
    return (
        <mesh ref={ref} receiveShadow position={position}
            onClick={onPlaneClick}>
            <planeBufferGeometry attach="geometry" args={[10000, 10000]} />
            <meshPhongMaterial attach="material" color="#272727" />
        </mesh>
    )
}

function Objects({ objects, addObject }) {
    return <React.Fragment>
        {objects}
    </React.Fragment>;
}


const get3DPosition = ({ screenX, screenY, camera }) => {
    var vector = new THREE.Vector3(screenX, screenY, 0.5);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var distance = - camera.position.z / dir.z;
    var pos = camera.position.clone().add(dir.multiplyScalar(distance));
    return [pos.x, pos.y, 0];
};

const keyPressed = {
};

function App() {

    const [objects, setObjects] = useState([]);

    const { mouse, camera } = useThree();
    const onPlaneClick = (e) => {
        const position = get3DPosition({ screenX: mouse.x, screenY: mouse.y, camera });
        setObjects([...objects,
        <DraggableDodecahedron position={position} key={Math.random()} />]);
    };

    const handleKeyDown = (e) => {
        if (!keyPressed[e.key]) {
            keyPressed[e.key] = new Date().getTime();
        }
    };

    const handleKeyUp = (e) => {
        delete keyPressed[e.key];
    };

    const mouseWheel = (e) => {
        let delta = e.wheelDelta;
        delta = delta / 240;
        delta = -delta;
        if (delta <= 0) {
            delta -= camera.position.z * 0.1;
        } else {
            delta += camera.position.z * 0.1;
        }
        if (camera.position.z + delta > 1 && camera.position.z + delta < 200) {
            camera.translateZ(delta);
        }
    };
    useEventListener('keydown', handleKeyDown);
    useEventListener('keyup', handleKeyUp);
    useEventListener('wheel', mouseWheel);
    useFrame((_, delta) => {
        // move camera according to key pressed
        Object.entries(keyPressed).forEach((e) => {
            const [key, start] = e;
            const duration = new Date().getTime() - start;

            // increase momentum if key pressed longer
            let momentum = Math.sqrt(duration + 200) * 0.01 + 0.05;

            // adjust for actual time passed
            momentum = momentum * delta / 0.016;

            // increase momentum if camera higher
            momentum = momentum + camera.position.z * 0.02;

            switch (key) {
                case 'w': camera.translateY(momentum); break;
                case 's': camera.translateY(-momentum); break;
                case 'd': camera.translateX(momentum); break;
                case 'a': camera.translateX(-momentum); break;
                default:
            }
        });
    });


    return <React.Fragment >
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[0, -20, 30]} angle={Math.PI / 3} penumbra={1} />
        <Provider>
            <Objects objects={objects}>
            </Objects>
            <Plane position={[0, 0, -2]} onPlaneClick={onPlaneClick} />
        </Provider>
    </React.Fragment>

};

function Maths() {
    return <Canvas
        onCreated={({ gl }) => {
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
    >
        <App />
        <OrbitControls/>
    </Canvas>
}
export default Maths