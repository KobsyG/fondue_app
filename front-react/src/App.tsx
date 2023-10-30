import './App.css';
import { Parallax, } from 'react-scroll-parallax';
import { useState, useRef, useEffect } from 'react';

const Backg = () => {
  return (
    <div className="absolute w-full h-full z-0">
      <div className='w-full h-96 bg-gray-400' />
      <div className='w-full h-96 bg-gray-100' />
      <div className='w-full h-96 bg-gray-400' />
      <div className='w-full h-96 bg-gray-100' />
      <div className='w-full h-96 bg-gray-400' />
      <div className='w-full h-96 bg-gray-100' />
      <div className='w-full h-96 bg-gray-400' />
      <div className='w-full h-96 bg-gray-100' />
    </div>
  )
}

function App() {
  const [targetElement, setTarget] = useState<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setTarget(targetRef.current);
  }, [targetRef]);
  return (
    <div className='w-full h-large-page bg-fondue-yellow justify-center items-center'>
      <Backg />
      <div ref={targetRef} className="absolute top-0 left-1/2 mt-[100vh] h-[900px] w-20 bg-fondue-red" />
      {targetElement && (
        <Parallax
          translateY={['100vh', '250vh']}
          targetElement={targetElement}
          className='mt-50 ml-12 h-48 w-48 bg-fondue-blue'
        />
      )}
    </div>
  )
}

export default App;
