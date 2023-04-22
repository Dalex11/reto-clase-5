import React, { useRef } from "react";
import { useVideoTexture } from "@react-three/drei";

export default function Murovideo() {
  const videoRef = useRef();

  const videoTexture = useVideoTexture(videoRef);

  return (
    <mesh>
      <planeBufferGeometry args={[2, 2]} />
      <meshBasicMaterial map={videoTexture} />
      <video ref={videoRef} src="/video/video.mp4" />
    </mesh>
  );
}
