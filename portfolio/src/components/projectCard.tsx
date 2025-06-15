type ProjectCardProps = {
  title: string
  description: string
  image: string // imported or public path
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="flex justify-center mt-6 pb-3">
      {/* Add 'group' here so children can use group-hover */}
      <div
        className="relative group flex flex-col justify-end p-6 rounded-lg w-80 h-100 md:w-190 sm:w-150 border-blue-100 border-1 bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Animated Overlay */}
          <div
    className="absolute inset-0 bg-black opacity-60 rounded-lg pointer-events-none
               transition-opacity duration-300 ease-in-out group-hover:opacity-80 z-0"
  />

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2">
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
          <a href="https://github.com/ydureix/ZotMarket" target="_blank">
            <button className="mt-2 w-max bg-emerald-300 text-white px-4 py-1 rounded hover:bg-emerald-500 cursor-pointer transition">
            View Project
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}
