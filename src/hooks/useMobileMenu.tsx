"use client";
import { useState } from 'react';
import useScreenSize from './useScreenSize';


const useMobileMenu = (): [boolean, () => void] => {
    const [sm, md, lg, xl, xl2] = useScreenSize();
    const [isOpen, setIsOpen] = useState<boolean>(false);
 
    const toggleMenu = () => {
        if(!xl && !xl2)
        {
            const state = isOpen;
            setIsOpen(prevState => !prevState);
            if(!state)
            {
                document.body.style.overflow = 'hidden';
            }
            else{
                document.body.style.overflow = 'auto';
            }
        }
    };

    return [isOpen, toggleMenu];
};

export default useMobileMenu;