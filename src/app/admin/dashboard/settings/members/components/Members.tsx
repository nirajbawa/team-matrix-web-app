"use client"
import MembersCard from '@/components/cards/MembersCard';
import React, { useEffect, useState } from 'react';
import EditMemberDialog from './EditMemberDialog';

interface MembersProps{
    data: any;
    fetchData: () => void;
}

function Members({data, fetchData}:MembersProps) {

  
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState<any>();
    const handleOpen = () => {
        setOpen(!open);
    }


   

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={`flex p-5 px-10 ${data.length<=2?"justify-start":"justify-center"} gap-x-24 gap-y-10 items-center flex-wrap`}>
            {
                data && data.map((item: any, index: number) => (
                    <div onClick={()=>{
                        handleOpen();
                        setItem(item);
                        }} className='cursor-pointer' key={index}>
                        <MembersCard image={item.image} name={item.name} position={item.position} />
                    </div>
                ))
            }
            <EditMemberDialog open={open} handleOpen={handleOpen} data={item} fetchData={fetchData}/>
        </div>
    )
}

export default Members;