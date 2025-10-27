function AboutMe() {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            
            <div className="about-content">
                {/* Main Introduction Card */}
                <div className="about-card main-intro">
                    <div className="about-text">
                        <p>
                            I’m a Computer Engineering student at the University of Waterloo with a strong passion for artificial intelligence and computer vision. 
                            What excites me most is applying these technologies to fields like medical devices and healthcare, where they can directly improve lives. 
                            I love exploring new innovations, building systems that combine intelligence with impact, and pushing myself to learn something new every day.
                        </p>
                    </div>
                </div>

                {/* Skills & Interests Grid */}
                <div className="about-grid">
                    <div className="about-card skills-card">
                        <h3 className="card-title">Technical Skills</h3>
                        <div className="skills-list">
                            <div className="skill-category">
                                <h4>Languages</h4>
                                <div className="skill-tags">
                                    <span className="skill-tag">Python</span>
                                    <span className="skill-tag">JavaScript</span>
                                    <span className="skill-tag">C</span>
                                    <span className="skill-tag">C++</span>
                                    <span className="skill-tag">SQL</span>
                                    <span className="skill-tag">HTML</span>
                                    <span className="skill-tag">CSS</span>
                                </div>
                            </div>
                            <div className="skill-category">
                                <h4>Frameworks and Libraries</h4>
                                <div className ="skill-tags">
                                    <span className="skill-tag">OpenCV</span>
                                    <span className="skill-tag">Mediapipe</span>
                                    <span className="skill-tag">React.js</span>
                                    <span className="skill-tag">Django</span>
                                    <span className="skill-tag">Flask</span>
                                    <span className="skill-tag">Selenium</span>
                                    <span className="skill-tag">Bootstrap</span>
                                    <span className="skill-tag">Blender</span>
                                    <span className="skill-tag">Three.js</span>
                                </div>
                            </div>
                            <div className="skill-category">
                                <h4>Tools & Frameworks</h4>
                                <div className="skill-tags">
                                    <span className="skill-tag">Linux</span>
                                    <span className="skill-tag">Git</span>
                                    <span className="skill-tag">Bash</span>
                                    <span className="skill-tag">Node</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-card goals-card">
                        <h3 className="card-title">Goals</h3>
                        <div className="goals-list">
                            <div className="goal-item">
                                <h4>Short-term</h4>
                                <p>Strengthen my expertise in computer vision and AI while contributing to projects in healthcare and assistive technologies</p>
                            </div>
                            <div className="goal-item">
                                <h4>Long-term</h4>
                                <p>Design intelligent medical devices and systems that make technology more accessible, reliable, and impactful for people around the world</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Touch */}
                <div className="about-card personal-card">
                    <h3 className="card-title">Beyond Code</h3>
                    <p>
                        I believe the best engineers are curious and compassionate, always striving to make a difference.
                         Outside of tech, I love staying active through running and golf, and I find creativity in playing the guitar and painting. 
                         I’m also an animal lover, and I enjoy connecting with people over shared passions, whether it’s technology, art, or the outdoors.

                    </p>
                    {/* <p>
                        Feel free to reach out if you’d like to chat about AI, collaborate on a project, or discuss how technology can make the world a little better.
                    </p> */}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;