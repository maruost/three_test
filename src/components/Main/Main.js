import {Canvas} from "react-three-fiber";
import Scene from "../Scene/Scene";
import React, {Suspense} from "react";
import Loader from "../Loader/Loader";
import {Environment} from "@react-three/drei";

function Main() {
    return (
        <div className='w-full h-full bg-blue-300 flex justify-items-center items-center flex-col'>
            <div className='flex-1 items-center justify-items-center flex'>
                <h1 className='font-mono text-9xl font-bold text-white'>{'lorem ipsum'.toUpperCase()}</h1>
            </div>
            <div id="canvas-container" className='absolute top-0 left-0 w-full h-full'>
                <Canvas alpha='true' camera={{  fov: 30 }}>
                    <Suspense fallback={<Loader/>}>
                        <Scene modelsUrl={'All_in_one_Bbalance_displacement_Bheart_gray_V-2.glb'}/>
                    </Suspense>
                    <Environment preset="forest"/>
                </Canvas>
            </div>
        </div>
    )
}


export default Main;