"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ email: "", name: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputClass = "border-0 border-b border-[#3f3f3f]/25 bg-transparent px-0 py-4 text-[15px] text-[#3f3f3f] placeholder:text-[#3f3f3f]/40 focus:border-[#721011] focus:outline-none focus:ring-0";

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

  const infoItems = [
    { icon: MapPin, title: "Head Office — Malaysia", body: "9-7, Block A, Jaya One,\n72A Jalan Prof Diraja,\nJln Profesor Diraja Ungku Aziz,\n46200 Petaling Jaya,\nSelangor, Malaysia." },
    { icon: Phone, title: "Sales Hotline", body: "03-7613 4824" },
    { icon: Mail, title: "Sales Enquiry", body: "sales@claritascrm.com" },
    { icon: Clock, title: "Business Hours", body: "Mon — Fri, 9AM — 6PM MYT" },
  ];

  return (
    <>
      <section className="relative cl-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">Open a Conversation</span>
            <span className="h-px w-12 bg-[#721011]" />
          </div>
          <h1 className="cl-serif text-[44px] md:text-[72px] leading-[1.02] tracking-[-0.02em] text-[#3f3f3f] max-w-4xl mx-auto">
            We read every enquiry <span className="italic font-light text-[#721011]">personally.</span>
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-[17px] leading-[1.7] text-[#3f3f3f]/70">
            A senior member of our team will respond within one business day. For time-sensitive matters, our sales hotline remains the most direct channel.
          </p>
        </div>
      </section>

      <section className="bg-[#fafafa] py-20 lg:py-28">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center border border-[#721011]/30 bg-[#721011]/[0.04] px-6 py-16 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-[#721011]" />
                  <h3 className="mt-4 cl-serif text-[24px] text-[#3f3f3f]">Thank you.</h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[#3f3f3f]/70 max-w-sm">
                    Your message has been received. A senior member of our team will respond within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 border border-[#3f3f3f]/25 px-6 py-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-[#3f3f3f]/70 hover:border-[#721011] hover:text-[#721011]"
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
                  {status === "error" && <p className="text-sm text-[#721011]">{errorMsg}</p>}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-3 bg-[#3f3f3f] text-white px-10 py-4 text-[12px] uppercase tracking-[0.24em] font-semibold hover:bg-[#721011] transition-colors duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
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
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="cl-eyebrow mb-2">{item.title}</h4>
                    <p className="cl-serif text-[17px] leading-[1.6] text-[#3f3f3f]/80 whitespace-pre-line">
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
