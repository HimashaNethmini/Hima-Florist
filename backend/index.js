import express from "express"
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config()

const app = express();
const port = process.env.PORT;

const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};
 
const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-pro",
  geminiConfig,
});

const generate = async () => {
    try {
    const prompt = "Tell me about Roses.";
      const result = await geminiModel.generateContent(prompt);
    const response = result.response;
      console.log(response.text());
    } catch (error) {
      console.log("response error", error);
    }
};
 
generate();

app.listen(port, () => {
  console.log(`Server running on ${port}`);
})