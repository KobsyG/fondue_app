import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
// import FirstImg from './components/FirstImg/FirstImg';
import Cascade from './components/FirstImg/cascade.png'
import Space from './components/FirstImg/banner-background.jpg'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';
import { BannerLayer } from 'react-scroll-parallax/dist/components/ParallaxBanner/types';
import FirstImg from './components/FirstImg/FirstImg';


const BG = () => {
  const background: BannerLayer = {
    // children: (
    //   // <div className='absolute h-96 w-full bg-black'/>
    //   <div className="absolute h-96 inset-0 bg-gradient-to-t from-gray-900 to-blue-900" />
    // ),
    image: Space,
    translateY: [0, 100],
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
  const [Para, setPara] = useState(false);

  return (
    <>
    <Parallax className='test' translateY={[-100, 100]}
    disabled={Para}
    /* shouldAlwaysCompleteAnimation={true} */
    onProgressChange={(progress) => {
    console.log(progress);
    console.log(Para);
    if (progress > 0.5) {
      console.log("stop");
      setPara(true);
      // return (


        // <div className='h-48 w-48 bg-yellow-100' />
      // )
      console.log("para :", Para);
    }
    if (progress < 0.5)
      setPara(false);
    }}>
      <div className='h-48 w-48 bg-black'/>
      {/* <div className='h-48 w-48 bg-black' style={ Para == 0 ? {visibility: 'visible'} : {visibility: 'hidden'}} /> */}
    </Parallax>
    {/* <div className='h-48 w-48 bg-yellow-100' style={ Para != 0 ? {visibility: 'visible'} : {visibility: 'hidden'}} /> */}
    </>
  )
}

const Podium = () => {
  const ref = useParallax<HTMLImageElement>({ speed: 10});

  // return <div ref={ref.ref} />
  return (
      <div className='h-0'>
        <img ref={ref.ref} className='h-48 w-48' src={require("./components/FirstImg/Podium.png")} alt="firstimg" />
      </div>
  )
}

const Podium2 = () => {
  const ref = useParallax<HTMLImageElement>({ speed: 10});

  // return <div ref={ref.ref} />
  return (
      <div className='h-0'>
        <img ref={ref.ref} className=' h-48 w-48 ml-auto' src={require("./components/FirstImg/Podium.png")} alt="firstimg" />
      </div>
  )
}

function App() {
  return (
    <div className='w-full h-large-page bg-black'>
     {/* <div className='w-full h-large-page'> */}
      {/* <FirstImg /> */}
      {/* <div className='test h-96'>
        <img className='object-left h-48 w-48' src={require("./components/FirstImg/Podium.png")} alt="firstimg" />
      */}
      {/* <div className='test h-96'> */}
      {/* </div> */}
      {/* <div className='test h-96 hidden'></div>
      <div className='test h-96'></div>
    <div className='test h-96'></div> */}
      {/* <BG /> */}
      <div className='h-48 bg-red-50'></div>
      <div className='h-48 bg-red-100'></div>
      {/* <div className='md:inline-flex justify-center'> */}
      {/* <img className='w-48 h-48 mx-auto' src={require("./components/FirstImg/Podium.png")} alt="firstimg" /> */}
      {/* </div> */}
        < Podium />
        < Podium2 />
      {/* </div> */}
      <div className='h-48 bg-red-50'></div>
      <div className='h-48 bg-red-100'></div>
      <div className='h-48 bg-red-200'></div>
      <div className='h-48 bg-red-50'></div>
      <div className='h-48 bg-red-100'></div>
      <div className='h-48 bg-red-200'></div>
    <div className='h-48 bg-red-50'></div>
      {/* <div className='h-48 bg-red-100'></div>
      <div className='h-48 bg-red-200'></div> */}
      {/* <Squre/> */}
      {/* <div className='h-48 bg-red-300'></div>
      <div className='h-48 bg-red-400'></div>
      <div className='h-48 bg-red-500'></div> */}
    </div >
  );
}

export default App;
