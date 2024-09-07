import React, { useState } from "react";
import { motion } from "framer-motion";
import n1 from "../images/n1.jpg";
import n2 from "../images/n2.jpg";
import n3 from "../images/n3.jpg";
import n4 from "../images/n4.jpg";
import n5 from "../images/n5.jpg";
import n6 from "../images/n6.jpg";

const images = [
    `${n3}`,
    `${n4}`,
    `${n5}`,
    `${n1}`,
    `${n2}`,
    `${n6}`,
];

const GalleryComponent = () => {
    const [visibleImages, setVisibleImages] = useState([0, 1, 2]); // Indexes of visible images (3 at a time)

    // Move images to the left
    const moveLeft = () => {
        if (visibleImages[0] > 0) {
            setVisibleImages((prevImages) => prevImages.map((index) => index - 1));
        }
    };

    // Move images to the right
    const moveRight = () => {
        if (visibleImages[visibleImages.length - 1] < images.length - 1) {
            setVisibleImages((prevImages) => prevImages.map((index) => index + 1));
        }
    };

    return (
        <div className="relative w-full bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-center mt-6">
            {/* Left side 6-dot design in center */}
            <div className="absolute left-5 h-full flex items-center">
                <div className="grid grid-cols-2 gap-2">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    ))}
                </div>
            </div>

            {/* Gallery Content */}
            <div className="flex flex-col w-full items-center justify-center">
                <div className="flex justify-between items-center mb-4 w-full relative">
                    <h2 className="text-xl font-semibold text-white">Gallery</h2>

                    {/* Navigation Buttons and Add Image Button */}
                    <div className="flex space-x-4 absolute top-0 right-0">
                        <motion.button
                            className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            + Add Image
                        </motion.button>

                        <motion.button
                            onClick={moveLeft}
                            className="px-4 py-2 bg-gray-700 text-white rounded-full shadow-inner shadow-green-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            &lt;
                        </motion.button>

                        <motion.button
                            onClick={moveRight}
                            className="px-4 py-2 bg-gray-700  text-white rounded-full shadow-inner shadow-green-700"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            &gt;
                        </motion.button>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="flex justify-around items-center p-6 space-x-4 w-full overflow-hidden">
                    {images.map((img, index) => (
                        visibleImages.includes(index) && (
                            <motion.div
                                key={index}
                                className="w-32 md:w-48 h-32 md:h-48 bg-gray-600 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </motion.div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryComponent;
