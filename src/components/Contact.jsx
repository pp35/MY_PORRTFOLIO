import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div id='Contact' className='p-14 lg:p-32 flex flex-col items-center justify-center'>
      <h1  className='text-4xl lg:text-6xl font-semibold mb-8 leading-normal uppercase text-white'>Contact Me</h1>
      <form action="https://getform.io/f/58b47af8-a407-4df6-a4cd-d515a33fe777" method="POST" className='flex flex-col gap-4 lg:w-3/4'>
        <div className='lg:flex gap-4'>
          <input
            className='w-full lg:w-1/2 my-3 lg:my-0 rounded-lg bg-slate-800 p-4 border-2 border-blue-700 b_glow text-xl text-white'
            placeholder='Enter Your Name'
            type="text" name='name'
          />
          <input
            className='w-full lg:w-1/2 my-3 lg:my-0 rounded-lg bg-slate-800 p-4 border-2 border-blue-700 b_glow text-xl text-white'
            placeholder='Enter Your Email'
            type="email" name='email'
          />
        </div>
        <textarea
          name="message"
          id=""
          cols="20"
          rows="6"
          className='w-full rounded-lg bg-slate-800 p-4 border-2 border-blue-700 b_glow text-xl text-white'
          placeholder='Enter Your Message here...'
        ></textarea>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <button className='neno-button shadow-xl hover:shadow-blue-800/50 text-white border hover:bg-blue-800 border-blue-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden' type='submit'>
                Connect with Me 🚀
              </button>
            </motion.div>
          </div>
        </div>

      </form>
    </div>
  );
}
