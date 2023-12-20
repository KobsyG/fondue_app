
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './App.css';
import Histoire from './components/Histoire';
import Terroir from './components/Kobe/Actuel/Terroir';
import Coming from './components/Coming';
import VideoTest from './components/JB/VideoTest.js';
import ComingTel from './components/ComingTel';

function App() {

  const width = 800;
  return (
    <ReactLenis root>

      <ComingTel />
      {/* <VideoTest /> */}
    </ReactLenis>
  )
}

export default App;