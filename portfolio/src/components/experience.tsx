import { motion } from "framer-motion";

export default function Experience() {
  const timelineData = [
    {
      title: "Started UCI",
      date: "September 2022",
      description: "Began studies in Computer Science at UC Irvine.",
    },
    {
      title: "First Internship",
      date: "June 2023",
      description: "Software intern at XYZ Company.",
    },
    {
      title: "Launched Zot Market",
      date: "April 2024",
      description: "Released campus marketplace project built with FastAPI and Next.js.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 bg-neutral-800">
    <h1 className="text-green-50 font-mono font-extrabold text-3xl pb-5"> Experience </h1>
      <div className="relative border-l border-gray-300 pl-4 w-full max-w-md">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-6 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="absolute -left-3 w-5 h-5 bg-emerald-400 rounded-full border-4 border-white"></div>
            <div className="bg-neutral-800  text-neutral-100 p-3 rounded-lg shadow">
              <h3 className=" font-semibold text-3xl">{item.title}</h3>
              <time className="block text-xs text-gray-400 text-3xl">{item.date}</time>
              <p className="mt-1 text-2xl">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
