import React from 'react'
import '../../styles/Terroir.css'

const montagnegentiane = require("../../images/montagne-gentiane.jpg");
const pagelivret = require("../../images/page-livret.png");

const Terroir = () => {
    return (
        <div>
            <div className='terroir-wrap w-full h-[290vh] relative rounded-tr-[4rem]'>

                <div className='montagne-wrap w-full h-[100vh] sticky top-0'>
                    <img className='object-cover w-full h-full rounded-tr-[4rem]' src={montagnegentiane} />
                </div>
                
                <div className='title-wrap h-[90vh] sticky w-[80vw] top-[10vh]'>
                    <h1>Une Fondue Ambassadrisse</h1>
                    {/* <h1>UNE FONDUE AMBASSADRISSE</h1> */}
                </div>

                
                <div className='livret h-[100vh] w-full relative top-0'>
                    <img className='object-contain absolute h-[100vh] right-0 rounded-tr-[4rem]' src={pagelivret} />
                </div>

            </div>
            <div className='h-[200vh]' />
        </div>
    )
}

export default Terroir