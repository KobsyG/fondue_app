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
    // (
    // async () => {
    // const LocomotiveScroll = (await import('locomotive-scroll')).default;
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current ? scrollContainerRef.current : undefined,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
        breakpoint: 1024,
      },
    });
    // }
    // )()
  }, [scrollContainerRef]);
  return (
    <div ref={scrollContainerRef}>
      <LocoLoco />
    </div>
  )
}

export default App;
