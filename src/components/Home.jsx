import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { Fade } from "react-reveal";

export default function Home() {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const sentences = ["Welcome To My Portfolio", "Passionate Full-Stack Developer"];

  useEffect(() => {
    Aos.init({
      duration: 750,
    });
  }, []);

  const nextSentence = () => {
    setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSentence();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [sentenceIndex]);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    onRest: () => {
      
      nextSentence();
    },
  });

  return (
    <>
      <div className="max-w-screen-xl mx-auto md:px-8 py-16">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="lg:w-1/2 lg:text-start text-center lg:order-last">
            <Fade left>
              <animated.h1
                style={props}
                data-aos="fade-right"
                className="text-4xl lg:text-6xl font-semibold mb-4 lg:mb-8 leading-normal uppercase text-black"
              >
                {sentences[sentenceIndex]}
              </animated.h1>
            </Fade>
            <Fade right>
              <h2 data-aos="fade-left" className="text-2xl text-white">
                Hi, I'm <span className="text-5xl text-blue-950 ">Poornima Pandey</span>
                <p data-aos="fade-left">
                  A seasoned full-stack developer with a passion for crafting innovative and efficient solutions. My expertise spans both front-end and back-end technologies, allowing me to create seamless and responsive applications.
                </p>
              </h2>
            </Fade>
            <Fade up>
            <button
  data-aos="fade-up"
  className="bg-gradient-to-r from-blue-800 via-cyan-900 to-teal-700 hover:bg-gradient-to-r hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 text-white text-xl font-bold py-4 px-6 rounded mt-4 transition-all duration-300"
  onClick={() => {
    // Handle the click event, e.g., open the resume
  }}
>
  Resume
</button>


            </Fade>
          </div>

          <Fade up>
            <img
              data-aos="fade-up"
              src="70.jpg"
              alt=""
              className="rounded-full border-2 p-1 border-indigo-600 img_glow lg:w-2/5 md:w-2/3 sm:w-2/3 lg:mt-5 sm:mt-8 sm:ml-36 lg:ml-3 transition-all duration-300"
            />
          </Fade>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
