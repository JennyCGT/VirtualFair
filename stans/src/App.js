import "aframe";
import React, { Component } from "react";
import { animation__click } from "aframe-extras";
import { Entity } from "aframe-react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Sky: "#sky1",
      SoundMode: "Play",
    };
  }

  jrtecpag = (data) => {
    window.open(data);
    console.log('ok3')
  }

  stop =() => {
    const sound1El = document.querySelector('#sound1');
    if (this.state.SoundMode==="Play"){
      this.state.SoundMode="Stop"
      sound1El.components.sound.stopSound();
    }else{
      this.state.SoundMode="Play"
      sound1El.components.sound.playSound();
    }
  }

  handleClick = () => {
    if (this.state.Sky==="#sky1"){
      this.setState({Sky: "#sky2"})
    }else{
      this.setState({Sky: "#sky1"})
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <a-scene 
          vr-mode-ui="enabled: false" 
          raycaster="far: 22; objects: [link], .clickable; interval: 500"
          cursor="rayOrigin: mouse">

          <a-assets>
            <img id="ground" src="textures/brick.jpg" />
            <img id="logojr" src="textures/jrtec.png" />
            <img id="logosu" src="textures/suveci.png" />
            <img id="logopu" src="textures/suvecip.jpg" />
            <img id="logoend" src="textures/endulza.png" />
            <img id="postres" src="textures/logo.png" />
            {/* <img id="logosu" src="textures/suveci.png" /> */}
            {/* <img id="sky" src="textures/sky.gif" /> */}
            <img id="sky1" src="textures/day.jpg" />
            <img id="sky2" src="textures/sunset1.jpg" />
            <img id="road" src="textures/road.png" />
            {/* <img id="sky" src="textures/entorno3.jpg" /> */}
            <a-asset-item id="mod" src="models/stan.glb"></a-asset-item>
            <a-asset-item id="env" src="models/Place.glb"></a-asset-item>
            <a-asset-item id="scene" src="models/scene.glb"></a-asset-item>
            <a-asset-item id="sof" src="models/sofa.glb"></a-asset-item>
            <a-asset-item id="chair" src="models/chair.glb"></a-asset-item>
            <a-asset-item id="aloe" src="models/aloe.glb"></a-asset-item>
            <a-asset-item id="screen" src="models/pantalla1.glb"></a-asset-item>
            <a-asset-item id="pino" src="models/pino.glb"></a-asset-item>
            <video id="video2" autoPlay={true} loop={true} src="textures/Star1.mp4"/>
            <video id="video1" autoPlay={true} loop={true} src="textures/Footage.mp4"/>
            <img id="Pause" src="textures/play-button.png"/>
            <img id="Play" src="textures/pause.png"/>
            <img id="usuario1" src="textures/Usuario1.jpg" />
            <a-asset-item id="t_dulce" src="textos/dulce.glb"></a-asset-item>
            <a-asset-item id="t_jrtec" src="textos/jrtec.glb"></a-asset-item>
            <a-asset-item id="t_tech" src="textos/tech.glb"></a-asset-item>
            <a-asset-item id="t_ques" src="textos/ques.glb"></a-asset-item>
            <a-asset-item id="t_suveci" src="textos/suveci.glb"></a-asset-item>
          </a-assets>

          <a-entity 
            raycaster="far: 22; objects: .clickable; interval: 200"
            cursor="rayOrigin: mouse"/>

          <a-sound id="sound1" src="textures/Mall.ogg" autoplay="true" loop="true" ></a-sound>


          <a-gltf-model
            id='Sofa'
            src="#sof"
            scale="7 7 7"
            position="-33 0 14.621"
            rotation="0 90 0"/>

          <a-gltf-model
            id="scree"
            src="#screen"
            scale="0.01 0.007 0.01"
            position="14.5 0 -51"
            rotation="0 -110 0">
          <a-entity position="187 1518 11." scale="900 500 100" rotation="0 90 0">
            <a-video src="#video2"/>
          </a-entity>

            </a-gltf-model>

          <a-gltf-model
            id="scree1"
            src="#screen"
            scale="0.01 0.007 0.01"
            position="-30 0 -13"
            rotation="0 -70 0">
          <a-entity position="187 1518 11." scale="900 500 100" rotation="0 90 0">
            <a-video src="#video1"/>
          </a-entity>


            </a-gltf-model>

          <a-gltf-model
            id="tree"
            src="#pino"
            scale="0.03 0.03 0.03"
            position="-42.5 0 24.701"
            rotation="0 0 0"/>
          
          <a-gltf-model
            src="#pino"
            scale="0.03 0.03 0.03"
            position="-26.5 0  26"
            rotation="0 0 0"/>

          <a-gltf-model
            id="tree2"
            src="#pino"
            scale="0.03 0.03 0.03"
            position="34 0 26"
            rotation="0 0 0"/>

          <a-gltf-model
            id="stan1"
            src="#mod"
            scale="0.2 0.07 0.1"
            position="28 0 -3"
            rotation="0 -90 0">
            
            <a-image
              src="#usuario1"
              width="70"
              height="120"
              position="0 130 -30"/>

            <a-image
              src="#logojr"
              width="50"
              height="50"
              position="0 37.857 18.1"/>

            <a-gltf-model 
              src="#t_tech" 
              scale="7.5 10 30"
              position="-5 194 -15"
              rotation ="90 180 180"/>

            <Entity
              geometry="primitive: plane; width: 12; height:2"
              material="color:#0a0082"
              position={{ x: -0.023, y: 187.13, z: -15.5 }}
              scale="6 10 0"/>

            <a-entity position="7 111 -30" scale="30 50 50" rotation="0 0 -2">
            <a-image src="#logojr" position="0 0 0.02" scale="0.5 0.3 0.3"></a-image>
            <a-link href="#" backgroundColor="white" borderColor="red" onClick={ () => this.jrtecpag("https://www.jrtec.io/") } scale="0.05 0.09 0.05" title="  "/>
          </a-entity>
 
          </a-gltf-model>

          <a-gltf-model
            id="stan2"
            src="#mod"
            scale="0.2 0.07 0.1"
            position="-32 0 -3"
            rotation="0 90 0">

            <a-image
              src="#logopu"
              width="70"
              height="70"
              position="0 37.857 18.5"/>

            <a-gltf-model 
              src="#t_ques" 
              scale="10 10 25" 
              rotation ="90 180 180"
              position="-28.5 183 -15"/>

            <Entity
              geometry="primitive: plane; width: 12; height:2"
              material="color:#99ffcc"
              position={{ x: -0.355, y: 187.13, z: -15.7 }}
              scale="6 10 0"/>
          </a-gltf-model>

          <a-gltf-model
            id="stan3"
            src="#mod"
            scale="0.2 0.07 0.1"
            position="28 0 -52.7"
            rotation="0 -35 0"/>

          <a-gltf-model
            id="stan4"
            src="#mod"
            scale="0.2 0.07 0.1"
            position="-17 0 -50.5"
            rotation="0 35 0">

            <a-image
              src="#postres"
              width="70"
              height="60"
              position="0 37.857 18.6"/>
            {/* <a-image
              src="#logoend"
              width="20"
              height="20"
              position="23.306 191 -16"
            ></a-image> */}

            <a-gltf-model
              src="#t_dulce" 
              scale="12 10 30" 
              rotation ="90 180 180"
              position="-22 183 -15" />

            <Entity
              geometry="primitive: plane; width: 11; height:2"
              material="color: #fbc2c3"
              position={{ x: -0.355, y: 187.13, z: -15.6 }}
              scale="6 10 0"/>
          </a-gltf-model>

          <a-gltf-model
            id="stan5"
            src="#mod"
            scale="0.2 0.07 0.1"
            position="28 0 13"
            rotation="0 -90 0"/>
          
          <a-gltf-model
            id="env"
            src="#env"
            scale="0.18 0.07 0.1"
            position="4.455 0 -73"
            rotation="0 0 0"/>

          <a-gltf-model
            id="scene"
            src="#scene"
            scale="0.15 0.15 0.15"
            position="-38 0 -12"
            rotation="-90 0 0"/>

          <a-box src="#road" position="25.708 6.102 0"/>

          <a-sky src={this.state.Sky} radius="120" height="2048" theta-length="90" phi-start='-180' 
          position="0 0 -28"/>

          <a-plane
            id="street"
            position="-1 0.5 60.7"
            rotation="-90 0 0"
            scale="15 2.50"
            width="15"
            height="25"
            src="#road"/>
            {/*  material="envMap: #road; roughness: 0" */}

          <a-sphere position="-30.744 7 -5" radius="1.25" color="#EF2D5E" />

          <a-cylinder
            position="25 6.476 -3"
            radius="0.5"
            height="1.5"
            color="#FFC65D"/>

          {/* <a-plane
            // position="0 0 -4"
            rotation="-90 0 0"
            width="60"
            height="60"
            src="#ground"/> */}

          <a-entity id="light" light="type: ambient; color: #BBB"/>

          {/* <a-entity
            id="light_d1 "
            light="type: directional; color: #FFF; intensity: 0.3"
            // position="0.785 25.980 37.732"
            position="-2.058 16.721 47.461"
          /> */}

          <a-entity
            id="light_d"
            light="type: directional; color: #FFF; intensity: 0.3"
            position="0 20.623 0"/>

          {/*<Entity
            primitive="a-camera"
            adAxis="x"
            look-controls=""
            wasd-controls="acceleration:400"
            position={{ x: 0, y: 8, z: 22 }}
            rotation={{ x: 0, y: rotate, z: 0 }}/>}
            {/* rotation={{ x: 0, y: 0, z: 0 }}*/}

          <a-camera wasd-controls="acceleration:400" position="-5 8 30"/>
        
        </a-scene>

        <div style={{position: "absolute"}}>
          <button onClick={ () => this.handleClick() }>Change Sky</button>
          <button onClick={ () => this.stop() }>Play/Stop Sound</button>
        </div>
      </div>
    );
  }
}

export default App;
