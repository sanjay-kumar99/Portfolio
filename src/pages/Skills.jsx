import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import js from "../assets/javascript.png";
import react from "../assets/reactjs.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.jpg";
import github from "../assets/github.png";
import Footer from "../components/Footer";

const Skills = () => {
  const skillsData = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: js },
    { name: "React.js", image: react },
    { name: "Node.js", image: node },
    { name: "Express.js", image: express },
    { name: "MongoDB", image: mongodb },
    { name: "GitHub", image: github },

  ];

  return (
    <>
    <section className="bg-linear-to-r from-black via-gray-900 to-yellow-600 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">My Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-900 shadow-lg rounded-lg p-6 hover:scale-105 transition-transform border border-yellow-500"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-yellow-300 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Skills;
