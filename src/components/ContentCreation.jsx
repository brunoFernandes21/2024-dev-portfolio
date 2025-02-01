import { FaYoutube, FaTiktok } from "react-icons/fa";

import { Link } from "react-router-dom";

const ContentCreation = () => {
  return (
    <section id="content-creation" className="content__creation">
      <h2>Content Creation</h2>
      <div className="mt-8">
        <p>
          Beyond software development, I am also passionate about helping people
          improve their English communication skills. <br /> I create engaging
          content on YouTube (English with Bruno McDowell) and TikTok, where I
          share:
        </p>
        <br />
        <p>
          1 - Practical English lessons to help learners sound natural and
          confident. <br /> 2 - Pronunciation tips to refine fluency. Real-life
          conversations and expressions that learners can use every day. <br />{" "}
          3 - Common mistakes to avoid when speaking English.
        </p>
        <br />
        <div className="flex flex-col lg-flex-row gap-4">
          <p>
            My goal is to make English learning fun, accessible, and practical
            for learners worldwide.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.youtube.com/@BrunoMCDowell" target="_blank">
              <FaYoutube
                size={22}
                className="hover:text-slate-200 transition-all ease-in-out duration-200 hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@englishwithbrunomcdowell"
              target="_blank"
            >
              <FaTiktok
                size={22}
                className="hover:text-slate-200 transition-all ease-in-out duration-200 hover:scale-125"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
