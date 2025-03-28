"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react"; // Import close icon
import geminiBot from "@/api/google-gemini";

export default function Chatbox({ onClose }) { // Add onClose prop
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typingMessage, setTypingMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageContainerRef = useRef(null);

  const typeMessage = (message) => {
    setIsTyping(true);
    let index = 0;
    setTypingMessage("");

    const typingInterval = setInterval(() => {
      if (index < message.length) {
        setTypingMessage((prev) => prev + message[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 20);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await geminiBot(input);
      typeMessage(response);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages, 
          { text: response, sender: "bot" }
        ]);
      }, response.length * 20);
    } catch (error) {
      const errorMessage = "Sorry, there was an error processing your request.";
      typeMessage(errorMessage);
      
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages, 
          { text: errorMessage, sender: "bot" }
        ]);
      }, errorMessage.length * 20);
    }
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages, typingMessage]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="w-full h-full h-[500px] bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col relative pt-3">
      {/* Header with Close Button */}
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="text-lg font-semibold">Resume Chat</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close chat"
        >
          <X size={24} />
        </button>
      </div>

      {/* Chat Messages */}
      <div 
        ref={messageContainerRef} 
        className="flex-1 overflow-auto p-4 space-y-2 bg-gray-50"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <p
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user" 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <p className="p-3 rounded-lg max-w-[80%] bg-gray-200 text-gray-800">
              {typingMessage}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        )}
      </div>

      {/* Input + Send Button */}
      <div className="border-t p-2 flex">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Ask About Resume..."
          disabled={isTyping}
        />
        <button
          onClick={sendMessage}
          className={`ml-2 px-4 py-2 rounded-md transition-colors ${
            isTyping 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          disabled={isTyping}
        >
          Send
        </button>
      </div>
    </div>
  );
}