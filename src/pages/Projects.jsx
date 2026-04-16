import React from "react";
import fastcabgif from "../assets/fastcab.gif";
import saigif from "../assets/Sai.gif";
import laxmigif from "../assets/laxmi.gif";
import Footer from "../components/Footer";

const Projects = () => {
  const projects = [
    {
      name: "Fast cab",
      description:
        "Fast Cab is a responsive cab booking application built with React and Tailwind CSS. The project focuses on a clean, modern UI where users can easily book rides. When a user books a cab, the system dynamically calculates the fare based on distance and time, ensuring accurate pricing. The design includes booking forms, ride details, and a user-friendly interface optimized for both desktop and mobile. Planned enhancements include authentication, payment gateway integration, and an admin dashboard for managing bookings and drivers.",
      link: "https://fast-cab.vercel.app/",
      github: "https://github.com/sanjay-kumar99/fast-cab",
      gif: fastcabgif,
    },
    {
      name: "Sai Aluminium & Glass House",
      description:
        "Sai Aluminium & Glass House is a full-stack MERN project where service images are fetched dynamically from the backend API and rendered in a responsive React + Tailwind CSS interface. The application demonstrates seamless frontend–backend integration, ensuring that services and product visuals are always up-to-date. The UI is designed to be clean, modern, and mobile-friendly. Planned enhancements include authentication, an admin dashboard for managing services, and role-based access control to make the system production-ready.",
      link: "https://interior-website-bwn1.onrender.com/",
      github: "https://github.com/sanjay-kumar99/interior-website",
      gif: saigif,
    },
    {
      name: "Laxmi Glass House",
      description:
        "Laxmi Glass House is a full-stack MERN project designed to showcase dynamic services with images and descriptions fetched directly from the backend API. The frontend is built using React and Tailwind CSS, with Swiper.js integrated for interactive carousels that display multiple service images in a smooth, responsive manner. The application currently highlights categories such as modular kitchen designs, complete door solutions, custom wooden work, premium finishing materials, and professional glass work. While the project is not yet live, it demonstrates strong frontend–backend integration and a scalable UI. Planned enhancements include authentication, an admin dashboard for managing services, and deployment to production.",
      link: null,
      github: "https://github.com/sanjay-kumar99/Laxmi-glass",
      gif: laxmigif,
    },
  ];

  return (
    <>
      <section className="bg-linear-to-r from-black via-gray-900 to-yellow-600 py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-10">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow border border-yellow-500"
              >
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {project.name}
                </h3>

                {/* GIF Preview */}
                {project.gif && (
                  <img
                    src={project.gif}
                    alt={`${project.name} preview`}
                    className="w-full h-48 object-cover rounded-md mb-4 border border-yellow-400"
                  />
                )}

                <p className="text-gray-200 mb-4">{project.description}</p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
                  >
                    View Project
                  </a>
                ) : (
                  <span className="inline-block bg-gray-700 text-yellow-400 px-4 py-2 rounded-md cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gray-800 text-yellow-300 px-4 py-2 ml-5 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
