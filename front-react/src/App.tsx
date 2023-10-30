import React from 'react';
import './App.css';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import FirstImg from './components/FirstImg/FirstImg';
import Cascade from './components/FirstImg/cascade.png'
import Space from './components/FirstImg/banner-background.jpg'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';


const BG = () => {
  const background: BannerLayer = {
    children: (
      // <div className='absolute h-96 w-full bg-black'/>
      <div className="absolute h-96 inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    ),
    // image:'./components/FirstImg/banner-background.jpg',
    translateY: [50, 200],
    // translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    // shouldAlwaysCompleteAnimation: true,
  };
  return (
    <ParallaxBanner
      layers={[background]}
      className='aspect-[2/1]'
    />
  )
}

const Squre = () => {
  return (
    // <Parallax startScroll={50} endScroll={100}>
    <Parallax startScroll={50} endScroll={250} translateY={[-100, 100]}>
      <div className='h-48 w-48 bg-white' />
    </Parallax>
  )
}

function App() {
  return (
    <div className='w-full h-large-page bg-fondue-yellow'>
      {/* <BG /> */}
      <Squre/>   
    </div >
  );
}

export default App;
