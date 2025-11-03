import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark-blue-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-text-light text-4xl font-bold text-center mb-12">
          Contact <span className="text-primary-blue">Me!</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-text-light text-3xl font-bold mb-4">Get in Touch</h3>
            <p className="text-accent-light-blue leading-relaxed mb-6">
              I&apos;m always open to discussions, collaborations, or simply sharing ideas. Feel free to contact me through this platform.
              I&apos;ll respond as soon as possible!
            </p>
            <div className="flex items-center text-accent-light-blue mb-4">
              <FaEnvelope className="text-primary-blue text-xl mr-3" />
              <span>grevano264@gmail.com</span>
            </div>
            <div className="flex items-center text-accent-light-blue">
              <FaMapMarkerAlt className="text-primary-blue text-xl mr-3" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          <div className="bg-secondary-blue p-8 rounded-lg shadow-lg">
            <h3 className="text-text-light text-3xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-accent-light-blue mb-6">Choose the easiest way to connect with me:</p>
            <div className="space-y-4">
              <a
                href="mailto:grevano264@gmail.com"
                className="flex items-center justify-center bg-primary-blue text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-accent-teal hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <FaEnvelope className="mr-3" /> E-mail
              </a>
              <a
                href="https://www.linkedin.com/in/grevano/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-primary-blue text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-accent-teal hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <FaLinkedin className="mr-3" /> LinkedIn
              </a>
              <a
                href="https://github.com/grevano"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-primary-blue text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-accent-teal hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                <FaGithub className="mr-3" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
