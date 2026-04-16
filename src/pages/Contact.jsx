import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormdata({ name: "", email: "", message: "" });
  };

  return (
    <>
    <section className="bg-linear-to-r from-black via-gray-900 to-yellow-600 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-yellow-400 mb-6">Contact Me</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 shadow-lg rounded-lg p-8 space-y-6 border border-yellow-500"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formdata.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-yellow-400 rounded-md bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formdata.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-yellow-400 rounded-md bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formdata.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border border-yellow-400 rounded-md bg-black text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    <Footer />  
    </>
  );
};

export default Contact;
