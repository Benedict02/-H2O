import React from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '@mui/system'

const Box1 = () => {
    const box1 = React.useRef()
    
    useFrame(({ clock }) => {
        box1.current.rotation.x += 0.01;
        box1.current.rotation.y = clock.getElapsedTime();
        box1.current.rotation.z = Math.sin(clock.getElapsedTime());
    })

    return (
        <mesh ref={box1}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
        </mesh>
    )
}

const Cloud = (props) => {
    const cloud = React.useRef()
    
    useFrame(({ clock }) => {
        cloud.current.rotation.x = (Math.sin(clock.getElapsedTime()+props.rot_shift))/6;
        cloud.current.position.y = (Math.sin(clock.getElapsedTime()+props.pos_shift)/2)+1.25;
    })

    return (
        <group ref={cloud} scale={[1, 1, 1]} rotation={[0.785398/2, 0, 0]}>
            <mesh position={[0, -0.25, 0]}>
                <sphereGeometry args={[0.9, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[1, -0.2, 0]}>
                <sphereGeometry args={[0.65, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[1.5, -0.1, 0]}>
                <sphereGeometry args={[0.45, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[-1, 0, 0]}>
                <sphereGeometry args={[0.75, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[-1.7, 0.1, 0]}>
                <sphereGeometry args={[0.45, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[0, 0, 1]}>
                <sphereGeometry args={[0.45, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[0.6, 0, 0.6]}>
                <sphereGeometry args={[0.75, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[0.25, -0.2, -0.7]}>
                <sphereGeometry args={[0.65, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[-0.6, 0, 0.6]}>
                <sphereGeometry args={[0.45, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[-0.4, 0, -0.6]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[-0.3, 0.7, 0]}>
                <sphereGeometry args={[0.65, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[0.6, 0.6, 0]}>
                <sphereGeometry args={[0.45, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
            <mesh position={[0, -0.6, 0]}>
                <sphereGeometry args={[0.45, 32, 32]} />
                <meshToonMaterial color={props.color} />
            </mesh>
        </group>
    )
}

const Rain = (props) => {
    const rain1 = React.useRef()
    const rain2 = React.useRef()
    const rain3 = React.useRef()
    const rain4 = React.useRef()
    const rain5 = React.useRef()
    const rain6 = React.useRef()
    const rain7 = React.useRef()
    const rain8 = React.useRef()
    const rain9 = React.useRef()

    const rain = [rain1, rain2, rain3, rain4, rain5, rain6, rain7, rain8, rain9]
    
    useFrame(({ clock }) => {
        for(let i = 0; i < rain.length; i++) {
            rain[i].current.position.y *= 1.015;
            rain[i].current.position.y -= 0.05;
            if(rain[i].current.position.y < -4) {
                rain[i].current.position.x = ( Math.random() * (1.75 - (-1.75)) ) + (-1.75)
                rain[i].current.position.y = ((Math.sin(clock.getElapsedTime()+props.pos_shift)/2)+1)
                rain[i].current.position.z = (Math.random()) - (Math.random())
            }
        }
    })

    return (
        <group>
            <mesh ref={rain1} position={[Math.random()-Math.random(), 0.5, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain2} position={[Math.random()-Math.random(), 0, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain3} position={[Math.random()-Math.random(), -0.5, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain4} position={[Math.random()-Math.random(), -1, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain5} position={[Math.random()-Math.random(), -1.5, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain6} position={[Math.random()-Math.random(), -2, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain7} position={[Math.random()-Math.random(), -2.5, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain8} position={[Math.random()-Math.random(), -3, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
            <mesh ref={rain9} position={[Math.random()-Math.random(), -3.5, Math.random()-Math.random()]}>
                <sphereGeometry args={[0.035, 32, 32]} />
                <meshBasicMaterial color={"cornflowerblue"} />
            </mesh>
        </group>
    )
}

const RainCloud = (props) => {
    return (
        <group position={props.pos} scale={props.scale}>
            <Cloud color={props.color} pos_shift={props.pos_shift} rot_shift={props.rot_shift} />
            <Rain pos_shift={props.pos_shift} />
        </group>
    )
}

const Hydrology = () => {
    return (
        <div id="canvas-container" style={{height: "100%", width: "100%"}}>
            <Canvas style={{height: "100%", width: "100%", backgroundColor: "lightblue"}}>
                <ambientLight intensity={1} color={"#cccccc"} />
                <directionalLight intensity={5} color="#ffffff" position={[-5, 5, 10]} />
                <axesHelper args={[3]} />
                <RainCloud pos={[-7,2,-5]} scale={0.8} color={"#bbbbbb"} pos_shift={0} rot_shift={1} />
                <RainCloud pos={[12,2.5,-5]} scale={0.9} color={"#bbbbbb"} pos_shift={1} rot_shift={2} />
                <RainCloud pos={[7,0.25,-2]} scale={0.7} color={"#dddddd"} pos_shift={2} rot_shift={3} />
                <RainCloud pos={[-8,0.5,-2]} scale={1} color={"#dddddd"} pos_shift={3} rot_shift={4} />
                <RainCloud pos={[-1,0.25,0]} scale={1} color={"#ffffff"} pos_shift={4} rot_shift={5} />
                <RainCloud pos={[3,0.5,0]} scale={0.7} color={"#ffffff"} pos_shift={5} rot_shift={6} />
            </Canvas>
        </div>
    )
}

createRoot(document.getElementById('root')).render(<Hydrology />)

export default Hydrology;