import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css';
import TopImageMaskDown from './components/JB/TopImageMaskDown';
import FallingCheese from './components/JB/FallingCheese';
import MaskUpScaleDown from './components/JB/MaskUpScaleDown';
import FirstPart from './components/Kobe/FirstPart/FirstPart';
import LaBelleHistoire from './components/JB/LaBelleHistoire';
import CloudCheese from './components/JB/CloudCheese';
import Terroir from './components/Kobe/Actuel/Terroir';
import Actuel from './components/Kobe/Actuel/Actuel';
import Histoire from './components/Histoire';
import TerroirWIP from './components/Kobe/Actuel/TerroirWIP';
import AudioComponent from './components/JB/AudioComponent';

function App() {

  return (
    <ReactLenis root>
      {/* <AudioComponent> */}

      <Histoire />
      {/* <TerroirWIP /> */}
      <Terroir />
      {/* </AudioComponent> */}
    </ReactLenis>
  )
}

export default App;