import React from 'react'

export default function Footer() {
    return (
        <div className='w-full bg-very-dark-violet flex flex-col md:flex-row justify-center md:justify-normal items-center md:items-baseline py-12 text-white'>
            <div className='mb-7 md:mb-0 md:flex-[3] xl:flex[2] md:flex md:justify-center'>
                <h1 className='text-[2.5rem] font-bold tracking-wide'>Shortly</h1>
            </div>

            <div className='flex flex-col items-center md:items-start md:flex-row md:flex-[7] xl:flex[8]'>
                <div className='flex flex-col my-5 md:mx-10 items-center md:items-start'>
                    <p className='text-xl mb-4 md:mb-5 font-bold'>Features</p>

                    <Links name={'Link Shortening'} />
                    <Links name={'Branded Links'} />
                    <Links name={'Analytics'} />
                </div>
                <div className='flex flex-col my-5 md:mx-10 items-center md:items-start'>
                    <p className='text-xl mb-4 md:mb-5 font-bold'>Resources</p>

                    <Links name={'Blog'} />
                    <Links name={'Developers'} />
                    <Links name={'Support'} />
                </div>
                <div className='flex flex-col my-5 md:mx-10 items-center md:items-start'>
                    <p className='text-xl mb-4 md:mb-5 font-bold'>Company</p>

                    <Links name={'About'} />
                    <Links name={'Our Team'} />
                    <Links name={'Contact'} />
                </div>
                <div className=' my-5 md:mx-8 lg:mx-10'>
                    <i className="fa-brands fa-whatsapp text-white active:hover:text-cyan md:hover:text-cyan hover:cursor-pointer mx-3 md:mb-3 text-3xl"></i>
                    <i className="fa-brands fa-instagram text-white active:hover:text-cyan md:hover:text-cyan hover:cursor-pointer mx-3 md:mb-3 text-3xl"></i>
                    <i className="fa-brands fa-twitter text-white active:hover:text-cyan md:hover:text-cyan hover:cursor-pointer mx-3 md:mb-3 text-3xl"></i>
                    <i className="fa-brands fa-facebook text-white active:hover:text-cyan md:hover:text-cyan hover:cursor-pointer mx-3 md:mb-3 text-3xl"></i>
                </div>
            </div>
        </div>
    )
}

const Links = (props) => {
    return (
        <div className='text-gray active:hover:text-cyan md:hover:text-cyan my-1 md:my-2 hover:cursor-pointer'>
            {props.name}
        </div>
    )
};