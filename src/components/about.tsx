import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiTypescript, SiNextdotjs, SiFlutter } from 'react-icons/si';

const SkillIcon: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex flex-col items-center p-4 bg-secondary-blue rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:bg-primary-blue transition-all duration-300">
    <div className="text-4xl text-accent-light-blue mb-2 hover:text-accent-teal transition-colors duration-300">{icon}</div>
    <span className="text-text-light text-sm">{label}</span>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-blue-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-text-light text-4xl font-bold text-center mb-12">
          About <span className="text-primary-blue">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-text-light text-3xl font-bold mb-4">Web & Mobile Developer</h3>
            <p className="text-accent-light-blue leading-relaxed">
              I&apos;m a web and mobile developer passionate about creating intuitive and responsive digital experiences.
              My core expertise lies in modern web development with React and cross-platform mobile apps with Flutter.
            </p>
          </div>
          <div>
            <h3 className="text-text-light text-3xl font-bold mb-6 text-center md:text-left">My Skills</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <SkillIcon icon={<FaHtml5 />} label="HTML" />
              <SkillIcon icon={<FaCss3Alt />} label="CSS" />
              <SkillIcon icon={<FaJs />} label="JavaScript" />
              <SkillIcon icon={<FaReact />} label="React.js" />
              <SkillIcon icon={<SiNextdotjs />} label="Next.js" />
              <SkillIcon icon={<SiTypescript />} label="TypeScript" />
              <SkillIcon icon={<SiTailwindcss />} label="Tailwind" />
              <SkillIcon icon={<SiFlutter />} label="Flutter" />
              <SkillIcon icon={<SiFirebase />} label="Firebase" />
              <SkillIcon icon={<SiMongodb />} label="MongoDB" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
