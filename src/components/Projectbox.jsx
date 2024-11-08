import projects from "/data/projects.json";
import Project from "./Project.jsx";
import {useState} from "react";


export default function Projectbox() {

    // state to keep track of the current/displayed project
    const[currentProject, setCurrentProject] = useState(0);

    // functions to handle next/previous buttons
    const handleNext = () => {
        setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentProject((prevProject) => (prevProject - 1 + projects.length) % projects.length);
    };

    return (
        <section className="flex flex-row justify-center">
            <div className="flex flex-col w-full">
                <h2 className="text-5xl font-extrabold pb-8">Work</h2>
                <div>
                    <Project project={projects[currentProject]} />
                </div>
                <div className="flex flex-row gap-4 justify-center mt-8">
                    <button
                        onClick={handlePrevious}
                        aria-label="Previous Project"
                        className="flex flex-row items-center justify-center w-16 h-10 bg-custom-linkedin-burgundy rounded-lg cursor-pointer hover:scale-110 shadow-md">
                        <img src="/arrow-left-darkmode.svg" alt="arrow left" className="w-8 h-8" />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Project"
                        className="flex flex-row items-center justify-center w-16 h-10 bg-custom-linkedin-burgundy rounded-lg cursor-pointer hover:scale-110 shadow-md">
                        <img src="/arrow-right-darkmode.svg" alt="arrow right" className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </section>
    )
}