import { FaHtml5 } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills" className="tech__skills mt-14 relative">
      <h2>Technical Skills</h2>
      {/* <div className="desktop__bg__circle absolute opacity-50 left-0  blur-3xl w-[200px] h-[200px] rounded-full bg-[#ABD9D9] -z-20 "></div> */}
      <p className="mt-6">
        I have worked with some of the most popular tech in the Web Development
        world from Backend to Frontend
      </p>
      <div className="cards__slider items-start gap-4 py-8">

        <div className="cards rounded-lg">

          <div className="flex justify-center items-center flex-col bg-[#0c225b] rounded-t-lg py-2">
            <FaHtml5 className="text-white text-4xl" />
            <p className="font-bold text-white">Front End</p>
          </div>

          <div className="bg-[#0b0b5d] text-center flex flex-col rounded-b-lg gap-2 py-4">
            <p className="text-white font-bold">HTML</p>
            <p className="text-white font-bold">CSS / Tailwind CSS</p>
            <p className="text-white font-bold">Javascript</p>
            <p className="text-white font-bold">React / React ToolKit</p>
            <p className="text-white font-bold">NextJs</p>
            <p className="text-white font-bold">Web Design</p>
            <p className="text-white font-bold">Wire Frame</p>
          </div>
        </div>

        <div className="cards rounded-lg">

          <div className="flex justify-center items-center flex-col bg-[#0c225b] rounded-t-lg py-2">
            <FaCode className="text-white text-4xl" />
            <p className="font-bold text-white">Back End</p>
          </div>

          <div className="bg-[#0b0b5d] text-center rounded-b-lg flex flex-col gap-2 py-4">
            <p className="text-white font-bold">Node JS</p>
            <p className="text-white font-bold">Express JS</p>
            <p className="text-white font-bold">MongoDB</p>
            <p className="text-white font-bold">Firebase</p>
            <p className="text-white font-bold">PostGreSQL</p>
            <p className="text-white font-bold">Mongoose</p>
            <p className="text-white font-bold">API</p>
          </div>
        </div>

        <div className="cards rounded-lg">
          <div className="flex justify-center items-center flex-col bg-[#0c225b] rounded-t-lg py-2">
            <FaTools className="text-white text-3xl" />
            <p className="font-bold text-white mt-1">Other</p>
          </div>

          <div className="bg-[#0b0b5d] text-center rounded-b-lg flex flex-col gap-2 py-4">
            <p className="text-white font-bold">Git</p>
            <p className="text-white font-bold">GitHub</p>
            <p className="text-white font-bold">Netlify</p>
            <p className="text-white font-bold">Vercel</p>
            <p className="text-white font-bold">VS Code</p>
            <p className="text-white font-bold">Jest</p>
            <p className="text-white font-bold">Test Driven Development</p>
          </div>
        </div>
{/* 
        <div className="cards flex justify-center flex-col rounded-t-lg shadow-sm shadow-gray-400 min-w-full">
          <div className="flex justify-center items-center flex-col bg-[#0c225b] rounded-t-lg py-2">
            <TbSocial className="text-white text-4xl" />
            <p className="font-bold text-white mt-1">Social Media</p>
          </div>

          <div className="bg-[#0b0b5d] text-center flex flex-col gap-2 py-4">
            <p className="text-white font-bold">Social Media Content Creation</p>
            <p className="text-white font-bold">Video Production</p>
            <p className="text-white font-bold">Photo Editing</p>
            <p className="text-white font-bold">Vercel</p>
            <p className="text-white font-bold">Research</p>
            <p className="text-white font-bold">Planning</p>
            <p className="text-white font-bold">Data Analysis</p>
          </div>
        </div> */}
      </div>
      <div className="back__to_top absolute hidden md:block bottom-10 -right-20">
          <a href="#hero">
            <BsFillArrowUpCircleFill className="text-white text-4xl cursor-pointer hover:scale-125 transition ease-linear" />
          </a>
        </div>
    </section>
  );
};

export default Skills;
