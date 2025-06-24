"use server";

import mongoose from "mongoose";
import User from "@/models/User";

const connectDB = async () => {
    if (mongoose.connections[0].readyState) return;

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Smart_video_Insight", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 10000,
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

export const handleSubmits = async (e, UserForm) => {
    try {
        await connectDB();

        const newUser = new User({
            firstname: UserForm.firstname,
            lastname: UserForm.lastname,
            email: UserForm.email,
            password: UserForm.password,
        });

        const savedUser = await newUser.save();

        return { success: true, id: savedUser._id.toString() };
    } catch (error) {
        console.error("Error inserting user:", error);
        return { success: false, message: "Error occurred during insertion" };
    }
};
