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
  text: "Hello! 👋 I'm ClaritasBot, your virtual assistant. I can help you with information about our CRM products, pricing, features, and more.\n\nWhat would you like to know?",
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

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = useCallback(
    (text?: string) => {
      const query = (text ?? input).trim();
      if (!query) return;

      const userMsg: Message = {
        id: idCounter.current++,
        role: "user",
        text: query,
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      // Simulate a brief typing delay for natural feel
      setTimeout(() => {
        const answer = findAnswer(query);
        const botMsg: Message = {
          id: idCounter.current++,
          role: "bot",
          text: answer,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 600);
    },
    [input],
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Render markdown-lite: bold and links
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      // Bold
      const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
      if (boldMatch) {
        return (
          <strong key={i} className="font-semibold">
            {boldMatch[1]}
          </strong>
        );
      }
      // Link — only allow safe internal routes and https URLs
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const url = linkMatch[2];
        let isSafe = false;
        if (url.startsWith("/") && !url.startsWith("//")) {
          isSafe = true;
        } else {
          try {
            const parsed = new URL(url);
            isSafe = parsed.protocol === "https:";
          } catch {
            isSafe = false;
          }
        }
        if (isSafe) {
          return (
            <Link
              key={i}
              href={url}
              className="text-coral-500 underline hover:text-coral-600"
              onClick={() => setIsOpen(false)}
            >
              {linkMatch[1]}
            </Link>
          );
        }
        return <span key={i}>{linkMatch[1]}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <>
      {/* Floating chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-coral-500 text-white shadow-lg shadow-coral-500/30 transition-shadow hover:shadow-xl hover:shadow-coral-500/40"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 right-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden bg-white shadow-2xl ring-1 ring-gray-200 sm:bottom-6 sm:right-6 sm:h-[520px] sm:w-[380px] sm:rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-coral-500 px-5 py-4 text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">ClaritasBot</p>
                <p className="text-xs text-white/80">Online • Ask me anything</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 transition-colors hover:bg-white/20"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      msg.role === "bot"
                        ? "bg-coral-50 text-coral-500"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {msg.role === "bot" ? (
                      <Bot className="h-4 w-4" />
                    ) : (
                      <User className="h-4 w-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "bot"
                        ? "rounded-tl-sm bg-gray-100 text-gray-800"
                        : "rounded-tr-sm bg-coral-500 text-white"
                    }`}
                  >
                    {renderText(msg.text)}
                  </div>
                </div>
              ))}

              {/* Quick questions (only show after welcome message, before user sends anything) */}
              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {QUICK_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="rounded-full border border-coral-200 bg-coral-50 px-3 py-1.5 text-xs text-coral-600 transition-colors hover:bg-coral-100"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coral-50 text-coral-500">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-gray-100 px-4 py-3">
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

            {/* Input area */}
            <div className="border-t border-gray-100 px-4 py-3">
              <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 ring-1 ring-gray-200 focus-within:ring-coral-300">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your question..."
                  className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral-500 text-white transition-all hover:bg-coral-600 disabled:opacity-40 disabled:hover:bg-coral-500"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-gray-400">
                Powered by Claritas CRM •{" "}
                <Link href="/contact" className="underline hover:text-coral-500" onClick={() => setIsOpen(false)}>
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
