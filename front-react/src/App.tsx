
import React, { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './App.css';
import Histoire from './components/Histoire';
import Terroir from './components/Kobe/Actuel/Terroir';
import Coming from './components/Coming';
import IntroVideo from './components/JB/IntroVideo.js';
import ComingTel from './components/ComingTel';
import useWidth from './components/JB/useWidth';

function App() {

  const width = useWidth();

  return (
    <ReactLenis root>
      {width >= 1080 &&
        <>
          <Coming />
          <IntroVideo />
        </>
      }
      {width < 1080 &&
        <ComingTel />
      }
      {/* <ComingTel /> */}

    </ReactLenis>
  )
}

export default App;