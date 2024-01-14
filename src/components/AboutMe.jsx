
const AboutMe = () => {
  return (
    <section id="about" className="about__me">
      <h2>About Me</h2>
      <div className="about__content">
        <div className="about__text">
          <p>
            I am <strong>passionate about learning</strong> in general and{" "}
            <strong>building Software and Web Applications</strong>. I studied
            Computer Science at The University of Leeds and recently did a Boot-camp
            in Software Engineering at Northcoders.
          </p>
          <p>
            My goal is to become a{" "}
            <strong>successful Software Developer</strong>. In 5 years I see
            myself working as a Full Stack Software Developer. 15 years ago I
            was living on an Island and could hardly introduce myself in English
            and today I am an aspiring Software Developer in England. This is
            mind blowing!
          </p>
          <p>
            <strong>Teaching myself English</strong> has been my greatest
            achievement, as it has unlocked doors to opportunities and enabled
            me to achieve things that I could not have done otherwise. Dreams do
            come true when you believe it and work hard.
          </p>
        </div>

        <div className="contact__image__div mt-6 flex justify-center overflow-hidden mx-auto w-[200px] h-[200px] bg-[#1b1b8e] rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
          <img
            src="/programming.svg"
            width={250}
            height={250}
            alt="Picture of a programmer at his desk"
            className="contact__image opacity-200"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
