import React from 'react';
import ProjectCardsContainer from './ProjectCardsContainer';
import ProjectModel from '@/models/Project';
import dbConnect from '@/lib/dbConnect';

async function Projects() {

    await dbConnect();
    const data = await ProjectModel.find({});
    const temp = data.map((item:any)=>({
        name:item.name,
        image: item.image,
        text: item.text
    }))

    return (
        <>
            <ProjectCardsContainer data={temp}/>
        </>
    )
}

export default Projects;