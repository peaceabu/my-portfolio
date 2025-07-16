import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPython } from 'react-icons/fa';
import useCountUp from '../hooks/useCountUp'; // make sure the path is correct

function AboutMe() {
  const experience = useCountUp(3, 1000);
  const projects = useCountUp(12, 1500);

  return (
    <section
      id="AboutMe"
      className="
        min-h-screen pt-20 px-6 py-12
        bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600
        text-white
        flex flex-col justify-center items-center text-center
      "
    >
      <div className="max-w-4xl space-y-10">
        <h1 className="text-4xl font-bold">About Me</h1>

        <p className="text-lg">
          Salam 👋 I'm a passionate software developer with over <span className="font-bold text-purple-200">{experience}+</span> years of experience crafting high-performance, elegant web applications.
        </p>

        <p className="text-lg">
          I thrive on turning ideas into interactive and accessible digital experiences using the best tools available.
        </p>

        {/* Experience + Projects */}
        <div className="flex justify-center gap-12 mt-8 flex-wrap">
          <div>
            <p className="text-5xl font-extrabold text-yellow-400">{experience}+</p>
            <p className="text-lg mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-5xl font-extrabold text-teal-300">{projects}+</p>
            <p className="text-lg mt-2">Projects Completed</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Technologies I Use</h2>
          <div className="flex flex-wrap justify-center gap-6 text-4xl text-white">
            <FaReact title="React" className="hover:text-blue-400 transition" />
            <FaJs title="JavaScript" className="hover:text-yellow-300 transition" />
            <FaHtml5 title="HTML5" className="hover:text-orange-400 transition" />
            <FaCss3Alt title="CSS3" className="hover:text-blue-300 transition" />            
            <FaPython title="Python" className="hover:text-blue-400 transition" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
