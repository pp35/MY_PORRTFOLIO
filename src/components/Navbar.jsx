import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/About', label: 'About' },
    { to: '/Services', label: 'Services' },
    { to: '/Projects', label: 'Projects' },
    { to: '/Contact', label: 'Contact' },
  ];

  const mobileNavContent = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link to="/">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">Home</li>
        </Link>
        <Link to="/About">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">About</li>
        </Link>
        <Link to="/Services">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">Services</li>
        </Link>
        <Link to="/Projects">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">Projects</li>
        </Link>
        <Link to="/Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-500 cursor-pointer hover:rounded">Contact</li>
        </Link>
      </ul>
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
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/Services">Services</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Contact">Contact</Link>
            </ul>
          </div>
        </div>
        <div>{click && mobileNavContent}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CgMenuGridR />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
