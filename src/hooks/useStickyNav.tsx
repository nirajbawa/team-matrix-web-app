"use client"
import { useEffect, useState } from 'react';


const useStickyNav = (inThreshold:number): [boolean] => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = inThreshold; // Customize this threshold based on your design
            if (window.scrollY > threshold) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to only run on mount and unmount

    return [ isSticky ];
};

export default useStickyNav;
