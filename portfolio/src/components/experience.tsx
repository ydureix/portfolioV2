import { motion } from "framer-motion";

export default function Experience() {
  const timelineData = [
    {
      title: "Started UCI",
      date: "September 2022",
      description: "Began studies in Software Engineering at UC Irvine.",
    },
    {
      title: "Developed Search Engine",
      date: "June 2023",
      description: "Worked in a group of 4 to design and implement at search engine focused on scraping and retriveing UCI documents."
    },
    {
      title: "Launched Zot Market",
      date: "April 2024",
      description: "Released campus marketplace project built with FastAPI, Next.js, and MySQL.",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 pt-8 bg-neutral-800">
      <h1 className="text-green-50 font-mono font-extrabold text-3xl pb-5">Timeline</h1>
      
      <div className="relative w-full max-w-md">
        {/* vertical connecting line */}
        <div className="absolute top-3 left-8 h-95 w-1 bg-emerald-400" />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-10 pl-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Dot on the line */}
            <div className="absolute left-6 top-1 w-5 h-5 bg-emerald-400 rounded-full border-4 border-white z-10" />
            
            {/* Content */}
            <div className="bg-neutral-800 text-neutral-100 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <time className="block text-sm text-gray-400">{item.date}</time>
              <p className="mt-1 text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
