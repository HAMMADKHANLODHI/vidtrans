"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { handleSubmits } from '@/actions/adduser';

const Page = () => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Improved regex: checks for 1 uppercase, 1 lowercase, 1 number, 1 special char, min 8 length
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

        if (!passwordRegex.test(user.password)) {
            return setError("Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
        }

        if (user.password !== user.confirmpassword) {
            return setError("Passwords do not match.");
        }

        try {
            const response = await handleSubmits(e, user);
            console.log("The response is", response);
            setSuccess("Account created successfully!");
            setUser({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmpassword: "",
            });
        } catch (err) {
            console.error("Submission error:", err);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-[30%] p-6 bg-white rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <p className="text-sm text-gray-600">It's free and only takes a minute</p>
                </div>

                {error && <p className="text-red-500 mb-2">{error}</p>}
                {success && <p className="text-green-600 mb-2">{success}</p>}

                {/* Inputs */}
                {["firstname", "lastname", "email"].map((field) => (
                    <div className="mb-4" key={field}>
                        <label htmlFor={field} className="block text-lg mb-1 capitalize">{field.replace("name", " Name")}</label>
                        <input
                            type={field === "email" ? "email" : "text"}
                            id={field}
                            name={field}
                            required
                            placeholder={`Enter your ${field}`}
                            value={user[field]}
                            onChange={handleChange}
                            className="w-full h-10 px-3 border border-black rounded-md"
                        />
                    </div>
                ))}

                {/* Password */}
                <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-lg mb-1">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter password"
                        className={`w-full h-10 px-3 border-2 rounded-md pr-10 ${
                            user.password.length > 0 && user.password.length < 8 ? 'border-red-500' :
                            user.password.length < 12 ? 'border-yellow-500' :
                            user.password.length < 16 ? 'border-orange-500' :
                            'border-green-500'
                        }`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-[38px] text-gray-600"
                        aria-label="Toggle password visibility"
                    >
                        {showPassword ? "🙈" : "👁️"}
                    </button>
                    <p className="text-xs text-gray-500 mt-1">Use 8+ characters with uppercase, lowercase, numbers, and special characters.</p>
                    <div className="flex gap-1 mt-1 h-[4px]">
                        <div className="w-1/4 bg-red-500" />
                        <div className="w-1/4 bg-yellow-400" />
                        <div className="w-1/4 bg-orange-500" />
                        <div className="w-1/4 bg-green-500" />
                    </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-6 relative">
                    <label htmlFor="confirmpassword" className="block text-lg mb-1">Confirm Password</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmpassword"
                        id="confirmpassword"
                        value={user.confirmpassword}
                        onChange={handleChange}
                        required
                        placeholder="Re-enter password"
                        className={`w-full h-10 px-3 border-2 rounded-md pr-10 ${
                            user.confirmpassword.length > 0 && user.confirmpassword !== user.password
                                ? 'border-red-500'
                                : user.confirmpassword === user.password && user.confirmpassword !== ''
                                ? 'border-green-500'
                                : ''
                        }`}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                        className="absolute right-3 top-[38px] text-gray-600"
                        aria-label="Toggle confirm password visibility"
                    >
                        {showConfirmPassword ? "🙈" : "👁️"}
                    </button>
                </div>

                {/* Submit */}
                <input
                    type="submit"
                    value="Submit"
                    className="w-full h-12 bg-slate-800 text-white text-lg rounded-lg hover:bg-slate-700 transition cursor-pointer"
                />

                <p className="text-sm text-center mt-4">
                    Already have an account?{' '}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Log in
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Page;
