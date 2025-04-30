import React, { useState, useEffect, useRef } from "react";
import { MdDashboard } from "react-icons/md";
import { GoTypography } from "react-icons/go";
import { IoIosColorFilter } from "react-icons/io";
import { GiConsoleController } from "react-icons/gi";
import { FaRegIdCard, FaChevronDown, FaChevronRight, FaSearch, FaBell } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { SiSimplenote } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { FaUnlock } from "react-icons/fa6";
import { FiEdit, FiUser, FiGlobe, FiCreditCard, FiLogOut, FiHelpCircle, FiLock, FiMessageSquare, FiClock } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import Dashboard from "../Dashboard/Dashboard";
import Typography from "../Typography/Typhography";
import Color from "../Color/Color";
import Icons from "../Icons/Icons";
import { useNavigate } from "react-router-dom";
import SimplePage from "../SimplePage/SimplePage";

const MainDashboard: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [content, setContent] = useState("dashboard");
  const [activeItem, setActiveItem] = useState("dashboard");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
        setMobileSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node) &&
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (item: string) => {
    setContent(item);
    setActiveItem(item);
    if (window.innerWidth < 768) {
      setMobileSidebarOpen(false);
    }
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsSettingsOpen(false);
  };

  const toggleSettingsDropdown = () => {
    setIsSettingsOpen(!isSettingsOpen);
    setIsProfileOpen(false);
  };

  const profileItems = [
    { label: "Edit Profile", icon: <FiEdit className="text-gray-600" /> },
    { label: "View Profile", icon: <FiUser className="text-gray-600" /> },
    { label: "Social Profile", icon: <FiGlobe className="text-gray-600" /> },
    { label: "Billing", icon: <FiCreditCard className="text-gray-600" /> },
    { label: "Logout", icon: <FiLogOut className="text-gray-600" /> },
  ];

  const settingsItems = [
    { label: "Support", icon: <FiHelpCircle className="text-gray-600" /> },
    { label: "Account Setting", icon: <FiUser className="text-gray-600" /> },
    { label: "Privacy Center", icon: <FiLock className="text-gray-600" /> },
    { label: "Feedback", icon: <FiMessageSquare className="text-gray-600" /> },
    { label: "History", icon: <FiClock className="text-gray-600" /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans text-sm">
      <div className="md:hidden fixed top-3 left-3 z-50">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-1.5 bg-white shadow rounded-md focus:outline-none"
        >
          <LuMenu className="text-gray-700 text-lg" />
        </button>
      </div>

   
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-white shadow-lg flex flex-col transition-all duration-300 ease-in-out
        ${sidebarOpen ? "w-56" : "w-16"} 
        ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <div
          onClick={toggleSidebar}
          className={`flex items-center p-3 h-14 border-b cursor-pointer ${!sidebarOpen ? "justify-center" : ""}`}
        >
          <img src="/logo.svg" width={32} alt="Logo" />
          {sidebarOpen && <span className="ml-2 text-lg font-semibold whitespace-nowrap">Mantis</span>}
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <ul className="space-y-1">
            <li
              onClick={() => handleMenuClick("dashboard")}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition hover:bg-blue-100 ${
                activeItem === "dashboard" ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              <MdDashboard className="text-lg" />
              {sidebarOpen && <span className="ml-2 whitespace-nowrap">Dashboard</span>}
            </li>

            {sidebarOpen && <h2 className="mt-4 mb-1 text-xs font-semibold text-gray-500 uppercase">UI Components</h2>}
            <li
              onClick={() => handleMenuClick("typography")}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition hover:bg-blue-50 ${
                activeItem === "typography" ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <GoTypography className="text-lg" />
              {sidebarOpen && <span className="ml-2 whitespace-nowrap">Typography</span>}
            </li>
            <li
              onClick={() => handleMenuClick("color")}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition hover:bg-blue-50 ${
                activeItem === "color" ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <IoIosColorFilter className="text-lg" />
              {sidebarOpen && <span className="ml-2 whitespace-nowrap">Color</span>}
            </li>
            <li
              onClick={() => handleMenuClick("icons")}
              className={`flex items-center p-2 rounded-lg cursor-pointer transition hover:bg-blue-50 ${
                activeItem === "icons" ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <GiConsoleController className="text-lg" />
              {sidebarOpen && <span className="ml-2 whitespace-nowrap">Icons</span>}
            </li>

            {sidebarOpen && <h2 className="mt-4 mb-1 text-xs font-semibold text-gray-500 uppercase">Pages</h2>}
            <li
              onClick={() => navigate("/login")}
              className="flex items-center p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition"
            >
              <FaUnlock className="text-lg" />
              {sidebarOpen && <span className="ml-2 whitespace-nowrap">Login</span>}
            </li>
            <li
              onClick={() => navigate("/signup")}
              className="flex items-center p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition"
            >
              <FaRegIdCard className="text-lg" />
              {sidebarOpen && <span className="ml-2 whitespace-nowrap">Register</span>}
            </li>

            {sidebarOpen && <h2 className="mt-4 mb-1 text-xs font-semibold text-gray-500 uppercase">Other</h2>}
            <li
              onClick={() => setOpen(!isOpen)}
              className="flex items-center p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition"
            >
              <LuMenu className="text-lg" />
              {sidebarOpen && (
                <>
                  <span className="ml-2 flex-1 whitespace-nowrap">Menu Levels</span>
                  {isOpen ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                </>
              )}
            </li>
            {isOpen && sidebarOpen && (
              <ul className="ml-6 pl-2 border-l border-gray-200 space-y-1">
                <li className="p-1 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">Level 2.1</li>
                <li className="p-1 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">Level 2.2</li>
                <li className="p-1 hover:text-blue-600 cursor-pointer transition whitespace-nowrap">Level 2.3</li>
              </ul>
            )}
            <li
              onClick={() => handleMenuClick("simple")}
              className={`flex items-center p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition ${
                activeItem === "simple" ? "bg-blue-50 text-blue-600" : ""
              }`}
            >
              <SiSimplenote className="text-lg" />
              {sidebarOpen && <span className="ml-2 whitespace-nowrap">Sample Page</span>}
            </li>
          </ul>

          {sidebarOpen && (
            <div className="mt-4 flex flex-col items-center text-center">
              <img src="/pro.png" alt="Pro Version" className="w-20 h-20 object-contain mb-1" />
              <h3 className="font-semibold whitespace-nowrap">Upgrade to Pro</h3>
              <p className="text-xs text-gray-500 mb-2">Get access to all premium features</p>
              <button className="w-full bg-blue-600 text-white py-1.5 px-3 rounded-md text-xs font-medium hover:bg-blue-700 transition">
                Upgrade Now
              </button>
            </div>
          )}
        </div>
      </div>

    
      <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? "md:ml-56" : "md:ml-16"}`}>

        <div className="sticky top-0 z-30 bg-white shadow-sm p-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded-md hover:bg-gray-100 hidden md:inline-flex mr-2 transition"
            >
              <LuMenu className="text-gray-700 text-lg" />
            </button>
            <div className="relative w-full left-8 md:left-auto max-w-xs">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-1.5 w-full border rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none transition text-sm"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button className="relative p-1.5 rounded-full hover:bg-gray-100 transition">
              <CiMail className="text-gray-700 text-lg" />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-100 transition">
              <FaBell className="text-gray-700 text-lg" />
            </button>

            <div className="flex items-center space-x-1">
              <div ref={profileRef} className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className={`flex items-center space-x-1 p-1.5 rounded-lg hover:bg-gray-100 focus:outline-none ${
                    isProfileOpen ? "border-b-2 border-blue-500" : ""
                  }`}
                >
                  <img src="/avatar-2.jpg" alt="Profile" className="w-7 h-7 rounded-full object-cover" />
                  <span className="hidden md:block text-gray-700 text-xs font-medium">Stebin Ben</span>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-1 w-44 bg-white rounded-lg shadow-lg z-50 text-sm">
                    <div className="p-1.5">
                      <div className="flex items-center space-x-2 p-1.5">
                        <img src="/avatar-2.jpg" alt="Profile" className="w-7 h-7 rounded-full object-cover" />
                        <div>
                          <p className="text-gray-700 font-semibold">Stebin Ben</p>
                          <p className="text-gray-500 text-xs">UI/UX Designer</p>
                        </div>
                      </div>
                      <hr className="my-1" />
                      <div className="flex items-center space-x-2 p-1.5 text-blue-600">
                        <FiUser className="text-blue-600 text-sm" />
                        <span>Profile</span>
                      </div>
                      {profileItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center space-x-2 p-1.5 text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div ref={settingsRef} className="relative">
                <button
                  onClick={toggleSettingsDropdown}
                  className={`flex items-center space-x-1 p-1.5 rounded-lg hover:bg-gray-100 focus:outline-none ${
                    isSettingsOpen ? "border-b-2 border-blue-500" : ""
                  }`}
                >
                  <IoSettingsOutline className="text-gray-700 w-5 h-5" />
                  <span className="hidden md:block text-gray-700 text-xs font-medium">Settings</span>
                </button>
                {isSettingsOpen && (
                  <div className="absolute right-0 mt-1 w-44 bg-white rounded-lg shadow-lg z-50 text-sm">
                    <div className="p-1.5">
                      {settingsItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center space-x-2 p-1.5 text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div id="main-content" className="flex-1 overflow-y-auto h-full transition-all duration-300 ease-in-out p-3">
          {content === "dashboard" && <Dashboard />}
          {content === "typography" && <Typography />}
          {content === "color" && <Color />}
          {content === "icons" && <Icons />}
          {content === "simple" && <SimplePage />}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;