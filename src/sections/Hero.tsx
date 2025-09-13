"use client";
import dynamic from "next/dynamic";

// Dynamically import Particles with no SSR
const Particles = dynamic(() => import("@/components/Particles"), {
  ssr: false,
});

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, var(--hero-gradient-start), var(--hero-gradient-mid), var(--hero-gradient-end))`
      }}
    >
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
          particleCount={400}
          particleSpread={10}
          particleBaseSize={200}
          speed={0.4}
          moveParticlesOnHover={true}
          alphaParticles={true} 
          disableRotation={false}
          particleHoverFactor={2}
          sizeRandomness={0.8}
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
  );
};

export default Hero;
