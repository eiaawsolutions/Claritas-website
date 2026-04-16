"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle2 } from "lucide-react";

const inputClass =
  "rounded-lg border border-dark-600 bg-dark-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-coral-500 focus:outline-none focus:ring-1 focus:ring-coral-500";

export default function ContactPage() {
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

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-50 pt-16">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-coral-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </span>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-dark-900 sm:text-4xl lg:text-5xl">
              <span className="text-coral-500">CONTACT</span> US
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
              Whether you&apos;re looking for a demo, pricing, or just want to learn more — we&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-dark-900 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
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
                  className="flex flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-16 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-green-400" />
                  <h3 className="mt-4 text-lg font-bold text-white">Thank You!</h3>
                  <p className="mt-2 text-sm text-gray-400">
                    Your enquiry has been sent to our sales team. We&apos;ll get back to you shortly!
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full border border-gray-600 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:border-coral-500 hover:text-white"
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
                    className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-10 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-coral-600 hover:shadow-lg hover:shadow-coral-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Head Office - Malaysia
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-400">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Sales Hotline:
                  </h4>
                  <p className="mt-1 text-sm text-gray-400">03-7613 4824</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Sales Enquiry:
                  </h4>
                  <p className="mt-1 text-sm text-gray-400">
                    sales@claritascrm.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral-500/20 text-coral-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Business Hours:
                  </h4>
                  <p className="mt-1 text-sm text-gray-400">
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
