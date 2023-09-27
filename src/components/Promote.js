import React from 'react'

export default function Promote() {
  return (
    <div className={`w-full bg-mobile md:bg-desktop bg-cover bg-center bg-very-dark-blue py-10 md:py-16 px-5 flex flex-col justify-center items-center`}>
        <p className='text-white text-3xl mb-3 md:mb-5 md:text-6xl font-bold'>Boost your links today</p>
        <p className='my-3 text-white bg-cyan hover:bg-cyan-hover hover:cursor-pointer rounded-full text-center px-7 py-3 font-bold text-xl'>Get Started</p>
    </div>
  )
}
