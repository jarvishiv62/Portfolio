import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Hello! I'm [Your Name], a passionate Full Stack Developer with a love for
            creating beautiful, functional, and user-centered digital experiences.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            With [X] years of professional experience, I've had the opportunity to work
            with a variety of technologies and industries, helping businesses bring
            their ideas to life through clean, efficient code and thoughtful design.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            When I'm not coding, you can find me [your hobbies/interests], always
            learning and exploring new technologies and design trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
