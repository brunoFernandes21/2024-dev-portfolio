import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileNavigation = ({ setShowNav }) => {
  const downloadCV = () => {
    fetch("Bruno Fernandes CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Bruno-Developer CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <ul className="header__links__mobile flex justify-center items-center gap-8">
        <AiOutlineClose
          onClick={() => setShowNav(false)}
          className="close__nav cursor-pointer text-4xl hover:text-slate-900"
        />
        <li
          onClick={() => setShowNav(false)}
          className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold"
        >
          <a
            href="#about"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>About Me</span>
          </a>
        </li>
        <li
          onClick={() => setShowNav(false)}
          className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold"
        >
          <a
            href="#skills"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>Skills</span>
          </a>
        </li>
        <li
          onClick={() => setShowNav(false)}
          className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold"
        >
          <a
            href="#projects"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>Projects</span>
          </a>
        </li>
        <li
          onClick={() => setShowNav(false)}
          className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold"
        >
          <a
            href="#contact"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>Contact</span>
          </a>
        </li>
        {/* <li className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold">
        <button onClick={downloadCV} className="transition duration-150 ease-in hover:text-slate-400">Get CV</button>
        </li> */}

        <section className="social__icons__mobile flex flex-col justify-center items-center gap-2 mt-10 p-2">
          <div>
            <span className="font-bold text-xl">Socials</span>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Link to="https://github.com/brunoFernandes21" target="_blank">
              <FaGithub className="text-3xl" />
            </Link>
            <Link
              to="https://linkedin.com/in/bruno-fernandes-879b0725a"
              target="_blank"
            >
              <FaLinkedin className="text-3xl" />
            </Link>
          </div>
        </section>
      </ul>
    </>
  );
};

export default MobileNavigation;
