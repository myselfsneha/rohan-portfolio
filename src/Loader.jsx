import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Suspense } from "react";

function FloatingParticles() {
  return (
    <group>
      {/* Soft, warm central form */}
      <Float
        speed={0.6}
        rotationIntensity={0.12}
        floatIntensity={0.35}
      >
        <mesh position={[2.8, 0.6, -3]}>
          <icosahedronGeometry args={[1.8, 2]} />
          <meshStandardMaterial
            color="#77795A"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>

      {/* A smaller, distant accent */}
      <Float
        speed={0.35}
        rotationIntensity={0.08}
        floatIntensity={0.2}
      >
        <mesh position={[-3.2, -1.8, -4]}>
          <icosahedronGeometry args={[0.9, 1]} />
          <meshStandardMaterial
            color="#A66F52"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>

      {/* Quiet background specks */}
      <Stars
        radius={35}
        depth={18}
        count={180}
        factor={1.2}
        saturation={0}
        fade
        speed={0.15}
      />
    </group>
  );
}

export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight
            position={[4, 3, 5]}
            intensity={1.1}
            color="#D7C8A5"
          />
          <FloatingParticles />
        </Suspense>
      </Canvas>

      {/* Keeps the 3D details atmospheric, not distracting */}
      <div className="absolute inset-0 bg-[#191a16]/35" />
    </div>
  );
}
