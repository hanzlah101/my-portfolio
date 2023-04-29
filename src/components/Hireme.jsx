import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="fixed lg:absolute lg:right-8 md:right-0 lg:left-auto lg:top-0 lg:bottom-auto bottom-4 left-4 flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center relative w-48 lg:w-24 h-auto">
        <CircularText
          className={"animate-spin-slow fill-dark dark:fill-light"}
        />
        <Link
          href={"mailto:hanzlahjavaid101@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light dark:hover:border-light dark:text-dark text-light shadow-md rounded-full border border-dark w-20 lg:w-12 lg:h-12 lg:text-[10px] lg:font-normal h-20 shadow-gray-100/20 font-semibold hover:bg-light dark:hover:bg-dark dark:hover:text-light hover:text-dark transition"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
