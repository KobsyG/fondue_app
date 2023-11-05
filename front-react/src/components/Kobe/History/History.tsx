import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Titre = "Il était une fois deux amis, partis bras dessus bras dessous pour conquérir un titre aussi inattendu que réjouissant..."
const HistoireFirst = "C’est ainsi que le 13 mars 2022, à Montréjeau, Alban et Jean-Jacques remportent le premier titre de Champion de France de Fondue aux Fromages devant 20 autres équipes candidates au titre. Ils innovent en proposant une recette à base des 5 AOP du Cantal ! Et quelques ingrédients secrets qui vont vous être dévoilés..."
const HistoireSecond = "Si bonne humeur et convivialité sont au rendez-vous, la performance n’en est pas moins sérieuse, en témoigne le jury de professionnels composé de Meilleurs Ouvriers de France fromagers et restaurateurs, et de critiques gastronomiques, venus spécialement pour déguster et départager LA meilleure fondue."

const History = () => {
    
    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        
        gsap.to(".wrapper-histoire-first", {
            xPercent: 200,
            scrollTrigger: {
                trigger: ".gros-contain",
                start: 'top top',
                end: 'center top',
                scrub: true,
                markers: true,
            },
        })

        gsap.to(".wrapper-histoire-second", {
            xPercent: -200,
            scrollTrigger: {
                trigger: ".gros-contain",
                start: 'top top',
                end: 'center top',
                scrub: true,
            }
        })


    })
  
  
  
    return (
    <div className='gros-contain sticky top-0 relative'>
        <div className='wrapper-titre h-[35vh] w-[20vw] relative top-[10vh] left-[5vw]'>
            <h1>{Titre}</h1>
        </div>
        <div className='wrapper-podium h-[35vh] w-[35vw] relative bot-[35vh] left-5[vw]'>
            <img src={require('./compere-podium.png')} />
        </div>
        <div className='wrapper-histoire-first h-[35vh] w-[20vw] absolute right-[20vw] top-[20vh]'>
            <p>{HistoireFirst}</p>
        </div>
        <div className='wrapper-histoire-second h-[35vh] w-[20vw] absolute left-[100%] top-[20vh]'>
            <p>{HistoireSecond}</p>
        </div>
    </div>
  )
}

export default History