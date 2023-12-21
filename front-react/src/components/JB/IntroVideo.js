import { useState, useRef, useLayoutEffect } from "react";
import SoundButton from './SoundButton.tsx'
import gsap from "gsap";
import '../../styles/soundButton.css';

function IntroVideo({videoEnd, setVideoEnd}) {
  const [videoDisplay, setVideoDisplay] = useState(true);
  const [audioswitch, setAudioSwitch] = useState(true);
  const videoContainer = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      if (!videoDisplay) {

        gsap.fromTo('.entryVid', {
          clipPath: 'circle(100%)'
        }, {
          duration: 0.7,
          clipPath: 'circle(0%)',
          onComplete: () => { setVideoEnd(false) }
        });
      }

    }, videoContainer)

    return () => {
      ctx.revert();
    };

  }, [videoDisplay]);


  const handleAudio = () => {
    setAudioSwitch(!audioswitch);
  };

  let audioVol = document.getElementById("myaudio");
  if (audioVol) {
    audioVol.volume = 0.1;
  }

  return (
    <div ref={videoContainer}>
      {
        videoEnd &&
        <>
          <div className="entryVid absolute z-[1080] top-0 left-0 h-[100vh] w-[100vw] bg-black" >
            <video
              src={require('../../images/introVideo.mp4')}
              type="video/mp4"
              autoPlay={true}
              muted={true}
              className='h-full w-full'
              onEnded={() => { setVideoDisplay(false); }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <button
            onClick={() => { setVideoDisplay(false); }}
            className="skip-button animate-bounce group absolute z-[1090] bottom-5 right-5 h-16 w-32 flex justify-center items-center"
          >
            <div className="h-full w-full absolute bg-fondue-red rounded-xl shadow-2xl transform group-hover:scale-x-110 group-hover:scale-y-105 transition duration-300 ease-out">
            </div>
            <p style={{ fontFamily: 'OccamsEraser' }} className='absolute w-full z-10 text-[20px] text-white'>
              Je suis pressé !
            </p>
          </button>
          <SoundButton audioswitch={audioswitch} handleAudio={handleAudio} />
        </>
      }
      <audio
        id="myaudio"
        src={require('../../images/introAudio.mp3')}
        type="video/mp3"
        autoPlay={true}
        muted={audioswitch}
      >
      </audio>
    </div>
  );
}

export default IntroVideo;
