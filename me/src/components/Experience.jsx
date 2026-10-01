// `logo` is a path inside public/, e.g. "logos/waterloo.png" - an empty one is left out
const experiences = [
    {
        role: "Waterloo Undergraduate Student Researcher",
        companyName: "University of Waterloo - Wireless Sensors and Devices Lab",
        logo: "experienceFace/uwaterloo.png",
        location: "Waterloo",
        date: "Sept 2026 - Present",
        bulletPoints: [
            "Developing firmware for battery-free water leak detection systems",
        ]
    },
    {
        role: "Firmware Designer",
        companyName: "Combat Robot Design Team",
        logo: "experienceFace/watbot.jpg",
        location: "Waterloo",
        date: "Sept 2026 - Present",
        bulletPoints: [
            "Developing firmware for melty brain combat robot",
        ]
    },
    {
        role: "Computer Vision and AI Software Engineer",
        companyName: "Martinrea International Inc. - Corporate",
        logo: "experienceFace/martinrea.jpg",
        location: "Vaughan",
        date: "Jan 2026 - Aug 2026",
        bulletPoints: [
            "Developed image compositing pipelines to generate synthetic defect examples from limited real-world samples, expanding dataset to improve model generalization",
            "Built a general-purpose surface texture classification YOLO model to standardize quality inspection across varied aluminum component surfaces",
            "Built a multithreaded control interface for factory production, managing programs through the OS using C++ and React",
            "Designed a data collection tool using shared memory buffer mapping for camera configuration and image capture in C++",
            "Implemented deflectometry-based inspection with controllable strobing lights synchronized to camera acquisition, supporting production line speeds of 100 m/min"
        ]
        
    },
    {
        role: "Computer Vision Software Engineer",
        companyName: "Martinrea International Inc.",
        logo: "experienceFace/martinrea.jpg",
        location: "London",
        date: "May 2025 - Aug 2025",
        bulletPoints: [
            "Developed a computer vision system using YOLO v8 and OpenCV to identify unrestrained carts on assembly line vehicles by processing 20 fps video streams, improving safety",
            "Built an OpenCV-based data augmentation pipeline to generate training images for weld defect classification models",
            "Designed a PID-based adhesive control system with PLC integration and automated data acquisition using Selenium and BeautifulSoup, achieving ±5% in material volume deviation",
            "Replaced polling-based acquisition with direct CGI requests to PLCs, cutting response time from 800ms to 400ms",
            "Designed SQL Server–backed Ignition Perspective dashboard showing live production metrics and safety alerts"
        ]
        
    },
    {
        role: "Firmware and Hardware Designer",
        companyName: "Midnight Sun Solar Car Design Team",
        logo: "experienceFace/midnight_sun.jpg",
        location: "Waterloo",
        date: "Sept 2025 - Aug 2025",
        bulletPoints: [
            "Redesigned the center console PCB in Altium to optimize hall effect sensor integration and enable PWM-based variable brightness control",
            "Developed STM32 real-time applications with FreeRTOS, optimizing tasks via multi-priority and queues",
            "Implemented a multithreaded SPI software abstraction with synchronization, ensuring reliable 5 MHz data transfer between microcontrollers and peripherals",
            "Developed a GPIO management library for the vehicle's software-in-the-loop system for accurate hardware setup",
            "Integrated a dynamic deadzone in the pedal interface, recalibrating the input range to enhance precision"
        ]
    }
]

function Experience ({role, companyName, logo, location, date, bulletPoints}) {
    return (
        <div className="card">
            <div className="experience-top">
                {logo && (
                    <img src={logo} alt={`${companyName} logo`} className="experience-logo" loading="lazy" decoding="async" />
                )}
                <div className="experience-heading">
                    <div className="experience-header">
                        <h3 className="card-title">{role}</h3>
                        <span className="experience-date">{date}</span>
                    </div>
                    <div className="experience-header experience-company">
                        <span>{companyName}</span>
                        <span className="experience-location">{location}</span>
                    </div>
                </div>
            </div>
            <ul className="experience-bullets">
                {bulletPoints.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </div>
    )
}

function Experiences() {
    return (
        <main className="page">
            <h1 className="page-title">Experiences</h1>
            <div className="page-content">
                {experiences.map((experience) => (
                    <Experience key={`${experience.role} ${experience.companyName}`} {...experience} />
                ))}
            </div>
        </main>
    )
}

export default Experiences
