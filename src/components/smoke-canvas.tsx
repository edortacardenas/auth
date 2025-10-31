'use client';

import { Canvas } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";
import { Suspense } from "react";

/**
 * Componente de Cliente para renderizar un fondo de nubes/humo.
 * Corregido para asegurar la visibilidad y el rendimiento.
 */
export function SmokeCanvas() {
  return (
    // Este div posiciona el Canvas en el fondo. ES CRUCIAL que no tenga
    // un color de fondo propio (bg-black), ya que taparía el canvas.
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        {/* Forma correcta de establecer el color de fondo de la escena */}
        <color attach="background" args={['#000000']} />
        
        {/* Una luz ambiental es buena práctica. Asegura que los objetos no sean completamente negros. */}
        <ambientLight intensity={1.5} />

        <Suspense fallback={null}>
          <Cloud
            scale={8} // Controla el tamaño general de cada partícula de la nube. ¡Ajusta este valor!
            bounds={[20, 10, 10]} // Define un volumen de [ancho, alto, profundidad] donde se crea la nube.
            opacity={0.5}
            speed={0.4}
            segments={40}
            color="#ffffff"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}