

"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter,usePathname } from 'next/navigation';
import { useEffect } from 'react';


const Page = () => {
  const pathname = usePathname();
  useEffect(() => {
      checkAuth();
    }, [pathname]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const checkAuth = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/check-auth", {
        credentials: "include",
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      console.log("Navbar: checkAuth response =", data);
      setIsLoggedIn(data.isAuthenticated);
    } catch (error) {
      console.error("Auth check failed:", error.message);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };
    const router = useRouter();
const handleclick=()=>{
  if(isLoggedIn)
  {
    router.push('/dashboard');

  }
  else{
    router.push('/login');

  }

console.log("the is login : ",isLoggedIn);
    // router.push('/');

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








