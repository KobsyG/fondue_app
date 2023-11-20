import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css';
import TopImageMaskDown from './components/JB/TopImageMaskDown';
import FallingCheese from './components/JB/FallingCheese';
import MaskUpScaleDown from './components/JB/MaskUpScaleDown';
import FirstPart from './components/Kobe/FirstPart/FirstPart';
import LaBelleHistoire from './components/JB/LaBelleHistoire';
import CloudCheese from './components/JB/CloudCheese';
import Terroir from './components/Kobe/Terroir/Terroir';
import Actuel from './components/Kobe/Actuel/Actuel';
import Histoire from './components/Histoire';
import TerroirWIP from './components/Kobe/Actuel/TerroirWIP';

function App() {

  return (
    <ReactLenis root>

      <Histoire />
      <TerroirWIP />

    </ReactLenis>
  )
}

export default App;