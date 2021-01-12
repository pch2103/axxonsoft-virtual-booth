import React from "react";
//Styles
import "./assets/styles/App.scss";
import {Canvas} from "react-three-fiber";
import {Loader, OrbitControls, softShadows} from "@react-three/drei";
import Lights from "./components/Three/lights";
import VirtualWP from "./components/Three/VirtualWP";
import Floor from "./components/Three/Floor";
import Info from "./info/Info";
import {useInfo} from "./info/useInfo";

softShadows(undefined)

const App = () => {
  const info = useInfo()

  return (
    <>
      <Canvas
          className={'canvas'}
          invalidateFrameloop
          colorManagement
          shadowMap
          camera={{position:[5,4,3], fov: 20}}
      >
      <OrbitControls
        enableDamping={true}
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
        <Lights />
        <VirtualWP position = {[0, -1, 0]} info={info}/>
        <Floor />
      </Canvas>
      <Info info={info}/>
      <Loader />
    </>
  );
};

export default App;
