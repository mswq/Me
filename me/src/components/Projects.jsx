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
            imgSrc: "projectFace/NeuroLearn.png",
            description: "A Personalized Study Guide Website - NeuroLearn helps neurodiverse learners turn slides into study plans that actually work for them - tailored by AI to fit how they learn best.",
            technologies: ["Python", "Flask", "SQL", "HTML", "JavaScript", "CSS"],
            viewLink: "https://github.com/mswq/NeuroLearn"
        }, 
        {
            title: "PathGuide",
            imgSrc: "projectFace/PathGuide.png",
            description: "See with sound - PathGuide uses your webcam to detect objects and speaks them real time. Designed to support visually impaired users, PathGuide enhances situational awareness and aids navigation.",
            technologies: ["React", "HTML", "Javascript", "CSS"],
            viewLink: "https://github.com/mswq/PathGuide"
        },
        {
            title: "AI Finance Assistant",
            imgSrc: "projectFace/Finance-Assistant.png",
            description: "A clean money tracker that makes your finances visual and intuitive. From monthly insights to automated product logging from receipts, it’s budgeting - but friendly.",
            technologies: ["Python", "Django", "HTML", "CSS"],
            viewLink: "https://github.com/mswq/Finance-Assistant"
        },
        {
            title: "Gesture Camera",
            imgSrc: "projectFace/Gesture-Camera.png",
            description: "A vision system that detects hand gestures in real time, enabling sub-second recognition of ASL “help” signs and triggering discreet safety alerts for emergencies.", 
            technologies: ["Python", "OpenCV", "MediaPipe"],
            viewLink: "https://github.com/mswq/Gesture-Camera"
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
            imgSrc: "projectFace/Me.png",
            description: "A website about me.",
            technologies: ["React", "Javascript", "Three.js", "HTML", "CSS"],
            viewLink: "https://github.com/mswq/Me"
        },
        {
            title: "Medicine Dispensing Device",
            imgSrc: "projectFace/Medication-Dispensor.png",
            description: "A smarter way to stay on schedule with meds. This STM32-powered dispenser helps hospitals and caregivers deliver precise doses on time.",
            technologies: ["C"],
            viewLink: "https://github.com/mswq/Medication-Dispensor"
        },
        {
            title: "Mental Health Bot",
            imgSrc: "projectFace/Mental-Health-Bot.png",
            description: "Dr. Jabes is a 24/7 Discord Bot that promotes mental wellness through a compassionate presence. Acting as a supportive 'buddy' it listens, comforts, and offers features like joke-telling, and quote-reciting to uplift users.",
            technologies: ["Python"],
            viewLink: "https://github.com/mswq/Mental-Health-Bot"
        }, 
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