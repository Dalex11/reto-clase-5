import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export default function Murovideo() {

    const [texture, setTexture] = useState('imagen1.jpg');

    const cambiar = () => {
        setTexture('imagen2.jpg');
    }

    return (
        <mesh position = {[1, 0, 1]} rotation-y={- Math.PI * 0.5} onDoubleClick={cambiar}>
            <planeBufferGeometry args={[2, 2]} />
            <meshBasicMaterial  map={new TextureLoader().load(texture)} side={DoubleSide}/>
        </mesh>
    );
}
