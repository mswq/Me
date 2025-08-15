import { useState } from 'react';

function Project({ projectName, description, technologies, onViewClick }) {
    return (
        <div className="project-card-new">
            <div className="card-content-new">
                <h3 className="project-title-new">{projectName}</h3>
                <p className="project-description-new">{description}</p>
                
                <div className="tech-tags-new">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tech-tag-new">{tech}</span>
                    ))}
                </div>
                <div className="project-buttons-new">
                    <button className="btn-primary-new" onClick={() => onViewClick(projectName)}>View</button>
                    {/* <button className="btn-secondary-new">Code</button> */}
                </div>
            </div>
        </div>

    )
}

function ProjectModal ({ isOpen, onClose, projectName }) {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>   
            <div className='model-content'>
                <button className='modal-close' onClick={onClose}>x</button>
                <h2 className='modal-title'>{projectName}</h2>
                <p className='modal-description'>More details soon!</p>
            </div>
        </div>
    )
}


function Projects () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState("");

    const projects = [
        {
            title: "NeuroLearn", 
            description: "A Personalized Study Guide Website - NeuroLearn helps neurodiverse learners turn slides into study plans that actually work for them - tailored by AI to fit how they learn best.",
            technologies: ["Python", "Flask", "SQL", "HTML", "JavaScript", "CSS"]
        }, 
        {
            title: "PathGuide",
            description: "See with sound - PathGuide uses your webcam to detect objects and speaks them to you in real time.",
            technologies: ["PYTHON+", "React", "HTML", "Javascript", "CSS"]
        },
        {
            title: "Gesture Camera",
            description: "Real-Time Hand Gesture Recognition System + ", 
            technologies: ["Python", "OpenCV", "MediaPipe"]
        }, 
        {
            title: "Finance Assistant",
            description: "A clean money tracker that makes your finances visual and intuitive. From colorful charts to monthly insights, it’s budgeting - but friendly.",
            technologies: ["Python", "Django", "HTML", "CSS"]
        },
        {
            title: "Mental Health Bot",
            description: "Responsive Emotion-Driven Discord Bot",
            technologies: ["Python"]
        }, 
        {
            title: "Maze Solver",
            description: "A simple project that builds random mazes that BFS and DFS solve step-by-step, with clear terminal visuals and GIFs to highlight their distinct behaviors.",
            technologies: ["Python"]
        },
        {
            title: "Personal Website",
            description: "A website about me",
            technologies: ["React", "Javascript", "Three.js", "HTML", "CSS"]
        },
        {
            title: "Medicine Dispensing Device",
            description: "A smarter way to stay on schedule with meds. This STM32-powered dispenser helps hospitals and caregivers deliver precise doses on time.",
            technologies: ["C"]
        }
    ]

    const handleViewClick = (projectName) => {
        setSelectedProject(projectName);
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProject("");
    }
 
    return (
        <div className="projects-container">
            <h1 className="project-title">My Work</h1>
                <div className="projects-grid-new">
                    {projects.map((project, index) => (
                        <Project 
                            key={index} 
                            projectName={project.title} 
                            description={project.description} 
                            technologies={project.technologies} 
                            onViewClick={handleViewClick}
                        />
                    ))}

                </div>
                <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} projectName={selectedProject} />
        </div>
    )
}

export default Projects