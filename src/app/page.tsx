"use client";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";

// Dynamically import Particles with no SSR
const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      {/* Hero Section with Particles Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Particles Background */}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={130}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
            particleHoverFactor={2}
            className="particles-container"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 py-20 sm:py-32 lg:py-40">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Utkarsh Maurya</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I craft exceptional digital experiences through modern web
            development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div id="projects" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Project {project}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A brief description of the project and what it does.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">
                    Next.js
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
