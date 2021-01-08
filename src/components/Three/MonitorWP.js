import React, { useRef } from 'react'
import { TextureLoader } from 'three'
import { useLoader } from 'react-three-fiber'

export default function MonitorWP(props) {
	const mesh = useRef()
	//const texture_1 = useLoader(TextureLoader, props.texture);
	return (
				<mesh position={props.position} ref={mesh}>
					<boxBufferGeometry attach="geometry"args={[0.6, 0.35, 0.01]} />
					<meshStandardMaterial attach="material"map={texture_1} />
				</mesh>
	);
}