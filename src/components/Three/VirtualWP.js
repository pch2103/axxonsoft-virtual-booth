/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import MonitorWP from "./MonitorWP";

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/virtualWP.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <MonitorWP position={[0, 1.2, 0.06]} texture='/screen.png'/>
      <group position={[0, 1.2, -0.06]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh material={materials.Screen} geometry={nodes.Screen1.geometry} position={[0, 0, 0.01]} />
        <mesh material={materials.DarkGray} geometry={nodes.Monitor1_1.geometry} position={[0, 0, -0.01]} />
      </group>
      <group position={[0, 1.2, 0.06]}>
        {/*<mesh material={materials.Screen} geometry={nodes.Screen1_1.geometry} position={[0, 0, 0.01]} />*/}
        <mesh material={materials.DarkGray} geometry={nodes.Monitor1_2.geometry} position={[0, 0, -0.01]} />
      </group>
      <group position={[0, 0.47, 0]}>
        <mesh material={materials.DarkGray} geometry={nodes.Sphere1.geometry} position={[0.26, 0, -0.32]} />
        <mesh material={materials.DarkGray} geometry={nodes.Sphere.geometry} position={[-0.25, 0, 0.32]} />
        <mesh material={materials.WhiteWall2} geometry={nodes.Cube6.geometry} position={[0, 0, 0]} />
      </group>
      <mesh material={materials.WhiteWall} geometry={nodes.Cube4.geometry} position={[0.33, 0.45, 0]} />
      <mesh material={materials.WhiteWall} geometry={nodes.Cube5.geometry} position={[-0.33, 0.45, 0]} />
      <mesh material={materials.DarkGray} geometry={nodes.Cube2.geometry} position={[0, 0.9, 0]} />
      <mesh material={materials.WhiteWall} geometry={nodes.Cube3.geometry} position={[0, 0.47, 0]} />
      <mesh material={materials.WhiteWall} geometry={nodes.Cube1.geometry} position={[0, 1.99, 0]} />
      <mesh material={materials.WhiteWall} geometry={nodes.Cube.geometry} position={[0, 1, 0]} />
    </group>
  )
}

useGLTF.preload('/virtualWP.glb')
