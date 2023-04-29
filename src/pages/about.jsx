import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Image from "next/image";
import ProfileImg from "../../public/images/profile/me.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import TransitionEffect from "../components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>Hanzlah&apos;s Portfolio | About</title>
        <meta
          name="description"
          content="About me, my experience, expertise and skills."
        />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col dark:text-light items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="mb-16 sm:mb-8 lg:!text-6xl sm:!text-5xl xs:!text-4xl"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start md:col-span-8 justify-start xl:col-span-4 md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium">
                Hi, I&apos;m <span className="font-bold">Hanzlah Javaid</span>,
                a full stack web developer with a passion for creating
                beautiful, responsive, completely functional, and feature rich
                experiences. With over a year of experience in the field, I am
                always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>

              <p className="font-medium my-4">
                I believe that design is more than just making things look
                pretty, it&apos;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                But compiling that beautiful design with complex logics and
                making everything functional is another key task.
                Authentication, authorization, payment integrations and bunch of
                other features are the basic needs of any kind of website today.
              </p>
            </div>

            <div className="col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max rounded-2xl border-2 border-dark bg-light dark:bg-dark dark:border-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ProfileImg}
                alt="profile_image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-center gap-y-24 gap-x-4 md:order-3">
              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl xl:text-center md:text-base sm:text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold">
                  <AnimatedNumbers value={16} />+
                </span>
                <h2 className="text-lg xl:text-center md:text-base sm:text-sm font-medium capitalize dark:text-light/75 text-dark/75">
                  Months Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
}
