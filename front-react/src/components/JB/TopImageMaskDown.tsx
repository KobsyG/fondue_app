import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MIB from '../../images/portrait_of_black_man.jpg';

function TopImageMaskDown() {
    const [scaleRatio, setScaleRatio] = useState(window.innerWidth);

    gsap.registerPlugin(ScrollTrigger);

    function handleResize() {
        const cadreElement = document.querySelector('.cadre-img')
        if (cadreElement) {
            const cadreWidth = cadreElement.clientWidth;
            const viewportWidth = window.innerWidth;
            const scaleRatio = viewportWidth / cadreWidth;
            console.log('SCALE RATIO CHANGE: ', scaleRatio)
            setScaleRatio(scaleRatio);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [])

    useEffect(() => {
        handleResize();
        const animation = gsap.fromTo('.cadre-img',
            {
                scale: scaleRatio,
                maxWidth: '100%',
            }, {
            scrollTrigger: {
                trigger: '.grande-fen',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
            scale: 1,
            maxWidth: '600px',

        })

        const animation2 = gsap.fromTo('.mask',
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }, {
            scrollTrigger: {
                trigger: '.grande-fen',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
            clipPath: 'polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)',
        });

        return () => {
            console.log('DELETE ANIM')
            if (animation) {
                animation.kill();
            }
            if (animation2) {
                animation2.kill();
            }
        };
    }, [scaleRatio]);

    return (
        <div className='grande-fen w-full h-[200vh] bg-fondue-yellow'>
            {/* <div className='absolute top-0 w-full h-[100vh] bg-orange-200' /> */}
            {/* <div className='absolute top-[100vh] w-full h-[100vh] bg-fondue-yellow' /> */}
            <div className='mask sticky top-0 w-full h-[100vh] overflow-hidden flex items-center justify-center'>
                <div className='cadre-img min-w-600 w-[600px] h-[80vh] bg-fondue-red overflow-hidden flex items-center justify-center'>
                    <img src={MIB} className='mib object-cover w-full' />
                </div>
            </div>
        </div>
    );
}

export default TopImageMaskDown