import React, {Suspense} from "react";
//Styles
import "./assets/styles/App.scss";

import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import {softShadows} from "@react-three/drei";
import Lights from "./components/Three/lights";
import Model from "./components/Three/VirtualWP";
import Floor from "./components/Three/Floor";


const App = () => {
  softShadows(undefined);
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{position:[5,4,3], fov: 20}}
      >
        <Lights/>
        <Suspense fallback={null}>
          <Model position = {[0, -1, 0]}/>
          <Floor />
        </Suspense>
        <OrbitControls maxPolarAngle={Math.PI/2} />
      </Canvas>
    </>
  );
};

export default App;
