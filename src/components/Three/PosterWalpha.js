import React, { useRef }  from 'react';
import { TextureLoader } from 'three'
import { useLoader } from 'react-three-fiber'

function Poster(props) {
	const group = useRef()
	const posterTexture = useLoader(TextureLoader, props.texture);
	const alphaTexture = useLoader(TextureLoader, props.alphaMap);

	return (
			<group ref={group}>
				<mesh position={props.position} rotation={props.rotation}>
					<boxBufferGeometry attach="geometry" args={props.size}/>
					<meshPhongMaterial attach="material"
														 map={posterTexture}
														 alphaMap={alphaTexture}
														 transparent={true}/>
					/>
				</mesh>
			</group>
	);
}

export default Poster;