import React from 'react'
import recognition from '../img/brand-recognition.svg'
import records from '../img/detailed-records.svg'
import customizable from '../img/fully-customizable.svg'

export default function Cards() {
    return (
        <div className='w-full flex flex-col items-center justify-center bg-white py-10'>
            <div className='flex flex-col items-center justify-center text-center p-6'>
                <p className='text-3xl font-bold mb-2'>Advanced Statistics</p>
                <p className='text-gray'>Track how links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='flex flex-col md:flex-row w-full justify-around items-center mt-10 md:'>
                <CardTemplate img={recognition} header={"Brand Recognition"} desc={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."} />
                <CardTemplate img={records} header={"Detailed Records"} desc={"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} />
                <CardTemplate img={customizable} header={"Fully Customizable"} desc={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} />
            </div>
        </div>
    )
}

const CardTemplate = (props) => {
    return (
        <div className='bg-slate-100 flex flex-col justify-center items-center text-center mx-6 my-8 p-8 xl:mx-16 rounded-xl'>

            <div className='bg-very-dark-blue rounded-full w-fit translate-y-[-90%]'>
                <img src={props.img} alt="" className='m-4' />
            </div>
            <p className='font-bold text-2xl translate-y-[-60%]'>{props.header}</p>
            <p className='text-gray mb-2 '>{props.desc}</p>
        </div>
    )
};