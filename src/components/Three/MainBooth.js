import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import BuildMonitor from "../BuildMonitor";
import BuildPoster from "../BuildPoster";
import { TextureLoader } from 'three'
import {useLoader} from "react-three-fiber";

export default function MainBooth(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../mainBooth.glb')
  const mapTexture = useLoader(TextureLoader, '../../../officeMap.jpg');

  return (
    <group castShadow ref={group} {...props} dispose={null}>

      <BuildMonitor {...props}/>
      <BuildPoster {...props}/>

      <mesh position={[0, 1.29, -0.43]}>
        <boxBufferGeometry attach="geometry" args={[1.81, 1.81, 0.01]}/>
        <meshPhongMaterial attach="material" map={mapTexture}/>
      </mesh>

        <group position={[0.92, 0.34, 0.04]} rotation={[0, -1.57, 0]}>
          <mesh material={materials.WhiteWall} geometry={nodes.Cube5c.geometry} position={[0.23, -0.31, -0.11]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube4c.geometry} position={[-0.32, -0.31, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder2c.geometry} position={[0.24, -0.16, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder3c.geometry} position={[0.24, 0.36, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder1c.geometry} position={[0.24, -0.16, 0.09]} />
          <mesh material={materials.Metall} geometry={nodes['Cylinder-c'].geometry} position={[0.24, 0.36, 0.09]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube11c.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Sphere1c.geometry} position={[-0.26, 0.1, -0.34]} />
          <mesh material={materials.Metall} geometry={nodes['Sphere-c'].geometry} position={[-0.27, 0.1, 0.11]} />
          <mesh material={materials.Blue} geometry={nodes.Cube2c.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube6c.geometry} position={[-0.04, 0.11, -0.11]} />
        </group>
        <group position={[-1.16, 0.34, 0.04]} rotation={[0, -1.57, 0]}>
          <mesh material={materials.WhiteWall} geometry={nodes.Cube5b.geometry} position={[0.23, -0.31, -0.11]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube4b.geometry} position={[-0.32, -0.31, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder2b.geometry} position={[0.24, -0.16, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder3b.geometry} position={[0.24, 0.36, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder1b.geometry} position={[0.24, -0.16, 0.09]} />
          <mesh material={materials.Metall} geometry={nodes['Cylinder-b'].geometry} position={[0.24, 0.36, 0.09]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube11b.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Sphere1b.geometry} position={[-0.26, 0.1, -0.34]} />
          <mesh material={materials.Metall} geometry={nodes['Sphere-b'].geometry} position={[-0.27, 0.1, 0.11]} />
          <mesh material={materials.Blue} geometry={nodes.Cube2b.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube6b.geometry} position={[-0.04, 0.11, -0.11]} />
        </group>
        <group position={[0.36, 0.34, 0.66]}>
          <mesh material={materials.WhiteWall} geometry={nodes.Cube5a.geometry} position={[0.23, -0.31, -0.11]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube4a.geometry} position={[-0.32, -0.31, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder2a.geometry} position={[-0.32, -0.16, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder3a.geometry} position={[-0.32, 0.36, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder1a.geometry} position={[-0.32, -0.16, 0.09]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder144a.geometry} position={[-0.32, 0.36, 0.09]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube11a.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Sphere1a.geometry} position={[0.18, 0.1, -0.34]} />
          <mesh material={materials.Metall} geometry={nodes.Spherea.geometry} position={[0.18, 0.1, 0.11]} />
          <mesh material={materials.Blue} geometry={nodes.Cube2a.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube6a.geometry} position={[-0.04, 0.11, -0.11]} />
        </group>
        <group position={[-0.28, 0.34, 0.66]}>
          <mesh material={materials.WhiteWall} geometry={nodes.Cube5.geometry} position={[0.23, -0.31, -0.11]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube4.geometry} position={[-0.32, -0.31, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder2.geometry} position={[0.24, -0.16, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder3.geometry} position={[0.24, 0.36, -0.32]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder1.geometry} position={[0.24, -0.16, 0.09]} />
          <mesh material={materials.Metall} geometry={nodes.Cylinder.geometry} position={[0.24, 0.36, 0.09]} />
          <mesh material={materials.WhiteWall} geometry={nodes.Cube11.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh material={materials.Metall} geometry={nodes.Sphere1.geometry} position={[-0.26, 0.1, -0.34]} />
          <mesh material={materials.Metall} geometry={nodes.Sphere.geometry} position={[-0.27, 0.1, 0.11]} />
          <mesh material={materials.Blue} geometry={nodes.Cube2.geometry} position={[-0.04, 0.11, -0.11]} />
          <mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube6.geometry} position={[-0.04, 0.11, -0.11]} />
        </group>
        <mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube.geometry} position={[0, 1.25, 0]} />

        <mesh
            material={materials.WhiteWall}
            geometry={nodes.Cylinder_1.geometry}
            position={[0, 1.28, -0.47]}
            rotation={[Math.PI / 2, 0, 0]}
        />

        <mesh
            material={materials.Lamp}
            geometry={nodes.Tube.geometry}
            position={[0, 1.28, -0.44]}
            rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh castShadow material={materials.Blue} geometry={nodes.top1.geometry} position={[0, 2.63, 0]} />
        <mesh material={materials.Lamp} geometry={nodes.top.geometry} position={[0, 2.62, 0]} />
      </group>
  )
}

useGLTF.preload('../../../mainBooth.glb')
