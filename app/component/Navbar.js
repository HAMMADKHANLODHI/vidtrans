"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { handleLogout } from "../utils/logout";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Fetch authentication status
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

  // Check auth on mount and route changes
  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const handlelogout = async () => {
    try {
      const result = await handleLogout();
      console.log("Navbar: handleLogout result =", result);
      if (result.success) {
        setIsLoggedIn(false);
        await checkAuth();
        router.push("/login");
      } else {
        console.error("Logout failed:", result.error);
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return <nav className="navbar fixed top-5 h-[6rem] p-0 z-50 w-full"></nav>;
  }
  //hover
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

  return (
    <nav
      onMouseEnter={() => setIsScrolled(false)}
      className={`navbar fixed top-5 h-[6rem] p-0 z-50 transition-all duration-300 ${
        isScrolled ? "w-[27rem]" : "w-full"
      }`}
    >
      <div
        className={`navbarchild flex absolute rounded-[6rem] bg-gradient-to-br border bordercolor bg-opacity-50 backdrop-blur-md h-[6rem] w-[95%] left-[2.5%] ${
          isScrolled ? "" : "justify-between"
        }`}
      >
        <Link href="/">
          <div
            className={`h-full ml-[2rem] flex text-custom-40px items-center font-bold w-[20%] hover:text-blue-500 transition`}
          >
            SVI
          </div>
        </Link>

        <div
          className={`h-full ml-[12rem] flex text-custom-30px items-center font-bold ${
            isScrolled ? "" : "hidden"
          }`}
        >
          <div>
            <img
              src="/icon/plusicon.svg"
              alt="My Icon"
              className="opacity-1118 svg-black w-6 h-6"
            />
          </div>
        </div>
        <ul
          className={`navbarlist flex justify-between mr-[4rem] h-full w-[50%] ${
            isScrolled ? "hidden" : ""
          }`}
        >
          <Link
          href={"/"}
            className={`flex items-center Product font-sans text-custom-20px font-semibold ${
              isScrolled ? "hidden" : ""
            } hover:text-blue-500 transition`}
          >
            Home
          </Link>
          <div
          onClick={handleclick}
            className="flex items-center Usecase font-sans text-custom-20px font-semibold hover:text-blue-500 transition"
            href="/dashboard"
          >
            Feature
          </div>
          <Link
            className="flex items-center Resource font-sans text-custom-20px font-semibold hover:text-blue-500 transition"
            href="/about_us"
          >
            About Us
          </Link>
          <Link
            className="flex items-center For_Business font-sans text-custom-20px font-semibold hover:text-blue-500 transition"
            href="/contact"
          >
            Contact Us
          </Link>
          <li
            className="flex items-center Pricing font-sans font-semibold hover:text-blue-500 transition"
          ></li>
        </ul>
        <ul className={`w-[30%] flex justify-between h-full items-center ${isScrolled ? "hidden" : ""}`}>
          <li className="flex items-center Talk_To_Sale font-sans font-semibold hover:text-gray-600 transition"></li>
          {isLoggedIn ? (
            <div
              onClick={handlelogout}
              className="login flex justify-center items-center mt-[1.5rem] text-custom-19px font-sans rounded-[6rem] font-semibold h-[50%] w-[25%] bg-white hover:bg-gray-100 hover:text-gray-900 transition cursor-pointer"
            >
              <li>
                <h1 className="text-center">Logout</h1>
              </li>
            </div>
          ) : (
            <Link
              className="login flex justify-center items-center mt-[1.5rem] text-custom-19px font-sans rounded-[6rem] font-semibold h-[55%] w-[25%] bg-white hover:bg-gray-100 hover:text-gray-900 transition"
              href="/login"
            >
              <li>
                <h1 className="text-center">Login</h1>
              </li>
            </Link>
          )}
          <Link
            className="signup flex text-white items-center text-custom-19px justify-center mt-[1.5rem] SignUp bg-primarycolor rounded-[5rem] h-[55%] font-sans mr-[0.5rem] w-[25%] font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            href="/signup"
          >
            <li>
              <h1>Sign In</h1>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;