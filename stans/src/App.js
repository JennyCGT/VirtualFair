import "aframe";
import React, { Component } from "react";
import "aframe-particle-system-component";
import { animation__click } from "aframe-extras";
//import 'babel-polyfill';
import { Entity, Scene, Camera, Cursor } from "aframe-react";

class App extends Component {
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };
  handleClick = () => {
    console.log('Clicked!');
  }
  
  handleCollide = () => {
    console.log('Collided!');
  }
  render() {
    
    return (
      
        <Scene >
              <a-assets>
              <img id="ground" src="textures/brick.jpg" />
              {/* <img id="sky" src="textures/sky.gif" /> */}
              <img id="sky" src="textures/sky2.jpg" />
              <img id="road" src="textures/road.png" />
              {/* <img id="sky" src="textures/entorno3.jpg" /> */}
              <a-asset-item id="mod" src="models/stan.glb"></a-asset-item>
              <a-asset-item id="env" src="models/Place.glb"></a-asset-item>
              <a-asset-item id="sof" src="models/sofa.glb"></a-asset-item>
              <a-asset-item id="chair" src="models/chair.glb"></a-asset-item>
              <a-asset-item id="aloe" src="models/aloe.glb"></a-asset-item>
              <a-asset-item
                id="screen"
                src="models/pantalla.glb"
              ></a-asset-item>
              <a-asset-item
                id="pino"
                src="models/tree_simple.glb"
              ></a-asset-item>
            </a-assets>
            <Entity
              id="sofa1"
              gltf-model="#sof"
              scale="7 7 7 "
              position={{ x: -22.5, y: 0, z: 14.621 }}
              rotation={{ x: 0, y: 90, z: 0 }}
            />
            <Entity
              id="screen"
              gltf-model="#screen"
              scale="0.01 0.01 0.01"
              position={{ x: 20, y: 0, z: -13 }}
              rotation={{ x: 0, y: 270, z: 0 }}
            />
            <Entity
              id="scree1"
              gltf-model="#screen"
              scale="0.01 0.01 0.01"
              position={{ x: -17, y: 0, z: -13 }}
              rotation={{ x: 0, y: -90, z: 0 }}
            />
            <Entity
              id="tree"
              gltf-model="#pino"
              scale="1 1.5 1"
              position={{ x: -42.5, y: 0, z: 24.701 }}
              rotation={{ x: 0, y: 0, z: 0 }}
            />
            <Entity
              id="tree1"
              gltf-model="#pino"
              scale="1 1.5 1"
              position={{ x: -26.5, y: 0, z: 26 }}
              rotation={{ x: 0, y: 0, z: 0 }}
            />
            <Entity
              id="tree2"
              gltf-model="#pino"
              scale="1 1.5 1"
              position={{ x: 34, y: 0, z: 26 }}
              rotation={{ x: 0, y: 0, z: 0 }}
            />
            <Entity
              id="stan1"
              gltf-model="#mod"
              scale="0.2 0.07 0.1"
              position={{ x: 22.095, y: 0, z: -3 }}
              rotation={{ x: 0, y: -90, z: 0 }}
            />
            <Entity
              id="stan2"
              gltf-model="#mod"
              scale="0.2 0.07 0.1"
              position={{ x: -20.621, y: 0, z: -3 }}
              rotation={{ x: 0, y: 90, z: 0 }}
            />
            <Entity
              id="stan3"
              gltf-model="#mod"
              scale="0.2 0.07 0.1"
              position={{ x: 13.0, y: 0, z: -17.51 }}
              rotation={{ x: 0, y: 0, z: 0 }}
            />
            <Entity
              id="stan4"
              gltf-model="#mod"
              scale="0.2 0.07 0.1"
              position={{ x: -10, y: 0, z: -17.51 }}
              rotation={{ x: 0, y: 0, z: 0 }}
            />
            <Entity
              id="stan5"
              gltf-model="#mod"
              scale="0.2 0.07 0.1"
              position={{ x: 22.095, y: 0, z: 13 }}
              rotation={{ x: 0, y: -90, z: 0 }}
            />
            <Entity
              id="env"
              gltf-model="#env"
              scale="0.1 0.05 0.05"
              position={{ x: 4.455, y: 0, z: -22.804 }}
              rotation={{ x: 0, y: 0, z: 0 }}
            />
            <a-box src="#road"></a-box>
            <a-sky radius="80" height="2048" src="#sky" theta-length="90" />
            <a-plane
              id="street"
              position="-1 0.5 60.7"
              rotation="-90 0 0"
              scale="15 2.50"
              width="15"
              height="25"
              src="#road"
              //  material="envMap: #road; roughness: 0"
            />
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
            <a-entity id="light" light="type: ambient; color: #BBB"></a-entity>
            <a-entity
              id="light_d1 "
              light="type: directional; color: #FFF; intensity: 0.6"
              position="0.785 25.980 37.732"
            />
            <a-entity
              id="light_d"
              light="type: directional; color: #FFF; intensity: 0.6"
              position="-2.471 26.912 -13.901"
            />

            <Entity
              primitive="a-camera"
              adAxis="x"
              look-controls=""
              wasd-controls="acceleration:400"
              position={{ x: 0, y: 8, z: 22 }}
              rotation={{ x: 0, y: 0, z: 0 }}
            ></Entity>
            {/* <a-camera > */}
            
          </Scene>
          

    );
  }
}

export default App;
