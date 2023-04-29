import Layout from "../components/Layout";
import Head from "next/head";
import TransitionEffect from "../components/TransitionEffect";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "../components/Icons";
import Hireme from "../components/Hireme";
import ProfilePic from "../../public/images/profile/profile1.png";
import BulbImg from "../../public/images/bulb_image.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hanzlah&apos;s Portfolio | Home</title>
        <meta
          name="description"
          content="A fully responsive beautiful portfolio built with Next.js, tailwind css and framer motion."
        />
      </Head>

      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-[70%] lg:inline-block md:w-full">
              <Image
                src={ProfilePic}
                alt="profile_image"
                className="w-full h-auto object-contain"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>

            <div className="w-1/2 lg:w-full flex flex-col items-center self-center lg:text-center">
              <AnimatedText
                className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-6xl md:!text-4xl sm:!text-3xl !normal-case"
                text="Hi I'm Hanzlah, a full stack web developer"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turn ideas
                and visions into innovative and responsive designs and then
                making everything fully functional using complex logics and
                apis. Explore my latest projects, showcasing my expertise in web
                development.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="mailto:hanzlahjavaid101@gmail.com"
                  target="_blank"
                  download={true}
                  className="flex items-center transition-colors ease-linear duration-75 bg-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light text-light py-2.5 px-6 md:py-2 md:px-4 md:text-base rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-transparent hover:border-dark"
                >
                  Hire me
                  <LinkArrow className={"w-6 md:w-5 ml-1"} />
                </Link>

                <Link
                  className="ml-4 text-lg font-medium capitalize md:text-base dark:text-light text-dark underline"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <Hireme />

        <div className="absolute right-8 bottom-8 inline-block w-24 lg:hidden">
          <Image src={BulbImg} alt="bulb_image" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
