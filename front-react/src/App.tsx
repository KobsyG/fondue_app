import { ReactLenis } from '@studio-freight/react-lenis'
import FirstPart from './components/FirstPart/FirstPart';
import './App.css';
import SecondPart from './components/SecondPart/SecondPart';

function App() {

  return (
      <ReactLenis root>

        <FirstPart />
        <SecondPart />

      </ReactLenis>
  )
}

export default App;