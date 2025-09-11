import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm [Your Name]</h1>
      <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        Full Stack Developer
      </h2>
      <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 mb-8">
        I build exceptional digital experiences. Currently focused on building
        accessible, human-centered products.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View My Work
        </button>
        <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          Contact Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
