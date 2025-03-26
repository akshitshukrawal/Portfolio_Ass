"use client";

import { useEffect, useState } from "react";

export default function Navbar({ onChatClick, isChatOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

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
      if (!target.closest(".menu-btn")) setMenuOpen(false);
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
  };

  return (
    <nav
      className={`
        fixed top-4 
        left-1/2 transform -translate-x-1/2
        ${isChatOpen ? "md:left-[38.25%]" : ""}
        z-50 
        w-[95%] max-w-screen-xl 
        bg-white rounded-xl shadow-lg 
        border border-gray-100
        py-2 md:text-sm
        ${menuOpen ? "shadow-xl" : ""}
      `}
    >
      <div className="gap-x-14 items-center mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-2 md:block">
          <a href="#home">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="flex items-center md:hidden">
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
        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-700 hover:text-gray-900">
                <a href={item.path} className="block">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <button
              onClick={handleResumeDownload}
              className="block text-gray-700 hover:text-gray-900 mr-4 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
            >
              Download Resume
            </button>
            <button
              onClick={handleChatClick}
              className="hidden md:block text-gray-700 hover:text-gray-900"
            >
              Chat with AI
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}