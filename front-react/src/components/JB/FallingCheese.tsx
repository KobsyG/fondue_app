import { useEffect } from 'react'
// import pacman from '../../images/pacman.jpg';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function FallingCheese() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    const animation = gsap.fromTo('.cheese1',
      {
        y: '0',
      },
      {
        scrollTrigger: {
          trigger: '.cheese1',
          start: 'top 70%',
          endTrigger: '.divCheese1',
          end: 'bottom 10%',
          markers: true,
          scrub: true,
        },
        y: '100vh',
        rotate: 90,
        ease: 'none'
      })

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div>
      <div className='h-[110vh] w-full bg-slate-300' />
      <div className='w-full h-[800vh] bg-slate-300'>
        <div className='divCheese1 w-full h-[70vh] bg-slate-600'>
          {/* <img src={} className='cheese1 h-48 w-48 mx-auto' /> */}
        </div>
      </div>
    </div >
  )
}

export default FallingCheese