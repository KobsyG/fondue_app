import { ReactLenis } from '@studio-freight/react-lenis'
import './App.css';
import Waiting from './components/Waiting';

function App() {

  return (
    <ReactLenis root>
        <Waiting/>
    </ReactLenis>
  )
}

export default App;