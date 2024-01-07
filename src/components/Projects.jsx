import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="projects mt-14 overflow-hidden">
      <h2>Projects</h2>
      <p className="mt-6">
        These projects demonstrate my expertise with practical examples of some
        of my work, including brief descriptions and links to code repositories
        and live demos. Click here to check out all the projects.
      </p>

      <div className="flex items-start gap-4  overflow-x-auto whitespace-nowrap max-w-full py-8">
        
        {/* Northcoders News  */}
        <div className="rounded-t-lg shadow-sm shadow-gray-400 overflow-hidden whitespace-pre-wrap break-words min-w-full bg-[#2f18a1]">
          <img
            src="/src/assets/northcoders.png"
            alt="Image of northcoders news homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4">
            <h3 className="font-bold text-lg text-white">
              Project title: Northcoders News
            </h3>
            <p className="min-w-full">
              A Full-Stack is a social news aggregation, web content rating and
              discussion website. Northcoders News has articles which are
              divided into topics, and each article has user-curated ratings
              from upvotes and downvotes using the API. Users can also comments
              on any article.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">Tech Stack</h3>
              <div className="flex gap-4 font-bold">
                <p>React</p>
                <p>CSS</p>
                <p>Tailwind CSS</p>
                <p>PostGreSQL</p>
                <p>Axios</p>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Live</span>
              </Link>
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Total fitness */}
        <div className="rounded-t-lg shadow-sm shadow-gray-400 overflow-hidden whitespace-pre-wrap break-words min-w-full bg-[#2f18a1]">
          <img
            src="/src/assets/fitness1.png"
            alt="Image of northcoders news homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4 whitespace-pre-wrap break-words">
            <h3 className="font-bold text-lg text-white">
              Project title: Total Fitness
            </h3>
            <p>
            Total_Fitness is a MERN application created to help gym goers keep track of their workouts. Key functionalities include, user sign up and sign in, users can perform all CRUD operations. Includes profile page where user can update their info or delete their account.
            </p>
            <div className="mt-4">
              <h3 className="font-bold text-lg text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-2 font-bold">
                <p>React</p>
                <p>CSS</p>
                <p>Tailwind CSS</p>
                <p>MongoDb</p>
                <p>Firebase</p>
                <p>Express</p>
              </div>
            </div>

            <div className="flex gap-6 mt-4">
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Live</span>
              </Link>
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

         {/* Recipe Search */}
        <div className="rounded-t-lg shadow-sm shadow-gray-400 overflow-hidden whitespace-pre-wrap break-words min-w-full bg-[#2f18a1]">
          <img
            src="/src/assets/meals-app.png"
            alt="Image of northcoders news homepage"
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
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Live</span>
              </Link>
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bruno's blog */}
        <div className="rounded-t-lg shadow-sm shadow-gray-400 overflow-hidden whitespace-pre-wrap break-words min-w-full bg-[#2f18a1]">
          <img
            src="/src/assets/brunos_blog.png"
            alt="Image of northcoders news homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4">
            <h3 className="font-bold text-lg text-white">
              Project title: Bruno&apos;s Blog
            </h3>
            <p className="min-w-full">
            Learning Redux Toolkit by building this simple social media app feed. Although the app is not fully functional, users can perform various actions such as react to posts, view posts, update own posts and delete posts. The objective of this project was to learn React Toolkit. 
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
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Live</span>
              </Link>
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

        {/* News Homepage */}
        <div className="rounded-t-lg shadow-sm shadow-gray-400 overflow-hidden whitespace-pre-wrap break-words min-w-full bg-[#2f18a1]">
          <img
            src="/src/assets/news-homepage.png"
            alt="Image of northcoders news homepage"
            className="rounded-t-lg"
          />
          <div className="p-2 py-4">
            <h3 className="font-bold text-lg text-white">
              Project title: News Homepage
            </h3>
            <p className="min-w-full">
            This is a News Homepage site that I built as a way of practicing web design and put my css skills into practice. The site and not fully responsive but it has mobile and desktop responsiveness as my main focus was on mobile and desktop. 
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
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Live</span>
              </Link>
              <Link className="font-bold block bg-white py-1 px-4 rounded-full text-slate-800">
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
