"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ email: "", name: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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

  const inputStyle = "border-0 border-b border-[#3f3f3f]/25 bg-transparent px-0 py-4 text-[15px] text-[#3f3f3f] placeholder:text-[#3f3f3f]/40 focus:border-[#721011] focus:outline-none focus:ring-0";
  const buttonStyle = "bg-[#3f3f3f] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.24em] text-white hover:bg-[#721011] transition-colors duration-500";

  return (
    <section className="bg-[#fafafa] py-12 sm:py-16 md:py-20 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 cl-gradient-accent-sweep pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">Open a Conversation</span>
          </div>
          <h2 className="cl-serif text-[40px] md:text-[56px] leading-[1.08] tracking-[-0.02em] text-[#3f3f3f]">
            We read every enquiry <span className="text-[#721011] italic font-light">personally.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.7] text-[#3f3f3f]/65">
            A senior member of our team will respond within one business day. For time-sensitive matters, our sales hotline remains the most direct channel.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-[#721011]/30 bg-[#721011]/[0.04] px-6 py-16 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-[#721011]" />
                <h3 className="mt-4 text-lg font-bold text-[#3f3f3f] cl-serif">Thank You!</h3>
                <p className="mt-2 text-sm text-[#3f3f3f]/65">
                  Your enquiry has been sent to our sales team. We&apos;ll get back to you shortly!
                </p>
                <button onClick={() => setStatus("idle")} className="mt-6 border border-[#3f3f3f]/25 px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] text-[#3f3f3f]/70 hover:border-[#721011] hover:text-[#721011] transition-colors">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="email" name="email" placeholder="Email" required maxLength={254} value={form.email} onChange={handleChange} className={inputStyle} />
                  <input type="text" name="name" placeholder="Full Name" required maxLength={100} value={form.name} onChange={handleChange} className={inputStyle} />
                </div>
                <input type="tel" name="phone" placeholder="Mobile Phone Number" maxLength={20} pattern="[0-9+\-\s()]{7,20}" value={form.phone} onChange={handleChange} className={`w-full ${inputStyle}`} />
                <input type="text" name="subject" placeholder="Subject(s)" maxLength={200} value={form.subject} onChange={handleChange} className={`w-full ${inputStyle}`} />
                <textarea name="message" rows={4} placeholder="Message Body" maxLength={5000} value={form.message} onChange={handleChange} className={`w-full ${inputStyle} resize-none`} />
                {status === "error" && <p className="text-sm text-[#721011]">{errorMsg}</p>}
                <button type="submit" disabled={status === "sending"} className={`inline-flex items-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed ${buttonStyle}`}>
                  {status === "sending" ? (<><Loader2 className="h-4 w-4 animate-spin" />SENDING...</>) : "SEND"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#3f3f3f] cl-serif">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed whitespace-pre-line text-[#3f3f3f]/65">{item.content}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
