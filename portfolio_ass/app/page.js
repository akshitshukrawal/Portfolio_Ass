"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { About } from "../components/About";
import { Academics } from "../components/Academics";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import Chatbox from "../components/Chatbox";
import { Contact } from "@/components/Contact";

export default function Home() {
  // Controls whether the chat drawer is open
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Show chat drawer
  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Hide chat drawer
  const handleCloseChat = () => {
    setIsChatOpen(!isChatOpen);
    console.log(isChatOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Navbar with callback to open chat */}
      <Navbar onChatClick={handleChatClick} isChatOpen={isChatOpen} />

      {/* Main Content - Added top padding to create space below navbar */}
      <main className="p-4">  {/* Increased top padding to pt-24 (96px) */}
        <section id="about" className="p-4">
          <About />
        </section>
        <section id="acads" className="p-4">
          <Academics />
        </section>
        <section id="projects" className="p-4">
          <Projects />
        </section>
        <section id="skills" className="p-4">
          <Skills />
        </section>

        {/* Optional: Add a #contact section if needed */}
        <section id="contact" className="p-8 bg-gray-100 min-h-[40vh]">
          <Contact />
        </section>
      </main>

      {/* Chat Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-full sm:w-[400px] bg-white border-l border-gray-200 shadow-2xl
          transform transition-transform duration-300
          ${isChatOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Chat with AI</h2>
          <button
            onClick={handleCloseChat}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Chatbox Container */}
        <div className="p-4 h-[calc(100%-4rem)]">
          <Chatbox onClose={handleCloseChat}/>
        </div>
      </div>
    </div>
  );
}