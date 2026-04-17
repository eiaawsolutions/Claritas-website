"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useDesignVersion } from "@/config/design-context";

// TODO: Replace with data from admin console API
const jobs: { title: string; department: string; experience: string; type: string }[] = [];

export function JobOpenings() {
  const { version } = useDesignVersion();

  const styles = {
    v1: {
      section: "bg-white",
      badge: "bg-coral-500 text-white",
      heading: "text-dark-900",
      accent: "text-coral-500",
      body: "text-gray-400",
      card: "border-gray-200 bg-white shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]",
      iconBg: "bg-gray-100 text-gray-400",
      text: "text-gray-500",
      sub: "text-gray-400",
    },
    v2: {
      section: "bg-[#f7f8fa]",
      badge: "bg-[#0d7377]/10 text-[#0d7377] border border-[#0d7377]/20",
      heading: "text-[#1e293b]",
      accent: "text-[#0d7377]",
      body: "text-slate-500",
      card: "border-slate-200 bg-white shadow-[0_4px_16px_-4px_rgba(0,0,0,0.04)]",
      iconBg: "bg-slate-100 text-slate-400",
      text: "text-slate-500",
      sub: "text-slate-400",
    },
    v3: {
      section: "bg-[#faf9f7]",
      badge: "bg-[#1a2b4a] text-white",
      heading: "text-[#1a2b4a]",
      accent: "text-amber-600",
      body: "text-[#1a2b4a]/40",
      card: "border-[#1a2b4a]/[0.06] bg-white",
      iconBg: "bg-[#1a2b4a]/[0.05] text-[#1a2b4a]/40",
      text: "text-[#1a2b4a]/60",
      sub: "text-[#1a2b4a]/40",
    },
    v4: {
      section: "bg-[#0a0118]",
      badge: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
      heading: "text-white",
      accent: "bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent",
      body: "text-slate-500",
      card: "border-white/[0.1] bg-white/[0.05] backdrop-blur-xl rounded-2xl",
      iconBg: "bg-white/[0.04] text-slate-500",
      text: "text-slate-400",
      sub: "text-slate-600",
    },
    v5: {
      section: "bg-white",
      badge: "bg-transparent text-blue-600 border border-blue-600/30",
      heading: "text-[#050b1a]",
      accent: "text-blue-600 italic",
      body: "text-slate-500",
      card: "border-b border-[#050b1a]/10 bg-transparent",
      iconBg: "bg-[#050b1a]/[0.04] text-slate-400",
      text: "text-slate-500",
      sub: "text-slate-400",
    },
    v6: {
      section: "bg-zinc-50",
      badge: "bg-blue-50 text-blue-600 border border-blue-200",
      heading: "text-zinc-950",
      accent: "text-blue-600",
      body: "text-zinc-500",
      card: "border-zinc-200 bg-white rounded-2xl shadow-sm",
      iconBg: "bg-zinc-100 text-zinc-400",
      text: "text-zinc-600",
      sub: "text-zinc-400",
    },
    v7: {
      section: "bg-[#0b1121]",
      badge: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      heading: "text-white",
      accent: "text-blue-400",
      body: "text-slate-500",
      card: "border-white/[0.08] bg-white/[0.03] rounded-2xl",
      iconBg: "bg-white/[0.04] text-slate-500",
      text: "text-slate-400",
      sub: "text-slate-600",
    },
    v8: {
      section: "bg-[#FAF8F4]",
      badge: "bg-transparent text-[#B8965A] border border-[#B8965A]/30",
      heading: "text-[#1A1A1A]",
      accent: "text-[#B8965A] italic",
      body: "text-[#1A1A1A]/50",
      card: "border-b border-[#1A1A1A]/10 bg-transparent",
      iconBg: "bg-[#1A1A1A]/[0.04] text-[#B8965A]",
      text: "text-[#1A1A1A]/60",
      sub: "text-[#1A1A1A]/40",
    },
    v9: {
      section: "bg-[#F7F1E8]",
      badge: "bg-transparent text-[#8B6F3E] border border-[#8B6F3E]/30",
      heading: "text-[#1C1A17]",
      accent: "text-[#8B6F3E] italic font-light",
      body: "text-[#1C1A17]/65",
      card: "border-b border-[#1C1A17]/10 bg-transparent hover:bg-[#EDE4D3]/50 transition-colors",
      iconBg: "bg-[#8B6F3E]/10 text-[#8B6F3E] border border-[#8B6F3E]/20",
      text: "text-[#1C1A17]/75",
      sub: "text-[#1C1A17]/45",
    },
  };

  const s = styles[version];

  return (
    <section className={`${s.section} py-16 sm:py-20`} id="careers">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className={`inline-block rounded-full px-5 py-1.5 text-xs font-semibold tracking-wider uppercase ${s.badge}`}>
            Vacancies
          </span>
          <h2 className={`mt-4 text-3xl font-bold ${s.heading} sm:text-4xl`}>
            {version === "v1" ? (
              <>CURRENT <span className={s.accent}>JOB</span> OPENINGS</>
            ) : (
              <>Current <span className={s.accent}>job</span> openings</>
            )}

          </h2>
          <p className={`mt-2 text-sm ${s.body}`}>
            Know your worth and find the job that quality your life
          </p>
        </motion.div>

        {jobs.length > 0 ? (
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className={`rounded-xl border p-6 ${s.card}`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className={`font-bold ${version === "v4" ? "text-white" : s.heading}`}>{job.title}</h3>
                    <p className={`text-xs ${version === "v4" ? "text-slate-400" : s.sub}`}>{job.department}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className={`text-sm font-semibold ${version === "v4" ? "text-white" : s.heading}`}>{job.experience}</div>
                      <div className={`text-xs ${version === "v4" ? "text-slate-400" : s.sub}`}>Experience</div>
                    </div>
                    <div className={`text-sm font-bold tracking-wider ${s.accent}`}>{job.type}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl border p-12 text-center ${s.card}`}
          >
            <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${s.iconBg}`}>
              <Briefcase className="h-6 w-6" />
            </div>
            <p className={`mt-4 text-sm font-medium ${s.text}`}>No open positions at the moment.</p>
            <p className={`mt-1 text-xs ${s.sub}`}>Check back soon — we&apos;re always growing!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
