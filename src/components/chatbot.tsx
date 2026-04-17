"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import Link from "next/link";
import { findAnswer } from "@/lib/chatbot-knowledge";
import { useDesignVersion } from "@/config/design-context";

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
  const { version } = useDesignVersion();

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
          const linkColor = version === "v6" ? "text-blue-600 hover:text-blue-500" : version === "v5" ? "text-blue-400 hover:text-blue-300" : version === "v4" ? "text-violet-400 hover:text-violet-300" : version === "v2" ? "text-[#0d7377] hover:text-[#0a5f62]" : version === "v3" ? "text-amber-600 hover:text-amber-500" : "text-coral-500 hover:text-coral-600";
          return <Link key={i} href={url} className={`${linkColor} underline`} onClick={() => setIsOpen(false)}>{linkMatch[1]}</Link>;
        }
        return <span key={i}>{linkMatch[1]}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const styles = {
    v1: {
      fab: "bg-coral-500 shadow-lg shadow-coral-500/30 hover:shadow-xl hover:shadow-coral-500/40",
      window: "bg-white ring-1 ring-gray-200",
      header: "bg-coral-500",
      avatarBg: "bg-white/20",
      botBubble: "rounded-tl-sm bg-gray-100 text-gray-800",
      userBubble: "rounded-tr-sm bg-coral-500 text-white",
      botIcon: "bg-coral-50 text-coral-500",
      quickBtn: "border-coral-200 bg-coral-50 text-coral-600 hover:bg-coral-100",
      inputRing: "ring-gray-200 focus-within:ring-coral-300",
      sendBtn: "bg-coral-500 hover:bg-coral-600 disabled:hover:bg-coral-500",
      inputBg: "bg-gray-50",
      powered: "text-gray-400",
      linkColor: "hover:text-coral-500",
    },
    v2: {
      fab: "bg-[#0d7377] shadow-lg shadow-[#0d7377]/20 text-white hover:bg-[#0a5f62]",
      window: "bg-white ring-1 ring-slate-200",
      header: "bg-[#1e293b]",
      avatarBg: "bg-[#0d7377]/20",
      botBubble: "rounded-tl-sm bg-slate-100 text-[#1e293b]",
      userBubble: "rounded-tr-sm bg-[#0d7377] text-white",
      botIcon: "bg-[#0d7377]/10 text-[#0d7377]",
      quickBtn: "border-[#0d7377]/20 bg-[#0d7377]/[0.06] text-[#0d7377] hover:bg-[#0d7377]/[0.12]",
      inputRing: "ring-slate-200 focus-within:ring-[#0d7377]/40",
      sendBtn: "bg-[#0d7377] hover:bg-[#0a5f62] disabled:hover:bg-[#0d7377]",
      inputBg: "bg-slate-50",
      powered: "text-slate-400",
      linkColor: "hover:text-[#0d7377]",
    },
    v3: {
      fab: "bg-[#1a2b4a] shadow-lg shadow-[#1a2b4a]/30 hover:bg-[#243756]",
      window: "bg-white ring-1 ring-gray-200",
      header: "bg-[#1a2b4a]",
      avatarBg: "bg-white/15",
      botBubble: "rounded-tl-sm bg-[#f4f2ed] text-[#1a2b4a]",
      userBubble: "rounded-tr-sm bg-[#1a2b4a] text-white",
      botIcon: "bg-[#1a2b4a]/[0.06] text-[#1a2b4a]/60",
      quickBtn: "border-[#1a2b4a]/10 bg-[#1a2b4a]/[0.04] text-[#1a2b4a]/70 hover:bg-[#1a2b4a]/[0.08]",
      inputRing: "ring-gray-200 focus-within:ring-amber-500/30",
      sendBtn: "bg-[#1a2b4a] hover:bg-[#243756] disabled:hover:bg-[#1a2b4a]",
      inputBg: "bg-gray-50",
      powered: "text-gray-400",
      linkColor: "hover:text-[#1a2b4a]",
    },
    v4: {
      fab: "bg-gradient-to-r from-violet-500 to-blue-500 shadow-lg shadow-violet-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
      window: "bg-[#0a0118]/95 backdrop-blur-2xl ring-1 ring-white/[0.08]",
      header: "bg-[#0f0420] border-b border-white/[0.06]",
      avatarBg: "bg-violet-500/20",
      botBubble: "rounded-tl-sm bg-white/[0.05] text-slate-300",
      userBubble: "rounded-tr-sm bg-gradient-to-r from-violet-500 to-blue-500 text-white",
      botIcon: "bg-violet-500/10 text-violet-400",
      quickBtn: "border-violet-500/20 bg-violet-500/[0.06] text-violet-300 hover:bg-violet-500/[0.12]",
      inputRing: "ring-white/[0.06] focus-within:ring-violet-500/30",
      sendBtn: "bg-gradient-to-r from-violet-500 to-blue-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] disabled:opacity-40",
      inputBg: "bg-white/[0.03]",
      powered: "text-slate-600",
      linkColor: "hover:text-violet-300",
    },
    v5: {
      fab: "bg-blue-600 shadow-lg shadow-blue-600/20 hover:bg-blue-700",
      window: "bg-[#050b1a] ring-1 ring-white/[0.06]",
      header: "bg-[#050b1a] border-b border-white/[0.06]",
      avatarBg: "bg-blue-600/20",
      botBubble: "rounded-tl-sm bg-white/[0.04] text-slate-300",
      userBubble: "rounded-tr-sm bg-blue-600 text-white",
      botIcon: "bg-blue-600/10 text-blue-400",
      quickBtn: "border-blue-500/20 bg-blue-500/[0.06] text-blue-400 hover:bg-blue-500/[0.12]",
      inputRing: "ring-white/[0.06] focus-within:ring-blue-500/30",
      sendBtn: "bg-blue-600 hover:bg-blue-700 disabled:hover:bg-blue-600",
      inputBg: "bg-transparent",
      powered: "text-slate-600",
      linkColor: "hover:text-blue-400",
    },
    v6: {
      fab: "bg-zinc-950 shadow-lg shadow-zinc-950/20 hover:bg-zinc-800",
      window: "bg-white ring-1 ring-zinc-200",
      header: "bg-zinc-950",
      avatarBg: "bg-zinc-800",
      botBubble: "rounded-tl-sm bg-zinc-100 text-zinc-800",
      userBubble: "rounded-tr-sm bg-zinc-950 text-white",
      botIcon: "bg-blue-50 text-blue-600",
      quickBtn: "border-zinc-200 bg-zinc-50 text-zinc-600 hover:bg-zinc-100",
      inputRing: "ring-zinc-200 focus-within:ring-blue-500/30",
      sendBtn: "bg-zinc-950 hover:bg-zinc-800 disabled:hover:bg-zinc-950",
      inputBg: "bg-zinc-50",
      powered: "text-zinc-400",
      linkColor: "hover:text-blue-600",
    },
    v7: {
      fab: "bg-blue-500 shadow-lg shadow-blue-500/20 hover:bg-blue-400",
      window: "bg-[#0f1729]/95 backdrop-blur-2xl ring-1 ring-white/[0.08]",
      header: "bg-[#0b1121] border-b border-white/[0.06]",
      avatarBg: "bg-blue-500/20",
      botBubble: "rounded-tl-sm bg-white/[0.04] text-slate-300",
      userBubble: "rounded-tr-sm bg-blue-500 text-white",
      botIcon: "bg-blue-500/10 text-blue-400",
      quickBtn: "border-blue-500/20 bg-blue-500/[0.06] text-blue-400 hover:bg-blue-500/[0.12]",
      inputRing: "ring-white/[0.06] focus-within:ring-blue-500/30",
      sendBtn: "bg-blue-500 hover:bg-blue-400 disabled:hover:bg-blue-500",
      inputBg: "bg-white/[0.03]",
      powered: "text-slate-600",
      linkColor: "hover:text-blue-400",
    },
    v8: {
      fab: "bg-[#B8965A] shadow-lg shadow-[#B8965A]/20 hover:bg-[#D4B886]",
      window: "bg-[#FAF8F4] ring-1 ring-[#B8965A]/20",
      header: "bg-[#1A1A1A]",
      avatarBg: "bg-[#B8965A]/20",
      botBubble: "rounded-tl-sm bg-[#F5F2ED] text-[#1A1A1A]",
      userBubble: "rounded-tr-sm bg-[#1A1A1A] text-white",
      botIcon: "bg-[#B8965A]/10 text-[#B8965A]",
      quickBtn: "border-[#B8965A]/20 bg-[#B8965A]/[0.06] text-[#B8965A] hover:bg-[#B8965A]/[0.12]",
      inputRing: "ring-[#B8965A]/20 focus-within:ring-[#B8965A]/40",
      sendBtn: "bg-[#1A1A1A] hover:bg-[#333] disabled:hover:bg-[#1A1A1A]",
      inputBg: "bg-[#F5F2ED]",
      powered: "text-[#B8965A]/60",
      linkColor: "hover:text-[#B8965A]",
    },
    v9: {
      fab: "bg-[#1C1A17] shadow-lg shadow-[#1C1A17]/30 hover:bg-[#8B6F3E]",
      window: "bg-[#F7F1E8] ring-1 ring-[#8B6F3E]/20 shadow-[0_30px_80px_-20px_rgba(28,26,23,0.35)]",
      header: "bg-[#1C1A17]",
      avatarBg: "bg-[#8B6F3E]/20",
      botBubble: "rounded-tl-sm bg-[#EDE4D3] text-[#1C1A17]",
      userBubble: "rounded-tr-sm bg-[#1C1A17] text-[#F7F1E8]",
      botIcon: "bg-[#8B6F3E]/10 text-[#8B6F3E]",
      quickBtn: "border-[#8B6F3E]/20 bg-[#8B6F3E]/[0.06] text-[#8B6F3E] hover:bg-[#8B6F3E]/[0.12]",
      inputRing: "ring-[#8B6F3E]/20 focus-within:ring-[#8B6F3E]/40",
      sendBtn: "bg-[#1C1A17] hover:bg-[#8B6F3E] disabled:hover:bg-[#1C1A17]",
      inputBg: "bg-[#EDE4D3]",
      powered: "text-[#8B6F3E]/60",
      linkColor: "hover:text-[#8B6F3E]",
    },
  };

  const s = styles[version];

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
            className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white transition-shadow ${s.fab}`}
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
            className={`fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden shadow-2xl sm:bottom-6 sm:right-6 sm:h-[520px] sm:w-[380px] sm:rounded-2xl ${s.window}`}
          >
            <div className={`flex items-center gap-3 ${s.header} px-5 py-4 text-white`}>
              <div className={`flex h-9 w-9 items-center justify-center rounded-full ${s.avatarBg}`}>
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
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${msg.role === "bot" ? s.botIcon : (version === "v6" ? "bg-zinc-100 text-zinc-500" : version === "v4" || version === "v5" ? "bg-white/[0.06] text-gray-400" : version === "v2" ? "bg-slate-100 text-slate-500" : "bg-gray-100 text-gray-500")}`}>
                    {msg.role === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                  </div>
                  <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${msg.role === "bot" ? s.botBubble : s.userBubble}`}>
                    {renderText(msg.text)}
                  </div>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_QUESTIONS.map((q) => (
                    <button key={q} onClick={() => handleSend(q)} className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${s.quickBtn}`}>
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${s.botIcon}`}>
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className={`rounded-2xl rounded-tl-sm ${version === "v6" ? "bg-zinc-100" : version === "v5" ? "bg-white/[0.04]" : version === "v4" ? "bg-white/[0.05]" /* Aurora glassmorphism */ : version === "v2" ? "bg-slate-100" : version === "v3" ? "bg-[#f4f2ed]" : "bg-gray-100"} px-4 py-3`}>
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

            <div className={`border-t ${version === "v4" || version === "v5" ? "border-white/[0.04]" : version === "v2" || version === "v6" ? "border-slate-200" : "border-gray-100"} px-4 py-3`}>
              <div className={`flex items-center gap-2 rounded-xl ${s.inputBg} px-3 py-2 ring-1 ${s.inputRing}`}>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  className={`flex-1 bg-transparent text-sm outline-none ${version === "v6" ? "text-zinc-900 placeholder:text-zinc-400" : version === "v5" ? "text-white placeholder:text-slate-600" : version === "v4" ? "text-white placeholder:text-slate-600" : version === "v2" ? "text-[#1e293b] placeholder:text-slate-400" : version === "v3" ? "text-[#1a2b4a] placeholder:text-[#1a2b4a]/40" : "text-gray-800 placeholder:text-gray-400"}`}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-white transition-all disabled:opacity-40 ${s.sendBtn}`}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className={`mt-2 text-center text-[10px] ${s.powered}`}>
                Powered by Claritas CRM &bull;{" "}
                <Link href="/contact" className={`underline ${s.linkColor}`} onClick={() => setIsOpen(false)}>
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
