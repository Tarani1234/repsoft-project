import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async() =>{
     try{
      const res = await axios.post("http://localhost:5000/api/auth/logout");

      console.log("Logout successful:", res.data);
      navigate("/login");
     }
     catch(error){
      console.error("Logout error:", error);
     }
  }

  return (
    <div className="bg-black text-white">
      <header className="flex flex-wrap justify-between items-center p-3 md:p-4">
        <div className="flex items-center space-x-3 md:space-x-6">
          <img src="./Logo.png" alt="Logo" className="w-8 h-8 md:w-9 md:h-9" />

          {/* Navbar Links */}
          <nav className="flex gap-5 md:space-x-5 text-xs md:text-base">
            <a href="#" className="text-white hover:text-red-500 font-bold">HOME</a>
            <a href="#" className="text-white hover:text-red-500 font-bold">TOURNAMENTS</a>
            <a href="#" className="text-white hover:text-red-500 font-bold">COMPARE DEVICES</a>
            <a href="#" className="text-white hover:text-red-500 font-bold">SHOP</a>
          </nav>
        </div>

        <div className="flex items-center space-x-3 md:space-x-5 relative">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="p-1 w-24 md:w-40 text-white border border-red-500 outline-none placeholder-white text-xs md:text-sm bg-black pr-6 rounded"
            />
            <img
              src="./Search.png"
              alt="search"
              className="w-3 h-3 md:w-4 md:h-4 absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </div>

          <img src="./Notification.png" className="w-4 h-4 md:w-5 md:h-5" alt="Notification" />
          <img src="./Message.png" className="w-5 h-5 md:w-6 md:h-6" alt="Message" />

          {/* ----------- Profile Icon & Hover Dropdown (only on lg) ----------- */}
          <div className="relative group hidden lg:block">
            <img
              src="./profile.png"
              className="w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer"
              alt="Profile"
            />
            {/* Hover Dropdown */}
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-black border border-red-800 rounded-md shadow-lg z-50 w-40 p-3">
              <a href="#" className="block text-white hover:text-red-500 text-sm mb-2">Profile</a>
              <a href="#" className="block text-white hover:text-red-500 text-sm mb-2">Leaderboard</a>
              <a href="#" className="block text-white hover:text-red-500 text-sm mb-2">Wallet</a>
              <a href="#" className="block text-white hover:text-red-500 text-sm mb-2">Settings</a>
              <button
                onClick={handleLogout}
                className="block w-full text-left text-white hover:text-red-500 text-sm"
              >
                Logout
              </button>
            </div>
          </div>

          {/* ----------- Mobile Profile (click to open modal) ----------- */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <img src="./profile.png" className="w-6 h-6 md:w-8 md:h-8 rounded-full" alt="Profile" />
            </button>
          </div>

          {isOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-50 text-right lg:hidden">
              <div className="relative w-4/5 md:w-1/2 rounded-lg shadow-lg border border-red-800 p-4">
                <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2">
                  <img src="./cross.png" alt="Close" className="w-4 h-4" />
                </button>
                <div className="flex flex-col items-center gap-3 mt-4">
                  <img src="./profile.png" alt="Profile" className="w-10 h-10" />
                  <h1 className="text-red-500 font-semibold text-lg">Tsm_ImperialHal</h1>
                  <h2 className="text-white font-semibold text-sm">abcde@gmail.com</h2>
                  <div className="w-full border-b border-red-800 my-2"></div>
                  <a href="#" className="text-white hover:text-red-500 font-semibold text-sm">Profile</a>
                  <a href="#" className="text-white hover:text-red-500 font-semibold text-sm">Leaderboard</a>
                  <a href="#" className="text-white hover:text-red-500 font-semibold text-sm">Wallet</a>
                  <a href="#" className="text-white hover:text-red-500 font-semibold text-sm">Settings</a>
                  <a href="#" className="text-white hover:text-red-500 font-semibold text-sm" onClick={handleLogout}>Logout</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
