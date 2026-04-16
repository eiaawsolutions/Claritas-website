"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

// TODO: Replace with data from admin console API
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
          <span className="inline-block rounded-full bg-coral-500 px-5 py-1.5 text-xs font-semibold text-white tracking-wider uppercase">
            Vacancies
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark-900 sm:text-4xl">
            CURRENT <span className="text-coral-500">JOB</span> OPENINGS
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Know your worth and find the job that quality your life
          </p>
        </motion.div>

        {/* Job list — populated from admin console */}
        {jobs.length > 0 ? (
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold text-dark-900">{job.title}</h3>
                    <p className="text-xs text-gray-400">{job.department}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-sm font-semibold text-dark-900">
                        {job.experience}
                      </div>
                      <div className="text-xs text-gray-400">Experience</div>
                    </div>
                    <div className="text-sm font-bold tracking-wider text-coral-500">
                      {job.type}
                    </div>
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
            className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
              <Briefcase className="h-6 w-6" />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-500">
              No open positions at the moment.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Check back soon — we&apos;re always growing!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
