const AboutMe = () => {
  return (
    <section id="about" className="about__me border  mt-14">
      <h2>About Me</h2>
      <p className="mt-6">
        I am passionate about learning in general and building Software
        Applications. I studied Computer Science at The University of Leeds and
        have did a Boot-camp in Software Engineering at Northcoders.
      </p>
      <br />
      <p>
        My goal is to become a successful Software Developer. In 5 years I see
        myself working as a Full Stack Software Developer. 15 years ago I was
        living on an Island and could hardly introduce myself in English. This
        is mind blowing!
      </p>
      <br />
      
      <p>
        Teaching myself English has been my greatest achievement, as it has
        unlocked doors to opportunities and enabled me to achieve things that I
        could not have done otherwise. Dreams do come true when you believe it
        and work hard.
      </p>
      <div className="mt-6 flex justify-center overflow-hidden mx-auto w-[200px] h-[200px] bg-[#1b1b8e] rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <img src="/src/assets/programming.svg" width={250} height={250} alt="Picture of a programmer at his desk" className="opacity-200"/>
      </div>
    </section>
  );
};

export default AboutMe;
