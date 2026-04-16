"use client";

import { BarChart3 } from "lucide-react";
import { ProductPage } from "@/components/product-page";

export function MarketingContent() {
  return (
    <ProductPage
      icon={BarChart3}
      category="Marketing"
      title="CLARITAS\u2122 CRM FOR MARKETING"
      tagline="Deliver impactful marketing campaign, uncover hidden opportunities!"
      description="Claritas\u2122 CRM revolutionizes your traditional marketing process into automation. It is a tool to centralize tracking of leads and campaigns information. It makes data collaboration and sharing across your organization seems so simple. Claritas\u2122 CRM for marketing is all about how you can discover and transform prospect into paying customer. For marketing professionals, nothing is more important than knowing the results from your marketing campaign on various mediums. Be it through mass mail, web, email or any channels, Claritas\u2122 CRM lets you keep track of your leads and opportunities generated from your marketing campaign."
      color="from-coral-500 to-coral-600"
      bgLight="bg-coral-50"
      textColor="text-coral-500"
      sections={[
        {
          title: "Integrated Mass Marketing Tool",
          body: "Claritas\u2122 CRM lets you plan and execute your mass marketing, all within the same system. You can create professional-looking HTML templates and effortlessly launch email, SMS or mail-merge-based communications. You can use these custom templates for new campaign, or save it for future scheduling of recurring campaign activities. Claritas\u2122 CRM integrates with various third-party email and SMS gateway, so you can start blasting your personalized marketing material from day one!",
        },
        {
          title: "Manage Campaign Life Cycle",
          body: "Transform your marketing process into an automated workflow. Claritas\u2122 CRM enables end-to-end visibility into all marketing detail throughout the entire campaign life cycle. You can collaborate across different teams or business units to maintain standard operating procedure and enhance consistency. Starting from campaign planning, you can create budget and define campaign type. For execution, you can specify target list and set your mass marketing schedule. Finally, measuring of statistic and ROI can never be easier. With Claritas\u2122 CRM, you are guaranteed complete analytic information that all marketers dreamed of. The insightful management dashboard truly highlights campaign effectiveness and let you drives home the value of marketing program.",
        },
        {
          title: "Track Response and Monitor Results",
          body: "You can\u2019t manage it unless you can measure it. Once you have planned and executed your campaign, you can immediately keep track of campaign responses such as total target audience, total sent, received, click-through and bounced. System automatically suppresses duplicate contact and prevents spamming of same email or SMS. Recipient can conveniently opt-out from future mass marketing communications. Claritas\u2122 CRM lets you qualify leads, convert leads into contact and create opportunities with no more than a few clicks. We inform you on the overall campaign result so that you can conveniently monitor on key performance indicators such as campaign ROI, statistic and cost per response.",
        },
        {
          title: "Maximize Value in Every Engagement with Next Best Action (NBA)",
          body: "Claritas\u2122 Next-Best-Action (NBA) approach uses artificial intelligence and machine learning to build a connection in every interaction, by pulling together data-driven insights and contexts from all marketing, sales and customer service activities across channels, to predict the right content, message or offer for the customer and to make every engagement more relevant and meaningful. Today\u2019s customer expects to be treated as an individual, hence, is only interested in receiving relevant messages based on their individualized interests and needs. With Claritas\u2122 NBA module, you can create more effective and impactful marketing by targeting their messaging and customer experiences specific to individuals.",
        },
        {
          title: "Transform Experience into Marketing Intelligence",
          body: "Have you ever wondered how much data you can garner from a campaign that your team just did? This is called marketing intelligence. All historical marketing data in the system can serve as benchmark and marketing intelligence to help you improve future campaign effectiveness and precision. We identify spending pattern so that you can introduce new product to right market. We analyze trends so that your company responds quickly to changing customer preferences and emerging market demand. We provide 360\u00b0 marketing reports so that you don\u2019t miss out critical opportunity windows. Thanks to deep analytics, you gain a clear view of your prospect with access to detail segmentation and demographic information. Adopt Claritas\u2122 CRM and your marketing result will never be the same again.",
        },
      ]}
    />
  );
}
