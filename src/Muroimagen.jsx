import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

export default function Murovideo() {

    const texture = useLoader(THREE.TextureLoader, "/imagen/imagen1.jpg");
    const texture1 = useLoader(THREE.TextureLoader, "/imagen/imagen2.jpg");
    const [material, setMaterial] = useState(new THREE.MeshBasicMaterial({ map: texture }))

    const cambiar = () => {
        setMaterial(new THREE.MeshBasicMaterial({ map: texture1 }))            
    }

    return (
        <mesh position = {[1, 0, 1]} rotation-y={- Math.PI * 0.5} onDoubleClick={cambiar}>
            <planeBufferGeometry args={[2, 2]} />
            <meshBasicMaterial material={material} side={DoubleSide}/>
        </mesh>
    );
}
