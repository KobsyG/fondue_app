import gsap from 'gsap'
import React, { useLayoutEffect } from 'react'
const couleeTel = require("../images/coulee-telephone.png")
const couleePc = require("../images/coulee-ordi.png")
const goutte2 = require("../images/goutte2.png")
const smokeV1 = require("../images/smokeV1.png")
const smokeV2 = require("../images/smokeV2.png")

const Waiting = () => {

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {

            gsap.to(".goutte-container", {
                yPercent: 100,
                ease: 'power3.in',
                duration: 1,
                delay: 2,
                repeat: -1,
                repeatDelay: 1,
            })

            gsap.to('.smoke1', {
                yPercent: -200,
                x: 20,
                duration: 3.3,
                ease: 'power2.out',
                repeat: -1,
                // repeatDelay: 0.1,
                delay: 0.7,
            })

            gsap.to('.smoke2', {
                yPercent: -150,
                x: 15,
                duration: 2.6,
                ease: 'power2.out',
                repeat: -1,
                // repeatDelay: 0.1,
            })

            gsap.to('.smoke3', {
                yPercent: -170,
                x: -15,
                duration: 3.1,
                ease: 'power2.out',
                repeat: -1,
                // repeatDelay: 0.1,
                delay: 1.7,
            })

            gsap.to('.smoke4', {
                yPercent: -170,
                x: -25,
                duration: 3.7,
                ease: 'power2.out',
                repeat: -1,
                // repeatDelay: 0.1,
                delay: 2.4,
            })

            const opa1 = gsap.timeline({
                repeat: -1,
                delay: 0.7,
                repeatDelay: 1,
            })
            opa1.to(".smoke1", {
                opacity: 1,
                duration: 0.5,
            }).to(".smoke1", {
                opacity: 0,
                duration: 1.8,
            });

            const opa2 = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
            })
            opa2.to(".smoke2", {
                opacity: 1,
                duration: 1,
            }).to(".smoke2", {
                opacity: 0,
                duration: 1.6,
            });

            const opa3 = gsap.timeline({
                repeat: -1,
                delay: 1.7,
                repeatDelay: 0.6,
            })
            opa3.to(".smoke3", {
                opacity: 1,
                duration: 0.6,
            }).to(".smoke3", {
                opacity: 0,
                duration: 1.9,
            });

            const opa4 = gsap.timeline({
                repeat: -1,
                delay: 2.4,
                repeatDelay: 0.6,
            })
            opa4.to(".smoke4", {
                opacity: 1,
                duration: 0.6,
            }).to(".smoke4", {
                opacity: 0,
                duration: 2.8,
            });

        })

        return () => ctx.revert();
    }, [])


    return (
        <div className='waiting-container relative overflow-hidden w-full h-[100vh] bg-fondue-blue'>

            <div className='coulee'>
                <picture>
                    <source
                        media='(max-width: 800px)'
                        srcSet={couleeTel}
                    />
                    <source
                        media='(min-width: 801px)'
                        srcSet={couleePc}
                    />
                    <img src={couleePc} />
                </picture>
            </div>
            <div className='goutte-container absolute top-0 h-[100vh] w-[100vw]'>
                <img src={goutte2} className='w-full' />
            </div>
            <div className='smoke-container mx-auto mt-48 relative w-16' >
                <img src={smokeV1} className='smoke1 opacity-0 absolute w-full' />
                <img src={smokeV2} className='smoke2 opacity-0 absolute w-full' />
                <img src={smokeV2} className='smoke3 opacity-0 absolute w-full' />
                <img src={smokeV1} className='smoke4 opacity-0 absolute w-full' />
            </div>




        </div>
    )
}

export default Waiting