"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-dark-blue-bg bg-opacity-95 backdrop-blur-md shadow-2xl animate-slide-up'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-text-light">
          <Link href="/" className="hover:text-primary-blue transition-colors duration-300">
            Portofolio.
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          {[
            { href: '#home', label: 'Home' },
            { href: '#about', label: 'About' },
            { href: '#services', label: 'Services' },
            { href: '#contact', label: 'Contact' }
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative transition-all duration-300 hover:text-accent-light-blue ${
                activeSection === href.slice(1)
                  ? 'text-primary-blue font-semibold'
                  : 'text-text-light'
              }`}
            >
              {label}
              {activeSection === href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-blue animate-glow"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
