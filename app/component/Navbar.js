"use client";
import Link from 'next/link';




import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <nav onMouseEnter={() => setIsScrolled(false)}
            className={`navbar fixed top-5  h-[6rem] p-0 z-50 transition-all duration-300 ${isScrolled ? 'w-[27rem]' : 'w-full'}`}>
            <div className={`navbarchild flex absolute rounded-[6rem] bg-gradient-to-br border bordercolor bg-opacity-50 backdrop-blur-md h-[6rem] w-[95%] left-[2.5%]  ${isScrolled ? "" : "justify-between"}`}>
                <Link href='/'  >  <div className={`h-full ml-[2rem] flex text-custom-30px items-center font-bold w-[20%] hover:text-blue-500 transition`}>SVI</div></Link>
                
                <div className={`h-full ml-[12rem] flex text-custom-30px items-center font-bold ${isScrolled ? "" : "hidden"}`}>
                    <div><img src="/icon/plusicon.svg" alt="My Icon" className="opacity-1118 svg-black w-6 h-6" /></div>
                </div>
                <ul className={`navbarlist flex justify-between mr-[4rem] h-full w-[50%] ${isScrolled ? "hidden" : ""}`}>
                    <li className={`flex items-center Product font-sans font-semibold ${isScrolled ? "hidden" : ""} hover:text-blue-500 transition`}>Home</li>
                    <Link className={'flex items-center Usecase font-sans font-semibold hover:text-blue-500 transition'} href={'/dashboard'}>Dashboard</Link>
                    <li className='flex items-center Resource font-sans font-semibold hover:text-blue-500 transition' >About Us</li>
                    <li className='flex items-center For_Business font-sans font-semibold hover:text-blue-500 transition'>Contact Us</li>
                    <li className='flex items-center Pricing font-sans font-semibold hover:text-blue-500 transition'></li>
                </ul>
                <ul className={`w-[30%] flex justify-between h-full ${isScrolled ? "hidden" : ""}`}>
                    <li className='flex items-center Talk_To_Sale font-sans font-semibold hover:text-blue-500 transition'></li>
                    <Link className=' login flex justify-center items-center mt-[1.5rem] font-sans rounded-[6rem] font-semibold h-[50%] w-[25%] bg-white hover:bg-primarycolor hover:text-white transition' href='/login'><li >
                        <h1 className='text-center '>Login</h1>
                    </li></Link>
                    <Link className='signup flex text-white items-center justify-center mt-[1.5rem] SignUp bg-primarycolor rounded-[6rem] h-[50%] font-sans mr-[2rem] w-[25%] font-semibold hover:bg-white hover:text-black transition'  href='/signup'><li >
                        <h1>Sign Up</h1>
                    </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
