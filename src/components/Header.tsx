"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Code, Zap, Star, Github, Linkedin, Mail } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  hoverColor: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Github, href: "#", hoverColor: "hover:text-cyan-400" },
    { icon: Linkedin, href: "#", hoverColor: "hover:text-blue-400" },
    { icon: Mail, href: "#", hoverColor: "hover:text-pink-400" },
  ];

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (): void => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-gradient-x"></div>

      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo with creative animation */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Code className="w-8 h-8 text-cyan-400 transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              DevPortfolio
            </span>
            <Zap className="w-5 h-5 text-yellow-400 animate-bounce" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem, index: number) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </a>
            ))}
          </div>

          {/* CTA Button & Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {socialLinks.map((social: SocialLink, index: number) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.hoverColor} transition-colors duration-300 hover:scale-110 transform`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            <button className="relative px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              <Star className="inline-block w-4 h-4 ml-2 animate-spin" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              {navItems.map((item: NavItem, index: number) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-white transition-colors duration-300 hover:pl-4"
                  onClick={handleNavClick}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-700">
                {socialLinks.map((social: SocialLink, index: number) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`text-gray-400 ${social.hoverColor} transition-colors duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Hire Me ✨
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
