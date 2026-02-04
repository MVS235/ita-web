import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { Language } from '../types';

interface AiAssistantProps {
  lang: Language;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevLangRef = useRef<Language>(lang);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading, isTranslating]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        const getGreeting = () => {
          const hour = new Date().getHours();
          if (lang === Language.ID) {
            let timeGreet = hour >= 18 || hour < 5 ? "Malam" : hour >= 15 ? "Sore" : hour >= 11 ? "Siang" : "Pagi";
            return `Selamat ${timeGreet}! Saya adalah ITA Smart Assistant. Bagaimana saya bisa membantu Anda hari ini?`;
          } else {
            let timeGreet = hour >= 17 || hour < 5 ? "Evening" : hour >= 12 ? "Afternoon" : "Morning";
            return `Good ${timeGreet}! I am the ITA Smart Assistant. How can I assist you today?`;
          }
        };
        setMessages([{ role: 'ai', text: getGreeting() }]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen, lang]);

  useEffect(() => {
    const translateHistory = async () => {
      if (messages.length === 0 || prevLangRef.current === lang) { prevLangRef.current = lang; return; }
      setIsTranslating(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const targetLang = lang === Language.ID ? 'Indonesian' : 'English';
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [{ parts: [{ text: `Translate this chat history JSON to ${targetLang}. JSON: ${JSON.stringify(messages)}` }] }],
          config: {
            responseMimeType: "application/json",
            responseSchema: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { role: { type: Type.STRING }, text: { type: Type.STRING } }, required: ["role", "text"] } }
          }
        });
        const translatedData = JSON.parse(response.text || "[]");
        if (Array.isArray(translatedData)) setMessages(translatedData);
      } catch (e) { console.error(e); } finally { setIsTranslating(false); prevLangRef.current = lang; }
    };
    translateHistory();
  }, [lang]);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isTranslating) return;
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const history = messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] }));
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
        config: { systemInstruction: `Fact-based Sales Assistant for PT Indah Tjandra Abadi (ITA). Language: ${lang === Language.ID ? 'Indonesian' : 'English'}. Specs: Widths 12-96mm, Thickness 40-55 micron, Length up to 1000m. HQ Sidoarjo, Branch Semarang.` }
      });
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "" }]);
    } catch (error) { setMessages(prev => [...prev, { role: 'ai', text: "Error. Please try again." }]); } finally { setIsLoading(false); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {isOpen ? (
        <div className="bg-white w-[350px] h-[500px] shadow-2xl rounded-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-10">
          <div className="bg-ita-purple p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2"><div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs">ITA</div><div className="font-bold text-sm">ITA Assistant</div></div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
          </div>
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {isTranslating && <div className="text-center"><span className="text-[10px] bg-ita-purple/10 text-ita-purple px-2 py-1 rounded-full animate-pulse uppercase font-bold">Translating...</span></div>}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-ita-purple text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none shadow-sm'}`}>{m.text}</div></div>
            ))}
            {isLoading && <div className="flex justify-start"><div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex items-center gap-1 shadow-sm"><div className="w-1.5 h-1.5 bg-ita-orange/60 rounded-full animate-bounce"></div><div className="w-1.5 h-1.5 bg-ita-purple/60 rounded-full animate-bounce [animation-delay:0.2s]"></div><div className="w-1.5 h-1.5 bg-ita-coral/60 rounded-full animate-bounce [animation-delay:0.4s]"></div></div></div>}
          </div>
          <div className="p-4 border-t border-slate-100"><div className="flex gap-2"><input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder={lang === Language.ID ? "Ketik pesan..." : "Type message..."} className="flex-grow px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-ita-purple outline-none" /><button onClick={handleSend} disabled={isLoading} className="w-10 h-10 bg-ita-orange text-white rounded-lg flex items-center justify-center hover:bg-ita-orange/90"><svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg></button></div></div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-16 h-16 bg-ita-purple text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-4 border-white"><svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" /></svg></button>
      )}
    </div>
  );
};

export default AiAssistant;