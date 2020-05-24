import "aframe";
import React, { Component } from "react";
import "aframe-particle-system-component";
import { animation__click } from "aframe-extras";
//import 'babel-polyfill';
import { Entity, Scene, Camera, Cursor } from "aframe-react";
import { debug } from "aframe";
var ESCAPE_KEY = 27;
var rotate = -90;
class App extends Component {
  constructor(props) {
    super(props);
  }

  onKeyDown(event) {
    switch (event.keyCode) {
      case ESCAPE_KEY:
        alert("It's a trap!");
        console.log("escape");
        break;
      case 37:
        console.log("izquierda");
        rotate = -90;

      default:
        break;
    }
    return true;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  handleKey = (e) => {
    console.log(e.keyCode);
  };

  render() {
    return (
      <a-scene>
        <a-assets>
          <img id="ground" src="textures/brick.jpg" />
          <img id="logojr" src="textures/jrtec.png" />
          <img id="logosu" src="textures/suveci.png" />
          <img id="logopu" src="textures/suvecip.jpg" />
          <img id="logoend" src="textures/endulza.png" />
          <img id="postres" src="textures/logo.png" />
          {/* <img id="logosu" src="textures/suveci.png" /> */}
          {/* <img id="sky" src="textures/sky.gif" /> */}
          <img id="sky" src="textures/sky2.jpg" />
          <img id="day" src="textures/day.jpg" />
          <img id="night" src="textures/night.jpg" />
          <img id="sunset" src="textures/sunset1.jpg" />
          <img id="road" src="textures/road.png" />
          {/* <img id="sky" src="textures/entorno3.jpg" /> */}
          <a-asset-item id="mod" src="models/stan.glb"></a-asset-item>
          <a-asset-item id="env" src="models/Place.glb"></a-asset-item>
          <a-asset-item id="sof" src="models/sofa.glb"></a-asset-item>
          <a-asset-item id="chair" src="models/chair.glb"></a-asset-item>
          <a-asset-item id="aloe" src="models/aloe.glb"></a-asset-item>
          <a-asset-item id="screen" src="models/pantalla1.glb"></a-asset-item>
          <a-asset-item id="pino" src="models/pino.glb"></a-asset-item>
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
          scale="0.03 0.03 0.03"
          position={{ x: -42.5, y: 0, z: 24.701 }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        <Entity
          id="tree1"
          gltf-model="#pino"
          scale="0.03 0.03 0.03"
          position={{ x: -26.5, y: 0, z: 26 }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        <Entity
          id="tree2"
          gltf-model="#pino"
          scale="0.03 0.03 0.03"
          position={{ x: 34, y: 0, z: 26 }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        <Entity
          id="stan1"
          gltf-model="#mod"
          scale="0.2 0.07 0.1"
          position={{ x: 22.095, y: 0, z: -3 }}
          rotation={{ x: 0, y: -90, z: 0 }}
        >
          <a-image
            src="#logojr"
            width="50"
            height="50"
            position="0 37.857 18.1}}"
          ></a-image>
        <Entity
          geometry="primitive: plane; width: 12; height:2"
          material="color:#027bba"
          position={{ x: -0.355, y: 187.13, z: -13 }}
          scale="6 10 0"
        text={{
            // font:'https://cdn.aframe.io/fonts/Aileron-Semibold.fnt',
          //  tabSize:"2",
            value: "TECHNOLOGY DEVELOPMENT AGENCY",
            align: "center",
            color: "#ffffff",
            width: "15",
            height: "auto",
          }}
      ></Entity>

        </Entity>
        <Entity
          id="stan2"
          gltf-model="#mod"
          scale="0.2 0.07 0.1"
          position={{ x: -20.621, y: 0, z: -3 }}
          rotation={{ x: 0, y: 90, z: 0 }}
        >
          <a-image
            src="#logopu"
            width="70"
            height="70"
            position="0 37.857 18.5"
          ></a-image>
            <Entity
          geometry="primitive: plane; width: 12; height:2"
          material="color:#99ffcc"
          position={{ x: -0.355, y: 187.13, z: -12 }}
          scale="6 10 0"
           text={{
            // font:'https://cdn.aframe.io/fonts/Aileron-Semibold.fnt',
            value: "¿Quieres vender por internet?",
            align: "center",
            color: "#027bba",
            width: "15",
            height: "auto",
          }}
      ></Entity>
        </Entity>
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
        >
          <a-image
            src="#postres"
            width="70"
            height="60"
            position="0 37.857 18.6"
          ></a-image>
          {/* <a-image
            src="#logoend"
            width="20"
            height="20"
            position="23.306 191 -16"
          ></a-image> */}
        <Entity
          geometry="primitive: plane; width: 11; height:2"
          material="color: #fbc2c3"
          position={{ x: -0.355, y: 187.13, z: -15.6 }}
          scale="6 10 0"
        text={{
            value: "Endulzando paladares",
            align: "center",
            color: "#ff0343",
            width: "20",
            height: "auto",
          }}
      ></Entity>

        </Entity>
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
        <a-box src="#road" position="21.708 6.102 0"></a-box>
        <a-sky radius="80" height="2048" src="#sunset" theta-length="90" />
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
        <a-sphere position="-19.744 7 -5" radius="1.25" color="#EF2D5E" />
        <a-cylinder
          position="21.386 6.476 -3"
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
        {/* <a-entity
          id="light_d1 "
          light="type: directional; color: #FFF; intensity: 0.3"
          // position="0.785 25.980 37.732"
          position="-2.058 16.721 47.461"
        /> */}
        <a-entity
          id="light_d"
          light="type: directional; color: #FFF; intensity: 0.3"
          position="0 20.623 0"
        />

        <Entity
          primitive="a-camera"
          adAxis="x"
          look-controls=""
          wasd-controls="acceleration:400"
          position={{ x: 0, y: 8, z: 22 }}
          rotation={{ x: 0, y: rotate, z: 0 }}
          // rotation={{ x: 0, y: 0, z: 0 }}
        ></Entity>
        {/* <a-camera > */}
        <Entity event={{ onKeyDown: this.onKeyDown }}></Entity>
      </a-scene>
    );
  }
}

export default App;
