// app/api/check-auth/route.js
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value || null;
    console.log("check-auth: accessToken =", accessToken);
    return new Response(
      JSON.stringify({ isAuthenticated: !!accessToken }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in /api/check-auth:", {
      message: error.message,
      stack: error.stack,
    });
    return new Response(
      JSON.stringify({ isAuthenticated: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}