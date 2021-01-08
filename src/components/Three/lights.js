import React from 'react';

function Lights(props) {
	return (
			<>
				<fog attach={'fog'} args={['#717484', 4, 70]}/>
				<ambientLight intensity={0.3}/>
				<directionalLight
						castShadow
						position = {[0, 10, 0]}
						intensity={1.3}
						shadowMapHeight={1024}
						shadowMapWidth={1024}
						shadowCameraFar={50}
						shadowCameraLeft={-10}
						shadowCameraRight={10}
						shadowCameraTop={10}
						shadowCameraBottom={-10}
				/>
				<pointLight position = {[-10, 0, -20]} intensity={0.5}/>
				<pointLight position = {[0, -10, 20]} intensity={0.5}/>
				{/*<ambientLight intensity={0.4}/>*/}
				{/*<directionalLight*/}
				{/*		castShadow*/}
				{/*		position={[-8, 16, -8]}*/}
				{/*		intensity={0}*/}
				{/*		shadowMapHeight={1024}*/}
				{/*		shadowMapWidth={1024}*/}
				{/*		shadowCameraFar={50}*/}
				{/*		shadowCameraLeft={-10}*/}
				{/*		shadowCameraRight={10}*/}
				{/*		shadowCameraTop={10}*/}
				{/*		shadowCameraBottom={-10}*/}
				{/*/>*/}
				{/*<pointLight position = {[0, 50, 0]} intensity={2}/>*/}
			</>
	);
}

export default Lights;