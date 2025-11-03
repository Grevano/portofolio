import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Services from '../components/services';
import Contact from '../components/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="bg-secondary-blue text-text-light text-center py-8 animate-fade-in">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Grevano. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://github.com/grevano" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary-blue transition-colors duration-300">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/grevano/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary-blue transition-colors duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="mailto:grevano264@gmail.com" className="text-text-light hover:text-primary-blue transition-colors duration-300">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
