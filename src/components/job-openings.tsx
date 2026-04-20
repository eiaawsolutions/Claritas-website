"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs: { title: string; department: string; experience: string; type: string }[] = [];

export function JobOpenings() {
  return (
    <section className="bg-white py-16 sm:py-20" id="careers">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className="inline-block rounded-full px-5 py-1.5 text-xs font-semibold tracking-wider uppercase bg-transparent text-[#721011] border border-[#721011]/30">
            Vacancies
          </span>
          <h2 className="mt-4 text-3xl font-bold text-[#3f3f3f] sm:text-4xl cl-serif">
            Current <span className="text-[#721011] italic font-light">job</span> openings
          </h2>
          <p className="mt-2 text-sm text-[#3f3f3f]/65">
            Know your worth and find the job that qualifies your life
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
                className="border-b border-[#3f3f3f]/10 bg-transparent hover:bg-[#fafafa] transition-colors p-6"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold text-[#3f3f3f]">{job.title}</h3>
                    <p className="text-xs text-[#3f3f3f]/45">{job.department}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-sm font-semibold text-[#3f3f3f]">{job.experience}</div>
                      <div className="text-xs text-[#3f3f3f]/45">Experience</div>
                    </div>
                    <div className="text-sm font-bold tracking-wider text-[#721011] italic">{job.type}</div>
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
            className="border border-[#3f3f3f]/10 bg-[#fafafa] p-12 text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#721011]/10 text-[#721011] border border-[#721011]/20">
              <Briefcase className="h-6 w-6" />
            </div>
            <p className="mt-4 text-sm font-medium text-[#3f3f3f]/75">No open positions at the moment.</p>
            <p className="mt-1 text-xs text-[#3f3f3f]/45">Check back soon — we&apos;re always growing!</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
