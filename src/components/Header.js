import React, { useState } from 'react'
import logoDark from '../img/logo-dark.svg'

export default function Header() {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const menuIconBack = isMenuVisible ? "bg-[#dcdcdc7a]" : "bg-transparent";

    return (
        <>
            <div className='w-full h-20 bg-gray-300 flex items-center px-5 justify-between md:justify-normal sticky top-0 bg-white shadow-sm z-20'>
                <img src={logoDark} alt="" />
                <i id='menuIcon'
                    class={`fa-solid fa-bars md:hidden text-grayish-violet text-3xl ${menuIconBack} bg- px-3 py-2 rounded-lg`}
                    onClick={() => setIsMenuVisible(!isMenuVisible)}
                ></i>

                <div className='hidden md:flex justify-between w-full mx-10'>
                    <div className='flex items-center'>
                        <Tabs name={'Features'} />
                        <Tabs name={'Pricing'} />
                        <Tabs name={'Resources'} />
                    </div>
                    <div className='flex items-center'>
                        <Tabs name={'Login'} />
                        <p className='ml-3 text-white bg-cyan md:hover:bg-cyan-hover active:bg-cyan-hover hover:cursor-pointer rounded-full px-5 py-2 font-bold text-[17px]'>Sign Up</p>
                    </div>
                </div>
            </div>

            { isMenuVisible && <MenuDiv /> }
        </>
    )
}

const Tabs = (props) => {
    return (
        <p className='mx-4 text-grayish-violet hover:text-very-dark-violet hover:cursor-pointer font-bold text-[17px]'>{props.name}</p>
    )
};

const MenuDiv = () => {

    return (
        <div id='menuContainer' className='md:hidden w-full h-full fixed top-20 bg-[#00000030] flex justify-center'>
            <div id='menuWrapper' className='fixed top-20 w-[75%] bg-dark-voilet rounded-lg text-white flex flex-col justify-center items-center py-5 shadow-menuBox'>
                <MenuTabs name={'Features'} />
                <MenuTabs name={'Pricing'} />
                <MenuTabs name={'Resources'} />
                <p className='border-solid border-[1px] border-[#404040] w-[65%] my-3'></p>
                <MenuTabs name={'Login'} />
                <p className='my-3 text-white bg-cyan hover:bg-cyan-hover hover:cursor-pointer rounded-full w-[65%] text-center py-3 font-bold text-xl'>Sign Up</p>
            </div>
        </div>
    )
};

const MenuTabs = (props) => {
    return (
        <p className='my-3 font-bold text-xl hover:text-cyan'>{props.name}</p>
    )
};