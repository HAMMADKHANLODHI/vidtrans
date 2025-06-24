// app/api/login/route.js
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/connectdb";
import { signAccessToken, signRefreshToken } from "@/lib/jwt";

export async function POST(req) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ success: false, message: "User not found" }, { status: 404 });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return NextResponse.json({ success: false, message: "Wrong password" }, { status: 401 });
  }

  const accessToken = signAccessToken({ email });
  const refreshToken = signRefreshToken({ email });

  const res = NextResponse.json({ success: true });

  // Set accessToken cookie
  res.cookies.set("accessToken", accessToken, {
    httpOnly: false, // Allow client-side access for /api/check-auth
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 3600, // 1 hour
  });

  // Set refreshToken cookie
  res.cookies.set("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  console.log("login: accessToken set =", accessToken); // Debug
  return res;
}