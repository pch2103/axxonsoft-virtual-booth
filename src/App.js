import React, {Suspense} from "react";
//Styles
import "./assets/styles/App.scss";

import {Canvas} from "react-three-fiber";
import {OrbitControls} from "@react-three/drei";
import Lights from "./components/Three/lights";
import Model from "./components/Three/VirtualWP";

const App = () => {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{position:[5,4,3], fov: 20}}
      >
        <Suspense fallback={null}>
          <Lights/>
          <Model position = {[0, -1, 0]}/>
        </Suspense>
        <OrbitControls/>
      </Canvas>
    </>
  );
};

export default App;
