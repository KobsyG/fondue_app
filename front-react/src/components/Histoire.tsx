import React, { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const compere = require("../images/comper.png")
const couleeTel = require("../images/coulee-telephone.png")
const couleePc = require("../images/coulee-ordi.png")

const title = "Il était une fois deux amis, partis bras dessus bras dessous pour conquérir un titre aussi inattendu que réjouissant..."
const histoireFirst = "C'est ainsi que le 13 mars 2022, à Montréjeau, Alban et Jean-Jacques remportent le premier titre de Champion de France de Fondue aux Fromages devant 20 autres équipes candidates au titre. Ils innovent en proposant une recette à base des 5 AOP du Cantal ! Et quelques ingrédients secrets qui vont vous être dévoilés..."
const histoireSecond = "Si bonne humeur et convivialité sont au rendez-vous, la performance n’en est pas moins sérieuse, en témoigne le jury de professionnels composé de Meilleurs Ouvriers de France fromagers et restaurateurs, et de critiques gastronomiques, venus spécialement pour déguster et départager LA meilleure fondue."

const Histoire = () => {

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {

        //----------------------------------------------------------------------------
        //-------------------------------- GSAP --------------------------------------
        //----------------------------------------------------------------------------


        let ctx = gsap.context(() => {

            gsap.to(".histoire", {
                scrollTrigger: {
                    trigger: ".histoire-container",
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: '.histoire',
                }
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".histoire-container",
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
            });

            tl.to(".hist1", {
                opacity: 0,
                duration: 1,
            }).to(".hist2", {
                opacity: 1,
                duration: 1,
            }).to(".hist2", {
                duration: 1,
            }).to(".hist2", {
                opacity: 0,
                duration: 1,
            }).to(".hist3", {
                opacity: 1,
                duration: 1,
            });


            gsap.to(".cheese-contain", {
                y: '170vh',
                ease: 'none',
                scrollTrigger: {
                    trigger: ".title",
                    start: 'top top',
                    endTrigger: '.histoire-container',
                    end: 'top top',
                    scrub: true,
                },
            })

            gsap.to(".main-container", {
                scrollTrigger: {
                    trigger: ".histoire-container",
                    start: 'top top',
                    end: 'top top',
                    scrub: true,
                },
                backgroundColor: '#FED88E',
                ease: "none",
            })

        })

        return () => ctx.revert();

    }, [])


    return (
        <>
            <div className='landing-container w-full bg-fondue-blue'>
                <div className='title w-[full] h-[100vh] flex justify-center items-center'>
                    <img className='w-[60%] sm:h-[40%] z-30 object-contain' src={require("../images/logo-bleu.png")} />
                </div>

                <div className='main-container w-[80%] mx-auto bg-fondue-blue'>

                    <div className='cheese-contain -top-[130vh] absolute z-10 w-[80%] right-[10%]'>
                        <div className='carree-cheese w-full h-[200vh] bg-fondue-yellow' />
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
                                <img src={couleeTel} />
                            </picture>
                        </div>
                    </div>

                    <div className='histoire-container w-full h-[400vh] '>
                        <div className='histoire z-20 w-full h-[100vh] flex flex-col lg:flex-row'>
                            <div className='compere w-full h-1/2 lg:h-full lg:w-1/2 p-[10%]'>
                                <img className='h-full w-full object-contain' src={compere} />
                            </div>
                            <div className='text mb-[20%] lg:mb-[0%] lg:right-[5%] relative w-full h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center'>
                                <p className='hist1 w-[80%] absolute text-center text-[18px] sm:text-[26px] 2xl:text-[36px] 3xl:text-[46px] 4xl:text-[56px]' style={{ fontFamily: 'AvocadoCake' }}>{title}</p>
                                <p className='hist2 w-[80%] absolute text-center text-[18px] sm:text-[26px] 2xl:text-[36px] 3xl:text-[46px] 4xl:text-[56px] 2xl:text-justify opacity-0' style={{ fontFamily: 'AvocadoCake' }}>{histoireFirst}</p>
                                <p className='hist3 w-[80%] absolute text-center text-[18px] sm:text-[26px] 2xl:text-[36px] 3xl:text-[46px] 4xl:text-[56px] 2xl:text-justify opacity-0' style={{ fontFamily: 'AvocadoCake' }}>{histoireSecond}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Histoire