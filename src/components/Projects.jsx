import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Projects = () => {
  return (
    <section id="projects" className="projects relative">
      <h2>Projects</h2>
      <p className="mt-6">
        These projects demonstrate my expertise with practical examples of some
        of my work, including brief descriptions and links to code repositories
        and live demos. Click{" "}
        <strong>
          <a
            href="https://brunofer-projects.netlify.app "
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </strong>{" "}
        to check out all the projects.
      </p>

      <div className="projects__slider flex items-start gap-4 whitespace-nowrap max-w-full py-8">
        {/* Jobsboard */}
        <div className="project__cards rounded-lg whitespace-pre-wrap break-words bg-[#0b0b5d]">
          <img
            src="/react-jobsboard.png"
            alt="Image of react jobsboard homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4 rounded-lg">
            <h3 className="font-bold text-lg text-white">
              Project title: React Jobsboard
            </h3>
            <p className="min-w-full">
              A Full Stack React Application that enables users to perform many
              tasks including, post jobs, view available jobs, update jobs,
              delete jobs. I plan to add user authentication in the future and
              add more functionalities if I decide to make major improvements.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">Tech Stack</h3>
              <div className="flex gap-4 font-bold">
                <p>React</p>
                <p>CSS</p>
                <p>Tailwind CSS</p>
                <p>Firebase</p>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <Link
                to="https://bf-react-jobsboard.netlify.app/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Live</span>
              </Link>
              <Link
                to="https://github.com/brunoFernandes21/react-job-board"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Total fitness */}
        <div className="project__cards rounded-t-lg rounded-lg whitespace-pre-wrap break-words bg-[#0b0b5d]">
          <img
            src="/fitness1.png"
            alt="Image of total fitness homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4 whitespace-pre-wrap break-words">
            <h3 className="font-bold text-lg text-white">
              Project title: Total Fitness
            </h3>
            <p>
              Total_Fitness is a MERN application created to help gym goers keep
              track of their workouts. Key functionalities include, user sign up
              and sign in, users can perform all CRUD operations. Includes
              profile page where user can update their info or delete their
              account.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 font-bold">
                <p>React</p>
                <p>CSS</p>
                {/* <p>Tailwind CSS</p> */}
                <p>MongoDb</p>
                <p>Firebase</p>
                <p>Express</p>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <Link
                to="https://github.com/brunoFernandes21/Total_Fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recipe Search */}
        <div className="project__cards rounded-t-lg rounded-lg whitespace-pre-wrap break-words bg-[#0b0b5d]">
          <img
            src="meals-app.png"
            alt="Image of meals app homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4">
            <h3 className="font-bold text-lg text-white">
              Project title: Meals App
            </h3>
            <p className="min-w-full">
              This is a recipe application that fetches recipes from an external
              api and display them on the page. Users are able to perform
              various actions such as search for recipes using the search
              component, add recipes to favourite and get a random recipe
              recommendation.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">Tech Stack</h3>
              <div className="flex gap-4 font-bold">
                <p>React</p>
                <p>CSS</p>
                <p>Tailwind CSS</p>
                <p>Axios</p>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <Link
                to="https://brunos-meals-app.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Live</span>
              </Link>
              <Link
                to="https://github.com/brunoFernandes21/vite-meals-app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bruno's blog */}
        <div className="project__cards rounded-t-lg rounded-lg whitespace-pre-wrap break-words bg-[#0b0b5d]">
          <img
            src="/brunos_blog.png"
            alt="Image of brunos blog homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4">
            <h3 className="font-bold text-lg text-white">
              Project title: Bruno&apos;s Blog
            </h3>
            <p className="min-w-full">
              Learning Redux Toolkit by building this simple social media app
              feed. Although the app is not fully functional, users can perform
              various actions such as react to posts, view posts, update and
              delete posts. It was an excellent way to learn Redux Toolkit.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">Tech Stack</h3>
              <div className="flex gap-4 font-bold">
                <p>React</p>
                <p>CSS</p>
                <p>Tailwind CSS</p>
                <p>Axios</p>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <Link
                to="https://bfblog.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Live</span>
              </Link>
              <Link
                to="https://github.com/brunoFernandes21/brunos-blog-redux"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* News Homepage */}
        <div className="project__cards rounded-t-lg rounded-lg whitespace-pre-wrap break-words bg-[#0b0b5d]">
          <img
            src="/news-homepage.png"
            alt="Image of news homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4">
            <h3 className="font-bold text-lg text-white">
              Project title: News Homepage
            </h3>
            <p className="min-w-full">
              This is a News Homepage site that I built as a way of practicing
              web design and put my css skills into practice. The site is not
              fully responsive but it has mobile and desktop responsiveness as
              my main focus was on mobile and desktop.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">Tech Stack</h3>
              <div className="flex gap-4 font-bold">
                <p>React</p>
                <p>CSS</p>
                <p>Tailwind CSS</p>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <Link
                to="https://bf-news-homepage.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Live</span>
              </Link>
              <Link
                to="https://github.com/brunoFernandes21/news-homepage"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800"
              >
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="back__to_top absolute hidden md:block bottom-10 -right-20">
        <a href="#hero">
          <BsFillArrowUpCircleFill className="text-white text-4xl cursor-pointer hover:scale-125 transition ease-linear" />
        </a>
      </div>
    </section>
  );
};

export default Projects;
