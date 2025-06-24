import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Smart_video_Insight", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw new Error("MongoDB connection error");
  }
};

export default connectDB;
