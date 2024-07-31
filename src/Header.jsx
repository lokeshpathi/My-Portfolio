import React, { useState } from 'react'
import logo from '/logo.png'

function Header() {
  const [menuItem,setMenuItem] = useState('home');
  return (
    <div id="home" className='flex items-center justify-between w-full h-[60px] md:h-[80px]'>
        <div className='h-full'>
            <img src={logo} alt="logo" className=' bg-transparent h-full ' />
        </div>
        <nav className='flex items-center md:gap-[20px] gap-[2px] text-xl md:text-2xl'>
            <a 
            href="#home" 
            onClick={()=>setMenuItem('home')}
            className={menuItem=="home"?"text-white hidden md:block":"text-gray-500 hidden md:block"}
            >Home</a>

            <a 
            href='#about' 
            onClick={()=>setMenuItem('about')}
            className={menuItem=="about"?"text-white":"text-gray-500"}
            >About</a>

            <a 
            href='#skills' 
            onClick={()=>setMenuItem('skills')}
            className={menuItem=="skills"?"text-white":"text-gray-500 hidden md:block"}
            >Skills</a>

            <a
            href='#projects' 
            onClick={()=>setMenuItem('projects')}
            className={menuItem=="projects"?"text-white":"text-gray-500"}
            >Projects</a>

            <a
            href='#certifications' 
            onClick={()=>setMenuItem('certifications')}
            className={menuItem=="certifications"?"text-white":"text-gray-500"}
            >Certifications</a>

            <a
            href='#contact' 
            onClick={()=>setMenuItem('contact')}
            className={menuItem=="contact"?"text-white":"text-gray-500 hidden md:block"}
            >Contact</a>

        </nav>
        <div className='hidden md:flex items-center gap-4  px-3 py-2 bg-gray-700 rounded-md'>
            <input type="text"  placeholder='Search' className=' bg-gray-700 text-gray-400 outline-none border-l-0 '/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-300 size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

        </div>
    </div>
  )
}

export default Header