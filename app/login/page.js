"use client"

import Link from 'next/link';
import React from 'react'
import { signIn } from 'next-auth/react';

const page = () => {
  return (
    <div className=' flex flex-col justify-center items-center h-screen w-screen'>
            {/* <div className=" w-full h-full ">
                <div className=' flex mt-[7.3rem] w-[40%] h-[50rem] bg-gray-100 shadow-lg '>
                    <div className=' flex flex-col   mt-[10%] mb-[10%] ml-[10%] mr-[10%] w-[80%] rounded-lg h-[80%] bg-white shadow-lg'>
                        <div className=" mt-[2rem] flex flex-col justify-center items-center text-center mr-[15%] ml-[15%] w-[full bg-white-100 ">
                            <h1 className=" text-2xl font-semibold text-custom-15px">Welcome Back To VIDTRANS</h1>
                            <h2 className="text-center mb-[1rem] text-gray-500 font-medium text-custom-12.5px">Log in to your account and start creating</h2>


                        </div>
                        <div>
                            <button
                                onClick={() => signIn('github')}
                                className="ml-[5%] w-[90%] mt-[0.5rem] h-[2.5rem] border border-gray rounded-lg hover:bg-gray-300 transition">
                                <div className='flex '><img src="/icon/google-icon.svg" alt="My Icon" className="flex ml-[1rem] mt-[0.4rem] w-4 h-4 opacity-1118 svg-black w-6 h-6 mr-[1rem]" /><h3>  Sign in with Google </h3></div>
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => signIn('github')}
                                className="w-[90%] ml-[5%] mt-[0.5rem] h-[2.5rem] border border-gray rounded-lg hover:bg-gray-300 transition">
                                <div className='flex'><img src="/icon/apple-icon.svg" alt="My Icon" className="flex ml-[1rem] mt-[0.4rem] w-4 h-4 opacity-1118 svg-black w-6 h-6 mr-[1rem]" /><h3>  Sign in with apple </h3></div>
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => signIn('github')}
                                className="w-[90%] mt-[0.5rem] ml-[5%] h-[2.5rem] border border-gray rounded-lg hover:bg-gray-300 transition">
                                <div className='flex '><img src="/icon/microsoft-icon.svg" alt="My Icon" className="flex ml-[1rem] mt-[0.4rem] w-4 h-4 opacity-1118 svg-black w-6 h-6 mr-[1rem]" /><h3>  Sign in with microsoft </h3></div>
                            </button>
                            <button
                                onClick={() => signIn('github')}
                                className="w-[90%] ml-[5%] mt-[0.5rem] h-[2.5rem] border border-gray rounded-lg hover:bg-gray-300 transition">
                                <div className='flex'><img src="/icon/github.svg" alt="My Icon" className="flex ml-[1rem] mt-[0.4rem] w-4 h-4 opacity-1118 svg-black w-6 h-6 mr-[1rem]" /><h3>  Sign in with github </h3></div>
                            </button>
                        </div>
                        <div className='flex ml-[5%]  justify-center item-center h-[2.5rem] w-[90%] mt-[0.5rem]'>

                            <div className='w-[40%] h-[1px] mt-[0.8rem]  border border-gray'></div>
                            <h1 className='h-full text-center mr-[1rem] ml-[1rem] text-gray-500'>OR</h1>
                            <div className='w-[40%] h-[1px] mt-[0.8rem] border border-gray'></div>

                        </div>
                        <div><h1 className="text-center mb-[1rem] text-gray-500 font-medium text-custom-12.5px">We recommend using your work email</h1></div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-[90%] ml-[5%] mt-[0.5rem] h-[2.5rem] border border-gray rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder=" User@gmail.com"
                        />
                        <button
                            onClick={() => signIn('github')}
                            className="ml-[5%] w-[90%] mt-[0.5rem] h-[2.5rem] border border-gray rounded-lg text-white bg-black hover:bg-gray-300 transition"
                        >
                            <div className="flex  items-center justify-center space-x-2">
                                <img
                                    src="/icon/mail.svg"
                                    alt="My Icon"
                                    className="w-6 h-6 filter invert"  // Icon size
                                />
                                <h3>Sign in with email</h3>
                            </div>
                        </button>

                        <div className='mr-[15%]  ml-[15%] w-[70%] mt-[0.5rem]'><p className="text-center mb-[1rem] text-gray-500 font-medium text-custom-12.5px">By proceeding you agree to our <Link className='text-blue-400' href='/signup'>Terms </Link> and acknowledge our <Link className='text-blue-400' href='/signup'>Privacy Policy </Link></p></div>
                        <div className='flex justify-center items-center text-center h-[3rem] w-[100%] mt-auto bg-gray-300'><h1 className=" text-gray-500 font-medium text-custom-12.5px"> Don't have an account? <Link className='text-blue-400' href='/signup'>Sign up </Link> </h1> </div>
                    </div></div>




            </div > */}
            <div className='w-[40%] h-auto flex flex-col justify-center items-center bg-white rounded-lg shadow-md p-6'>
                {/* Header */}
                <div className='w-[90%] text-center text-3xl mb-6'>
                    <h1 className='font-bold'>Login</h1>
                </div>

                {/* Email Input */}
                <div className='w-[90%] mb-4 flex flex-col items-center'>
                    <label htmlFor="email" className='w-full text-xl mb-1'>Email</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Enter your email'
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                </div>

                {/* Password Input */}
                <div className='w-[90%] mb-6 flex flex-col items-center'>
                    <label htmlFor="password" className='w-full text-xl mb-1'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Enter your password'
                        className='w-full h-10 px-3 border border-black rounded-md'
                    />
                </div>

                {/* Submit Button */}
                <button className='w-[90%] h-12 bg-slate-800 rounded-lg text-white font-semibold text-xl hover:bg-slate-700 transition'>
                    Submit
                </button>
            </div>

            {/* Signup Redirect */}
            <div className="mt-4 text-lg">

                Not have an account ? {' '}
                <Link href="/signup" className="text-[#3AE374] hover:font-semibold underline">
                    Sign Up Here
                </Link>
            </div>

        </div>

  )
}

export default page





















