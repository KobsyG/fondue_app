import './App.css';
import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function LocoLoco() {
  return (
    <div className='h-large-page'>
      <div className='h-[50vh]' />
      <h1
        data-scroll data-scroll-speed="3"
        data-scroll-position="top">
        Locomotive Scroll in React
      </h1>
      <h2
        data-scroll
        data-scroll-speed="2"
        data-scroll-position="top"
        data-scroll-direction="horizontal"
      >
        Ima go sideways
      </h2>
    </div>
  )
}

function App() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current ? scrollContainerRef.current : undefined,
      smooth: true
    });
  }, [scrollContainerRef]);
  return (
    <div ref={scrollContainerRef}>
      <LocoLoco />
    </div>
  )
}

export default App;
