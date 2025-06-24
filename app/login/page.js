// app/login/page.js
"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email: user.email, password: user.password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("LoginPage: response =", res, "data =", data);
      if (res.ok && data.success) {
        router.push("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <form
        onSubmit={handleSubmit}
        className="w-[27%] h-auto flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6"
      >
        <div className="w-[90%] text-center text-3xl mb-6">
          <h1 className="font-bold">Login</h1>
        </div>
        <div className="w-[90%] mb-4 flex flex-col items-center">
          <label htmlFor="email" className="w-full text-xl mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full h-10 px-3 border border-black rounded-md"
          />
        </div>
        <div className="w-[90%] mb-6 flex flex-col items-center">
          <label htmlFor="password" className="w-full text-xl mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={handleChange}
            className="w-full h-10 px-3 border border-black rounded-md"
          />
        </div>
        <button className="w-[90%] h-12 bg-slate-800 rounded-lg text-white font-semibold text-xl hover:bg-slate-700 transition">
          Submit
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </form>
      <div className="mt-4 text-lg">
        Not have an account?{" "}
        <Link href="/signup" className="text-[#3AE374] hover:font-semibold underline">
          Sign Up Here
        </Link>
      </div>
    </div>
  );
};

export default Page;