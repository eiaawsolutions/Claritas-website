// Chatbot knowledge base — all content derived from the Claritas website.
// Each entry has a topic, keywords for matching, and an answer.

export interface KnowledgeEntry {
  topic: string;
  keywords: string[];
  answer: string;
}

export const knowledgeBase: KnowledgeEntry[] = [
  // ── Company Info ──
  {
    topic: "company",
    keywords: ["claritas", "company", "who", "about", "netster", "founded", "history", "what is"],
    answer:
      "Claritas™ CRM is a registered trademark of Netster — a Malaysian technology company dedicated to building enterprise-grade customer relationship management solutions for the APAC market. Founded in 2008, Claritas CRM is an integrated and customer-centric CRM solution that manages, tracks, and stores information related to your existing customers and new prospects.",
  },
  {
    topic: "company_journey",
    keywords: ["journey", "timeline", "history", "milestone", "azure", "msc", "founded"],
    answer:
      "Key milestones: 2008 — Founded by Netster. 2010 — MSC (Multimedia Super Corridor) approved by Malaysian government. 2012 — Microsoft Azure partnership. 2016 — Enterprise expansion serving SingTel, Pfizer, Nando's. 2020 — Full cloud-native architecture on Azure. 2026 — Next generation AI-powered features and modern UX.",
  },
  {
    topic: "differentiator",
    keywords: ["different", "why claritas", "advantage", "unique", "differentiator", "special", "better"],
    answer:
      "What makes Claritas CRM different: (1) Deep domain knowledge — we guide best practices, not just ask requirements. (2) Constantly evolving with new features on every release. (3) Fast time-to-market with proven implementation track record. (4) Established project management and governance methodology for smooth execution. We're built for APAC and understand regional business needs.",
  },
  {
    topic: "clients",
    keywords: ["client", "customer", "who uses", "case study", "testimonial", "reference", "success", "story", "stories"],
    answer:
      "Claritas CRM has 50+ successful customer stories across 12 industries including Pharmaceutical (Pfizer, Zuellig Pharma), Retail (Nando's, Room Service Deliveries), Telecom (SingTel), Finance (CIMB Aviva, Mestari), Manufacturing (Carlsberg, Intel), Call Centre (Kannal Solutions), and more.\n\nWe have detailed case studies with real results — for example, Pfizer achieved real-time mobile sales visibility, and Zuellig Pharma improved service turnaround across 15 countries.\n\nVisit our **[Case Studies](/case-studies)** page to read the full success stories!",
  },

  // ── Contact Info ──
  {
    topic: "contact",
    keywords: ["contact", "reach", "phone", "call", "email", "address", "office", "location", "hotline", "where"],
    answer:
      "You can reach us at:\n\n📍 Head Office: 9-7, Block A, Jaya One, 72A Jalan Prof Diraja, Jln Profesor Diraja Ungku Aziz, 46200 Petaling Jaya, Selangor, Malaysia.\n📞 Sales Hotline: 03-7613 4824\n📧 Email: sales@claritascrm.com\n🕘 Business Hours: Mon–Fri, 9AM–6PM MYT\n\nOr fill out our contact form at the Contact Us page!",
  },

  // ── Pricing ──
  {
    topic: "pricing",
    keywords: ["price", "pricing", "cost", "plan", "subscription", "how much", "rm", "starter", "professional", "enterprise", "afford", "pay", "fee"],
    answer:
      "We offer three plans:\n\n🟢 **Starter** — RM 79/user/month: Contact management (up to 5,000), basic pipeline, email integration, task tracking, standard reports, email support, mobile app.\n\n🔵 **Professional** (Most Popular) — RM 149/user/month: Everything in Starter plus unlimited contacts, marketing campaigns, sales forecasting, support ticketing, custom dashboards, API access, priority support, workflow automation.\n\n🟣 **Enterprise** — Custom pricing: Everything in Professional plus call center, loyalty program, SSO & audit, dedicated account manager, custom integrations, on-premise option, SLA-backed support, training & onboarding.\n\nAll plans include a **14-day free trial** — no credit card required!",
  },
  {
    topic: "free_trial",
    keywords: ["trial", "free", "try", "demo", "test", "evaluate"],
    answer:
      "Yes! We offer a 14-day free trial with full access — no credit card required. You can also request a personalized demo from our team. Visit our Contact Us page or click 'FREE TRIAL' in the navigation to get started!",
  },

  // ── Products Overview ──
  {
    topic: "products",
    keywords: ["product", "module", "feature", "what do you offer", "solution", "crm"],
    answer:
      "Claritas CRM offers these products:\n\n1. **Marketing** — Campaign management, mass marketing, response tracking, Next Best Action (NBA)\n2. **Sales** — Pipeline management, opportunity tracking, quotations, forecasting\n3. **Support/Services** — Case management, SLA tracking, knowledge base, contract management\n4. **Contact Centre** — CTI integration, screen pops, call logging, performance analytics\n5. **Loyalty Program** — Points, tiers, rewards catalog, member portal\n6. **Dashboard & Reports** — Real-time KPI, historical analysis, management visibility\n7. **CRM for SME** — All-in-one simplified CRM for small & medium businesses\n8. **Banking & Fintech** — Industry-specific CRM for financial services\n\nWould you like to know more about any specific product?",
  },

  // ── Marketing Module ──
  {
    topic: "marketing",
    keywords: ["marketing", "campaign", "mass mail", "email marketing", "sms", "nba", "next best action", "marketing intelligence", "target"],
    answer:
      "Claritas CRM for Marketing helps you deliver impactful campaigns and uncover hidden opportunities:\n\n• **Integrated Mass Marketing** — Create HTML templates, launch email/SMS/mail-merge campaigns, integrate with third-party gateways.\n• **Campaign Life Cycle** — End-to-end visibility from planning and budgeting through execution and ROI measurement.\n• **Response Tracking** — Track total audience, sent, received, click-through, bounced. Auto-suppress duplicates and manage opt-outs.\n• **Next Best Action (NBA)** — AI/ML-powered personalized recommendations for every customer interaction.\n• **Marketing Intelligence** — Historical data analytics for benchmarking, spending patterns, trend analysis, and 360° reports.",
  },

  // ── Sales Module ──
  {
    topic: "sales",
    keywords: ["sales", "pipeline", "opportunity", "quotation", "forecast", "lead", "sell", "conversion", "deal"],
    answer:
      "Claritas CRM for Sales empowers you to sell smarter and faster:\n\n• **Lead to Opportunity** — Automated lead routing, competitor tracking, and opportunity management to shorten your sales cycle.\n• **Pipeline Management** — Full visibility of your sales pipeline with activity tracking, appointments, meetings, and follow-up tasks.\n• **Integrated Quotation** — Generate professional quotations with product catalogs, discount rules, and version tracking.\n• **Sales Forecasting** — Accurate revenue forecasting with historical data, weighted pipeline values, and trend analysis.\n• **Customer Segmentation** — Demographic filtering, quality target lists, and cross-sell/up-sell identification.",
  },

  // ── Support Module ──
  {
    topic: "support",
    keywords: ["support", "service", "ticket", "case", "sla", "helpdesk", "complaint", "knowledge base", "customer service", "contract"],
    answer:
      "Claritas CRM for Services boosts service effectiveness and customer satisfaction:\n\n• **Automated Support** — Case routing, queuing, assignment, escalation, and notification. Multi-channel case creation from web, email, and calls.\n• **SLA Tracking** — Multi-task escalation with custom SLAs, holiday settings, and custom work schedules. 27% increase in customer satisfaction reported!\n• **Knowledge Base** — Harvest case data to build solutions, troubleshooting steps, and training materials.\n• **Contract Management** — Manage service contracts, warranties, entitlements with automated renewal reminders.",
  },

  // ── Call Center Module ──
  {
    topic: "call_center",
    keywords: ["call center", "contact centre", "cti", "screen pop", "telephony", "ivr", "phone", "inbound", "outbound"],
    answer:
      "Claritas CRM for Contact Centre connects every conversation:\n\n• **Screen Pops & CTI** — Incoming call display with CRM contact info, call recording tagged to cases, speed dial from app, call control (hold, park, conference, DND).\n• **Management Dashboard** — Live performance, productivity, and staff status reporting in real-time.\n• **Historical Analysis** — Automated KPI snapshots (intra-day, daily, weekly, monthly, YTD) with exception reporting.\n• **Channel Insights** — Filter by department and channel, graphical and classical report styles, root cause identification with single click.\n\nIntegrates with leading telephony, ACD, voice recording, and IVR products.",
  },

  // ── Loyalty Module ──
  {
    topic: "loyalty",
    keywords: ["loyalty", "points", "reward", "tier", "member", "retention", "program"],
    answer:
      "Claritas Loyalty Program — Reward. Retain. Grow:\n\n• **Points & Tiers** — Flexible point-earning rules, automatic tier upgrades/downgrades, expiration management.\n• **Rewards Catalog** — Redeemable products, discounts, and experiences with inventory tracking.\n• **Member Portal** — Branded self-service portal for points, rewards, tier status, and preferences.\n• **Engagement Tracking** — Track transactions, referrals, social interactions, and program participation.\n• **Campaign Integration** — Bonus points events, tier challenges, win-back offers from within CRM.\n• **Analytics & ROI** — Retention rates, redemption rates, incremental revenue, and CLV impact.",
  },

  // ── Dashboard Module ──
  {
    topic: "dashboard",
    keywords: ["dashboard", "report", "analytics", "kpi", "metrics", "insight", "data", "chart"],
    answer:
      "Claritas CRM Dashboard & Reports provide real-time visibility:\n\n• **Live Performance** — Real-time KPI reporting configurable by day/week/month/YTD.\n• **Historical Analysis** — Automated reporting every half hour with exception indicators.\n• **Channel Insights** — Filter by department, channel, graphical or classical styles.\n• **Management Visibility** — Role-based access from top level down to agent-by-half-hour detail.\n• **Self-Service** — 24/7 access to critical metrics with intuitive point-and-click design.",
  },

  // ── SME Module ──
  {
    topic: "sme",
    keywords: ["sme", "small business", "medium business", "startup", "growing", "simple", "easy"],
    answer:
      "Claritas CRM for SME — Enterprise Power, SME Simplicity:\n\n• **Quick Setup** — Guided onboarding, pre-built templates, no IT team required. Up and running in days.\n• **All-in-One** — Marketing, sales, and support unified in one platform.\n• **Affordable** — SME-friendly pricing with no hidden costs. Scale as you grow.\n• **Contact Management** — Smart contact cards, interaction history, relationship mapping.\n• **Task Tracking** — Follow-up reminders and activity timelines per contact.\n• **Reporting** — Pre-built dashboards for pipeline, campaigns, and support metrics.",
  },

  // ── Fintech / Banking ──
  {
    topic: "fintech",
    keywords: ["bank", "banking", "fintech", "financial", "finance", "insurance"],
    answer:
      "Claritas CRM for Banking & Financial Services addresses the unique challenges of the financial industry:\n\n• **Single 360° Customer View** — Consolidate profiles, product holdings, service subscriptions, cases, opportunities, and interaction history.\n• **Impactful Marketing** — Automate campaigns with the right message, on the right channel, at the right time.\n• **Sales Opportunities** — Streamline omni-channel sales, build pipelines, increase conversion.\n• **Service Excellence** — Effortless omnichannel customer experience with every interaction.\n• **Integrated Contact Centre** — Reduce resolution time with personalized service.\n• **Insightful Metrics** — Snapshot of customer, marketing, sales, and service metrics.\n\nFlexible and customizable to the specific needs of banking and financial services.",
  },

  // ── 360-degree View ──
  {
    topic: "360_view",
    keywords: ["360", "single view", "customer view", "complete picture", "profile", "holistic"],
    answer:
      "Claritas CRM provides a Single 360-Degree View of every customer by integrating all key data in one platform — customer profiles, product holdings, service subscriptions, open cases and opportunities, potential offers, service alerts, Next Best Action (NBA), and full interaction history. No more switching between systems to understand your customer.",
  },

  // ── Careers ──
  {
    topic: "careers",
    keywords: ["job", "career", "hiring", "vacancy", "work", "position", "opening", "join"],
    answer:
      "There are currently no open positions at Claritas, but we're always growing! Check back soon for new opportunities, or visit our Careers section on the website.",
  },

  // ── Security & Trust ──
  {
    topic: "security",
    keywords: ["security", "secure", "data", "protection", "trust", "compliance", "privacy", "safe", "iso", "encryption", "audit"],
    answer:
      "Claritas CRM provides enterprise-grade security hosted in ISO 27001 certified Microsoft Azure data centres. Key features include multi-tenant data isolation, encryption (MD5/SHA2), SSL/HTTPS, audit trails, 3x data redundancy, automatic backups, and 99.9% uptime SLA. We have strict data deletion procedures and staff access protocols.\n\nVisit our **[Security](/claritas/security)** page for full details!",
  },

  // ── Deployment ──
  {
    topic: "deployment",
    keywords: ["deploy", "cloud", "on-premise", "azure", "hosting", "install", "setup", "cloud vs"],
    answer:
      "Claritas CRM offers two deployment options:\n\n**Cloud (Recommended)** — Hosted on Microsoft Azure with low upfront cost, automatic scaling, 99.9% SLA, and automatic updates.\n\n**On-Premise** — Available on Enterprise plan for maximum control and deep customisation. Data stays on your servers.\n\nVisit our **[Cloud vs On-Premise](/claritas/cloud-vs-on-premise)** page for a detailed comparison!",
  },

  // ── Implementation ──
  {
    topic: "implementation",
    keywords: ["implement", "implementation", "setup", "onboard", "methodology", "process", "timeline", "how long"],
    answer:
      "CRM implementation follows a 4-stage maturity journey: (1) Manual Operations, (2) Partial Automation, (3) End-to-End Automation, (4) Optimisation. Success depends on the 4 P's: Process, Product, People, and Price. Claritas provides dedicated project managers, consultants, and training to guide you through every stage.\n\nLearn more on our **[Implementation](/claritas/implementation)** page!",
  },

  // ── Framework ──
  {
    topic: "framework",
    keywords: ["framework", "architecture", "technology", "tech stack", ".net", "sql", "multi-tenant"],
    answer:
      "Claritas CRM is built on .NET Framework 4.0 with C#, WCF, WF, and SQL Server Reporting Services. It uses multi-tenant architecture on Microsoft Azure with 3x data redundancy and SOA principles. Modern web technologies include AJAX, JSON, and jQuery.\n\nSee our **[Framework](/claritas/framework)** page for details!",
  },

  // ── Integration ──
  {
    topic: "integration",
    keywords: ["integration", "api", "connect", "third party", "gateway", "integrate"],
    answer:
      "Claritas CRM integrates with various third-party systems including email and SMS gateways, telephony/ACD systems, and more. API access is available from the Professional plan onward. Custom integrations are available on the Enterprise plan. The system is designed to work with your existing technology stack.",
  },

  // ── Mobile ──
  {
    topic: "mobile",
    keywords: ["mobile", "app", "phone app", "ios", "android"],
    answer:
      "Yes! Mobile app access is included in all Claritas CRM plans, starting from the Starter plan. Access your CRM on the go from your mobile device.",
  },

  // ── Greetings ──
  {
    topic: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "greetings", "howdy"],
    answer:
      "Hello! 👋 Welcome to Claritas CRM. I'm here to help you learn about our CRM solutions. You can ask me about our products, pricing, features, or anything else about Claritas. How can I help you today?",
  },
  {
    topic: "thanks",
    keywords: ["thank", "thanks", "thank you", "appreciate", "helpful"],
    answer:
      "You're welcome! 😊 If you have any more questions about Claritas CRM, feel free to ask. If you'd like to speak with our sales team or request a demo, just head to our Contact Us page!",
  },
];

