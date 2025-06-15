type ProjectCardProps = {
  title: string
  description: string
  image: string // imported or public path
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="flex justify-center mt-6 pb-3">
      <div
        className="relative flex flex-col justify-end p-6 rounded-lg w-80 h-100 md:w-190 sm:w-150 border-blue-100 border-1 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-neutral-800 bg-opacity-80 rounded-lg"></div>
        <div className="relative z-10 flex flex-col gap-2">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
          <button className="mt-2 w-max bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
            View Project
          </button>
        </div>
      </div>
    </div>
  )
}
