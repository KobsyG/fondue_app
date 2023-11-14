import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css';
import TopImageMaskDown from './components/JB/TopImageMaskDown';
import FallingCheese from './components/JB/FallingCheese';
import MaskUpScaleDown from './components/JB/MaskUpScaleDown';
import FirstPart from './components/Kobe/FirstPart/FirstPart';
import LaBelleHistoire from './components/JB/LaBelleHistoire';
import CloudCheese from './components/JB/CloudCheese';
import Effect1 from './components/JB/Effect1';

//fonts
// import './fonts/AvocadoCake.otf';
import Terroir from './components/Kobe/Terroir/Terroir';
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