/**
 * Score a query against a knowledge entry.
 * Returns a relevance score (higher = better match).
 */
function scoreEntry(query: string, entry: KnowledgeEntry): number {
  const q = query.toLowerCase();
  const words = q.split(/\s+/).filter((w) => w.length > 2);
  let score = 0;

  for (const kw of entry.keywords) {
    const kwLower = kw.toLowerCase();
    // Exact phrase match in query
    if (q.includes(kwLower)) {
      score += kwLower.split(/\s+/).length * 3; // multi-word keywords score higher
    }
  }

  // Also check individual query words against keywords
  for (const word of words) {
    for (const kw of entry.keywords) {
      if (kw.toLowerCase().includes(word)) {
        score += 1;
      }
    }
  }

  // Check if query words appear in the answer (lower weight)
  for (const word of words) {
    if (entry.answer.toLowerCase().includes(word)) {
      score += 0.5;
    }
  }

  return score;
}

const CONTACT_FALLBACK =
  "I'm sorry, I don't have specific information about that. For further enquiries, please fill out our **[Contact Us](/contact)** form and a sales person will be with you shortly! You can also call us at **03-7613 4824** or email **sales@claritascrm.com**.";

/**
 * Find the best answer for a user query.
 */
export function findAnswer(query: string): string {
  const sanitized = query.trim().replace(/[<>]/g, "").slice(0, 500);

  if (!sanitized) {
    return "Please type a question and I'll do my best to help!";
  }

  const scored = knowledgeBase
    .map((entry) => ({ entry, score: scoreEntry(sanitized, entry) }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0 || scored[0].score < 2) {
    return CONTACT_FALLBACK;
  }

  // If top score is significantly higher, return just that answer
  const best = scored[0];

  // Append a gentle nudge for further help
  const nudge =
    "\n\nNeed more details or have other questions? Feel free to ask, or **[contact our sales team](/contact)** for personalized assistance!";

  return best.entry.answer + nudge;
}
