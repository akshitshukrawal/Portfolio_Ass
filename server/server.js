import "dotenv/config";
import express from "express";
import axios from "axios";
import cors from "cors";
import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// 🔹 Load Resume Data
let resumeData = {};
try {
  const data = fs.readFileSync("resume.json", "utf8");
  resumeData = JSON.parse(data);
  console.log("✅ Resume loaded successfully!");
} catch (error) {
  console.error("❌ Error reading resume.json:", error);
}

// 🔹 Initialize Google Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// 🔹 Handle Chat Requests
app.post("/api/v1/chat", async (req, res) => {

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const prompt = `Suppose this is your resume and people gona ask questions from this to you:\n\n${JSON.stringify(resumeData)}\n\nUser: ${message}`;
    const result = await model.generateContent(prompt);
    
    const responseText = result.response.text(); // ✅ Ensure correct async handling

    res.json({ response: responseText || "Sorry, I couldn't generate a response." });
  } catch (error) {
    console.error("❌ Error fetching from Gemini API:", error.message);
    res.status(500).json({ error: "Error generating response from AI" });
  }
});

app.get('/', (req,res) => {
    res.send('This is the server for the predusk intern assignment.');
})

// 🔹 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
