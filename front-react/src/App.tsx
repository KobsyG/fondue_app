import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css';
import TopImageMaskDown from './components/JB/TopImageMaskDown';
import FallingCheese from './components/JB/FallingCheese';
import MaskUpScaleDown from './components/JB/MaskUpScaleDown';
import FirstPart from './components/FirstPart/FirstPart';
import LaBelleHistoire from './components/JB/LaBelleHistoire';
import CloudCheese from './components/JB/CloudCheese';

function App() {

  return (
      <ReactLenis root>

      <FirstPart />
      <LaBelleHistoire />

      </ReactLenis>
  )
}

export default App;