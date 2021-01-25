import React from 'react';
import {useLoader} from "react-three-fiber";
import {TextureLoader} from "three";

function Floor(props) {
	const texture_alphaMap = useLoader(TextureLoader,'/alpha_glow.jpg');
	return <>
			<mesh rotation = {[-Math.PI/2, 0, 0]} position = {[0,0,0]} receiveShadow>
					<planeBufferGeometry attach = "geometry" args={[100,100]}/>
					<shadowMaterial attach="material" transparent opacity={0.3}/>
			</mesh>
		<mesh rotation = {[-Math.PI/2, 0, 0]} position = {[0,0.01,0]} receiveShadow>
			<planeBufferGeometry attach = "geometry" args={[7,7]}/>
			<meshBasicMaterial attach="material" color={"#fff"} alphaMap={texture_alphaMap} transparent opacity={0.5}/>
		</mesh>
	</>
}

export default Floor;