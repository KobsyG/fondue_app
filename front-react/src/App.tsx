
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './App.css';
import Histoire from './components/Histoire';
import Terroir from './components/Kobe/Actuel/Terroir';
import Coming from './components/Coming';

function App() {

  return (
    <ReactLenis root>
      <Coming />
    </ReactLenis>
  )
}

export default App;