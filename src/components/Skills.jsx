import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light px-6 py-3 absolute shadow-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-7xl mt-48 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light p-8 shadow-dark cursor-pointer lg:m-6 md:p-4 xs:text-xs xs:p-2"
        >
          Web
        </motion.div>

        <Skill name={"NextJS"} x={"0vw"} y={"-20.4vw"} />
        <Skill name={"Authentication"} x={"-34vw"} y={"-9vw"} />
        <Skill name={"Authorization"} x={"34vw"} y={"-9vw"} />
        <Skill name={"Prisma"} x={"23vw"} y={"16vw"} />
        <Skill name={"ExpressJS"} x={"-23vw"} y={"16vw"} />
        <Skill name={"MongoDB"} x={"16vw"} y={"-14vw"} />
        <Skill name={"Tailwind CSS"} x={"-16vw"} y={"-14vw"} />
        <Skill name={"Formik/Yup"} x={"-32vw"} y={"4vw"} />
        <Skill name={"Mongoose"} x={"32vw"} y={"4vw"} />
        <Skill name={"Javascript"} x={"0vw"} y={"13vw"} />
        <Skill name={"Typescript"} x={"0vw"} y={"-12vw"} />
        <Skill name={"CSS"} x={"-15vw"} y={"0vw"} />
        <Skill name={"HTML"} x={"15vw"} y={"0vw"} />
        <Skill name={"ReactJS"} x={"0vw"} y={"23vw"} />
      </div>
    </>
  );
};

export default Skills;
