import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/Screenshot (13).png";
import img2 from "../assets/Screenshot (14).png";
import img3 from "../assets/Screenshot (9).png";
import img4 from "../assets/Screenshot (10).png";
import img5 from "../assets/Screenshot (12).png";

export default function Projects() {
  const projects = [
    { name: 'Crypto Dashboard', link: 'https://pp35.github.io/crypto-dashboard/', image: img1 },
    { name: 'YouTube Subscribers', link: 'https://get-youtube-subscribers-40mk.onrender.com/', image: img2 },
    { name: 'Todo App', link: 'https://pp35.github.io/todo-app/', image: img3 },
    { name: 'Redux Shop', link: 'https://pp35.github.io/redux-shop/', image: img4 },
    { name: 'TextUtiles', link: 'https://pp35.github.io/', image: img5 },
  ];
  
  return (
    <div className='p-12 bg-gradient-to-b text-white'>
      <h1 className='text-4xl font-semibold mb-8 leading-normal uppercase text-center'>
         Projects
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className='no-underline'>
            <div className="project-container transform transition-transform hover:scale-105">
              <img
                className='project-image rounded-2xl border-4 border-pink-500 shadow-lg'
                src={project.image}
                alt={project.name}
              />
              <p className="text-xl mt-3 font-semibold text-center">{project.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
