import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="contact mt-14 rounded-lg5 relative ">
      <div className="contact__content ">
        <h2>Contact</h2>
        <div className="contact__info mt-4 shadow-md bg-slate-900 shadow-white p-4 rounded-lg">
          <p className="text-sm">
            Looking for a <strong>Junior Software Developer</strong> to join
            your team?
          </p>
          <p className=" mt-2">
            Drop me an email at <strong>brunoaf1523@gmail.com</strong>
          </p>
        </div>
      </div>

      <div className=" contact__socials gap-4 p-4">
        <h2 className="text-lg">Socials</h2>
        <div className="socials__icons flex gap-4">
          <Link to="https://github.com/brunoFernandes21" target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            to="https://linkedin.com/in/bruno-fernandes-879b0725a"
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
