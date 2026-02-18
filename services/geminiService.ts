
import { GoogleGenAI, Chat } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the personal AI recruitment assistant for ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}.
Your goal is to answer questions from recruiters or collaborators about Alex's background, skills, and projects.

Alex's Bio: ${PERSONAL_INFO.bio}
Location: ${PERSONAL_INFO.location}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name}: ${s.level}/100`).join('\n')}

Rules:
1. Be professional, concise, and enthusiastic.
2. If you don't know the answer, say "That's a great question. You should contact Alex directly at ${PERSONAL_INFO.email} for more details."
3. Highlight Alex's expertise in AI and Full-Stack development.
4. Keep responses to under 3 sentences unless asked for deep detail.
`;

export const createPortfolioChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const generateSummary = async (rawText: string): Promise<string> => {
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Summarize this resume/text into a professional 2-sentence pitch for a portfolio: ${rawText}`,
        config: {
            temperature: 0.5,
        }
    });
    return response.text || "Failed to generate summary.";
};
