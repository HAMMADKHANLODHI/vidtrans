

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



const Page = () => {
    const router = useRouter();
const handleclick=()=>{
    router.push('/');

}

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-150">
            <div className='flex flex-col justify-center items-center  w-[70%] h-[50%]  '>
                <h1 className='w-[90%] h-[40%] text-8xl font-semibold text-center'>SMART VIDEO INSIGHTS</h1>
                <h3 className='w-[55%] h-[30%] font-semibold text-3xl mb-[5%] text-center'> Enhancing Video Accessibility with Advanced Summarization , Video Translation and MetaData Extraction</h3>
                <div onClick={handleclick} className='w-[30%] h-[15%] bg-slate-800 text-white rounded-full flex justify-center items-center '><h1 className='text-2xl font-semibold'> Get Started </h1></div>
             </div>
        </div>
    );
};

export default Page;
