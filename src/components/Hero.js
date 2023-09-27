import React from 'react'
import workingImg from '../img/working-img.svg'

export default function Hero() {
    return (
        <div className='w-full flex flex-col-reverse md:flex-row'>
            <div className='flex flex-col flex-[3] px-6 py-8 md:px-5 lg:px-20 justify-center items-center text-center md:items-start md:text-left'>
                <p className='text-4xl md:text-[2.5rem] lg:text-6xl font-extrabold mb-4'>More shorter than <br /> you think</p>
                <p className='text-gray md:pr-10 xl:pr-20'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <p className='my-3 text-white bg-cyan hover:bg-cyan-hover hover:cursor-pointer rounded-full text-center px-7 py-3 font-bold text-xl'>Get Started</p>
            </div>
            <div className='flex-[2] flex justify-center items-center p-5'>
                <img src={workingImg} alt='' />
            </div>
        </div>
    )
}