import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact mt-14">
      <h2>Contact</h2>
      <div className="bg-slate-900 p-4 mt-4 rounded-md">
        <p>
          <strong>Looking for a Junior Software Developer</strong> to join your
          team?
        </p>
        <p className="mt-2">
          Drop me an email at <strong>brunoaf1523@gmail.com</strong>
        </p>
        <div className="flex justify-start items-center gap-2 mt-4">
          <p className="text-white text-lg">Socials</p>
          <FaGithub className="text-white "/>
          <FaLinkedin className="text-white "/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
