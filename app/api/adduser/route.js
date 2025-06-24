import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
import connectDB from "@/lib/connectdb";
import User from "@/models/User";

// POST request handler
export async function POST(req) {
  try {
    await connectDB(); // Ensure DB connection

    const body = await req.json();
    const { firstname, lastname, email, password } = body;

    const exist = await User.findOne({ email });
    if (exist) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ firstname, lastname, email, password:hashedPassword });
    const savedUser = await newUser.save();

    return NextResponse.json(
      { success: true, id: savedUser._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
