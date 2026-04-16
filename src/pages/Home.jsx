import React from "react";
import profilePic from "../assets/pf.png";
import { ReactTyped } from "react-typed";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-linear-to-r from-black via-gray-900 to-yellow-600 pt-24">
        {/* Text Content */}
        <div className="flex-1 space-y-4 text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm 👋{" "}
            <ReactTyped
              className="text-yellow-400"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300">
            Full Stack Developer
          </h2>

          <p className="text-gray-200 max-w-lg mx-auto md:mx-0">
            Passionate about learning and building web applications that solve
            real-world problems. Completed internship experience with React,
            Node.js, and modern web technologies, gaining hands-on exposure to
            frontend–backend integration and responsive UI design.
          </p>

          {/* Buttons */}
          <div className="mt-6">
            <a
              href="../assets/Sanjay(Full stack developer).pdf"
              className="inline-block bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-colors"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-yellow-500"
          />
        </div>
      </section>

      {/* Other Sections */}
      {/* <About />
      <Skills />
      <Projects />
      <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
