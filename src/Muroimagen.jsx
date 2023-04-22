import React, { useState } from "react";
import { TextureLoader } from "three";

export default function Murovideo() {

    const [texture, setTexture] = useState('imagen/imagen1.jpg');

    const cambiar = () => {
        if(texture === 'imagen/imagen1.jpg'){
            setTexture('imagen/imagen2.jpg');
        } else {
            setTexture('imagen/imagen1.jpg');
        }
    }

    return (
        <mesh position = {[1, 0, 1]} rotation-y={- Math.PI * 0.5} onDoubleClick={cambiar}>
            <planeBufferGeometry args={[2, 2]} />
            <meshBasicMaterial  map={new TextureLoader().load(texture)}/>
        </mesh>
    );
}
