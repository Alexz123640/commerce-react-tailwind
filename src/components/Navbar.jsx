import { useState } from "react"


export default function Navbar() {

  const [nav,setNav] = useState(false);
  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    <div className="text-white flex justify-between items-center px-5 h-20 ">
      <h1 className="text-3xl text-[#00df9a] font-bold">REACT</h1>
      <ul className="text-xl  hidden md:flex">
        <li><a href="#" className="p-4">Inicio</a></li>
        <li><a href="#" className="p-4">Inicio</a></li>
        <li><a href="#" className="p-4">Inicio</a></li>
        <li><a href="#" className="p-4">Inicio</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>}
      
      
      </div>
      
    <div className={nav?"p-4 fixed left-0 top-0 w-[40%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-300":'fixed left-[-100%]'}>
    <h1 className="text-3xl text-[#00df9a] font-bold">REACT</h1>
      <ul className=" uppercase ">
        <li><a href="#" className="p-4 ">Inicio</a></li>
        <li><a href="#" className="p-4 ">Inicio</a></li>
        <li><a href="#" className="p-4 ">Inicio</a></li>
        <li><a href="#" className="p-4 ">Inicio</a></li>
      </ul>
    </div >
      
    </div>
  )
}
