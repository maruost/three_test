import React, {useRef,} from "react";
import {useFrame} from "react-three-fiber";

function Model(props) {
    const {model, ...rest} = props;
    const ref = useRef();
    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.set(1, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
        ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
    })
    return <primitive ref={ref} object={model} {...rest}/>
}

export default Model