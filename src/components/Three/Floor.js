import React from 'react';

function Floor(props) {
	return (
			<mesh rotation = {[-Math.PI/2, 0, 0]} position = {[0,0,0]} receiveShadow>
					<planeBufferGeometry attach = "geometry" args={[100,100]}/>
					<shadowMaterial attach="material" transparent opacity={0.3}/>
			</mesh>
	);
}

export default Floor;