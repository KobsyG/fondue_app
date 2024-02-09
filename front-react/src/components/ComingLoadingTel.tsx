import { useLayoutEffect, useRef, useState } from 'react'
import ComingTel from './ComingTel'
import { Progress } from '@material-tailwind/react'
import './Coming.css'
import gsap from 'gsap'

const logo = require('../images/FFP/logo.png')

function Loading({ progress, setProgress }: { progress: number, setProgress: any }) {
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress: number) => {
  //       const newProgress = prevProgress + 2;
  //       if (newProgress >= 100) {
  //         clearInterval(timer);
  //         return 100;
  //       }
  //       return newProgress;
  //     });
  //   }, 40);
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className='loadingPage fixed top-0 z-[1020] h-[100vh] w-[100vw] bg-fondue-blue flex items-center justify-center'>
      <div className='h-fit w-[80%]'>
        <img src={logo} className='w-full mb-4' alt='logo fonduecoeur' />
        <Progress
          value={progress}
          variant='filled'
          className='w-full rounded-none bg-fondue-blue papa'
        />
      </div>
    </div>
  )
}

function ComingLoadingTel() {
  const [progress, setProgress] = useState(0);
  const [loadingDisplay, setLoadingDisplay] = useState(true);
  const loadingContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (progress >= 100) {

        gsap.fromTo('.loadingPage', {
          clipPath: 'circle(100%)'
        }, {
          duration: 0.5,
          clipPath: 'circle(0%)',
          onComplete: () => { setLoadingDisplay(false) }
        });
      }
    }, loadingContainer)

    return () => {
      ctx.revert();
    };

  }, [progress]);

  return (
    <div ref={loadingContainer} className='loadingContainer'>
      {loadingDisplay &&
        <Loading progress={progress} setProgress={setProgress} />
      }
      <ComingTel loadingDisplay={loadingDisplay} setProgress={setProgress} />
    </div>
  )

}

export default ComingLoadingTel