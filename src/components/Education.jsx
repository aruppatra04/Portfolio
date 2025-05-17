import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";


const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1 
        id="education"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Education
      </motion.h1>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-5xl space-y-16">
          {EDUCATIONS.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-center gap-8"
            >
              {/* Left Side: Year (vertical) + Logo */}
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.2 }}
                className="flex flex-row items-center w-full lg:w-1/4 justify-center gap-2 lg:mr-20 pr-10"
              >
                {/* Year vertically */}
                <div className="text-purple-400 text-xs tracking-widest rotate-[-90deg] origin-center">
                  {edu.year}
                </div>
                {/* Logo */}
                <img
                  src={edu.logo}
                  width={1000}
                  alt={`${edu.institution} logo`}
                  className="w-16 h-16 object-contain"
                />
              </motion.div>

              {/* Right Side: Education Info */}
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.2 }}
                className="w-full lg:w-3/4 text-center lg:text-left mt-9 lg:mt-0 lg:ml-20"
              >
                <h2 className="text-xl font-semibold">{edu.institution}</h2>
                <p className="italic text-sm text-neutral-400">
                  {edu.degree}
                </p>
                <p className="italic text-sm text-neutral-400 mb-2">
                  {edu.perc}
                </p>
                <p className="text-neutral-400 text-justify">
                  {edu.description}
                </p>

                <div className="mt-3 flex flex-wrap justify-center lg:justify-start gap-2">
                  {edu.subjects.map((subj, idx) => (
                    <span
                      key={idx}
                      className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                    >
                      {subj}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
