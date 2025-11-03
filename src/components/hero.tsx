"use client";
import React, { useState, useEffect } from 'react';

const RotatingCircle: React.FC<{ size: string, delay: string, position: string, color: string }> = ({ size, delay, position, color }) => {
  return (
    <div
      className={`absolute rounded-full animate-float ${size} ${position} ${color} border-2 border-primary-blue`}
      style={{ animationDelay: delay }}
    ></div>
  );
};

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Web Developer", "Mobile Developer"];
  const period = 2000; 

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    const ticker = setInterval(() => tick(), typingSpeed);
    return () => clearInterval(ticker);
  }, [typedText, typingSpeed, isDeleting]);

  const tick = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting
      ? fullText.substring(0, typedText.length - 1)
      : fullText.substring(0, typedText.length + 1);

    setTypedText(updatedText);
    if (isDeleting) setTypingSpeed(prev => prev / 2);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="relative bg-dark-blue-bg h-screen flex items-center justify-center overflow-hidden">
      <RotatingCircle size="w-64 h-64" delay="0s" position="top-10 left-20" color="bg-primary-blue opacity-20" />
      <RotatingCircle size="w-48 h-48" delay="2s" position="bottom-20 right-32" color="bg-secondary-blue opacity-20" />
      <RotatingCircle size="w-32 h-32" delay="4s" position="top-1/3 right-1/4" color="bg-accent-teal opacity-10" />
      <RotatingCircle size="w-20 h-20" delay="1s" position="bottom-10 left-1/4" color="bg-primary-blue opacity-10" />

      <div className="text-center z-10 p-4">
        <h1 className="text-text-light text-5xl md:text-7xl font-bold mb-4">
          Hello! <br /> I&apos;m Grevano
        </h1>
        <p className="text-primary-blue text-3xl md:text-5xl font-semibold mb-6">
          And I&apos;m a <span className="border-r-4 border-primary-blue pr-1">{typedText}</span>
        </p>
        <p className="text-accent-light-blue text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I build modern web and mobile applications, with a focus on efficient code and user-centered design.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-accent-light-blue hover:text-primary-blue transition-colors duration-300 text-3xl"><i className="fab fa-github"></i></a>
          <a href="#" className="text-accent-light-blue hover:text-primary-blue transition-colors duration-300 text-3xl"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-accent-light-blue hover:text-primary-blue transition-colors duration-300 text-3xl"><i className="fab fa-instagram"></i></a>
        </div>
        <a href="#contact" className="bg-primary-blue text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-accent-teal transition-colors duration-300">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
