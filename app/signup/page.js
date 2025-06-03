// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';

// const Page = () => {
//     const [isHovered, setIsHovered] = useState(false); // Move the state here

//     return (
//         <div className='flex justify-center items-center h-screen w-screen'>
//             <div className='w-[30%] h-[70%] mb-[2%] flex flex-col justify-center items-center bg-white' >
//                 <div className='w-[90%] h-[20%] text-center text-3xl flex-col justify-center items-center' ><h1 ><b>Sign Up</b></h1>
//                 <h2 className='text-lg'>It's free and Only Takes a Minute</h2> </div>

//                 <div className='w-[90%] h-[20%] mb-[5%] flex flex-col items-center'>
//                     <label className='w-[100%] text-xl ' htmlFor = "fname" >First Name</label>
//                     <input type='fname' id='fname' name='fname' placeholder='    enter your first name' className='w-[100%] h-[50%] border-[1px] border-black border-solid rounded-md'></input>
//                 </div>
//                 <div className='w-[90%] h-[20%] mb-[5%] flex flex-col items-center'>
//                     <label className='w-[100%] text-xl ' htmlFor = "Password" >Last Name</label>
//                     <input type='Password' id='Password' name='Password' placeholder='   enter your last name' className='w-[100%] h-[50%] border-[1px] border-black border-solid rounded-md'></input>
//                 </div>
//                 <div className='w-[90%] h-[20%] mb-[5%] flex flex-col items-center'>
//                     <label className='w-[100%] text-xl ' htmlFor = "Password" >Email</label>
//                     <input type='Password' id='Password' name='Password' placeholder='   enter your email' className='w-[100%] h-[50%] border-[1px] border-black border-solid rounded-md'></input>
//                 </div>
//                 <div className='w-[90%] h-[20%] mb-[5%] flex flex-col items-center'>
//                     <label className='w-[100%] text-xl ' htmlFor = "Password" >Password</label>
//                     <input type='Password' id='Password' name='Password' placeholder='   enter password' className='w-[100%] h-[50%] border-[1px] border-black border-solid rounded-md'></input>
//                 </div>
//                 <div className='w-[90%] h-[20%] mb-[5%] flex flex-col items-center'>
//                     <label className='w-[100%] text-xl ' htmlFor = "Password" >Confirm Password</label>
//                     <input type='Password' id='Password' name='Password' placeholder='   enter password again' className='w-[100%] h-[50%] border-[1px] border-black border-solid rounded-md'></input>
//                 </div>
//                 <div className='text-xl flex justify-center items-center w-[90%] h-[10%] mb-[5%] bg-slate-800 rounded-lg text-center font-semibold text-white'><h1> Submit </h1></div>
//             </div>
//             <p>Already have account</p>
//         </div>
//     );
// }
// export default Page;

"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Page = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-150">
            <div className="w-[30%] mt-[10rem] h-auto p-6 flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
                <div className="w-full text-center mb-6">
                    <h1 className="text-3xl font-bold">Sign Up</h1>
                    <h2 className="text-lg text-gray-600">It's free and only takes a minute</h2>
                </div>

                <div className="w-full mb-4">
                    <label htmlFor="fname" className="block text-xl mb-1">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="Enter your first name" className="w-full h-10 px-3 border border-black rounded-md"/>
                </div>

                <div className="w-full mb-4">
                    <label htmlFor="lname" className="block text-xl mb-1">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Enter your last name"className="w-full h-10 px-3 border border-black rounded-md"/>
                </div>

                <div className="w-full mb-4">
                    <label htmlFor="email" className="block text-xl mb-1">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full h-10 px-3 border border-black rounded-md"/>
                </div>

                <div className="w-full mb-4">
                    <label htmlFor="password" className="block text-xl mb-1">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" className="w-full h-10 px-3 border border-black rounded-md"
                    />
                </div>
                <div className="w-full mb-6">
                    <label htmlFor="confirmPassword" className="block text-xl mb-1">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password" className="w-full h-10 px-3 border border-black rounded-md"/>
                </div>
                <button className="w-full h-12 bg-slate-800 rounded-lg text-white font-semibold text-xl hover:bg-slate-700 transition">Submit</button>
            </div>

            <p className="mt-3 text-lg"> Already have an account?{' '}
                <Link href="/login" className="text-green-800 hover:font-semibold underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Page;
