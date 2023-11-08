import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css';
import TopImageMaskDown from './components/JB/TopImageMaskDown';
import FallingCheese from './components/JB/FallingCheese';
import MaskUpScaleDown from './components/JB/MaskUpScaleDown';
import FirstPart from './components/FirstPart/FirstPart';

function App() {

  return (
      <ReactLenis root>

      <FirstPart />
      {/* <TopImageMaskDown /> */}

      </ReactLenis>
  )
}

export default App;