const AboutMe = () => {
  return (
    <section id="about" className="about__me">
      <h2>About Me</h2>
      <div className="about__content">
        <div className="about__text">
          <p>
            I have always been passionate about learning, whether it&apos;s
            building software and web applications or mastering new skills. I
            studied Computer Science at the University of Leeds and recently
            completed a Software Engineering Bootcamp at Northcoders to sharpen
            my skills.
          </p>
          <p>
            My goal is to become a successful Full Stack Software Developer.
            It&apos;s incredible to think that 15 years ago, I was living on an
            island, barely able to introduce myself in English—yet today,
            I&apos;m pursuing a tech career in England. That journey still
            amazes me!
          </p>
          <p>
            Teaching myself English has been my greatest achievement. It opened
            doors to opportunities I never imagined possible and shaped the
            person I am today. Because of this, I&apos;m passionate about
            helping others on their English learning journey.
          </p>
          <p>
            I run a YouTube channel, &apos;English with Bruno McDowell,&apos;
            where I share practical tips, lessons, and advice to help learners
            improve their English skills in a fun and engaging way. If
            there&apos;s one thing I&apos;ve learned, it&apos;s this: dreams do
            come true when you believe in them and put in the work.
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
