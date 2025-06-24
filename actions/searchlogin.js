"use server";

import mongoose from "mongoose";
import bcrypt from "bcryptjs";            // ✅ swap to bcryptjs
import User from "../models/User";        // ✅ correct default import

async function connectDB() {
  if (mongoose.connection.readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

export const handleLogin = async (email, password) => {
  await connectDB();

  const user = await User.findOne({ email }).lean();
  console.log("The email in user isValid",user)
  if (!user) {
    return { success: false, message: "Invalid email or password" };
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return { success: false, message: "Invalid email or password" };
  }

  delete user.password;
  return {
    success: true,
    user: {
      id: user._id.toString(),
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    },
  };
};
