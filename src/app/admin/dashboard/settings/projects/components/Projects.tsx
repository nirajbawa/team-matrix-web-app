import ProjectCard from '@/components/cards/ProjectCard';
import React, { useState } from 'react';
import EditProjectDialog from './EditProjectDialog';

interface ProjectsProps {
    data: any;
    fetchData: () => void;
}

function Projects({ data, fetchData }: ProjectsProps) {

    const [open, setOpen] = useState(false);
    const [item, setItem] = useState<any>();
    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className='flex flex-wrap p-10 flex-col gap-28'>
            {
                data && data.map((item: any, index: number) => (
                    <div
                        className='cursor-pointer'
                        key={index}
                        onClick={() => {
                            handleOpen();
                            setItem(item);
                        }}
                    >
                        <ProjectCard
                            text={item.text}
                            image={item.image}
                            imageDirection={index % 2 != 0 ? "flex-row" : "flex-row-reverse"}
                            cardAnimation={index % 2 != 0 ? "slide-left" : "slide-right"}
                        />
                    </div>
                ))
            }

            <EditProjectDialog data={item} handleOpen={handleOpen} open={open} fetchData={fetchData} />
        </div>
    )
}

export default Projects;