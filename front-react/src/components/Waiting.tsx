import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const couleeTel = require("../images/new/Coulée_pc.png")
const couleePc = require("../images/new/Coulée_pc.png")
const bigWave = require("../images/new/Grosse_vague_pc.png")
const middleWave = require("../images/new/Moyenne_vague_pc.png")
const smallWave = require("../images/new/Petite_vague_pc.png")
const texte = require("../images/new/Texte_pc.png")
const goutte1 = require("../images/new/Goutte1pc.png")
const goutte2 = require("../images/new/Goutte2pc.png")
const goutte3 = require("../images/new/Goutte3pc.png")
const goutte4 = require("../images/new/Goutte4pc.png")
const goutte5 = require("../images/new/Goutte5pc.png")
const goutte6 = require("../images/new/Goutte6pc.png")

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
                    x: '-10vw',
                },
                {
                    x: '10vw',
                    yoyo: true,
                    repeat: -1,
                    duration: 3,
                    ease: 'none',
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

            <div className='coulee relative'>
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
                <div className='goutte1'>
                    <img src={goutte1} className='w-full' />
                </div>
                <div className='goutte2'>
                    <img src={goutte2} className='w-full' />
                </div>
                <div className='goutte3'>
                    <img src={goutte3} className='w-full' />
                </div>
                <div className='goutte4'>
                    <img src={goutte4} className='w-full' />
                </div>
                <div className='goutte5'>
                    <img src={goutte5} className='w-full' />
                </div>
                <div className='goutte6'>
                    <img src={goutte6} className='w-full' />
                </div>
            </div>

            <div className='text relative' >
                <img src={texte} />
            </div>

            <div className='waves-container absolute w-full bottom-0 flex justify-center' >

                <div className='big-wave absolute w-[120vw] bottom-0' >
                    <img src={bigWave} className='' />
                </div>

                <div className='middle-wave absolute w-[120vw] bottom-0' >
                    <img src={middleWave} className='' />
                </div>

                <div className='bottom-wave absolute w-[120vw] bottom-0' >
                    <img src={smallWave} className='' />
                </div>

            </div>

            <button className='buy-button absolute top-2 right-20 h-10 w-10'>
                <img src={require('../images/new/Logo_panier.png')} />
            </button>

            <button className='menu-button absolute top-2 right-3 h-10 w-10' onClick={handleMenuCLick} >
                <img src={require('../images/new/Logo_menu.png')} />
            </button>

            {/* <div style={{visibility: isClickedMenu ? 'visible' : 'hidden',
            opacity: isClickedMenu ? 1 : 0,
            transition: '1s'}} className='menu absolute w-40 top-12 right-0 bg-red-500'> */}
            {/* <div style={{height: isClickedMenu ? 80 : 0, transition: '2s'}} 
            className='menu absolute w-40 top-12 right-0 overflow-hidden bg-red-500'> */}
            <div style={{
                clipPath: isClickedMenu ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%)',
                transition: '2s'
            }}
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