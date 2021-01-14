import React, {Suspense, useRef} from 'react'
import {useGLTF} from '@react-three/drei/useGLTF'
import BuildMonitor from "../BuildMonitor";
import BuildPoster from "../BuildPoster";

export default function VirtualWP({...props}) {
	const ref = useRef(null)
	const {nodes, materials} = useGLTF('../../../virtualWP.glb')

	return (
			<Suspense fallback={null}>
				<group ref={ref} {...props} dispose={null}>

					<BuildMonitor {...props}/>
					<BuildPoster {...props}/>

					<group position={[0.27, 1.965, 0.21]}>
						<mesh material={materials.Metall} geometry={nodes.Torus.geometry} position={[0, 0, 0]}/>
						<mesh material={materials.WhiteWall} geometry={nodes.Sphere1.geometry} position={[0, 0.01, 0]}/>
					</group>
					<group position={[-0.27, 1.965, 0.21]}>
						<mesh material={materials.Metall} geometry={nodes.Torus.geometry} position={[0, 0, 0]}/>
						<mesh material={materials.WhiteWall} geometry={nodes.Sphere1.geometry} position={[0, 0.01, 0]}/>
					</group>
					<group position={[0.27, 1.965, -0.21]}>
						<mesh material={materials.Metall} geometry={nodes.Torus.geometry} position={[0, 0, 0]}/>
						<mesh material={materials.WhiteWall} geometry={nodes.Sphere1.geometry} position={[0, 0.01, 0]}/>
					</group>
					<group position={[-0.27, 1.965, -0.21]}>
						<mesh material={materials.Metall} geometry={nodes.Torus.geometry} position={[0, 0, 0]}/>
						<mesh material={materials.WhiteWall} geometry={nodes.Sphere1.geometry} position={[0, 0.01, 0]}/>
					</group>
					<group position={[0, 0.42, 0]}>
						<mesh material={materials.Metall} geometry={nodes.Cylinder2.geometry} position={[-0.28, -0.23, -0.3]}/>
						<mesh material={materials.Metall} geometry={nodes.Cylinder3.geometry} position={[-0.28, 0.28, -0.3]}/>
						<mesh material={materials.Metall} geometry={nodes.Cylinder1.geometry} position={[0.28, -0.23, 0.3]}/>
						<mesh material={materials.Metall} geometry={nodes.Cylinder.geometry} position={[0.28, 0.28, 0.3]}/>
						<mesh material={materials.WhiteWall} geometry={nodes.Cube11.geometry} position={[0, 0.03, 0]}/>
						<mesh material={materials.Metall} geometry={nodes.Sphere.geometry} position={[-0.22, 0.03, 0.32]}/>
						<mesh material={materials.Metall} geometry={nodes.Sphere.geometry} position={[0.22, 0.03, -0.32]}/>
					</group>
					<mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube5.geometry} position={[0.27, 0.04, 0]}/>
					<mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube4.geometry} position={[-0.27, 0.04, 0]}/>
					<mesh material={materials.Blue} geometry={nodes.Cube2.geometry} position={[0, 0.45, 0]}/>
					<mesh material={materials.DarkGray} geometry={nodes.Cube7.geometry} position={[0, 0.83, 0]}/>
					<mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube6.geometry} position={[0, 0.45, 0]}/>
					<mesh material={materials.WhiteWall} geometry={nodes.Cube1.geometry} position={[0, 2, 0]}/>
					<mesh material={materials.Blue} geometry={nodes.Cube3.geometry} position={[0, 0.99, 0]}/>
					<mesh castShadow material={materials.WhiteWall} geometry={nodes.Cube.geometry} position={[0, 1, 0]}/>
				</group>
			</Suspense>
	)
}

useGLTF.preload('../../../virtualWP.glb')
