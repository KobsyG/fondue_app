import React from 'react'
import { Link } from 'react-router-dom'

const NavDemo = () => {
    return (
        <div className='relative flex items-center justify-center w-full h-[100px] bg-red-500 z-50'>
            <a href='/' className='w-[30px] h-[30px] border' >1</a>
            <a href='/second' className='w-[30px] h-[30px] border' >2</a>
            <a href='/mono' className='w-[30px] h-[30px] border' >3</a>
            <a href='/waiting' className='w-[30px] h-[30px] border' >4</a>
        </div>
    )
}

export default NavDemo