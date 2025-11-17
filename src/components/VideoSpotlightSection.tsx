"use client";

import SectionTitle from "./SectionTitle";
import VideoCard from "./VideoCard";

export default function VideoSpotlightSection() {
  const videos = [
    {
      title: "SwayAnalytics: 360° Growth",
      description: "Process streaming data with zero latency",
      videoSrc: "/videos/SwayAnalytics__360°_Growth.mp4",
      posterSrc: "/SwayAnalyticsThumbnail.png",
    },
    {
      title: "Data Cosmos: Chaos to Clarity",
      description: "See how we build data pipelines that scale",
      videoSrc: "/videos/Data_Cosmos__Chaos_to_Clarity.mp4",
      posterSrc: "/DataCosmosThubmnail.png",
    },
    {
      title: "SwaySale AI:Future of Sales?",
      description: "Transform raw data into actionable insights",
      videoSrc: "/videos/SaleSwayAI__Future_of_Sales_.mp4",
      posterSrc: "/SwaySalesThumbnail.png",
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
              posterSrc={video.posterSrc}
              delay={index * 0.18}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
