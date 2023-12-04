import React from 'react';
import { motion } from 'framer-motion';
import img from "../assets/70.jpg";
const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const imgVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.5, duration: 0.8, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1, ease: 'easeInOut' } },
  };

  return (
    <div className="container mx-auto py-24">
      <h1 className=" text-5xl  font-bold text-center mb-7 text-blue-500">
        Hello, I'm Poornima Pandey 🌟
      </h1>
      <motion.div
        className="lg:grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={img}
          alt="Poornima Pandey"
          className=" border-2 p-1 m-0  sm:w-2/3 lg:w-[90%] border-blue-500 rounded-full img_glow relative sm:left-32 lg:left-4"
        
          variants={imgVariants}
        />

        <motion.div
          className="text-white"
          variants={textVariants}
        >
          <p className="text-lg md:text-xl text-justify mb-6 m-3">
            Hey there! I'm an enthusiastic full-stack web developer with a passion for crafting exceptional digital experiences. With a year of hands-on experience, I specialize in creating dynamic front-end interfaces using React, alongside proficiency in HTML, CSS, and JavaScript.
          </p>

          <p className="text-lg md:text-xl text-justify mb-6 m-3">
            On the server-side, I'm well-versed in Node.js and Express.js, and I have expertise in both SQL and NoSQL databases. Git is my ally for version control, ensuring clean and collaborative coding practices. I love deploying applications, whether on traditional servers or cloud platforms like AWS.
          </p>

          <p className="text-lg md:text-xl text-justify italic m-3">
            Eager to learn and adapt in the ever-evolving web development landscape, I'm driven by a passion to transform ideas into seamless digital solutions. Let's connect and craft something amazing together! 🚀
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
