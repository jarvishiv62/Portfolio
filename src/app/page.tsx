// pages/index.tsx or app/page.tsx (depending on your Next.js version)
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <main>
        {/* Main content sections */}
        <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center pt-20">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full text-cyan-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for new projects
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Crafting modern web experiences with cutting-edge technologies and clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </section>
        
        <section id="about" className="min-h-screen bg-gray-800 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate full-stack developer with expertise in modern web technologies. 
              I love creating scalable applications and solving complex problems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Frontend</h3>
                <p className="text-gray-300">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-purple-400 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-purple-400 mb-4">Backend</h3>
                <p className="text-gray-300">Node.js, Express, PostgreSQL, MongoDB</p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-pink-400 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-pink-400 mb-4">Tools</h3>
                <p className="text-gray-300">Git, Docker, AWS, Vercel</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="projects" className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center text-white max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and creativity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="group relative bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Project {project}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Amazing Project {project}</h3>
                    <p className="text-gray-400 mb-4">A brief description of this amazing project and its features.</p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-pink-400/20 text-pink-400 rounded-full text-sm">MongoDB</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="skills" className="min-h-screen bg-gray-800 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Technologies I work with to bring ideas to life.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'JavaScript', 'TypeScript', 'React', 'Next.js',
                'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
                'Tailwind CSS', 'Git', 'Docker', 'AWS'
              ].map((skill, index) => (
                <div key={skill} className="group">
                  <div className="p-6 bg-gray-900/50 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                    <span className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
            <div className="max-w-lg mx-auto bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-left text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-left text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-left text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-left text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;