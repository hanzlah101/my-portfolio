import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 sm:text-base border-dark dark:border-white dark:text-light font-medium text-lg">
      <Layout className="!py-8 flex items-center lg:flex-col lg:!py-6 justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

        <div className="flex items-center gap-1 lg:py-2">
          Built with
          <span className="text-2xl text-primary dark:text-primaryDark">
            &#9825;
          </span>
          By
          <span className="underline underline-offset-2 cursor-pointer">
            Hanzlah Javaid
          </span>
        </div>

        <Link href={"/contact"} className="underline underline-offset-2">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
