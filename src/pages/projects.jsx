import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/Icons";
import TransitionEffect from "../components/TransitionEffect";
import Project1 from "../../public/images/projects/zwitter-project.png";
import Project2 from "../../public/images/projects/airbnb-project.png";
import Project3 from "../../public/images/projects/netflix-clone.png";
import Project4 from "../../public/images/projects/react-portfolio.png";
import Project5 from "../../public/images/projects/react-restraunt.png";
import Project6 from "../../public/images/projects/google-clone.png";
import Toast from "../components/Toast";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full relative rounded-br-2xl flex items-center lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 p-12 justify-between rounded-3xl border border-dark bg-light dark:border-light dark:bg-dark dark:text-light shadow-2xl">
      <div className="absolute top-0 -right-3 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] -z-10 rounded-br-3xl w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 border border-gray-200 dark:border-gray-700 rounded-lg transition duration-300"
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        />
      </Link>

      <div className="w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6">
        <span className="font-medium text-primary dark:text-primaryDark text-xl xs:text-base">
          {type}
        </span>

        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-2 transition-all sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light py-2 px-6 text-lg font-semibold hover:scale-105 sm:px-4 sm:text-base transition"
          >
            View Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-dark dark:border-light dark:bg-dark dark:text-light p-6 xs:p-4 relative flex-col bg-light shadow-2xl">
      <div className="absolute top-0 -right-3 md:-right-2 md:-[101%] md:h-[102%] xs:rounded-[1.5rem] -z-10 w-[101%] rounded-br-3xl h-[103%] rounded-[2rem] bg-dark dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition duration-300"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="font-medium text-primary dark:text-primaryDark text-xl lg:text-lg md:text-base">
          {type}
        </span>

        <Link href={link} target="_blank">
          <h2 className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-2 transition-all lg:text-2xl md:text-xl">
            {title}
          </h2>
        </Link>

        <div className="flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg underline font-semibold md:text-base"
          >
            Demo
          </Link>

          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Hanzlah&apos;s Portfolio | Projects</title>
        <meta
          name="description"
          content="My experience and expertise into action."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-12 lg:!text-6xl sm:!text-5xl xs:!text-3xl"
            text={"Imagination Trumps Knowledge!"}
          />

          <Toast
            message={
              <div>
                Demo credentials for every site are
                <br />
                <span className="font-bold mx-1">Email:</span>
                john@gmail.com
                <br />
                <span className="font-bold mx-1">Password:</span>123456
              </div>
            }
          />

          <div className="grid grid-cols-12 gap-x-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Full stack twitter clone"
                summary="A feature-rich twitter clone named zwitter built with Next JS. Everything is completely functional and UI is completely responsive. Key features include photo, video and gif separation/filtration, emoji, authentication, authoriation, ability to create, like unlike, create and delete comment, bookmark and delete the post. Trending posts, friend suggestions, follow unfollow, live search bar and bunch of other features are also added."
                type="Featured Project"
                link={"https://zwitter-six.vercel.app/"}
                github={"https://github.com/hanzlah101/zwitter"}
                img={Project1}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Full stack netflix clone"
                type="Full stack Project"
                link={"https://netflix-eosin-nine.vercel.app/"}
                github={"https://github.com/hanzlah101/netflix"}
                img={Project3}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Google Clone Project"
                type="Next JS Project"
                link={"https://google-clone-olive-eight.vercel.app"}
                github={"https://github.com/hanzlah101/google-clone"}
                img={Project6}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Full stack airbnb clone"
                summary="A full stack airbnb clone built with Next JS. A very complex search and filtering system is added. Key features include create and delete, favourite and unfavourite and reserve a property. You can also filter my properties, trips and reservations and much more."
                type="Featured Project"
                link={"https://airbnb-gh0qffdlg-hanzlah101.vercel.app/"}
                github={"https://github.com/hanzlah101/airbnb"}
                img={Project2}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React JS portfolio"
                type="React JS project"
                link={"https://portfolio-223vbsv6q-hanzlah101.vercel.app/"}
                github={"https://github.com/hanzlah101/portfolio"}
                img={Project4}
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="React JS restraunt website"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                type="React JS Project"
                link={"https://restraunt-silk.vercel.app/"}
                github={"https://github.com/hanzlah101/restraunt"}
                img={Project5}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
