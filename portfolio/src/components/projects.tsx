import ProjectCard from "./projectCard"
import ZotMarket from "../assets/ZotMarket.png"
export default function Projects(){
    return(
    <div className="flex flex-col justify-between items-center w-full">
        <h1 className="text-green-50 font-mono text-3xl pb-2">My Projects</h1>
        <ProjectCard title="ZotMarket" description="ZotMarket is an online student-centric marketplace built with NextJS, FastAPI, MySQL, and Python. It enables users to easily browse, list, and purchase products with a smooth and secure experience."image={ZotMarket}></ProjectCard>
    </div>)
}