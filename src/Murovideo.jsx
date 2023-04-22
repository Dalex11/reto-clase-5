import React, { useRef, useState } from "react";
import { useVideoTexture } from "@react-three/drei";

export default function Murovideo() {
  const [reproducir, setReproducir] = useState(false);
  const handleClick = () => {
    setReproducir(!reproducir);
  }

  return (
    <mesh onClick={handleClick}>
      <planeBufferGeometry args={[2, 2]} />
      <meshBasicMaterial map={new useVideoTexture('video/video.mp4', { autoplay: reproducir })}/>
    </mesh>
  );
}