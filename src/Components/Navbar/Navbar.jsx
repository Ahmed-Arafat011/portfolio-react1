import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const[expand,setExpand]=useState(false)
  return <>
  <nav className='py-8 bg-gray-700'>
    <div className="container">
      <div className='flex justify-around items-center'>
        <h1 className='text-3xl text-white  '><Link to={"/"}>START FRAMEWORK</Link></h1>
           <div>
            <ul className=' gap-20 text-[22px] text-white space-y-4 lg:flex  hidden'>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/portfolio"}>portfolio</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
          
          
        <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setExpand(!expand)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 cursor-pointer text-amber-50 lg:hidden">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
 {expand ? <ul className=' gap-20 text-[22px]  text-white space-y-5 mt-2'>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/portfolio"}>portfolio</NavLink></li>
          <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>:null}
        </div>
      </div>
       
    </div>
  </nav>
  
  </>
   

  
}
