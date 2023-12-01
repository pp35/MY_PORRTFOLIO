import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const projects = [
    { name: 'Crypto Dashboard', link: 'https://pp35.github.io/crypto-dashboard/', image: 'Screenshot (13).png' },
    { name: 'YouTube Subscribers', link: 'https://get-youtube-subscribers-40mk.onrender.com/', image: 'Screenshot (14).png' },
    { name: 'Todo App', link: 'https://pp35.github.io/todo-app/', image: 'Screenshot (9).png' },
    { name: 'Redux Shop', link: 'https://pp35.github.io/redux-shop/', image: 'Screenshot (10).png' },
    { name: 'TextUtiles', link: 'https://pp35.github.io/', image: 'Screenshot (12).png' },
  ];

  return (
    <div className='p-12 bg-gradient-to-b text-white'>
      <h1 className='text-4xl font-semibold mb-8 leading-normal uppercase text-center'>
         Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
        {projects.map((project, index) => (
          <Link key={index} to={project.link} className='no-underline'>
            <div className="project-container transform transition-transform hover:scale-105">
              <img
                className='project-image rounded-2xl border-4 border-pink-500 shadow-lg'
                src={project.image}
                alt={project.name}
              />
              <p className="text-xl mt-3 font-semibold text-center">{project.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
