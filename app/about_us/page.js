"use client";
import React from "react";

const AboutUs = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-50 p-6">
            {/* Image Section */}
            <div className="w-[35%] h-[65%] bg-purple-700  mr-[2%] rounded-xl shadow-md flex items-center justify-center">
                <img
                    src="\aboutus.avif"
                    alt="About Us"
                    className="w-[100%] h-[100%] rounded-xl object-cover"
                />
            </div>

            {/* Text Section */}
            <div className="w-[50%] h-[65%] bg-gray-50 rounded-lg   text-xl font-semibold">
                <h1 className="text-4xl font-bold mb-5 text-blue-600">About Us</h1>
                    <p className="  text-x1  font-medium leading-relaxed">
                        Smart Video Insights goes beyond traditional video tools by offering an end-to-end
                         intelligent solution for video accessibility and content comprehension. Leveraging
                          state-of-the-art AI models, the platform captures spoken words from videos with
                           high accuracy, translates them contextually into multiple languages,
                            and regenerates the audio using the original speaker’s cloned voice
                         for a natural and personalized experience. It also distills long-form video content into clear, concise summaries while extracting essential metadata such as topics, keywords, and timestamps making content easier to search, navigate, and reuse. This integrated approach bridges language and time barriers, enabling users from diverse backgrounds to fully grasp and benefit from complex video material.</p>
            </div>
        </div>
    );
};

export default AboutUs;
