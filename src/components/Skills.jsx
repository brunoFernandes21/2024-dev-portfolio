import { FaHtml5 } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";

const Skills = () => {
  return (
    <section className="tech__skills mt-14 overflow-hidden h-full">
      <h2>Technical Skills</h2>
      <p className="mt-6">
        I have worked with some of the most popular tech in the Web Development
        world from Backend to Frontend
      </p>
      <div className="flex items-start gap-4  overflow-x-auto whitespace-nowrap max-w-full py-8">

        <div className="rounded-t-lg shadow-sm shadow-gray-400 min-w-full ">

          <div className="flex justify-center items-center flex-col bg-[#0c225b] rounded-t-lg py-2">
            <FaHtml5 className="text-white text-4xl" />
            <p className="font-bold text-white">Front End</p>
          </div>

          <div className="bg-[#0b0b5d] text-center flex flex-col gap-2 py-4">
            <p className="text-white font-bold">HTML</p>
            <p className="text-white font-bold">CSS / Tailwind CSS</p>
            <p className="text-white font-bold">Javascript</p>
            <p className="text-white font-bold">React / React ToolKit</p>
            <p className="text-white font-bold">NextJs</p>
            <p className="text-white font-bold">Web Design</p>
            <p className="text-white font-bold">Wire Frame</p>
          </div>
        </div>

        <div className="flex justify-center flex-col rounded-t-lg shadow-sm shadow-gray-400 min-w-full">
          <div className="flex justify-center items-center flex-col bg-[#0c225b] rounded-t-lg py-2">
            <FaCode className="text-white text-4xl" />
            <p className="font-bold text-white">Back End</p>
          </div>

          <div className="bg-[#0b0b5d] text-center flex flex-col gap-2 py-4">
            <p className="text-white font-bold">Node JS</p>
            <p className="text-white font-bold">Express JS</p>
            <p className="text-white font-bold">MongoDB</p>
            <p className="text-white font-bold">Firebase</p>
            <p className="text-white font-bold">PostGreSQL</p>
            <p className="text-white font-bold">Mongoose</p>
            <p className="text-white font-bold">API</p>
          </div>
        </div>

        <div className="flex justify-center flex-col rounded-t-lg shadow-sm shadow-gray-400 min-w-full">
          <div className="flex justify-center items-center flex-col bg-[#0c225b] rounded-t-lg py-2">
            <FaTools className="text-white text-4xl" />
            <p className="font-bold text-white mt-1">Other</p>
          </div>

          <div className="bg-[#0b0b5d] text-center flex flex-col gap-2 py-4">
            <p className="text-white font-bold">Git</p>
            <p className="text-white font-bold">GitHub</p>
            <p className="text-white font-bold">Netlify</p>
            <p className="text-white font-bold">Vercel</p>
            <p className="text-white font-bold">VS Code</p>
            <p className="text-white font-bold">Jest</p>
            <p className="text-white font-bold">Test Driven Development</p>
          </div>
        </div>

        <div className="flex justify-center flex-col rounded-t-lg shadow-sm shadow-gray-400 min-w-full">
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
        </div>

      </div>
    </section>
  );
};

export default Skills;
