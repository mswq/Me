import { useState } from 'react';
import { AllIcon, HardwareIcon, SoftwareIcon } from './Icons.jsx';

const filters = [
    { value: "all", label: "All", icon: <AllIcon /> },
    { value: "hardware", label: "Hardware", icon: <HardwareIcon /> },
    { value: "software", label: "Software", icon: <SoftwareIcon /> },
]

// `types` lists the filters a project shows up under: "hardware", "software" or both
const projects = [
    {
        title: "Cue",
        types: ["hardware", "software"],
        imgSrc: "projectFace/Cue.webp",
        description: "A wearable networking copilot built using Meta Quest",
        technologies: ["Python", "FastAPI", "Unity", "C#", "InsightFace", "Raspberry Pi"],
        viewLink: "https://devpost.com/software/htn-hvjtes"
    },
    {
        title: "Shooter Robot",
        types: ["hardware"],
        imgSrc: "projectFace/Shooter-Robot.webp",
        description: "A wireless remote-controlled robot that drives and shoots",
        technologies: ["C++", "Arduino", "nRF24L01"],
        viewLink: "https://github.com/lcj-julia/Shooter-Robot"
    },
    {
        title: "Fareplay",
        types: ["software"],
        imgSrc: "projectFace/Fareplay.webp",
        description: "A prediction market built for TTC delays using Solana",
        technologies: ["Python", "Solana", "Supabase"],
        viewLink: "https://devpost.com/software/fare-play"
    },
    {
        title: "WINK",
        types: ["software"],
        imgSrc: "projectFace/Wink.webp",
        description: "A pokemon-based dating app that gamifies real-world interactions by match making through map-based discovery",
        technologies: ["React", "Python", "Gemini", "Firebase", "ElevenLabs"],
        viewLink: "https://devpost.com/software/find-5opu0v"
    },
    {
        title: "Coinpilot.",
        types: ["software"],
        imgSrc: "projectFace/Coinpilot.webp",
        description: "Coinpilot is an AI-powered cryptocurrency simulator that helps newcomers learn trading through conversational guidance, real-time market data, and risk-free transaction simulations",
        technologies: ["Next.js", "React", "Flask", "Python", "Gemini API", "Coinbase API"],
        viewLink: "https://coinpilot.biz/home"
    },
    {
        title: "PathGuide",
        types: ["software"],
        imgSrc: "projectFace/PathGuide.webp",
        description: "See with sound - PathGuide uses your webcam to detect objects and speaks them real time. Designed to support visually impaired users, PathGuide enhances situational awareness and aids navigation.",
        technologies: ["React", "HTML", "Javascript", "CSS"],
        viewLink: "https://github.com/mswq/PathGuide"
    },
    {
        title: "AI Finance Assistant",
        types: ["software"],
        imgSrc: "projectFace/Finance-Assistant.webp",
        description: "A clean money tracker that makes your finances visual and intuitive. From monthly insights to automated product logging from receipts, it’s budgeting - but friendly.",
        technologies: ["Python", "Django", "HTML", "CSS"],
        viewLink: "https://github.com/mswq/Finance-Assistant"
    },
    {
        title: "Gesture Camera",
        types: ["software"],
        imgSrc: "projectFace/Gesture-Camera.webp",
        description: "A vision system that detects hand gestures in real time, enabling sub-second recognition of ASL “help” signs and triggering discreet safety alerts for emergencies.",
        technologies: ["Python", "OpenCV", "MediaPipe"],
        viewLink: "https://github.com/mswq/Gesture-Camera"
    },
    {
        title: "NeuroLearn",
        types: ["software"],
        imgSrc: "projectFace/NeuroLearn.webp",
        description: "A Personalized Study Guide Website - NeuroLearn helps neurodiverse learners turn slides into study plans that actually work for them - tailored by AI to fit how they learn best.",
        technologies: ["Python", "Flask", "SQL", "HTML", "JavaScript", "CSS"],
        viewLink: "https://github.com/mswq/NeuroLearn"
    },
    {
        title: "Maze Solver",
        types: ["software"],
        imgSrc: "projectFace/Maze-Solver.webp",
        description: "A simple project that builds random mazes that BFS and DFS solve step-by-step, with clear terminal visuals and GIFs to highlight their distinct behaviors.",
        technologies: ["Python"],
        viewLink: "https://github.com/mswq/Maze-Solver"
    },
    {
        title: "Personal Website",
        types: ["software"],
        imgSrc: "projectFace/Me.webp",
        description: "A website about me.",
        technologies: ["React", "Javascript", "Three.js", "HTML", "CSS"],
        viewLink: "https://github.com/mswq/Me"
    },
    {
        title: "Medicine Dispensing Device",
        types: ["hardware"],
        imgSrc: "projectFace/Medication-Dispensor.webp",
        description: "A smarter way to stay on schedule with meds. This STM32-powered dispenser helps hospitals and caregivers deliver precise doses on time.",
        technologies: ["C"],
        viewLink: "https://github.com/mswq/Medication-Dispensor"
    },
    {
        title: "Mental Health Bot",
        types: ["software"],
        imgSrc: "projectFace/Mental-Health-Bot.webp",
        description: "Dr. Jabes is a 24/7 Discord Bot that promotes mental wellness through a compassionate presence. Acting as a supportive 'buddy' it listens, comforts, and offers features like joke-telling, and quote-reciting to uplift users.",
        technologies: ["Python"],
        viewLink: "https://github.com/mswq/Mental-Health-Bot"
    },
]

function Project({ title, imgSrc, description, technologies, viewLink }) {
    return (
        <div className="card project-card">
            <h3 className="card-title">{title}</h3>
            <img src={imgSrc} alt={title} className="project-image" loading="lazy" decoding="async" />
            <p className="project-description">{description}</p>

            <div className="tags">
                {technologies.map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                ))}
            </div>
            <a href={viewLink} target="_blank" rel="noopener noreferrer" className="project-link">View</a>
        </div>
    )
}

function Projects () {
    const [filter, setFilter] = useState("all");
    const visible = projects.filter((project) => filter === "all" || project.types.includes(filter));

    return (
        <main className="page">
            <h1 className="page-title">My Work</h1>
            <div className="filters" role="group" aria-label="Filter projects">
                {filters.map(({ value, label, icon }) => (
                    <button
                        key={value}
                        type="button"
                        className="filter"
                        aria-pressed={filter === value}
                        onClick={() => setFilter(value)}
                    >
                        {icon}
                        {label}
                    </button>
                ))}
            </div>
            <div className="projects-grid">
                {visible.map((project) => (
                    <Project key={project.title} {...project} />
                ))}
            </div>
        </main>
    )
}

export default Projects
