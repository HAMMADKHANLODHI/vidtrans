// app/utils/logout.js
"use server";
import { cookies } from "next/headers";

export async function handleLogout() {
  try {
    cookies().delete("accessToken");
    cookies().delete("refreshToken"); // Optional: clear refreshToken
    console.log("handleLogout: accessToken and refreshToken deleted");
    return { success: true };
  } catch (error) {
    console.error("Logout failed:", {
      message: error.message,
      stack: error.stack,
    });
    return { success: false, error: error.message };
  }
}