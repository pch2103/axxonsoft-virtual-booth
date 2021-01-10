import React from 'react';

function Lights(props) {
	return (
			<>
				{/*<fog attach={'fog'} args={['#717484', 4, 70]}/>*/}
				<ambientLight intensity={0.3}/>
				<directionalLight
						castShadow
						position = {[0, 16, 0]}
						intensity={0.2}
						shadow-mapSize-width={1024}
						shadow-mapSize-height={1024}
						shadow-camera-far={50}
						shadow-camera-left={-10}
						shadow-camera-right={10}
						shadow-camera-top={10}
						shadow-camera-bootom={-10}
				/>
				<pointLight position = {[-10, 0, -20]} intensity={0.3}/>
				<pointLight position = {[0, -10, 20]} intensity={0.3}/>

			</>
	);
}

export default Lights;