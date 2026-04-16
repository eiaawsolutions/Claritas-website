"use client";

import { TrendingUp } from "lucide-react";
import { ProductPage } from "@/components/product-page";

export function SalesContent() {
  return (
    <ProductPage
      icon={TrendingUp}
      category="Sales"
      title="CLARITAS\u2122 CRM FOR SALES"
      tagline="Empowering You To Sell Smarter And Sell Faster!"
      description="Claritas\u2122 CRM helps you to shorter sales cycle, increase conversion rate and improve customer retention by providing you the perfect sales force system to manage and track your sales activities and forecast sales pipeline."
      color="from-coral-500 to-coral-600"
      bgLight="bg-coral-50"
      textColor="text-coral-500"
      sections={[
        {
          title: "Turn Leads into Opportunity",
          body: "The opportunity management module, combined with automated workflow such as lead routing, regular sales update and competitor tracking, can shorten overall sales cycle and process. Claritas\u2122 CRM empowers your sales team everything they need to efficiently manage opportunities and quotation throughout the entire sales cycle, hence significantly increase efficiency and reducing costs. By analyzing into past sales history, Claritas\u2122 lets you spend more time focusing on closing with the right customers, hence improve your sales qualification and win rate.",
        },
        {
          title: "Spend More Time with Right Customer",
          body: "Claritas\u2122 CRM lets you manage lead information from the very beginning of business cycle. After all, CRM for marketing is about distinguish new prospects, promote leads and qualify opportunities. You can record all relevant activities, relate information to customer and classify them into various statuses or categories. Along the journey, you will obtain improved data accuracy by having system to detect and merge duplicate records. As a result, you can easily perform customer segmentation based on demographic filtering, generate quality target list and pinpoint audience group for cross-selling, up-selling or any marketing means. With Claritas\u2122 CRM, we help you to get your marketing mix right by telling you which marketing channel is the most effective or yield the best result. There is no doubt that you will observe phenomenal improvement to your organization\u2019s lead handling process.",
        },
        {
          title: "Sales Pipeline Management",
          body: "With Claritas\u2122 CRM, you have the entire sales pipeline and related sales activity at your grasp. We tailor the system to match your organization needs for cutting down paperwork and improve sales follow up process. You can manage your sales collaboration and establish consistent follow up process with out-of-the-box feature on sales appointment, client meeting, call enquiry and follow task. You are guaranteed insight into leads and opportunities at every stage of the sales cycle.",
        },
        {
          title: "Integrated Quotation Module",
          body: "Generate professional quotations directly from your CRM with product catalogs, discount rules, and version tracking. Link quotations to opportunities and track acceptance rates to improve your sales forecasting accuracy.",
        },
        {
          title: "Benchmark Sales against Forecast",
          body: "Accurate revenue forecasting powered by historical data, pipeline weighted values, and trend analysis. Compare actual results against forecasts to identify gaps and optimize your sales strategy.",
        },
      ]}
    />
  );
}
