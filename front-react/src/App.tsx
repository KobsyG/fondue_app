
import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import './App.css';
import Histoire from './components/Histoire';
import Terroir from './components/Kobe/Actuel/Terroir';

function App() {

  return (
    <ReactLenis root>
      <Histoire />
      <Terroir />
    </ReactLenis>
  )
}

export default App;