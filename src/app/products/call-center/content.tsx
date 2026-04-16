"use client";

import { Phone } from "lucide-react";
import { ProductPage } from "@/components/product-page";

export function CallCenterContent() {
  return (
    <ProductPage
      icon={Phone}
      category="Contact Centre"
      title="CLARITAS\u2122 CRM FOR CONTACT CENTRE"
      tagline="Connect Every Conversation"
      description="Claritas\u2122 CRM lets you confidently build and deploy world-class contact centre through integration with leading technologies on telephony switch, automated call distribution (ACD) and voice recording products. Combining various technologies, you have a completely integrated system that not only consists of inbound and outbound solution, but also value-added functionality on quality monitoring, interactive voice responder (IVR) and speech analytics."
      color="from-coral-500 to-coral-600"
      bgLight="bg-orange-50"
      textColor="text-orange-600"
      sections={[
        {
          title: "Screen Pops & CTI Integration",
          body: "You can have screen pops accompanying incoming calls, to display contact information from CRM database. You can have call recording tagged to cases to help resolve disputes and aid staff training. You can search contact address book from CRM and speed dial from application. Most PABX also allows triggering of call control manager features such as dial, answer, hold, park, conference, set forwards, call back and DND from your software interface. With CTI, the call centre experience will never be the same again.",
        },
        {
          title: "Management Dashboard Visibility",
          body: "Our reporting such as Live Performance, Productivity, Staff Status & Comprehensive Historical KPI reporting, are flexible to be configured at real-time, by Day/Week/Month & Year to Date. Automates a significant proportion of the Day-to-Day Management KPI reporting. New Self-Service Visibility to critical metrics across the entire Contact Centre Operations. Quickly spot Performance & Productivity gaps. Monitor Customer Activity and allocate Staff Resources more effectively. Proactively Manage your Contact Centre. Make Decisions in Real-Time.",
        },
        {
          title: "Historical Analysis",
          body: "Comprehensive Historical reporting is fully automated behind the scenes and made available centrally to everyone in a suite of Performance and Productivity Dashboards every half hour. These provide managers with vital KPI snapshots of their department\u2019s Intra-Day, Daily, Weekly, Monthly and Year to Date. Our exception reporting gives managers strong visual indicators of non-compliance or where action is required. Lapses and root cause can be observed and fully understood in a couple of clicks, without any human reporting effort. Historical results can be accessed painlessly using the available on-screen Date Controls.",
        },
        {
          title: "Channel Insights: Performance and Productivity",
          body: "With your essential KPI reporting being fully automated every day, you can painlessly access critical Contact Centre metrics yourself 24x7, and monitor adherence to Daily, Weekly, and Monthly Performance & Productivity Service Levels Agreement (SLAs). With an intuitive Point and Click design, you can select and filter different Departments and Channels, chose between Graphical and Classical Report styles. Being fully integrated, with a single click you can quickly identify the root cause of any Performance or Productivity issues.",
        },
      ]}
    />
  );
}
