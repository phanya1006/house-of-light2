
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

export const getAIResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Toujours instancier au moment de l'appel pour garantir l'accès à la clé la plus récente
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error?.message?.includes("Requested entity was not found")) {
        // Cas spécifique où la clé pourrait être invalide ou non trouvée
        return "Une erreur de configuration est survenue. Veuillez contacter le créateur Mughenya Phanuel.";
    }
    return "Désolé, j'ai rencontré une petite difficulté technique. Pourriez-vous reformuler ? Que Dieu vous bénisse.";
  }
};
