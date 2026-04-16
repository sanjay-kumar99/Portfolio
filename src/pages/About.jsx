import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <section className="bg-linear-to-r from-black via-gray-900 to-yellow-600 py-16 px-6 md:px-20 text-white">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Education Section */}
          <h1 className="text-3xl font-bold mb-4 text-yellow-400">
            Education & Training
          </h1>
          <p className="leading-relaxed text-gray-200">
            Bachelor in Computer Application, G.G.N Khalsa College (2019) <br />
            +2 in Computer Application, P.A.U (2016) <br />
            Currently pursuing Full Stack Developer Internship at Webistic.
          </p>

          {/* Divider */}
          <div className="my-8 border-t border-yellow-500"></div>

          {/* Skills Section */}
          <h1 className="text-3xl font-bold mb-4 text-yellow-400">
            Skills & Expertise
          </h1>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Hands-on experience with React & Tailwind CSS</li>
            <li>Basic backend development using Node.js & Express</li>
            <li>Understanding of MongoDB for database management</li>
            <li>Responsive UI design and frontend–backend integration</li>
            <li>Problem-solving mindset and eagerness to learn</li>
            <li>Collaborative approach gained through internship projects</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
