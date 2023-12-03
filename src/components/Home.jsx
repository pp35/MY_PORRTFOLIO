import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { Fade } from "react-reveal";
import img from "../assets/70.jpg";

export default function Home() {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const sentences = [
    "Welcome To My Portfolio",
    "Passionate Full-Stack Developer",
  ];

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
          <Fade left>
            <div className="lg:w-1/2">
              <img
                data-aos="fade-up"
                src={img}
                alt=""
                className="rounded-full border-2 p-1 border-indigo-600 img_glow lg:w-[90%] md:w-2/3 sm:w-2/3 lg:mt-5 sm:ml-36 lg:ml-3 transition-all relative top-2 duration-300"
              />
            </div>
          </Fade>

          <Fade right>
            <div className="lg:w-1/2 lg:text-start text-center">
              <animated.h1
                style={props}
                data-aos="fade-right"
                className="text-4xl lg:text-6xl font-semibold mb-4 lg:mb-8 leading-normal uppercase text-black"
              >
                {sentences[sentenceIndex]}
              </animated.h1>
              <h2 data-aos="fade-left" className="text-2xl text-white">
                Hi, I'm{" "}
                <span className="text-5xl text-black ">Poornima Pandey</span>
                <p data-aos="fade-left">
                  A seasoned full-stack developer with a passion for crafting
                  innovative and efficient solutions. My expertise spans both
                  front-end and back-end technologies, allowing me to create
                  seamless and responsive applications.
                </p>
              </h2>
              <Fade up>
                <button
                  data-aos="fade-up"
                  className="bg-gradient-to-r from-blue-800 via-cyan-900 to-teal-700 hover:bg-gradient-to-r hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 text-white text-xl font-bold py-4 px-6 rounded mt-4 transition-all duration-300"
                  onClick={() => {
                    const resumeLink =
                      "https://drive.google.com/uc?export=download&id=19WKFGb21QGp68ftcwtyrQFFAxrALtOCO";

                    // Create an anchor element
                    const link = document.createElement("a");
                    link.href = resumeLink;

                    // Set the download attribute to force download
                    link.download = "Poornima Pandey.pdf";

                    // Append the anchor to the document and trigger a click
                    document.body.appendChild(link);
                    link.click();

                    // Remove the anchor from the document
                    document.body.removeChild(link);
                  }}
                >
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      className="h-auto w-6 mr-2"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                      ></path>
                    </svg>
                    Resume
                  </div>
                </button>
              </Fade>
            </div>
          </Fade>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
