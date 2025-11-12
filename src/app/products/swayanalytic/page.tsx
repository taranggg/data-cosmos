import ProductPageTemplate from "../ProductPageTemplate";

export default function SwayAnalyticPage() {
  return (
    <ProductPageTemplate
      name="SwayAnalytic"
      tagline="Self-serve analytics for operators, not just analysts."
      description="Empower your entire team with intuitive, no-code dashboards that turn complex data into clear insights. Built for speed, designed for everyone."
      videoSrc="/app/assets/SwayAnalytics__360°_Growth.mp4"
      features={[
        {
          title: "No-Code Dashboards",
          description:
            "Build powerful analytics dashboards without writing a single line of code. Drag, drop, and visualize.",
          icon: "📊",
        },
        {
          title: "360° Customer View",
          description:
            "Unify customer data from all touchpoints into a single, comprehensive view.",
          icon: "👥",
        },
        {
          title: "Real-Time Metrics",
          description:
            "Monitor operational KPIs in real-time with automatic data refresh and alerts.",
          icon: "⚡",
        },
        {
          title: "Custom Reporting",
          description:
            "Create tailored reports for every team and stakeholder in minutes.",
          icon: "📈",
        },
        {
          title: "Smart Filters",
          description:
            "Drill down into your data with intelligent filtering and segmentation.",
          icon: "🔍",
        },
        {
          title: "Collaborative Workspace",
          description:
            "Share insights, comment, and collaborate with your team in real-time.",
          icon: "🤝",
        },
      ]}
      benefits={[
        "Reduce time-to-insight from weeks to minutes",
        "Empower non-technical teams to self-serve their analytics needs",
        "Make data-driven decisions with confidence and clarity",
        "Scale your analytics infrastructure without adding headcount",
        "Integrate seamlessly with your existing data stack",
        "Enterprise-grade security and governance built-in",
      ]}
      useCases={[
        {
          title: "E-commerce Growth Analytics",
          description:
            "Track customer acquisition, conversion funnels, and lifetime value in real-time. Identify growth opportunities and optimize your marketing spend.",
        },
        {
          title: "Operations Dashboard",
          description:
            "Monitor key operational metrics like order fulfillment, inventory levels, and service quality. Get alerts when thresholds are breached.",
        },
        {
          title: "Customer Success Insights",
          description:
            "Understand customer health scores, usage patterns, and churn risk. Proactively engage at-risk customers before they leave.",
        },
        {
          title: "Executive Reporting",
          description:
            "Provide leadership with high-level KPIs and drill-down capabilities. Automated reports delivered to their inbox daily.",
        },
      ]}
    />
  );
}
