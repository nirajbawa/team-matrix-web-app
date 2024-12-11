"use client"
import React, { useState } from 'react';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CreateNewMemberDialog from './CreateNewMemberDialog';


interface NavProps{
    fetchData: () => void;
}

function Nav({fetchData}:NavProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <nav className='w-full h-20 pt-10 pr-10 flex justify-end items-center'>
                <div className='hover:bg-blue-gray-50 ease-in-out transition-all  duration-150 p-2 cursor-pointer rounded-full'
                    onClick={handleOpen}
                >
                    <PersonAddAlt1Icon className='text-gray-800 ' />
                </div>
            </nav>
            <CreateNewMemberDialog open={open} handleOpen={handleOpen} fetchData={fetchData}  />
        </>
    )
}

export default Nav;