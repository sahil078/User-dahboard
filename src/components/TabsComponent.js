import React, { useState } from "react";
import { motion } from "framer-motion";

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState("about");

    return (
        <div className="w-full bg-gray-800 p-6 rounded-xl shadow-lg relative ">
            {/* Dot grid on left center */}
            <div className="absolute left-5 h-full flex items-center">
                <div className="grid grid-cols-2 gap-2">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    ))}
                </div>
            </div>


                {/* Tabs Section */}
                <div className=" flex items-center justify-around mb-4 bg-gray-900 rounded-full p-1 ml-10">
                    {["about", "experiences", "recommended"].map((tab) => (
                        <motion.button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 font-semibold text-white rounded-full ${activeTab === tab ? "bg-slate-500" : "bg-gray-700"
                                }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </motion.button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className=" p-6 rounded-lg text-white ml-10 ">
                    {activeTab === "about" && (
                        <p>
                            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                            working at this awesome company for 3 years now.

                        </p>
                    )}
                    {activeTab === "experiences" && (
                        <p>
                            I have been involved in multiple sales campaigns and helped drive
                            revenue across various industries.
                        </p>
                    )}
                    {activeTab === "recommended" && (
                        <p>
                            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                            working at this awesome company for 3 years now. <br/>
                            I would recommend checking out our latest CRM tool to enhance your
                            sales process.
                            I have been involved in multiple sales campaigns and helped drive
                            revenue across various industries.
                        </p>
                    )}
                </div>
        </div>
    );
};

export default TabsComponent;
