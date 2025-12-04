const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function GenerateResponse(content){
   const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: content,
    config: {
      temperature: 0.7,
      systemInstruction: "you are a professional and ethical ai chatbot answer in that manner."
    }
  }); 
  return response.text;
}

async function GenerateVector(content){
  const response = await ai.models.embedContent({
    model: 'gemini-embedding-001',
    contents: content,
    config: {
      outputDimensionality: 768,
    }
  })

  return response.embeddings[0].values
}

module.exports = {GenerateResponse, GenerateVector};