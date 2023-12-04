import React from 'react'
import gentiane from '../../images/3H8A9855-J.Couty_web.jpg'
import paysage from '../../images/beautiful-shot-mountains-trees-covered-snow-fog.jpg'

function Effect1() {
    return (
        <div className='h-[200vh] w-full bg-fondue-red'>
            <img src={gentiane} className='w-full object-cover' />
            {/* <div className='h-96 w-full bg-fondue-red' /> */}
           {/* <Actuel />  */}
           <div style={{ borderTopRightRadius: "50%", borderTopLeftRadius: "50%" }} className='rounded w-full h-[100vh] relative bg-red-300' />

            <div className='relative h-[100vh] w-full overflow-hidden'>
                <img src={paysage} className='w-full object-cover' />
                <svg className='absolute z-10 w-full h-full object-cover' viewBox="0 0 892 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M892 0H0V700H892V0ZM113.317 94C138.863 94 162.156 118.533 179.754 158.841C197.351 118.533 220.644 94 246.19 94C271.736 94 295.029 118.533 312.627 158.842C330.224 118.533 353.517 94 379.063 94C404.609 94 427.902 118.533 445.5 158.842C463.098 118.533 486.391 94 511.936 94C537.482 94 560.775 118.533 578.373 158.842C595.971 118.533 619.264 94 644.809 94C670.355 94 693.648 118.533 711.246 158.842C728.844 118.533 752.137 94 777.682 94C832.534 94 876.999 207.106 876.999 346.63C876.999 486.154 832.534 599.26 777.682 599.26C752.137 599.26 728.844 574.727 711.246 534.419C693.648 574.727 670.355 599.26 644.809 599.26C619.264 599.26 595.971 574.727 578.373 534.419C560.775 574.727 537.482 599.26 511.936 599.26C486.391 599.26 463.098 574.727 445.5 534.419C427.902 574.727 404.609 599.26 379.063 599.26C353.517 599.26 330.224 574.727 312.627 534.419C295.029 574.727 271.736 599.26 246.19 599.26C220.644 599.26 197.351 574.728 179.754 534.419C162.156 574.728 138.863 599.26 113.317 599.26C58.4658 599.26 14 486.154 14 346.63C14 207.106 58.4658 94 113.317 94Z"
                        fill="#FED88E" />
                </svg>
            </div>
        </div>
    )
}

export default Effect1