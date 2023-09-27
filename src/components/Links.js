import React from 'react'

export default function Links() {
    return (
        <div className='w-full my-10 flex justify-center'>
            <div className='w-[90%] md:w-[80%] bg-shorten-mobile md:bg-shorten-desktop bg-very-dark-blue rounded-xl bg-cover bg-center flex flex-col md:flex-row py-8 md:p-10 items-center'>
                <input type="text" name="url" placeholder='Paste your link here' className='w-[90%] md:flex-[17] rounded-xl h-fit py-3 md:mr-5 px-7 outline-none focus:border-cyan border-2 border-solid' />
                <p className='w-[90%] text-white bg-cyan md:hover:bg-cyan-hover active:bg-cyan-hover hover:cursor-pointer rounded-xl text-center px-7 py-3 font-bold text-xl md:flex-[3] mt-5 md:m-0'>Shorten It!</p>
            </div>
        </div>
    )
}