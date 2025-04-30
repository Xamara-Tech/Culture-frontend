import React from 'react';
import ProjectCard from '../cards/ProjectCard';

export default function Projects() {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description for project 1',
            category: 'Web Design',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Description for project 2',
            category: 'Web Development',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg',
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Description for project 3',
            category: 'Mobile App',
            imageUrl: 'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg',
            link: '#'
        },
    ];
    return (
        <section id= 'projects' className='py-16 px-4 md:px-8 lg:px-16 bg-[#E6F7FF] w-full '>
            <div className="projects-container mx-auto">
                <h2 className='text-3xl font-bold mb-8 text-center text-blue-900'>Our Work</h2>
                <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center md:mx-4 lg:mx-15">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            category={project.category}
                            imageUrl={project.imageUrl}
                            link={project.link}
                        />

                    ))}

                </div>
            </div>
            
        </section>

    );
}