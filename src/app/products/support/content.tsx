"use client";

import { Headphones } from "lucide-react";
import { ProductPage } from "@/components/product-page";

export function SupportContent() {
  return (
    <ProductPage
      icon={Headphones}
      category="Services"
      title="CLARITAS\u2122 CRM FOR SERVICES"
      tagline="Boost Service Effectiveness and Increase Customer Satisfaction!"
      description="Today, customer demands uncompromised speed and responsive services across every channel from call center to email and social web. With Claritas\u2122 CRM, you will be able to deliver it all under one integrated platform to amaze your customer and keep your support team productive."
      color="from-coral-500 to-coral-600"
      bgLight="bg-teal-50"
      textColor="text-teal-600"
      sections={[
        {
          title: "Automate Your Support Processes",
          body: "Claritas\u2122 CRM revolutionizes your customer support experience into a robust service process with features spanning case routing, queuing, assignment, escalation and notification. System lets you keep track of customer enquiries and complaints from various channels and sources. Feedbacks coming in from web, emails and calls; can be automatically created as a case to yield greater consistency. You can configure business rules for queue management and case auto-assignment based on type, priority or source. All email correspondence between staff and customer are logged within the case for traceability in the event case ownership transfer. Built-in workflow such as new case notification, customer satisfaction survey form, deadline reminder and overdue escalation, are part of the overall features helping you to increase effectiveness and standardizing support activities.",
        },
        {
          title: "Track Service Level Systematically",
          body: "Claritas\u2122 CRM supports multi-task escalation across business units with custom SLA (service level agreement). The feature of multi-issue escalation within a single case lets your measure internal KPI and external KPI independently. You can evaluate agent productivity by tracking the issue turnaround time; while the case aging report tells you how well you are delivering as per committed SLA. System lets you define holiday settings and custom work schedule, so that SLA for cases coming in during non-working day or outside office hour gets calculated accurately. Our success stories show that organizations have benefited with 27% increase in customer satisfaction \u2013 by ensuring your SLA commitment to your client is met!",
        },
        {
          title: "Transform Customer Feedbacks into Clear and Actionable Knowledge",
          body: "With the historical case and issue data, you can harvest deep into it and identify common support issues to establish solution base. Knowledge base can be used to speed up resolution time for similar problem in future. Claritas\u2122 CRM expertly advises on troubleshooting steps and solution options based on category or product type. Supervisor can define best known methods in knowledge base and use it as document repository to train up new support staff.",
        },
        {
          title: "Service and Contract Management",
          body: "Manage service contracts, warranties, and entitlements with automated renewal reminders. Track contract terms, SLA obligations, and service entitlements per customer to ensure consistent service delivery and compliance.",
        },
      ]}
    />
  );
}
