import React, { useRef }  from 'react';
import { TextureLoader } from 'three'
import { useLoader } from 'react-three-fiber'

function Poster(props) {
	const group = useRef()
	const texture_1 = useLoader(TextureLoader, props.texture);
	return (
			<group ref={group}>
				<mesh position={props.position}>
					<boxBufferGeometry attach="geometry" args={props.size}/>
					<meshPhongMaterial attach="material" map={texture_1}/>
				</mesh>
			</group>
	);
}

export default Poster;