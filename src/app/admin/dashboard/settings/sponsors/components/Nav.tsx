"use client"
import React, { useState } from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CreateNewSponsorDialog from './CreateNewSponsorDialog';

interface NavProps{
    fetchData: () => void;
}

function Nav({fetchData}:NavProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <nav className='w-full h-20 pt-10 pr-10 flex justify-end items-center'>
                <div onClick={handleOpen} className='hover:bg-blue-gray-50 ease-in-out dark:text-white transition-all  duration-150 p-2 cursor-pointer rounded-full'
                >
                    <ControlPointIcon className='text-gray-800 ' />
                </div>
            </nav>
            <CreateNewSponsorDialog fetchData={fetchData} handleOpen={handleOpen} open={open} />
        </>
    )
}

export default Nav;