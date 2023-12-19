import { useState, useRef, useLayoutEffect } from "react";
import SoundButton from './SoundButton.tsx'
import gsap from "gsap";
import '../../styles/soundButton.css';

function VideoTest() {
  const [videoswitch, setVideoSwitch] = useState(true);
  const [audioswitch, setAudioSwitch] = useState(true);
  const myvideo = useRef(null);
  const videoContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!videoswitch) {
        const tl = gsap.timeline();

        tl.fromTo('.entryVid', {
          clipPath: 'circle(100%)'
        }, {
          duration: 0.8,
          clipPath: 'circle(0%)',
        }, 0);

      }
    }, videoContainer)

    return () => {
      ctx.revert();
    };

  }, [videoswitch]);

  const closeVideo = () => {
    setVideoSwitch(false);
    myvideo.current.pause();
  };

  const handleAudio = () => {
    setAudioSwitch(!audioswitch);
  };

  return (
    <div ref={videoContainer}>

      {
        videoswitch &&
        <>
          <div className="entryVid absolute top-0 left-0 h-[100vh] w-[100vw] bg-black">
            <video
              ref={myvideo}
              src={require('../../images/entry.mp4')}
              type="video/mp4"
              autoPlay={true}
              muted={audioswitch}
              className='h-full w-full'
              onEnded={closeVideo}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <button
            onClick={closeVideo}
            className="animate-bounce group absolute bottom-5 right-5 h-16 w-32 flex justify-center items-center"
          >
            <div className="h-full w-full bg-fondue-red rounded-xl shadow-2xl transform group-hover:scale-x-110 group-hover:scale-y-105 transition duration-300 ease-out">
            </div>
            <p style={{ fontFamily: 'OccamsEraser' }} className='absolute w-full z-10 text-[20px] text-white'>
              Je suis pressé !
            </p>
          </button>
        </>
      }

      <SoundButton />

      <button
        className="absolute bg-white p-4 rounded-full top-0 left-36"
        onClick={handleAudio}>
        {audioswitch ? "Turn on audio" : "Turn off audio"}
      </button>

      <div className="h-[100vh] w-[100vw] bg-orange-500" />
    </div>
  );
}

export default VideoTest;
