
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './App.css';

import Actuel from './components/Kobe/Actuel/Actuel';

function App() {

  return (

    <ReactLenis root>
      {/* <MaskUpScaleDown /> */}
      {/* <TopImageMaskDown /> */}
      {/* <LaBelleHistoire /> */}
      {/* <Effect1 /> */}
      {/* <CloudCheese /> */}
      <Actuel />
    </ReactLenis>


  )
}

export default App;