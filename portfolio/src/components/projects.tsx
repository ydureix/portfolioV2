import ProjectCard from "./projectCard"
import ZotMarket from "../assets/ZotMarket.png"
import ZotSearch from "../assets/ZotSearch.png"
export default function Projects(){
    return(
    <div className="flex flex-col justify-between items-center w-full">
        <h1 className="text-green-50 font-mono font-extrabold text-6xl pb-2">Projects</h1>
        <ProjectCard title="ZotMarket" link="https://github.com/ydureix/ZotMarket"description="ZotMarket is an online student-centric marketplace built with NextJS, FastAPI, MySQL, and Python. It enables users to easily browse, list, and purchase products with a smooth and secure experience."image={ZotMarket}></ProjectCard>
        <ProjectCard image={ZotSearch} link="https://github.com/ydureix/cs-121-search-engine" title="ZotSearch" description="ZotSearch is Custom Search Engine focused on scaping and retrieving documents from UCI web domains."></ProjectCard>
    </div>)
}