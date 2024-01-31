import { FaCode } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavigation from "./MobileNavigation";
import { Link } from "react-router-dom";

const Header = ({ showNav, setShowNav }) => {
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
    <nav
      id="hero"
      className={`header__container h-20 ${showNav ? "show__nav" : ""}`}
    >
      <section className="logo flex items-center gap-2">
        <FaCode className="text-4xl" />
        <h1 className="text-xl font-bold">Software Developer</h1>
      </section>

      <ul
        className="desktop__navigation__links flex justify-center items-center gap-8"
      >
        <li className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold">
          <a
            href="#about"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>About Me</span>
          </a>
        </li>
        <li className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold">
          <a
            href="#skills"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>Skills</span>
          </a>
        </li>
        <li className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold">
          <a
            href="#projects"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>Projects</span>
          </a>
        </li>
        <li className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold">
          <a
            href="#contact"
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            <span>Contact</span>
          </a>
        </li>
        <li className="text-lg hover:text-slate-500 transition ease-in-out cursor-pointer font-bold">
          <button
            onClick={downloadCV}
            className="transition duration-150 ease-in hover:text-slate-400"
          >
            Get CV
          </button>
        </li>
      </ul>

      <section className="social__icons flex items-center gap-4">
        <Link to="https://github.com/brunoFernandes21" target="_blank">
          <FaGithub className="text-3xl" />
        </Link>
        <Link
          to="https://linkedin.com/in/bruno-fernandes-879b0725a"
          target="_blank"
        >
          <FaLinkedin className="text-3xl" />
        </Link>
      </section>

      <MobileNavigation setShowNav={setShowNav} />

      <button className="mobile__icon hover:bg-slate-900 rounded p-1">
        <GiHamburgerMenu
          onClick={() => setShowNav(true)}
          className=" cursor-pointer text-4xl"
        />
      </button>
    </nav>
  );
};

export default Header;
