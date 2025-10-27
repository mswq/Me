function  Experience ({role,  companyName, location, date, bulletPoints}) {
    return (
        <div className="experience-card">
            <div className="experience-header">
                <h3 className="experience-role">{role}</h3>
                <span className="experience-date">{date}</span>
            </div>
             <div className="experience-company">
                <span className="company-name">{companyName}</span>
                <span className="experience-location">{location}</span>
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
    const experiences = [
        {
            role: "AI and Computer Vision Co-op",
            companyName: "Martinrea International Inc.",
            location: "Tillsonburg, London",
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
            location: "Kitchener, Waterloo",
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
    return (
        <div className="experiences-container">
            <h1 className="experiences-title">Experiences</h1>
            <div className="experiences-list">
                {experiences.map((experience, index) => (
                    <Experience 
                        key={index}
                        role={experience.role}
                        companyName={experience.companyName}
                        location={experience.location}
                        date={experience.date}
                        bulletPoints={experience.bulletPoints}
                    />
                ))} 
            </div>
        </div>
    )
}

export default Experiences