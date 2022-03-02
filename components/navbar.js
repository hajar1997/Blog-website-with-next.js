import { Categories } from './';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import Image from 'next/image';
import mypicblack from '../public/logo_black_background_white1.png';
import mypicwhite from '../public/logo_white_background_black1.png';

function NavLink({to,children}){
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}){
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      getCategories()
      .then((newCategories) => setCategories(newCategories))
    },[]);

    return(
        <div className= {`z-50 absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md`}>
            <div className='flex items-center justify-center filter drop-shadow-md bg-white h-20'>
           <a href='/'>
             <Image
               src={mypicblack}
               alt="Logo"
               width="160px"
               height="40px"
              />
           </a>
            </div>
            <div className='flex flex-col my-3 ml-4'>
                {categories.map((category) => (
                    <a className='text-xl  text-black text-center font-medium my-4' href={`/category/${category.slug}`} onClick={() => setTimeout(() => {setOpen(!open)},100)}>
                            {category.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default function Navbar() {
const [open, setOpen] = useState(false);

const [categories, setCategories] = useState([]);
  
useEffect(() => {
  getCategories()
  .then((newCategories) => setCategories(newCategories))
},[]);

    return(
        <nav className='container mx-auto px-10 mb-8 text-white  flex items-center py-4 h-20'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className='lg:w-3/12 flex items-center'>
             <a href='/'>
               <Image
               src={mypicwhite}
               alt="Logo"
               width="200px"
               height="50px"
                />
             </a>
            </div>
            <div className='w-9/12 flex justify-end items-center'>
                <div className='z-50 flex relative w-8 h-6 flex-col justify-between cursor-pointer items-center md:hidden' onClick={() => setOpen(!open)}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-stone-900 rotate-45 translate-y-3.5" : ""}`} />                                                                    
                    <span className={`h-1 w-full bg-white rounded-lg transform transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />                                                                    
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "bg-stone-900 -rotate-45 -translate-y-4.5" : ""}`} />                                                                    
                </div>
                <div className='hidden md:flex'>
                    {categories.map((category) => (
                    <NavLink  to={`/category/${category.slug}`}>
                        <span className='text-lg'>
                            {category.name}
                        </span>
                    </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}
