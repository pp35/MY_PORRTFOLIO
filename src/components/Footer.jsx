import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-3xl font-semibold text-slate-950 py-7 uppercase ml-3">Services</h2>
          <ul className="text-sm md:text-base my-4">
            <li className="my-2 text-2xl ml-3">Web Design</li>
            <li className="my-2 text-2xl ml-3">Web Development</li>
            <li className="my-2 text-2xl ml-3">E-commerce</li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0 md:col-span-1">
          <h2 className="text-3xl md:text-3xl font-semibold text-slate-950 py-7 uppercase ml-3">Contact</h2>
          <p className="text-2xl ml-3  my-4">Email: poornimapandey3590@gmail.com</p>
          <p className=" text-2xl my-4 ml-3">Phone: +917509203590</p>
        </div>
        <div className="md:col-span-3 lg:col-span-2">
          <h2 className="text-3xl md:text-3xl font-semibold text-slate-950 py-6 sm:px-0   lg:px-24 uppercase ml-3">Follow Me</h2>
          <div className="flex space-x-4 sm:mb-4 sm:px-0 ml-3  lg:px-24">
            <a href="https://github.com/pp35?tab=packages" className="text-white hover:text-blue-900 transition-all duration-150 ease-in-out ">
              <AiFillGithub className=" text-4xl  " />
            </a>
            <a href="https://www.linkedin.com/in/poornima-pandey-15305226a/" className="text-white hover:text-blue-900 transition-all duration-150 ease-in-out">
              <FaLinkedinIn className="text-4xl " />
            </a>
            <a href="https://twitter.com/home?lang=en" className="text-white hover:text-blue-900 transition-all duration-150 ease-in-out">
              <FiTwitter className="text-4xl  " />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}