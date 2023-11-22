import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
const couleeTel = require("../images/coulee-telephone.png")
const couleePc = require("../images/coulee-ordi.png")
const goutte2 = require("../images/goutte2.png")

const Waiting = () => {

    const [isClickedMenu, setIsClickedMenu] = useState(false);

    function handleMenuCLick() {
        setIsClickedMenu(!isClickedMenu);
    }

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            gsap.to(".goutte-container", {
                yPercent: 100,
                ease: 'power3.in',
                duration: 1,
                delay: 2,
                repeat: -1,
                repeatDelay: 6,
            })

            const waveTl = gsap.timeline();

            waveTl.fromTo('.middle-wave',
                {
                    xPercent: -10,
                },
                {
                    xPercent: 10,
                    yoyo: true,
                    repeat: -1,
                    duration: 3,
                }
            )

        })

        return () => ctx.revert();
    }, [])

    // useEffect(() => {
    //     menuRef.current
    // }, [isClickedMenu])

    return (
        <div className='waiting-container relative overflow-hidden w-full h-[100vh] bg-fondue-blue'>

            <div className='coulee'>
                <picture>
                    <source
                        media='(max-width: 1024px)'
                        srcSet={couleeTel}
                    />
                    <source
                        media='(min-width: 1025px)'
                        srcSet={couleePc}
                    />
                    <img src={couleePc} />
                </picture>

            </div>

            <div className='goutte-container absolute top-0 h-[100vh] w-[100vw]'>
                <img src={goutte2} className='w-full' />
            </div>

            <div className='waves-container absolute h-[30vh] w-full bottom-0 bg-fondue-yellow'>
                <div className='h-[20vh] w-[10vw] bottom-0 bg-red-800 mx-auto' />
                <div className='middle-wave absolute h-[20vh] w-full bottom-0 bg-yellow-300'>
                    <div className='h-[20vh] w-[10vw] bottom-0 bg-red-500 mx-auto' />
                </div>
                <div className='bottom-wave absolute h-[10vh] w-full bottom-0 bg-yellow-200'>
                    <div className='h-[20vh] w-[10vw] bottom-0 bg-red-300 mx-auto' />
                </div>

            </div>

            <button className='buy-button absolute top-2 right-20 h-10 w-10 bg-black' />
            <button className='menu-button absolute top-2 right-3 h-10 w-10 bg-black' onClick={handleMenuCLick} />
            {/* <div style={{visibility: isClickedMenu ? 'visible' : 'hidden',
            opacity: isClickedMenu ? 1 : 0,
            transition: '1s'}} className='menu absolute w-40 top-12 right-0 bg-red-500'> */}
            {/* <div style={{height: isClickedMenu ? 80 : 0, transition: '2s'}} 
            className='menu absolute w-40 top-12 right-0 overflow-hidden bg-red-500'> */}
            <div style={{clipPath: isClickedMenu ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' :  'polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)',
            transition: '2s'}} 
            className='menu absolute w-40 top-12 right-0 overflow-hidden bg-red-500'>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Contact</li>
                </ul>
            </div>

        </div>
    )
}

export default Waiting