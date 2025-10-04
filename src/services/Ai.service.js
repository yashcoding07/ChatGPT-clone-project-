import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function GenerateContent(contents){
   const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
  }); 
  console.log(response.text);
}

module.exports = GenerateContent;