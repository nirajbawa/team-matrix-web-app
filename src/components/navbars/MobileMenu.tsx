import Link from 'next/link'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

function MobileMenu({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) {

    return (
        <AnimatePresence>
            <motion.div
                key={isOpen ? "open" : "close"}
                initial={{ y: -200, opacity: 0 }} // Start above the screen, hidden
                animate={{ y: 0, opacity: 1 }} // Animate to visible
                exit={{ y: -200, opacity: 0 }} // Exit animation, slides up and hides
                transition={{ duration: 1, ease: "easeInOut" }} // Smooth easin

                className={`h-full w-full flex justify-center pt-20 fixed top-0 z-50 mobile-menu-glass-bg ${isOpen ? "block" : "hidden"}`}>
                <ul className='flex flex-col w-full justify-start px-7 text-xl'>
                    <li className='w-full text-white text-center h-16 flex justify-center items-center'>
                        <Link href="" onClick={toggleMenu}>
                            SPONSORS
                        </Link>
                    </li>
                    <li className='w-full text-white text-center h-16 flex justify-center items-center'>
                        <Link href="" onClick={toggleMenu}>
                            ANNOUNCEMENTS
                        </Link>
                    </li>
                    <li className='w-full text-white text-center h-16 flex justify-center items-center'>
                        <Link href="" onClick={toggleMenu}>
                            ABOUT
                        </Link>
                    </li>
                    <li className='w-full text-white text-center h-16 flex justify-center items-center'>
                        <Link href="" onClick={toggleMenu}>
                            MEMBERS
                        </Link>
                    </li>
                    <li className='w-full text-white text-center h-16 flex justify-center items-center'>
                        <Link href="" onClick={toggleMenu}>
                            RECRUITMENT
                        </Link>
                    </li>
                    <li className='w-full text-white text-center h-16 flex justify-center items-center'>
                        <Link href="" onClick={toggleMenu}>
                            SIGN IN
                        </Link>
                    </li>
                    <motion.li
                        key={isOpen?"open":"close"}
                        initial={{ rotate: 0 }} // Initial rotation angle
                        animate={{ rotate: 360 }} // Rotate to 360 on click, back to 0 on second click
                        transition={{
                            duration: 2, // Duration of the animation
                            ease: 'easeInOut', // Smooth easing function
                        }}
                    
                        onClick={()=>{
                            toggleMenu();
                        }} className='w-full text-white text-center h-16 flex justify-center items-center'>
                        <CloseIcon fontSize='large' />
                    </motion.li>
                </ul>
            </motion.div>
        </AnimatePresence>
    )
}

export default MobileMenu