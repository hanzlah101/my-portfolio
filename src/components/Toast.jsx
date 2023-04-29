import React from "react";
import { motion } from "framer-motion";

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-4 flex items-center w-full z-20 left-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center bg-dark text-light dark:bg-light dark:text-dark w-fit px-4 py-2 rounded-md"
      >
        <div>{message}</div>
      </motion.div>
    </div>
  );
};

export default Toast;
