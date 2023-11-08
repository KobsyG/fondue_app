import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ImgZoom = () => {

    let wrap = useRef(null)
    let container = useRef(null)

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            gsap.fromTo(".photo-wrap-contain",
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

            gsap.fromTo(".photo-wrap",
                {
                    css: {
                        width: '100vw',
                        height: '100vh',
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
                        width: '50vw',
                        height: "90vh",
                    }
                })
        }, container)

        return () => ctx.revert();

    }, []);

    return (
        <div ref={container}>
            <div className='photo-wrap-contain h-[100vh] w-[100vw] sticky top-0 flex items-center justify-center'>
                <div ref={wrap} className='photo-wrap bg-red-500 min-w-[600px]'>
                    <img className='object-cover w-full h-full' src={require("../../images/cheese-kitchen.jpg")} />
                </div>
            </div>
        </div>
    )
}

export default ImgZoom