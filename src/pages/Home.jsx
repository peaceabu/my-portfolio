import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (change 2000 to your preferred ms)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-loading-gradient">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white">
        <Typewriter
          words={['Salam !']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
        />
      </h1>
    </div>
  );
}


  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
