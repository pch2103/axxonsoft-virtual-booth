import React, { useRef } from 'react'
import { TextureLoader } from 'three'
import { useLoader } from 'react-three-fiber'

export default function MonitorWP(props) {
	const group = useRef()
	const texture_1 = useLoader(TextureLoader, props.texture);

	return (
			<group ref={group} rotation={props.rotation}>
				<mesh position={props.position} >
					<boxBufferGeometry attach="geometry" args={[0.6, 0.4, 0.01]} />
					<meshStandardMaterial attach="material"map={texture_1} />
				</mesh>
				<mesh position={[props.position[0], props.position[1], props.position[2]-0.007]}>
					<boxBufferGeometry attach="geometry" args={[0.62, 0.42, 0.02]} />
					<meshBasicMaterial color = "black"/>
				</mesh>
			</group>
	);
}