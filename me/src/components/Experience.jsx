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
                "Developed a real-time vision system using IP cameras to detect unsecured chains on tow vehicles, improving safety",
                "Built a synthetic dataset with custom OpenCV pipelines, improving weld defect detection model accuracy by 2%",
                "Implemented a PID system to automate adhesive control via PLC signals and web scraping to calculate temperature setpoints, keeping the volume deviation within ±5%",
                "Deployed a SQL database with an Ignition Perspective dashboard to provide real-time safety incident insights"
            ]
        },
        {
            role: "Firmware and Hardware Designer",
            companyName: "Midnight Sun Solar Car Design Team",
            location: "Kitchener, Waterloo",
            date: "Sept 2025 - Aug 2025",
            bulletPoints: [
                "Implemented a multithreaded SPI software abstraction with synchronization, ensuring reliable 5 MHz data transfer between microcontrollers and peripherals",
                "Developed a GPIO management library for the vehicle’s software-in-the-loop system for accurate hardware setup",
                "Integrated a dynamic deadzone in the pedal interface, recalibrating the range to 30% - 100% , addressing delayed pedal control and enhance precision",
                "Redesigned the center console PCB in Altium to optimize hall effect sensor integration and enable PWM-based variable brightness control",
                "Developed STM32 real-time applications with FreeRTOS, optimizing tasks via multi-priority and queues"
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