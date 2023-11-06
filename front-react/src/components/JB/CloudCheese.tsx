import { useEffect } from 'react';
import cubeCheese from '../../images/cheese1.svg'
import triangleCheese2 from '../../images/cheese2.svg'
import gsap from 'gsap'

function CloudCheese({classAdd}: {classAdd: string}) {

  useEffect(() => {

    const cheeseDistance1 = gsap.fromTo('.cheeseDistance1', {
      xPercent: 100,
      opacity: 1,
    }, {
      xPercent: -20,
      delay: 2,
      duration: 6,
      ease: 'none',
      repeat: -1,
    })

    const cheeseDistance2 = gsap.fromTo('.cheeseDistance2', {
      xPercent: 100,
      opacity: 0.7,
    }, {
      xPercent: -20,
      duration: 7,
      ease: 'none',
      repeat: -1,
    })

    const cheeseDistance3 = gsap.fromTo('.cheeseDistance3', {
      xPercent: 100,
      opacity: 0.6,
    }, {
      xPercent: -20,
      delay: 3,
      duration: 7,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      if (cheeseDistance1) {
        cheeseDistance1.kill();
      }
      if (cheeseDistance2) {
        cheeseDistance2.kill();
      }
      if (cheeseDistance3) {
        cheeseDistance3.kill();
      }
    };
  }, []);

  return (
    <div className={`absolute z-20 ${classAdd} w-[100vw] h-[100vh]`}>
      <div className='absolute cheeseDistance1 mt-[50vh] w-full flex items-center'>
        <img src={cubeCheese} className='w-[30%] aspect-[1/1]' />
      </div>
      <div className='absolute cheeseDistance2 mt-[10vh] w-full flex items-center'>
        <img src={cubeCheese} className='w-[25%] aspect-[1/1]' />
      </div>
      <div className='absolute cheeseDistance3 mt-[15vh] w-full flex items-center'>
        <img src={cubeCheese} className='w-[20%] aspect-[1/1]' />
      </div>
    </div>
  )
}

export default CloudCheese