"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

export function ContactSection() {
  const [form, setForm] = useState({ email: "", name: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { version } = useDesignVersion();

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
      if (!res.ok) { setStatus("error"); setErrorMsg(data.error || "Something went wrong."); return; }
      setStatus("success");
      setForm({ email: "", name: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email us at sales@claritascrm.com");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office - Malaysia",
      content: "9-7, Block A, Jaya One,\n72A Jalan Prof Diraja,\nJln Profesor Diraja Ungku Aziz,\n46200 Petaling Jaya,\nSelangor, Malaysia.",
    },
    { icon: Phone, title: "Sales Hotline:", content: "03-7613 4824" },
    { icon: Mail, title: "Sales Enquiry:", content: "sales@claritascrm.com" },
  ];

  // Style maps
  const styles = {
    v1: {
      section: "bg-dark-900",
      heading: "text-white",
      headingAccent: "text-coral-500",
      input: "rounded-lg border border-dark-600 bg-dark-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500",
      button: "rounded-full bg-coral-500 px-10 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25",
      ghost: "rounded-full border border-gray-600 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 hover:border-coral-500 hover:text-white",
      iconBg: "bg-coral-500/20 text-coral-400",
      label: "text-white",
      body: "text-gray-400",
      successBorder: "border-green-500/30 bg-green-500/10",
    },
    v2: {
      section: "bg-[#1e293b]",
      heading: "text-white",
      headingAccent: "text-[#2dd4bf]",
      input: "rounded-lg border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#0d7377] focus:outline-none focus:ring-1 focus:ring-[#0d7377]/40",
      button: "rounded-lg bg-[#0d7377] px-10 py-3 text-sm font-semibold text-white hover:bg-[#0a5f62] hover:shadow-lg hover:shadow-[#0d7377]/20",
      ghost: "rounded-lg border border-white/[0.12] px-6 py-2 text-xs font-semibold text-white/60 hover:border-white/30 hover:text-white",
      iconBg: "bg-[#0d7377]/20 text-[#2dd4bf]",
      label: "text-white",
      body: "text-white/50",
      successBorder: "border-[#0d7377]/30 bg-[#0d7377]/10",
    },
    v3: {
      section: "bg-[#1a2b4a]",
      heading: "text-white",
      headingAccent: "text-amber-400",
      input: "rounded-lg border border-white/[0.1] bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/30",
      button: "rounded-lg bg-amber-500 px-10 py-3 text-sm font-semibold text-[#1a2b4a] hover:bg-amber-400",
      ghost: "rounded-lg border border-white/[0.12] px-6 py-2 text-xs font-semibold text-white/60 hover:border-white/30 hover:text-white",
      iconBg: "bg-amber-500/15 text-amber-400",
      label: "text-white",
      body: "text-white/50",
      successBorder: "border-amber-500/20 bg-amber-500/[0.06]",
    },
    v4: {
      section: "bg-[#0a0118]",
      heading: "text-white",
      headingAccent: "bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent",
      input: "rounded-xl border border-white/[0.1] bg-white/[0.04] backdrop-blur px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30",
      button: "rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-10 py-3 text-sm font-semibold text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
      ghost: "rounded-xl border border-white/[0.1] bg-white/[0.03] px-6 py-2 text-xs font-medium text-slate-400 hover:bg-white/[0.06] hover:text-white",
      iconBg: "bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-300",
      label: "text-white",
      body: "text-slate-400",
      successBorder: "border-violet-500/20 bg-violet-500/[0.06]",
    },
    v5: {
      section: "bg-white",
      heading: "text-[#050b1a]",
      headingAccent: "text-blue-600",
      input: "border-0 border-b border-[#050b1a]/20 bg-transparent px-0 py-4 text-sm text-[#050b1a] placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-0",
      button: "bg-[#050b1a] px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-blue-600 transition-all duration-500",
      ghost: "border border-[#050b1a]/20 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-[#050b1a]/60 hover:border-[#050b1a] hover:text-[#050b1a]",
      iconBg: "bg-blue-600/10 text-blue-600",
      label: "text-[#050b1a]",
      body: "text-slate-500",
      successBorder: "border-blue-600/20 bg-blue-600/[0.04]",
    },
    v6: {
      section: "bg-zinc-50",
      heading: "text-zinc-950",
      headingAccent: "text-blue-600",
      input: "bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
      button: "bg-zinc-950 text-white rounded-full px-10 py-3 text-sm font-bold hover:bg-zinc-800 transition-all",
      ghost: "bg-zinc-100 border border-zinc-200 rounded-full px-6 py-2 text-xs font-semibold text-zinc-600 hover:bg-zinc-200",
      iconBg: "bg-blue-50 text-blue-600",
      label: "text-zinc-950",
      body: "text-zinc-500",
      successBorder: "border-blue-200 bg-blue-50",
    },
    v7: {
      section: "bg-[#0b1121]",
      heading: "text-white",
      headingAccent: "text-blue-400",
      input: "rounded-lg border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30",
      button: "rounded-lg bg-blue-500 px-10 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition-all",
      ghost: "rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-2 text-xs font-medium text-slate-400 hover:bg-white/[0.06] hover:text-white",
      iconBg: "bg-blue-500/15 text-blue-400",
      label: "text-white",
      body: "text-slate-400",
      successBorder: "border-blue-500/20 bg-blue-500/[0.06]",
    },
    v8: {
      section: "bg-[#FAF8F4]",
      heading: "text-[#1A1A1A]",
      headingAccent: "text-[#B8965A]",
      input: "border-0 border-b border-[#1A1A1A]/20 bg-transparent px-0 py-4 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#B8965A] focus:outline-none focus:ring-0",
      button: "bg-[#1A1A1A] px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-[#B8965A] transition-all duration-500",
      ghost: "border border-[#1A1A1A]/20 px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 hover:border-[#B8965A] hover:text-[#B8965A]",
      iconBg: "bg-[#B8965A]/10 text-[#B8965A]",
      label: "text-[#1A1A1A]",
      body: "text-[#1A1A1A]/50",
      successBorder: "border-[#B8965A]/20 bg-[#B8965A]/[0.06]",
    },
    v9: {
      section: "bg-[#EDE4D3]",
      heading: "text-[#1C1A17]",
      headingAccent: "text-[#8B6F3E] italic font-light",
      input: "border-0 border-b border-[#1C1A17]/25 bg-transparent px-0 py-4 text-[15px] text-[#1C1A17] placeholder:text-[#1C1A17]/40 focus:border-[#8B6F3E] focus:outline-none focus:ring-0",
      button: "bg-[#1C1A17] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#F7F1E8] hover:bg-[#8B6F3E] transition-colors duration-500",
      ghost: "border border-[#1C1A17]/25 px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[#1C1A17]/70 hover:border-[#8B6F3E] hover:text-[#8B6F3E]",
      iconBg: "bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20 rounded-full",
      label: "text-[#1C1A17] v9-serif",
      body: "text-[#1C1A17]/65",
      successBorder: "border-[#8B6F3E]/30 bg-[#8B6F3E]/[0.06]",
    },
  };

  const s = styles[version];

  return (
    <section className={`${s.section} py-12 sm:py-16 md:py-20`} id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          {version === "v1" ? (
            <h2 className={`text-3xl font-bold ${s.heading} sm:text-4xl`}>
              <span className={s.headingAccent}>CONTACT</span> US
            </h2>
          ) : version === "v9" ? (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-[#8B6F3E]" />
                <span className="v9-eyebrow">Open a Conversation</span>
              </div>
              <h2 className="v9-serif text-[40px] md:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#1C1A17]">
                We read every enquiry <span className={s.headingAccent}>personally.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-[#1C1A17]/65">
                A senior member of our team will respond within one business day. For time-sensitive matters, our sales hotline remains the most direct channel.
              </p>
            </div>
          ) : version === "v8" ? (
            <div>
              <span className="text-[11px] uppercase tracking-[0.4em] text-luxury-gold font-semibold">
                Get in Touch
              </span>
              <h2 className={`mt-4 text-3xl font-bold ${s.heading} sm:text-4xl`} style={{ fontFamily: 'var(--font-playfair, "Playfair Display", serif)' }}>
                Let&apos;s <span className={s.headingAccent}>talk</span>
              </h2>
            </div>
          ) : version === "v7" ? (
            <div>
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-400/60">
                Get in Touch
              </span>
              <h2 className={`mt-3 text-3xl font-bold ${s.heading} sm:text-4xl`}>
                Let&apos;s <span className={s.headingAccent}>talk</span>
              </h2>
            </div>
          ) : version === "v6" ? (
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Get in Touch
              </span>
              <h2 className={`mt-3 text-3xl font-bold ${s.heading} sm:text-4xl`}>
                Let&apos;s <span className={s.headingAccent}>talk</span>
              </h2>
            </div>
          ) : version === "v5" ? (
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">
                Get in Touch
              </span>
              <h2 className={`mt-4 text-3xl font-bold ${s.heading} sm:text-4xl`} style={{ fontFamily: 'var(--font-playfair, "Playfair Display", serif)' }}>
                Let&apos;s <span className={s.headingAccent}>talk</span>
              </h2>
            </div>
          ) : (
            <div>
              <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${version === "v4" ? "text-violet-400/60" : version === "v2" ? "text-[#2dd4bf]" : "text-amber-400/60"}`}>
                Get in Touch
              </span>
              <h2 className={`mt-3 text-3xl font-bold ${s.heading} sm:text-4xl`}>
                Let&apos;s <span className={s.headingAccent}>talk</span>
              </h2>
            </div>
          )}
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex flex-col items-center justify-center rounded-2xl border ${s.successBorder} px-6 py-16 text-center`}
              >
                <CheckCircle2 className="h-12 w-12 text-green-400" />
                <h3 className={`mt-4 text-lg font-bold ${s.label}`}>Thank You!</h3>
                <p className={`mt-2 text-sm ${s.body}`}>
                  Your enquiry has been sent to our sales team. We&apos;ll get back to you shortly!
                </p>
                <button onClick={() => setStatus("idle")} className={`mt-6 transition-colors ${s.ghost}`}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="email" name="email" placeholder="Email" required maxLength={254} value={form.email} onChange={handleChange} className={s.input} />
                  <input type="text" name="name" placeholder="Full Name" required maxLength={100} value={form.name} onChange={handleChange} className={s.input} />
                </div>
                <input type="tel" name="phone" placeholder="Mobile Phone Number" maxLength={20} pattern="[0-9+\-\s()]{7,20}" value={form.phone} onChange={handleChange} className={`w-full ${s.input}`} />
                <input type="text" name="subject" placeholder="Subject(s)" maxLength={200} value={form.subject} onChange={handleChange} className={`w-full ${s.input}`} />
                <textarea name="message" rows={4} placeholder="Message Body" maxLength={5000} value={form.message} onChange={handleChange} className={`w-full ${s.input} resize-none`} />
                {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}
                <button type="submit" disabled={status === "sending"} className={`inline-flex items-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${s.button}`}>
                  {status === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" />SENDING...</>) : "SEND"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${s.iconBg}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${s.label}`}>{item.title}</h4>
                  <p className={`mt-1 text-sm leading-relaxed whitespace-pre-line ${s.body}`}>{item.content}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
