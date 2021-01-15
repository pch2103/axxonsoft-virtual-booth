import React, {Suspense} from "react";
import "./assets/styles/App.scss";
import {Canvas} from "react-three-fiber";
import {Loader, OrbitControls, softShadows} from "@react-three/drei";
import Lights from "./components/Three/lights";
import Floor from "./components/Three/Floor";
import Info from "./components/Info";
import {useInfo} from "./hooks/useInfo";
import {useMonitorState} from "./hooks/useMonitorState";
import BuildWP from "./components/BuildWP";
import useVideoPlayer from "./hooks/useVideoPlayer";

softShadows(undefined)

const App = () => {
	const info = useInfo()
	const monitorState = useMonitorState()
	const videoPlayer = useVideoPlayer()
	return (
			<>

				<Canvas
						className={'canvas'}
						invalidateFrameloop
						colorManagement
						shadowMap
						camera={{position: [5, 3, 5], near: 1, fov: 25}}
				>
					<Suspense fallback={null}>
						<OrbitControls
								enableDamping={true}
								target={[0, 1, 0]}
								dampingFactor={0.25}
								rotateSpeed={0.4}
								keyPanSpeed={0.4}
								screenSpacePanning={true}
								zoomSpeed={0.6}
								enablePan={true}
								panSpeed={0.4}
								minPolarAngle={Math.PI / 4}
								maxPolarAngle={Math.PI / 2}
								minDistance={-500}
								maxDistance={1000}
						/>

						<Lights/>
						<BuildWP info={info} monitorState={monitorState} videoPlayer={videoPlayer}/>
						<Floor/>
					</Suspense>
				</Canvas>
				<Info info={info} monitorState={monitorState} videoPlayer={videoPlayer}/>
				<Loader/>
			</>
	);
};

export default App;
