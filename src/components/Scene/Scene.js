import { useFrame} from "react-three-fiber";
import { OrbitControls, useGLTF} from "@react-three/drei";
import React  from "react";
import * as THREE from "three";
import Model from "../Model/Model";

function Scene({modelsUrl}) {
    const {animations, scene} = useGLTF(`/assets/${modelsUrl}`);

    let mixer = new THREE.AnimationMixer(scene);
    animations.forEach(clip => {
        const action = mixer.clipAction(clip)
        action.play();
    });
    useFrame((state, delta) => {
        mixer?.update(delta)
    });
    return (
        <>
            <OrbitControls enablePan={false} enableZoom={false} target={[0, 0, 0]}/>
            <ambientLight intensity={0.7}/>
            <directionalLight intensivity={0.5} position={[10, 10, 10]}/>
            {scene.children[0] ? <Model key={scene.children[0]?.uuid} model={scene.children[0]}/> : null}
        </>

    )
};

export default Scene;
