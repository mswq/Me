import { useState } from 'react';

function Project({ projectName, imgSrc, description, technologies, viewLink }) {
    return (
        <div className="project-card-new">
            <div className="card-content-new">
                <h3 className="project-title-new">{projectName}</h3>
                <div className='project-image-container'>
                    <img src={imgSrc} alt={projectName} className='project-image'/>
                </div>
                <p className="project-description-new">{description}</p>
                
                <div className="tech-tags-new">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag-new">{tech}</span>
                    ))}
                </div>
                <div className="project-buttons-new">
                    <a 
                        href={viewLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary-new" 
                        style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                    >View</a>
                    {/* <button className="btn-secondary-new">Code</button> */}
                </div>
            </div>
        </div>

    )
}


function Projects () {

    const projects = [
        {
            title: "NeuroLearn", 
            description: "A Personalized Study Guide Website - NeuroLearn helps neurodiverse learners turn slides into study plans that actually work for them - tailored by AI to fit how they learn best.",
            technologies: ["Python", "Flask", "SQL", "HTML", "JavaScript", "CSS"],
            viewLink: "https://github.com/mswq/NeuroLearn"
        }, 
        {
            title: "PathGuide",
            description: "See with sound - PathGuide uses your webcam to detect objects and speaks them to you in real time.",
            technologies: ["PYTHON+", "React", "HTML", "Javascript", "CSS"],
            viewLink: "https://github.com/mswq/PathGuide"
        },
        {
            title: "Gesture Camera",
            imgSrc: "projectFace/Gesture-Camera.png",
            description: "Real-Time Hand Gesture Recognition System + ", 
            technologies: ["Python", "OpenCV", "MediaPipe"],
            viewLink: "https://github.com/mswq/Gesture-Camera"
        }, 
        {
            title: "Finance Assistant",
            description: "A clean money tracker that makes your finances visual and intuitive. From colorful charts to monthly insights, it’s budgeting - but friendly.",
            technologies: ["Python", "Django", "HTML", "CSS"],
            viewLink: "https://github.com/mswq/Finance-Assistant"
        },
        {
            title: "Mental Health Bot",
            imgSrc: "projectFace/Mental-Health-Bot.png",
            description: "Responsive Emotion-Driven Discord Bot",
            technologies: ["Python"],
            viewLink: "https://github.com/mswq/Mental-Health-Bot"
        }, 
        {
            title: "Maze Solver",
            imgSrc: "projectFace/Maze-Solver.png",
            description: "A simple project that builds random mazes that BFS and DFS solve step-by-step, with clear terminal visuals and GIFs to highlight their distinct behaviors.",
            technologies: ["Python"],
            viewLink: "https://github.com/mswq/Maze-Solver"
        },
        {
            title: "Personal Website",
            description: "A website about me",
            technologies: ["React", "Javascript", "Three.js", "HTML", "CSS"],
            viewLink: "https://github.com/mswq/Me"
        },
        {
            title: "Medicine Dispensing Device",
            imgSrc: "projectFace/Medication-Dispensor.png",
            description: "A smarter way to stay on schedule with meds. This STM32-powered dispenser helps hospitals and caregivers deliver precise doses on time.",
            technologies: ["C"],
            viewLink: "https://github.com/mswq/Medication-Dispensor"
        }
    ]
 
    return (
        <div className="projects-container">
            <h1 className="project-title">My Work</h1>
                <div className="projects-grid-new">
                    {projects.map((project, index) => (
                        <Project 
                            key={index} 
                            projectName={project.title} 
                            imgSrc={project.imgSrc}
                            description={project.description} 
                            technologies={project.technologies} 
                            viewLink={project.viewLink}
                        />
                    ))}

                </div>
        </div>
    )
}

export default Projects