"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2 } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

export default function ContactPage() {
  const { version } = useDesignVersion();
  const isV5 = version === "v5";
  const isV6 = version === "v6";
  const isV7 = version === "v7";
  const isDark = isV5 || isV7;
  const isV9 = version === "v9";

  const [form, setForm] = useState({ email: "", name: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputClass = isV9
    ? "border-0 border-b border-[#1C1A17]/25 bg-transparent px-0 py-4 text-[15px] text-[#1C1A17] placeholder:text-[#1C1A17]/40 focus:border-[#8B6F3E] focus:outline-none focus:ring-0"
    : isV6
    ? "bg-white border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
    : isV5
      ? "bg-white/[0.03] border border-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      : "rounded-lg border border-dark-600 bg-dark-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setForm({ email: "", name: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us at sales@claritascrm.com");
    }
  };

  if (isV9) {
    const infoItems = [
      { icon: MapPin, title: "Head Office — Malaysia", body: "9-7, Block A, Jaya One,\n72A Jalan Prof Diraja,\nJln Profesor Diraja Ungku Aziz,\n46200 Petaling Jaya,\nSelangor, Malaysia." },
      { icon: Phone, title: "Sales Hotline", body: "03-7613 4824" },
      { icon: Mail, title: "Sales Enquiry", body: "sales@claritascrm.com" },
      { icon: Clock, title: "Business Hours", body: "Mon — Fri, 9AM — 6PM MYT" },
    ];
    return (
      <>
        <section className="relative bg-[#F7F1E8] pt-32 pb-16">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-12 bg-[#8B6F3E]" />
              <span className="v9-eyebrow">Open a Conversation</span>
              <span className="h-px w-12 bg-[#8B6F3E]" />
            </div>
            <h1 className="v9-serif text-[44px] md:text-[72px] leading-[1.02] tracking-[-0.02em] text-[#1C1A17] max-w-4xl mx-auto">
              We read every enquiry <span className="italic font-light text-[#8B6F3E]">personally.</span>
            </h1>
            <p className="mt-8 max-w-xl mx-auto text-[17px] leading-[1.7] text-[#1C1A17]/70">
              A senior member of our team will respond within one business day. For time-sensitive matters, our sales hotline remains the most direct channel.
            </p>
          </div>
        </section>

        <section className="bg-[#EDE4D3] py-20 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
              <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center border border-[#8B6F3E]/30 bg-[#8B6F3E]/[0.06] px-6 py-16 text-center"
                  >
                    <CheckCircle2 className="h-12 w-12 text-[#8B6F3E]" />
                    <h3 className="mt-4 v9-serif text-[24px] text-[#1C1A17]">Thank you.</h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-[#1C1A17]/70 max-w-sm">
                      Your message has been received. A senior member of our team will respond within one business day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 border border-[#1C1A17]/25 px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#1C1A17]/70 hover:border-[#8B6F3E] hover:text-[#8B6F3E]"
                    >
                      Send Another
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <input type="email" name="email" placeholder="Email" required maxLength={254} value={form.email} onChange={handleChange} className={inputClass} />
                      <input type="text" name="name" placeholder="Full Name" required maxLength={100} value={form.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <input type="tel" name="phone" placeholder="Mobile Phone Number" maxLength={20} pattern="[0-9+\-\s()]{7,20}" value={form.phone} onChange={handleChange} className={`w-full ${inputClass}`} />
                    <input type="text" name="subject" placeholder="Subject" maxLength={200} value={form.subject} onChange={handleChange} className={`w-full ${inputClass}`} />
                    <textarea name="message" rows={5} placeholder="Message" maxLength={5000} value={form.message} onChange={handleChange} className={`w-full ${inputClass} resize-none`} />
                    {status === "error" && <p className="text-sm text-[#8B3A1F]">{errorMsg}</p>}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center gap-3 bg-[#1C1A17] text-[#F7F1E8] px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#8B6F3E] transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" />Sending…</>) : "Send Enquiry"}
                    </button>
                  </form>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {infoItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="v9-eyebrow mb-2">{item.title}</h4>
                      <p className="v9-serif text-[17px] leading-[1.6] text-[#1C1A17]/80 whitespace-pre-line">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className={`relative overflow-hidden pt-16 ${isV6 ? "bg-zinc-950" : isDark ? "bg-[#0b1121]" : "bg-gray-50"}`}>
        {isDark && <div className="absolute inset-0 bg-gradient-to-b from-[#0b1121] via-[#0f1729] to-[#0b1121]" />}
        {isV6 && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        )}
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ${isV6 ? "py-20 sm:py-28" : isDark ? "py-20 sm:py-28" : "py-16 sm:py-24"}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isV6 ? 0.5 : isDark ? 0.6 : 0.5 }}
            className="text-center"
          >
            {isV6 ? (
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold tracking-wide uppercase">
                Get in Touch
              </span>
            ) : isDark ? (
              <div className="flex items-center justify-center gap-4 mb-10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
                <span className="font-black uppercase tracking-[0.4em] text-[10px] text-blue-500">
                  Get in Touch
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-px bg-blue-500"
                />
              </div>
            ) : (
              <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Get in Touch
              </span>
            )}
            <h1
              className={
                isV6
                  ? "mt-6 text-3xl md:text-5xl font-bold text-white tracking-tight"
                  : isV5
                    ? "text-4xl md:text-6xl font-light text-white leading-[0.95] tracking-tighter"
                    : "mt-6 text-3xl font-extrabold tracking-tight text-dark-900 sm:text-4xl lg:text-5xl"
              }
              style={isDark ? { fontFamily: 'var(--font-playfair), "Playfair Display", serif' } : undefined}
            >
              {isV6 ? (
                <><span className="text-blue-400">Contact</span> Us</>
              ) : isDark ? (
                <><span className="text-blue-500">Contact</span> Us</>
              ) : (
                <><span className="text-coral-500">CONTACT</span> US</>
              )}
            </h1>
            <p className={`mx-auto mt-4 max-w-xl text-base ${isV6 ? "text-zinc-400 font-light" : isDark ? "text-slate-500 font-light" : "text-gray-500"}`}>
              Whether you&apos;re looking for a demo, pricing, or just want to learn more — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className={isV6 ? "bg-zinc-50 py-20" : isDark ? "bg-[#0b1121] py-20 sm:py-28" : "bg-dark-900 py-16 sm:py-20"}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 ${isV6 ? "gap-16" : isDark ? "gap-16" : "gap-10 lg:gap-16"}`}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={
                    isV6
                      ? "flex flex-col items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 px-6 py-16 text-center"
                      : isV5
                        ? "flex flex-col items-center justify-center border border-green-500/30 bg-green-500/10 px-6 py-16 text-center"
                        : "flex flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-16 text-center"
                  }
                >
                  <CheckCircle2 className={isV6 ? "h-12 w-12 text-blue-600" : "h-12 w-12 text-green-400"} />
                  <h3 className={isV6 ? "mt-4 text-lg font-bold text-zinc-950" : "mt-4 text-lg font-bold text-white"}>Thank You!</h3>
                  <p className={`mt-2 text-sm ${isV6 ? "text-zinc-500" : isDark ? "text-slate-400" : "text-gray-400"}`}>
                    Your enquiry has been sent to our sales team. We&apos;ll get back to you shortly!
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className={
                      isV6
                        ? "mt-6 bg-zinc-100 border border-zinc-200 rounded-full px-6 py-2 text-xs font-semibold text-zinc-600 transition-colors hover:bg-zinc-200"
                        : isV5
                          ? "mt-6 border border-white/20 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 transition-colors hover:border-blue-500 hover:text-white"
                          : "mt-6 rounded-full border border-gray-600 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:border-coral-500 hover:text-white"
                    }
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Phone Number"
                    maxLength={20}
                    pattern="[0-9+\-\s()]{7,20}"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full ${inputClass}`}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject(s)"
                    maxLength={200}
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full ${inputClass}`}
                  />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Message Body"
                    maxLength={5000}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full ${inputClass} resize-none`}
                  />

                  {status === "error" && (
                    <p className="text-sm text-red-400">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={
                      isV6
                        ? "inline-flex items-center gap-2 bg-zinc-950 text-white rounded-full px-10 py-3 text-sm font-bold hover:bg-zinc-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                        : isV5
                          ? "inline-flex items-center gap-2 px-12 py-5 bg-white text-[#0b1121] font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                          : "inline-flex items-center gap-2 rounded-full bg-coral-500 px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                    }
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      "SEND"
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center ${isV6 ? "rounded-lg bg-blue-50 text-blue-600" : isDark ? "bg-blue-500/10 text-blue-400" : "rounded-full bg-coral-500/20 text-coral-400"}`}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isV6 ? "text-zinc-950" : "text-white"}`}>
                    Head Office - Malaysia
                  </h4>
                  <p className={`mt-1 text-sm leading-relaxed ${isV6 ? "text-zinc-500" : isDark ? "text-slate-400" : "text-gray-400"}`}>
                    9-7, Block A, Jaya One,
                    <br />
                    72A Jalan Prof Diraja,
                    <br />
                    Jln Profesor Diraja Ungku Aziz,
                    <br />
                    46200 Petaling Jaya,
                    <br />
                    Selangor, Malaysia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center ${isV6 ? "rounded-lg bg-blue-50 text-blue-600" : isDark ? "bg-blue-500/10 text-blue-400" : "rounded-full bg-coral-500/20 text-coral-400"}`}>
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isV6 ? "text-zinc-950" : "text-white"}`}>
                    Sales Hotline:
                  </h4>
                  <p className={`mt-1 text-sm ${isV6 ? "text-zinc-500" : isDark ? "text-slate-400" : "text-gray-400"}`}>03-7613 4824</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center ${isV6 ? "rounded-lg bg-blue-50 text-blue-600" : isDark ? "bg-blue-500/10 text-blue-400" : "rounded-full bg-coral-500/20 text-coral-400"}`}>
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isV6 ? "text-zinc-950" : "text-white"}`}>
                    Sales Enquiry:
                  </h4>
                  <p className={`mt-1 text-sm ${isV6 ? "text-zinc-500" : isDark ? "text-slate-400" : "text-gray-400"}`}>
                    sales@claritascrm.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center ${isV6 ? "rounded-lg bg-blue-50 text-blue-600" : isDark ? "bg-blue-500/10 text-blue-400" : "rounded-full bg-coral-500/20 text-coral-400"}`}>
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${isV6 ? "text-zinc-950" : "text-white"}`}>
                    Business Hours:
                  </h4>
                  <p className={`mt-1 text-sm ${isV6 ? "text-zinc-500" : isDark ? "text-slate-400" : "text-gray-400"}`}>
                    Mon — Fri, 9AM — 6PM MYT
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
