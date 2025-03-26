"use client";

import { useEffect, useState } from "react";

export default function Navbar({ onChatClick, isChatOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { title: "About ME", path: "#about" },
    { title: "Academics", path: "#acads" },
    { title: "Projects", path: "#projects" },
    { title: "Skills", path: "#skills" },
    { title: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;
      if (!target.closest(".sidebar-container") && !target.closest(".hamburger-btn")) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = './resume.pdf';
    link.download = 'Akshit_Shukrawal_Resume.pdf';
    link.click();
  };

  const handleChatClick = () => {
    onChatClick();
    setMenuOpen(false);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Top Bar - Visible on small screens */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center p-4">
          <a href="#home" className="mx-auto">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="absolute right-4 flex items-center">
            <button
              onClick={handleChatClick}
              className="mr-4 text-gray-500 hover:text-gray-800"
            >
              Chat AI
            </button>
            <button
              className="menu-btn text-gray-500 hover:text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md">
            <ul className="py-2 text-center">
              {navigation.map((item, idx) => (
                <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                  <a href={item.path} className="text-gray-700 block">
                    {item.title}
                  </a>
                </li>
              ))}
              <li className="px-4 py-2 hover:bg-gray-100">
                <button 
                  onClick={handleResumeDownload}
                  className="text-gray-700 w-full text-center"
                >
                  Download Resume
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hamburger Button for Desktop */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(!sidebarOpen);
        }}
        className={`
          hamburger-btn
          hidden md:block 
          fixed top-4 left-4 
          z-50 
          bg-white 
          p-2 
          rounded-md 
          shadow-lg 
          border 
          border-gray-100
          ${isChatOpen ? "md:left-[calc(38.25%-4rem)]" : ""}
        `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Desktop Floating Sidebar - Visible on medium screens and up */}
      <aside 
        className={`
          sidebar-container
          hidden md:block 
          fixed top-1/2 left-4 
          transform -translate-y-1/2 
          w-64 
          bg-white 
          rounded-xl 
          shadow-lg 
          border border-gray-100 
          p-6
          transition-all duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${isChatOpen ? "md:left-[calc(38.25%-16rem)]" : ""}
          z-40
        `}
      >
        <div className="flex flex-col items-center mb-8 relative">
          <button 
            onClick={() => setSidebarOpen(false)}
            className="absolute right-0 top-0 text-gray-500 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <a href="#home" className="mb-4">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
              className="mx-auto"
            />
          </a>
          <button
            onClick={handleChatClick}
            className="text-gray-700 hover:text-gray-900 mb-4 text-center w-full"
          >
            Chat with AI
          </button>
        </div>

        <nav className="flex flex-col items-center">
          <ul className="space-y-4 text-center w-full">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-700 hover:text-gray-900">
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 text-center">
          <button
            onClick={handleResumeDownload}
            className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors inline-block"
          >
            Download Resume
          </button>
        </div>
      </aside>
    </>
  );
}