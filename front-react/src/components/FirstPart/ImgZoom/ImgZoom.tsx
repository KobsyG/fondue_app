import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const ImgZoom = () => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    let wrap = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [])

    const hidden = async () => {
        gsap.to(wrap.current, { visibility: "hidden" });
        await new Promise(resolve => setTimeout(resolve, 500));
        gsap.to(wrap.current, { visibility: "visible" });
    };


    function handleResize() {       
        // hidden(); // a revoir
        setInnerWidth(window.innerWidth);

    }

    useEffect(() => {

        console.log("CREATE ANIM");
        const animation = gsap.fromTo(".photo-wrap-contain",
            {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            },
            {
                scrollTrigger: {
                    trigger: ".container-1st-part",
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
                clipPath: 'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)',
            })

        const animation2 = gsap.fromTo(".photo-wrap",
            {
                css: {
                    width: '100vw',
                    height: '100vh',
                    maxWidth: '100vw',
                }
            },
            {
                scrollTrigger: {
                    trigger: ".container-1st-part",
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
                css: {
                    // maxWidth: '600px',
                    // minWidth: '600px',
                    width: '600px',
                    height: "90vh",
                    // top: '5vh',
                    // bottom: '5vh',
                }
            })

        return () => {
            if (animation) {
                console.log('DELETE ANIM')
                animation.kill();
                animation2.kill();
            }
        };

    }, [innerWidth]);

    return (
        <div className='photo-wrap-contain h-[100vh] w-[100vw] sticky top-0 flex items-center justify-center'>
            {/* <div ref={wrap} className='photo-wrap bg-red-500'> */}
                {/* <img className='object-cover w-full h-full' src={require("./photo-test.webp")} /> */}
            {/* </div> */}
        </div>
    )
}

export default ImgZoom