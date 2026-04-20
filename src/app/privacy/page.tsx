const sections = [
  { title: "Information We Collect", body: "We collect information you voluntarily provide when you fill out our contact forms, request a demo, or sign up for a free trial. This may include your name, email address, phone number, company name, and any message content you submit. We also collect standard web analytics data such as IP addresses, browser type, pages visited, and referring URLs through server logs." },
  { title: "How We Use Your Information", body: "We use the information we collect to respond to your enquiries and provide the services you request, communicate with you about our products and updates, improve our website and user experience, and comply with legal obligations. We do not sell, trade, or rent your personal information to third parties." },
  { title: "Data Storage and Security", body: "Your data is hosted on Microsoft Azure cloud infrastructure with enterprise-grade security controls including encryption at rest and in transit, multi-tenant data isolation, regular automated backups across three separate nodes, and ISO 27001 certified data centres. Access to customer data is restricted to authorized personnel only, with formal access request processes and audit trail logging." },
  { title: "Cookies", body: "Our website may use cookies and similar technologies to enhance your browsing experience. These include essential cookies required for the website to function, analytics cookies that help us understand how visitors use our site, and preference cookies that remember your settings. You can control cookie settings through your browser preferences. Disabling cookies may affect some website functionality." },
  { title: "Third-Party Services", body: "We may use third-party services for web analytics, email delivery, and hosting infrastructure. These service providers are bound by their own privacy policies and are only granted access to information necessary to perform their services. We use Google Fonts served through Next.js (self-hosted, no data sent to Google) and Microsoft Azure for cloud hosting." },
  { title: "Data Retention", body: "We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. Contact form submissions are retained for the duration of any business relationship and for a reasonable period thereafter. You may request deletion of your data at any time." },
  { title: "Your Rights", body: "You have the right to access the personal data we hold about you, request correction of inaccurate data, request deletion of your data, object to or restrict processing of your data, and withdraw consent where processing is based on consent. To exercise any of these rights, please contact us at sales@claritascrm.com or call 03-7613 4824." },
  { title: "Children's Privacy", body: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child, we will take steps to delete that information promptly." },
  { title: "Changes to This Policy", body: "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information." },
  { title: "Contact Us", body: "If you have any questions about this privacy policy or our data practices, please contact us at:\n\nNetster Consulting Asia\n9-7, Block A, Jaya One, 72A Jalan Prof Diraja, Jln Profesor Diraja Ungku Aziz, 46200 Petaling Jaya, Selangor, Malaysia.\n\nEmail: sales@claritascrm.com\nPhone: 03-7613 4824" },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative cl-gradient-hero pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-[#721011]" />
            <span className="cl-eyebrow">Legal Notice</span>
          </div>
          <h1 className="cl-serif text-[44px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#3f3f3f]">
            Privacy <span className="italic font-light text-[#721011]">Policy.</span>
          </h1>
          <p className="mt-6 text-[15px] text-[#3f3f3f]/55">
            Revised: 16 April 2026
          </p>
          <p className="mt-6 text-[17px] leading-[1.75] text-[#3f3f3f]/70 max-w-2xl">
            This policy explains how Netster Consulting Asia (&ldquo;Claritas&rdquo;) collects, uses, and safeguards personal information you provide through this website and our services.
          </p>
        </div>
      </section>

      <section className="bg-[#fafafa] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-12 lg:px-16">
          <div className="space-y-16">
            {sections.map((s, i) => (
              <article key={s.title}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="cl-serif italic text-[26px] text-[#721011] leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="cl-serif text-[24px] md:text-[28px] leading-tight text-[#3f3f3f]">
                    {s.title}
                  </h2>
                </div>
                <p className="text-[16px] leading-[1.7] text-[#3f3f3f]/70 whitespace-pre-line">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
