import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  InstagramIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  RedditIcon,
  SunIcon,
  FacebookIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const CostomLink = ({ href, title, className = "" }) => (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1.5px] inline-block transition-[width] dark:bg-light ease duration-300 bg-dark absolute left-0 -bottom-0.5 ${
          router.asPath === href ? "w-full" : "group-hover:w-full w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );

  const CostomMobileLink = ({ href, title, className = "", toggle }) => (
    <button
      onClick={() => {
        toggle();
        router.push(href);
      }}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[1.5px] inline-block transition-[width] dark:bg-dark ease duration-300 bg-light absolute left-0 -bottom-0.5 ${
          router.asPath === href ? "w-full" : "group-hover:w-full w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );

  return (
    <header className="w-full z-10 relative dark:text-light px-32 py-8 lg:px-16 md:px-12 sm:px-8 font-medium flex items-center justify-between">
      <button
        onClick={handleClick}
        className="lg:flex hidden flex-col z-20 justify-center items-center"
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`block bg-dark dark:bg-light transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CostomLink href={"/"} title={"Home"} className="mr-4" />
          <CostomLink href={"/about"} title={"About"} className="mx-4" />
          <CostomLink href={"/projects"} title={"Projects"} className="mx-4" />
          <CostomLink href={"/contact"} title={"Contact"} className="ml-4" />
        </nav>

        <nav className="flex items-center flex-wrap">
          <motion.a
            href={"https://www.facebook.com/profile.php?id=100092311505914"}
            target="_blank"
            whileHover={{ y: -2 }}
            className="w-6 mr-3"
          >
            <FacebookIcon />
          </motion.a>

          <motion.a
            href={"https://www.linkedin.com/in/hanzlah-javaid-43549126b/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          <motion.a
            href={"https://www.instagram.com/hanzlah_101/"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InstagramIcon />
          </motion.a>

          <motion.a
            href={"https://www.reddit.com/user/hanzlah_101"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <RedditIcon />
          </motion.a>

          <motion.a
            href={"https://github.com/hanzlah101"}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <GithubIcon />
          </motion.a>

          <button
            className={`ml-5 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className={"w-6 h-6 fill-dark"} />
            ) : (
              <MoonIcon className={"w-6 h-6 fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={handleClick}
          className="top-0 left-0 fixed w-screen h-screen z-10 bg-dark/50 dark:bg-light/30 cursor-pointer"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] z-30 bg-dark/90 cursor-default dark:bg-light/75 rounded-lg backdrop-blur-md py-32 flex-col fixed flex justify-between items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <nav className="flex flex-col items-center justify-center">
              <CostomMobileLink
                toggle={handleClick}
                href={"/"}
                title={"Home"}
              />
              <CostomMobileLink
                toggle={handleClick}
                href={"/about"}
                title={"About"}
              />

              <CostomMobileLink
                toggle={handleClick}
                href={"/projects"}
                title={"Projects"}
              />

              <CostomMobileLink
                toggle={handleClick}
                href={"/contact"}
                title={"Contact"}
              />
            </nav>

            <nav className="flex items-center flex-wrap justify-center mt-2">
              <motion.a
                href={"https://www.facebook.com/profile.php?id=100092311505914"}
                target="_blank"
                whileHover={{ y: -2 }}
                className="w-6 mx-1"
              >
                <FacebookIcon />
              </motion.a>

              <motion.a
                href={"https://www.linkedin.com/in/hanzlah-javaid-43549126b/"}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-1"
              >
                <LinkedInIcon />
              </motion.a>

              <motion.a
                href={"https://www.instagram.com/hanzlah_101/"}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-1"
              >
                <InstagramIcon />
              </motion.a>

              <motion.a
                href={"https://github.com/hanzlah101"}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-1 bg-light rounded-full dark:bg-dark"
              >
                <GithubIcon />
              </motion.a>

              <motion.a
                href={"https://www.reddit.com/user/hanzlah_101"}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-1"
              >
                <RedditIcon />
              </motion.a>

              <button
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                  mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
                }`}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "dark" ? (
                  <SunIcon className={"fill-light"} />
                ) : (
                  <MoonIcon className={"fill-light"} />
                )}
              </button>
            </nav>
          </motion.div>
        </div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
