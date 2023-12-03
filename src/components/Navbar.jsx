import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const mobileNavContent = (
    <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-slate-900 z-50">
      <div className="flex justify-center items-center h-full">
        <ul className="text-center text-xl">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">
            <NavLink to="*" onClick={handleClick}>Home</NavLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">
            <NavLink to="/About" onClick={handleClick}>About</NavLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">
            <NavLink to="/Services" onClick={handleClick}>Services</NavLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">
            <NavLink to="/Projects" onClick={handleClick}>Projects</NavLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">
            <NavLink to="/Contact" onClick={handleClick}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <nav>
      <div className="flex justify-between z-50 text-white lg:py-5 px-20 py-4 shadow-md">
        <div className="flex items-center flex-1">
          <span className="text-5xl italic font-bold">Pp</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <NavLink to="*" activeClassName="text-blue-500">Home</NavLink>
              <NavLink to="/About" activeClassName="text-blue-500">About</NavLink>
              <NavLink to="/Services" activeClassName="text-blue-500">Services</NavLink>
              <NavLink to="/Projects" activeClassName="text-blue-500">Projects</NavLink>
              <NavLink to="/Contact" activeClassName="text-blue-500">Contact</NavLink>
            </ul>
          </div>
        </div>
        {click ? mobileNavContent : null}
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CgMenuGridR />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
