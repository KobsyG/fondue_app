
import React, { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './App.css';
import Histoire from './components/Histoire';
import Terroir from './components/Kobe/Actuel/Terroir';
import Coming from './components/Coming';
import IntroVideo from './components/JB/IntroVideo.js';
import useWidth from './components/JB/useWidth';
import ComingLoadingTel from './components/ComingLoadingTel';

function App() {

  // const [videoEnd, setVideoEnd] = useState(true);
  const [videoEnd, setVideoEnd] = useState(false);
  const [videoDisplay, setVideoDisplay] = useState(true);

  const width = useWidth();

  return (
    <ReactLenis root>
      {width >= 1080 &&
        <>
          <Coming videoEnd={videoEnd} videoDisplay={videoDisplay}/>
          {/* <IntroVideo videoEnd={videoEnd} setVideoEnd={setVideoEnd} videoDisplay={videoDisplay} setVideoDisplay={setVideoDisplay} /> */}
        </>
      }
      {width < 1080 &&
        <ComingLoadingTel />
      }
    </ReactLenis>
  )
}

export default App;