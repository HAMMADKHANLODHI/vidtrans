"use client";
import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message. Try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("❌ Something went wrong.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-50 p-6">

            {/* Form Section */}
            <div className="w-[50%] h-[65%] bg-gray-50 rounded-lg p-6 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-5 text-blue-600">Contact Us</h1>
                <form className="flex flex-col gap-4 text-lg font-medium" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                    {status && (
                        <p className="text-sm text-gray-600 mt-2">{status}</p>
                    )}
                </form>
            </div>

            {/* Image Section */}
            <div className="w-[35%] h-[65%] bg-purple-700 mr-[2%] rounded-xl shadow-md flex items-center justify-center">
                <img
                    src="/contact.avif"
                    alt="Contact Us"
                    className="w-full h-full rounded-xl object-cover"
                />
            </div>
        </div>
    );
};

export default ContactUs;
