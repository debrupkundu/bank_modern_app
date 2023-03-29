import React, { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src={logo} alt='hoobank'
                className="w-[124px] h-[32px]">

            </img>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain cursor-pointer '
                    onClick={() => setToggle((prev) => !prev)}
                ></img>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
                 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none  flex-column justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] text-white 
                        ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div> {/*sidebar is responsible for the animation of the toggle menu in small screen mode, 
                mx(margin-x) and my(margin-y) is the no.of pixels seperated from the edges of the screen and
                 bg-black-gradient is the main css to create the toggle menu */}

            </div>
        </nav>
    )
}

export default Navbar