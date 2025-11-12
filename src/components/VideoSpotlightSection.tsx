"use client";

import SectionTitle from "./SectionTitle";
import VideoCard from "./VideoCard";

export default function VideoSpotlightSection() {
  const videos = [
    {
      title: "Pipeline in 60s",
      description: "See how we build data pipelines that scale",
      videoSrc: "/app/assets/Data_Cosmos__Chaos_to_Clarity.mp4",
    },
    {
      title: "Real-Time Analytics",
      description: "Process streaming data with zero latency",
      videoSrc: "/app/assets/SwayAnalytics__360°_Growth.mp4",
    },
    {
      title: "BI Dashboards",
      description: "Transform raw data into actionable insights",
      videoSrc: "/app/assets/SaleSwayAI__Future_of_Sales_.mp4",
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 cosmic-bg" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle="Outcome-first demos in 60 seconds">
          Watch what we build.
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              videoSrc={video.videoSrc}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
