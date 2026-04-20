"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import Link from "next/link";
import { findAnswer } from "@/lib/chatbot-knowledge";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
}

const WELCOME_MESSAGE: Message = {
  id: 0,
  role: "bot",
  text: "Hello! I'm ClaritasBot, your virtual assistant. I can help you with information about our CRM products, pricing, features, and more.\n\nWhat would you like to know?",
};

const QUICK_QUESTIONS = [
  "What products do you offer?",
  "What is the pricing?",
  "How do I contact you?",
  "Tell me about marketing CRM",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const idCounter = useRef(1);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, scrollToBottom]);
  useEffect(() => { if (isOpen) inputRef.current?.focus(); }, [isOpen]);

  const handleSend = useCallback(
    (text?: string) => {
      const query = (text ?? input).trim();
      if (!query) return;
      const userMsg: Message = { id: idCounter.current++, role: "user", text: query };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);
      setTimeout(() => {
        const answer = findAnswer(query);
        const botMsg: Message = { id: idCounter.current++, role: "bot", text: answer };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 600);
    },
    [input],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
      if (boldMatch) return <strong key={i} className="font-semibold">{boldMatch[1]}</strong>;
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const url = linkMatch[2];
        let isSafe = false;
        if (url.startsWith("/") && !url.startsWith("//")) { isSafe = true; }
        else { try { const parsed = new URL(url); isSafe = parsed.protocol === "https:"; } catch { isSafe = false; } }
        if (isSafe) {
          return <Link key={i} href={url} className="text-[#721011] hover:text-[#8d1a1c] underline" onClick={() => setIsOpen(false)}>{linkMatch[1]}</Link>;
        }
        return <span key={i}>{linkMatch[1]}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white bg-[#3f3f3f] shadow-lg shadow-[#3f3f3f]/30 hover:bg-[#721011] transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden shadow-2xl sm:bottom-6 sm:right-6 sm:h-[520px] sm:w-[380px] sm:rounded-2xl bg-white ring-1 ring-[#721011]/20 shadow-[0_30px_80px_-20px_rgba(63,63,63,0.35)]"
          >
            <div className="flex items-center gap-3 bg-[#3f3f3f] px-5 py-4 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#721011]/30">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">ClaritasBot</p>
                <p className="text-xs text-white/80">Online</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1.5 transition-colors hover:bg-white/20" aria-label="Close chat">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${msg.role === "bot" ? "bg-[#721011]/10 text-[#721011]" : "bg-gray-100 text-gray-500"}`}>
                    {msg.role === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${msg.role === "bot" ? "rounded-tl-sm bg-[#fafafa] text-[#3f3f3f] border border-[#3f3f3f]/[0.06]" : "rounded-tr-sm bg-[#3f3f3f] text-white"}`}>
                    {renderText(msg.text)}
                  </div>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_QUESTIONS.map((q) => (
                    <button key={q} onClick={() => handleSend(q)} className="rounded-full border px-3 py-1.5 text-xs transition-colors border-[#721011]/20 bg-[#721011]/[0.04] text-[#721011] hover:bg-[#721011]/[0.10]">
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011]">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-[#fafafa] border border-[#3f3f3f]/[0.06] px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:0ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-[#3f3f3f]/10 px-4 py-3">
              <div className="flex items-center gap-2 rounded-xl bg-[#fafafa] px-3 py-2 ring-1 ring-[#3f3f3f]/10 focus-within:ring-[#721011]/40">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent text-sm outline-none text-[#3f3f3f] placeholder:text-[#3f3f3f]/40"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-white transition-all disabled:opacity-40 bg-[#3f3f3f] hover:bg-[#721011]"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-[#3f3f3f]/50">
                Powered by Claritas CRM &bull;{" "}
                <Link href="/contact" className="underline hover:text-[#721011]" onClick={() => setIsOpen(false)}>
                  Talk to a human
                </Link>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
