import { InstagramIcon, MailIcon } from './Icons.jsx';

const skills = [
    {
        category: "Languages",
        items: ["Python", "JavaScript", "C", "C++", "SQL", "HTML", "CSS", "Assembly", "Verilog", "VHDL"]
    },
    {
        category: "Frameworks and Libraries",
        items: ["OpenCV", "Mediapipe", "React.js", "Django", "Flask", "Selenium", "Bootstrap", "Blender", "Three.js", "SolidWorks", "Altium Designer"]
    },
    {
        category: "Tools & Frameworks",
        items: ["Linux", "Git", "Bash", "Node"]
    },
]

// Fill these in to show the links under Beyond Code - an empty one is left out
const EMAIL = "moonashley889@gmail.com"      // e.g. "you@example.com"
const INSTAGRAM = "ashleyswmoon"  // handle without the @

const contacts = [
    { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: <MailIcon /> },
    { label: "Instagram", value: INSTAGRAM && `@${INSTAGRAM}`, href: `https://instagram.com/${INSTAGRAM}`, icon: <InstagramIcon /> },
].filter(({ value }) => value)

function AboutMe() {
    return (
        <main className="page">
            <h1 className="page-title">About Me</h1>

            <div className="page-content about">
                {/* Main Introduction */}
                <p className="about-intro">
                    I’m a Computer Engineering student at the University of Waterloo, and my interests are computer vision, robotics, and embedded systems.
                    What excites me most is applying these technologies to fields like medical devices and healthcare, where they can directly improve lives.
                    I love exploring new innovations, building systems that combine intelligence with impact, and pushing myself to learn something new every day.
                </p>

                <section className="about-section">
                    <h3 className="about-heading">Technical Skills</h3>
                    <div>
                        {skills.map(({ category, items }) => (
                            <div key={category} className="about-item">
                                <h4>{category}</h4>
                                <div className="tags">
                                    {items.map((item) => (
                                        <span key={item} className="tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Personal Touch */}
                <section className="about-section">
                    <h3 className="about-heading">Beyond Code</h3>
                    <div>
                        <p>
                            I believe the best engineers are curious and compassionate, always striving to make a difference.
                             Outside of tech, I love staying active through running and golf, and I find creativity in playing the guitar and painting.
                             I’m also an animal lover, and I enjoy connecting with people over shared passions, whether it’s technology, art, or the outdoors.
                             Reach out if you want to chat, I’d love to hear from you.
                        </p>
                        {contacts.length > 0 && (
                            <div className="contact-links">
                                {contacts.map(({ label, value, href, icon }) => (
                                    <a key={label} href={href} className="contact-link" aria-label={`${label}: ${value}`}>
                                        {icon}
                                        {value}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AboutMe;
