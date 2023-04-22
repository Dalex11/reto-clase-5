import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [- 2, 1, 4]
}
root.render(
    <Canvas
        shadows={true}
        camera={cameraSettings}
        onPointerMissed={console.log("Clickeaste fuera")}
    >
        <Experience />
    </Canvas>
)
