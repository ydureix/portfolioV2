import ProjectCard from "./projectCard"

export default function Projects(){
    return(
    <div className="flex flex-col justify-between items-center w-full">
        <h1 className="text-green-50 font-mono text-3xl pb-5">My Projects</h1>
        <ProjectCard></ProjectCard>
    </div>)
}