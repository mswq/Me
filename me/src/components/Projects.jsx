function Project({ projectName, description, technologies }) {
    return (
        <div className="project-card">
            <div className="animation-preview">
                <span>Animation Prev</span>
            </div>
            <h3 className="project-title">{projectName}</h3>
            <p className="project-description">{description}</p>
            
            <div className="tech-tags">
                {technologies.map((tech, index) => {
                    <span key={index} className="tech-tag">{tech}</span>
                })}
            </div>
            <div className="project-buttons">
                <button className="btn-primary">View</button>
                <button className="btn-secondary">Code</button>
            </div>
        </div>

    )
}


function Projects () {
    return (
        <div className="home-container">
            <div className="projects-grid">
                <Project projectName={"test"} description={"this is my proj"} technologies={["Python", "C++"]}/>
                <Project projectName={"test"} description={"this is my proj"} technologies={["Python", "C++"]}/>
                <Project projectName={"test"} description={"this is my proj"} technologies={["Python", "C++"]}/>
                <Project projectName={"test"} description={"this is my proj"} technologies={["Python", "C++"]}/>
                <Project projectName={"test"} description={"this is my proj"} technologies={["Python", "C++"]}/>
                <Project projectName={"test"} description={"this is my proj"} technologies={["Python", "C++"]}/>

            </div>
        </div>
    )
}

export default Projects