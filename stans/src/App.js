import "aframe";
import React, { Component } from "react";
import "aframe-particle-system-component";
import { animation__click } from "aframe-extras";
//import 'babel-polyfill';
import { Entity, Scene, Camera, Cursor } from "aframe-react";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hello World Again!</h1>
        </div>
        <div>
          <Scene>
            <a-assets>
              <img id="ground" src="textures/2145.jpg" />
              <img id="sky" src="textures/sky.gif" />
              {/* <img id="sky" src="textures/entorno3.jpg" /> */}
              <a-asset-item id="mod" src="models/stan.glb"></a-asset-item>
              <a-asset-item id="env" src="models/Place.glb"></a-asset-item>

              
            </a-assets>
            <Entity
              id="stan1"
              gltf-model="#mod"
              scale="0.05 0.05 0.05"
              position={{ x: -13.213, y: 0, z: 0 }}
              rotation={{ x: 0, y: 47.461, z: 0 }}
            />
                        <Entity
              id="env"
              gltf-model="#env"
              scale="0.1 0.05 0.05"
              position={{ x: -13.213, y: 0, z: 0 }}
              rotation={{ x: 0, y: 90.965, z: 0 }}
            />
            <a-sky radius="50" height="2048" src="#sky" theta-length="90" />
            <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" />
            <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" />
            <a-cylinder
              position="1 0.75 -3"
              radius="0.5"
              height="1.5"
              color="#FFC65D"
            />
            <a-plane
              // position="0 0 -4"
              rotation="-90 0 0"
              width="60"
              height="60" 
              src="#ground"
            />
            <Entity
              primitive="a-camera"
              look-controls=""
              position={{ x: 28, y: 6.148, z: -3.056
               }}
            >
              <Entity
                primitive="a-cursor"
                animation__click={{
                  property: "scale",
                  startEvents: "click",
                  from: "0.1 0.1 0.1",
                  to: "1 1 1",
                  dur: 150,
                }}
              />
            </Entity>
            />
          </Scene>
        </div>
      </div>
    );
  }
}

export default App;
