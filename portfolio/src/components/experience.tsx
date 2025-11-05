import { motion } from "framer-motion";

export default function Experience() {
  const timelineData = [
    {
      company: "FengHai World Trade",
      role:"Data Analyst",
      date: "June 2025 - September 2025",
      description: "Collaborated with the operations team to integrate the custom shipping solution into daily workflows, ensuring seamless adoption and minimal disruption to existing processes",
    }
  ];

  return (
    <div className="flex justify-center mt-6 pb-4">
    <div className="flex-col gap-2 bg-neutral-800 p-6 rounded-lg w-80 md:w-190 sm:w-150 border-blue-100  border-1">
      <div className="flex items-center justify-center">
        <h1 className="text-green-50 font-mono font-extrabold text-5xl pb-5">Experience</h1>
      </div>
      <div className="flex flex-col">
        {/* vertical connecting line */}
        <div className="flex  bg-emerald-400" />

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-10 pl-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Dot on the line */}
            <div className="absolute left-6 top-10 w-5 h-5 bg-emerald-400 rounded-full border-4 border-white z-10" />
            
            {/* Content */}
            <div className="bg-neutral-800 text-neutral-100 p-4 rounded-lg shadow">
              <div className="mb-3">
              <div className="flex flex-row justify-between mb-0.4">
                <h3 className="font-semibold text-2xl">{item.company}</h3>
                <time className="block text-sm text-gray-400">{item.date}</time>
              </div>
                <h2 className="italic">{item.role}</h2>
              </div>
              <p className="mt-1 text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
