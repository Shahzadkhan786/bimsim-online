import React from 'react';
import ProjectCard from '../../components/projectCard';
import { Projects } from '@/utils/mock';
import { StaticImageData } from 'next/image';


const getprojectsByCategory = (category: string) => {
  return Projects.filter((project)=> project.category === category);
};
 

export default function Page({ params }: { params: { id: string } }) {
  const result = getprojectsByCategory(params.id);
  return (
    <div className='flex justify-evenly pt-32 pb-32 px-18 gap-4 flex-wrap md:col-span-2 sm:col-span-1 lg:col-span-3 xl:col-span-3'>
      {result.length > 0 ? (
        result.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            year={project.year}
            image={project.image as StaticImageData}
            category={project.category}
            id={project.id}
            detail={project.detail}
            />
           
        ))
   
      ) : (
        <p>No Projects Found</p>
       
      )}
    </div>
  );
}