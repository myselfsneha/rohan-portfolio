import { Canvas } from "@react-three/fiber";

function FloatingParticles() {
  return (
    <mesh>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial color="#00ffcc" wireframe />
    </mesh>
  );
}

export default function Background() {
  return (
    <Canvas className="fixed inset-0 -z-10 opacity-20">
      <ambientLight intensity={0.5} />
      <FloatingParticles />
    </Canvas>
  );
}