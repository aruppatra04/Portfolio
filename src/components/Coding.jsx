import { CODING_PLATFORMS } from "../constants";
import { motion } from "framer-motion";

const Coding = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 
                id="coding"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.1 }}
                className="my-20 text-center text-4xl"
            >
                <span className="text-neutral-500">{"< "}</span>
                Coding <span className="text-neutral-500 font-bold">Journey</span>
                <span className="text-neutral-500">{" />"}</span>
            </motion.h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
                {CODING_PLATFORMS.map((platform, index) => (
                    <motion.div 
                        key={index} 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center justify-start space-y-4 bg-transparent p-6 rounded-lg shadow-lg border border-gray-800"
                    >
                        {/* Left Side: Logo and right side: Max Rating and Total Problems Solved */}
                        <div className="flex items-center space-x-6">
                            {/* Logo */}
                            <div className="flex items-center space-x-6">
                                {/* Logo */}
                                <div className="flex-shrink-0 w-25 h-16 items-center justify-center">
                                    {platform.name === "CodeChef" ? (
                                    <img
                                        src={platform.logo}
                                        alt={platform.name}
                                        className="w-full h-full object-fill rounded text-left"
                                    />
                                    ) : (
                                        <img
                                            src={platform.logo}
                                            alt={platform.name}
                                            className="w-full h-full object-fill rounded text-left pr-7"
                                        />
                                    )}
                                </div>
                                </div>


                            <div className="min-w-0.5 h-full bg-gray-800"> </div>

                            {/* Details */}
                            <div className="flex flex-col">
                                <h6 className="text-xl font-bold pb-2">{platform.name}</h6>
                                <div className="space-y-1 text-neutral-400">
                                    <p className="text-sm">Max Rating : 
                                        <span className="text-neutral-300">{" "+platform.maxRating}</span>
                                    </p>
                                    <p className="text-sm">Total Problems Solved : 
                                        <span className="text-neutral-300">{" "+platform.totalSolved}</span>
                                    </p>
                                </div>

                                {/* View Profile Button */}
                                <a
                                    href={platform.profileLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-block rounded bg-purple-800 text-center py-2 text-sm font-medium text-white hover:bg-purple-700"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>

                        {/* Achievements Section: Starts from the same position as the logo */}
                        <div className="mt-4 w-full text-neutral-400">
                        {platform.achievements?.length > 0 && (
                            <ul className="list-disc list-inside text-sm">
                            {platform.achievements.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                            </ul>
                        )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Coding;
