
import React, { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './App.css';
// import Histoire from './components/Histoire';
// import Terroir from './components/Kobe/Actuel/Terroir';
import Coming from './components/Coming';
import IntroVideo from './components/JB/IntroVideo.js';
import useWidth from './components/JB/useWidth';
import ComingLoadingTel from './components/ComingLoadingTel';
import Mono from './components/Mono';
import Histoire from './components/Histoire';
import FourniComponent from './components/FourniComponent';
import Waiting from './components/Waiting';
import CheeseWindow from './components/CheeseWindow';
import FirstPart from './components/Kobe/FirstPart/FirstPart';
import SecondPart from './components/Kobe/SecondPart/SecondPart';
import Terroir from './components/Kobe/Actuel/Terroir';
import Actuel from './components/Kobe/Actuel/Actuel';
import TerroirWIP from './components/Kobe/Actuel/TerroirWIP';
import Product from './components/Kobe/Actuel/Product';
import NavDemo from './components/Kobe/Demo/NavDemo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [videoEnd, setVideoEnd] = useState(true);
  // const [videoEnd, setVideoEnd] = useState(false);
  const [videoDisplay, setVideoDisplay] = useState(true);

  const width = useWidth();

  return (
    <ReactLenis root>
      <NavDemo />

      
          {/* {width >= 1080 &&
        <>
          <Coming videoEnd={videoEnd} videoDisplay={videoDisplay} />
          <IntroVideo videoEnd={videoEnd} setVideoEnd={setVideoEnd} videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay} />
        </>
      }
      {width < 1080 &&
        <ComingLoadingTel />
      } */}


          {/* <FirstPart />
      <SecondPart /> */}


          {/* <Histoire />
          <Terroir /> */}
          {/* <TerroirWIP /> */}

          {/* <Actuel /> */}


          {/* <Waiting /> */}
          {/* <Mono /> */}
    </ReactLenis>
  )
}

export default App;