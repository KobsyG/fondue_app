import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css';
import TopImageMaskDown from './components/JB/TopImageMaskDown';
import FallingCheese from './components/JB/FallingCheese';
import MaskUpScaleDown from './components/JB/MaskUpScaleDown';
import LaBelleHistoire from './components/JB/LaBelleHistoire';
import CloudCheese from './components/JB/CloudCheese';

//fonts
// import './fonts/AvocadoCake.otf';

function App() {

  return (
      <ReactLenis root>

      {/* <MaskUpScaleDown /> */}
      <TopImageMaskDown />
      <LaBelleHistoire />
      {/* <CloudCheese /> */}

      </ReactLenis>
  )
}

export default App;