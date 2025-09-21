import Link from "next/link";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        key={isOpen ? "open" : "close"}
        initial={{ y: -200, opacity: 0 }} // Start above the screen, hidden
        animate={{ y: 0, opacity: 1 }} // Animate to visible
        exit={{ y: -200, opacity: 0 }} // Exit animation, slides up and hides
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth easin
        className={`h-full w-full flex justify-center pt-20 fixed top-0 z-50 mobile-menu-glass-bg ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col w-full justify-start px-7 text-xl uppercase">
          <Link href="/#about" onClick={toggleMenu}>
            <li className="w-full text-white text-center h-16 flex justify-center items-center">
              ABOUT
            </li>
          </Link>
          <Link href="/#projects" onClick={toggleMenu}>
            <li className="w-full text-white text-center h-16 flex justify-center items-center">
              PROJECTS
            </li>
          </Link>
          <Link href="/#our-stories" onClick={toggleMenu}>
            <li className="w-full text-white text-center h-16 flex justify-center items-center">
              STORIES
            </li>
          </Link>
          <Link href="/#sponsors" onClick={toggleMenu}>
            <li className="w-full text-white text-center h-16 flex justify-center items-center">
              SPONSORS
            </li>
          </Link>
          <Link href="/recruitment" onClick={toggleMenu}>
            <li className="w-full text-white uppercase text-center h-16 flex justify-center items-center">
              recruitment
            </li>
          </Link>
          <Link href="/members" onClick={toggleMenu}>
            <li className="w-full text-white text-center h-16 flex justify-center items-center">
              MEMBERS
            </li>
          </Link>
          <motion.li
            key={isOpen ? "open" : "close"}
            initial={{ rotate: 0 }} // Initial rotation angle
            animate={{ rotate: 360 }} // Rotate to 360 on click, back to 0 on second click
            transition={{
              duration: 2, // Duration of the animation
              ease: "easeInOut", // Smooth easing function
            }}
            onClick={() => {
              toggleMenu();
            }}
            className="w-full text-white text-center h-16 flex justify-center items-center"
          >
            <CloseIcon fontSize="large" />
          </motion.li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default MobileMenu;
