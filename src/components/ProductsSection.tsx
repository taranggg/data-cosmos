"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import GlassCard from "./GlassCard";
import ExpandableCardGrid from "./expandable-card-grid";
import { HoverEffect } from "./ui/card-hover-effect";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { Check } from "lucide-react";

interface Product {
  name: string;
  tagline: string;
  features: string[];
  slug?: string;
}

export default function ProductsSection() {
  function AnimatedNumber({
    end,
    duration = 1200,
    className = "",
    suffix = "",
    post = "",
    format = "raw",
    startOnView = true,
    triggerOnce = true,
  }: {
    end: number;
    duration?: number;
    className?: string;
    suffix?: string;
    post?: string;
    format?: "raw" | "compact";
    startOnView?: boolean;
    triggerOnce?: boolean;
  }) {
    const [value, setValue] = useState(0);
    const raf = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(!startOnView);

    useEffect(() => {
      if (!startOnView) return;
      const el = nodeRef.current;
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setInView(true);
              if (triggerOnce) obs.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );

      obs.observe(el);
      return () => obs.disconnect();
    }, [startOnView, triggerOnce]);

    useEffect(() => {
      if (!inView) return;

      startRef.current = null;
      if (raf.current) cancelAnimationFrame(raf.current);

      const step = (ts: number) => {
        if (!startRef.current) startRef.current = ts;
        const progress = Math.min((ts - (startRef.current || 0)) / duration, 1);
        const current = Math.round(progress * end);
        setValue(current);
        if (progress < 1) raf.current = requestAnimationFrame(step);
      };

      raf.current = requestAnimationFrame(step);
      return () => {
        if (raf.current) cancelAnimationFrame(raf.current);
      };
    }, [end, duration, inView]);

    const formatted =
      format === "compact"
        ? value >= 1000000
          ? Math.round(value / 1000000) + "M"
          : value >= 1000
          ? Math.round(value / 1000) + "K"
          : String(value)
        : String(value);

    return (
      <div ref={nodeRef} className={className}>
        {formatted}
        {suffix}
        {post}
      </div>
    );
  }

  const products: Product[] = [
    {
      name: "SwaySales",
      slug: "swaysales",
      tagline: "Sales intelligence that nudges real outcomes.",
      features: [
        "AI-powered lead scoring",
        "Predictive pipeline analytics",
        "Automated follow-up insights",
      ],
    },
    {
      name: "SwayAnalytic",
      slug: "swayanalytic",
      tagline: "Self-serve analytics for operators, not just analysts.",
      features: [
        "No-code dashboards for everyone",
        "360° customer insights",
        "Real-time operational metrics",
      ],
    },
    {
      name: "Data Engineering & Platform",
      slug: "data-engineering-platform",
      tagline: "Production ETL/ELT, streaming & MLOps.",
      features: [
        "Production ETL/ELT pipelines",
        "High-throughput streaming & ingestion",
        "Data lakes, metadata & MLOps infrastructure for enterprise workloads",
      ],
    },
  ];

  const ProductsGrid = ({ items }: { items: Product[] }) => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {items.map((product, index) => (
        <GlassCard
          key={index}
          className="p-8 h-full rounded-3xl flex flex-col relative"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden z-0 pointer-events-none">
            <DottedGlowBackground
              gap={12}
              radius={2}
              color="rgba(124, 58, 237, 0.3)"
              glowColor="rgba(124, 58, 237, 0.9)"
              opacity={0.8}
              backgroundOpacity={0.1}
              speedMin={0.4}
              speedMax={1.2}
              speedScale={0.8}
            />
          </div>

          <div className="flex flex-col">
            <div className="min-h-[4.5rem]">
              <h3 className="text-3xl font-heading font-bold text-cosmic-light mb-3">
                {product.name}
              </h3>
            </div>
            <div className="min-h-[2.25rem] mb-6">
              <p className="text-lg text-cosmic-light/80">{product.tagline}</p>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {product.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + i * 0.1 }}
                className="flex items-start gap-3 text-cosmic-light/70"
              >
                <div className="w-5 h-5 rounded-full bg-cosmic-violet/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <Check className="w-3 h-3 text-cosmic-violet" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      ))}
    </div>
  );

  const SwaySalesDetails = () => (
    <GlassCard className="p-8">
      <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-4">
        SwaySales.ai
      </h3>
      <p className="text-cosmic-light/80 mb-6">
        SwaySales is a WhatsApp-native, mobile-first AI sales assistant built to
        empower field sales teams across industries. It combines conversational
        AI, predictive analytics, and seamless CRM integration to remove
        friction and boost revenue.
      </p>
      {/* Use expandable cards for the four SwaySales feature groups. */}
      <div className="mb-6">
        <ExpandableCardGrid
          cards={[
            {
              title: "Core Capabilities",
              description: "WhatsApp-native assistant, CRM sync & voice notes",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>WhatsApp-native conversational assistant</li>
                    <li>Real-time pipeline & deal predictions</li>
                    <li>CRM bi-directional sync (Salesforce, HubSpot, Zoho)</li>
                    <li>Call recording & auto-summaries</li>
                    <li>Regional language support & voice notes</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Sales Productivity Features",
              description: "Nudges, summaries & next-step suggestions",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>Proactive nudges & follow-up automation</li>
                    <li>Meeting summaries & action items</li>
                    <li>Smart next-step suggestions</li>
                    <li>Deal scoring and prioritization</li>
                    <li>Mobile-first dashboards & offline support</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Analytics & Insights",
              description: "Performance dashboards & forecasting",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>Real-time team performance dashboards</li>
                    <li>Territory heatmaps & motor routes</li>
                    <li>Win/loss analysis and pitch resonance</li>
                    <li>Pipeline leakage alerts</li>
                    <li>Revenue forecasting & quota attainment</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Platform & Integrations",
              description: "Connectors, streaming, model serving",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>Lightweight middleware for WhatsApp Business API</li>
                    <li>Secure connectors to CRMs and ERPs</li>
                    <li>Event streaming for real-time analytics (Kafka)</li>
                    <li>Model serving with CI/CD and monitoring</li>
                    <li>Role-based access & enterprise SSO</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </div>
      <div>
        <h4 className="font-semibold text-cosmic-light mb-3">
          Typical workflows
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-6 rounded-full bg-cosmic-violet mt-1" />
              <div>
                <div className="font-semibold text-cosmic-light">
                  Onboarding
                </div>
                <div className="text-sm text-cosmic-light/70">
                  Field reps onboard via WhatsApp — their profile and territory
                  sync with CRM automatically.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-1.5 h-6 rounded-full bg-cosmic-violet mt-1" />
              <div>
                <div className="font-semibold text-cosmic-light">Daily ops</div>
                <div className="text-sm text-cosmic-light/70">
                  Reps receive prioritized call lists and nudges; enter quick
                  updates via voice or text; pipeline updates flow to the
                  central dashboard.
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-6 rounded-full bg-cosmic-violet mt-1" />
              <div>
                <div className="font-semibold text-cosmic-light">Coaching</div>
                <div className="text-sm text-cosmic-light/70">
                  Managers view call summaries, pitch resonance metrics, and
                  coach using in-app recommendations.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-1.5 h-6 rounded-full bg-cosmic-violet mt-1" />
              <div>
                <div className="font-semibold text-cosmic-light">
                  Automation
                </div>
                <div className="text-sm text-cosmic-light/70">
                  Automated follow-ups, meeting scheduling, and post-call task
                  creation reduce admin overhead.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );

  const SwaySalesWorkflows = () => (
    <div className="lg:col-span-1">
      <div className="p-8 rounded-3xl border border-white/8 bg-white/4 h-full">
        <h4 className="text-lg font-semibold text-cosmic-light mb-4">
          Why teams pick SaleSway
        </h4>
        <ul className="text-cosmic-light/70 space-y-3 mb-6 list-disc list-inside">
          <li>WhatsApp-first UX — no new apps for reps</li>
          <li>Immediate CRM sync — single source of truth</li>
          <li>Proactive AI nudges that improve productivity</li>
          <li>Low-friction deployment and regional language support</li>
        </ul>
        <HoverBorderGradient
          as="button"
          containerClassName="inline-block"
          className="text-sm font-semibold text-white px-6 py-3"
        >
          Request SaleSway demo
        </HoverBorderGradient>
      </div>
    </div>
  );

  const SwayAnalyticsDetails = () => (
    <GlassCard className="p-8 h-full flex flex-col">
      <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-4">
        SwayAnalytics.ai
      </h3>
      <p className="text-cosmic-light/80 mb-9">
        SwayAnalytics integrates enterprise and field data to produce
        predictive, prescriptive, and conversational intelligence across
        sectors.
      </p>

      <div className="mb-7">
        <ExpandableCardGrid
          cards={[
            {
              title: "Agri Intelligence",
              description: "KCC analytics, forecasting & resilience",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>KCC behavioural analytics</li>
                    <li>Supply-chain forecasting</li>
                    <li>Equipment-as-a-Service</li>
                    <li>Embedded finance & insurance</li>
                    <li>Resilience & risk alerts</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Rural Employment Intelligence",
              description: "Talent mapping, retention & engagement",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>Unified talent mapping</li>
                    <li>Predictive job–skill matching</li>
                    <li>CSR impact & wage uplift metrics</li>
                    <li>WhatsApp worker engagement</li>
                    <li>Retention forecasting</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Election Intelligence",
              description: "Ground pulse, swing prediction & mobilization",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>Ground pulse & sentiment mapping</li>
                    <li>Swing Prediction Engine</li>
                    <li>Message Resonance testing</li>
                    <li>Mobilization & volunteer tracker</li>
                    <li>Booth-level turnout prediction</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Core Capabilities",
              description: "Conversational AI, models & connectors",
              content: () => (
                <div>
                  <ul className="text-cosmic-light/70 space-y-2 list-disc list-inside">
                    <li>Conversational AI (NLP queries)</li>
                    <li>Behavioral & predictive models</li>
                    <li>UEBA security layer</li>
                    <li>Pre-built connectors</li>
                    <li>Model monitoring & bias audits</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="flex-1" />

      <div className="mt-8 border-t border-white/6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-cosmic-light mb-4">
              Industries We Empower
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-5">
                  <span className="w-1 h-6 rounded-full bg-cosmic-violet mt-1" />
                  <div>
                    <div className="font-semibold text-cosmic-light">
                      Public Sector
                    </div>
                    <div className="text-base text-cosmic-light/70">
                      Program monitoring, impact analytics, citizen data systems
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="w-1 h-6 rounded-full bg-cosmic-violet mt-1" />
                  <div>
                    <div className="font-semibold text-cosmic-light">
                      Retail &amp; FMCG
                    </div>
                    <div className="text-base text-cosmic-light/70">
                      Sales forecasting, inventory optimization, customer
                      segmentation
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="w-1 h-6 rounded-full bg-cosmic-violet mt-1" />
                  <div>
                    <div className="font-semibold text-cosmic-light">
                      Agriculture &amp; Rural Development
                    </div>
                    <div className="text-base text-cosmic-light/70">
                      Resource mapping, livelihood intelligence, geospatial
                      insights
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-5">
                  <span className="w-1 h-6 rounded-full bg-cosmic-violet mt-1" />
                  <div>
                    <div className="font-semibold text-cosmic-light">
                      Financial Services
                    </div>
                    <div className="text-base text-cosmic-light/70">
                      Risk scoring, customer behavior modeling, performance
                      analytics
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <span className="w-1 h-6 rounded-full bg-cosmic-violet mt-1" />
                  <div>
                    <div className="font-semibold text-cosmic-light">
                      Operations &amp; Field Teams
                    </div>
                    <div className="text-base text-cosmic-light/70">
                      Workforce tracking, performance benchmarking, real-time
                      alerts
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );

  const SwayAnalyticsSide = () => (
    <div className="lg:col-span-1">
      <div>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-white/3 rounded-lg text-center min-h-[4.5rem] flex flex-col items-center justify-center">
            <AnimatedNumber
              end={80}
              suffix="%"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-cosmic-violet/90 to-cosmic-light/90"
            />
            <div className="text-xs text-cosmic-light/70 mt-1.5">
              faster insight generation
            </div>
          </div>
          <div className="p-3 bg-white/3 rounded-lg text-center min-h-[4.5rem] flex flex-col items-center justify-center">
            <AnimatedNumber
              end={40}
              suffix="%"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-cosmic-violet/90 to-cosmic-light/90"
            />
            <div className="text-xs text-cosmic-light/70 mt-1.5">
              reduction in manual reporting
            </div>
          </div>
          <div className="p-3 bg-white/3 rounded-lg text-center min-h-[4.5rem] flex flex-col items-center justify-center">
            <AnimatedNumber
              end={10000}
              format="compact"
              className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-br from-cosmic-violet/90 to-cosmic-light/90"
              post="–10M+"
            />
            <div className="text-xs text-cosmic-light/70 mt-1.5">
              records supported
            </div>
          </div>
          <div className="p-3 bg-white/3 rounded-lg text-center min-h-[4.5rem] flex flex-col items-center justify-center">
            <AnimatedNumber
              end={85}
              suffix="%+"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-cosmic-violet/90 to-cosmic-light/90"
            />
            <div className="text-xs text-cosmic-light/70 mt-1.5">
              predictive accuracy in pilots
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 mt-8">
        <div className="p-4 rounded-lg relative overflow-hidden bg-white/3 border border-cosmic-violet/20">
          {/* violet tint overlay */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cosmic-violet/20 via-cosmic-violet/10 to-transparent mix-blend-overlay" />
          <div className="relative">
            <h4 className="font-semibold text-cosmic-light mb-2">Our Vision</h4>
            <p className="text-cosmic-light/80 italic">
              To make advanced analytics accessible, actionable, and
              human-centered — so decisions across every level are powered by
              clarity, not complexity. Data becomes valuable only when it moves
              decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 mt-8 rounded-3xl border border-white/8 bg-white/4 h-full">
        <h4 className="text-lg font-semibold text-cosmic-light mb-4">
          Why organisations choose SwayAnalytics
        </h4>
        <ul className="text-cosmic-light/70 space-y-3 mb-6 list-disc list-inside">
          <li>Faster time-to-insight with plug-and-play connectors</li>
          <li>Actionable models tuned to local behaviour and language</li>
          <li>Governed analytics with role-based access and compliance</li>
          <li>WhatsApp-native engagement for field-first use cases</li>
        </ul>
        <HoverBorderGradient
          as="button"
          containerClassName="inline-block"
          className="text-sm font-semibold text-white px-6 py-3"
        >
          Request SwayAnalytics demo
        </HoverBorderGradient>
      </div>
    </div>
  );

  const DataPlatformAndEngineering = () => (
    <GlassCard className="p-8">
      <h3 className="text-2xl font-heading font-bold text-cosmic-light mb-4">
        Data Platform & Engineering Services
      </h3>
      <p className="text-cosmic-light/80 mb-6">
        We design, build and operate the data fabric that powers SwayAnalytics
        and SaleSway — tailored for scale, reliability, and compliance. Our
        platform services combine engineering best practices with governance and
        AI readiness so organisations can move from data collection to decision
        velocity.
      </p>

      {(() => {
        const dpItems = [
          {
            title: "Data Engineering & Pipelines",
            description:
              "Ingest, transform and orchestrate data at scale: ELT/ETL, Spark-based processing, event streaming (Kafka/Kinesis).",
            link: "#",
            tag: "Core",
          },
          {
            title: "Cloud & Infrastructure",
            description:
              "Cloud-native architecture (AWS/EKS), cost optimisation, infra-as-code, containerisation and hybrid deployments.",
            link: "#",
            tag: "Cloud",
          },
          {
            title: "Data Lake & Warehouse",
            description:
              "Modern data lake design, Delta/Parquet stores, schema enforcement, and warehouse modelling for performant analytics.",
            link: "#",
            tag: "Storage",
          },
          {
            title: "Real-time & Stream Processing",
            description:
              "Low-latency event streaming, feature pipelines, materialized views, and near real-time dashboards.",
            link: "#",
            tag: "Realtime",
          },
          {
            title: "Integrations & APIs",
            description:
              "Robust connectors for CRMs, WhatsApp Business API, IoT sensors, and secure API layers for downstream apps.",
            link: "#",
            tag: "Connectors",
          },
          {
            title: "DataOps & MLOps",
            description:
              "Continuous integration & delivery for data and models, feature stores, model registry, and production monitoring.",
            link: "#",
            tag: "Ops",
          },
          {
            title: "Data Governance & Quality",
            description:
              "Metadata, cataloging, lineage, data quality rules, RBAC, and policy enforcement to keep data discoverable and reliable.",
            link: "#",
            tag: "Trust",
          },
          {
            title: "Security & Compliance",
            description:
              "Enterprise-grade security: encryption, VPC design, API gateway, SSO & SAML, and compliance checks.",
            link: "#",
            tag: "Secure",
          },
          {
            title: "Backup, DR & Resilience",
            description:
              "Backup strategies, disaster recovery planning, and high-availability patterns to keep pipelines running.",
            link: "#",
            tag: "Reliability",
          },
          {
            title: "Analytics & Embedded BI",
            description:
              "Self-serve BI, embedded dashboards, KPI automation, and exploration layers for business users.",
            link: "#",
            tag: "Insights",
          },
          {
            title: "AI & Advanced Modeling",
            description:
              "End-to-end ML model prototyping, explainability, deployment, and lifecycle management for production-grade intelligence.",
            link: "#",
            tag: "AI",
          },
          {
            title: "Migration & Modernization",
            description:
              "Legacy data migration, re-architecture to cloud, cost optimisation, and modular, testable pipelines.",
            link: "#",
            tag: "Modernise",
          },
          {
            title: "Managed Services & Support",
            description:
              "24/7 ops, SLAs, incident management, performance tuning and platform health monitoring to run the stack for you.",
            link: "#",
            tag: "Operate",
          },
          {
            title: "Professional Services & Training",
            description:
              "Workshops, custom training, governance playbooks, runbooks, and change management for adoption and measurable outcomes.",
            link: "#",
            tag: "Adopt",
          },
        ];

        const tags = Array.from(new Set(dpItems.map((d) => d.tag)));

        function Pane() {
          const [active, setActive] = useState(tags[0]);
          const [isOpen, setIsOpen] = useState(false);
          const [modalTag, setModalTag] = useState<string | null>(null);
          const activeRef = useRef<string>(tags[0]);
          const pausedRef = useRef<boolean>(false);

          useEffect(() => {
            activeRef.current = active;
          }, [active]);

          useEffect(() => {
            if (isOpen) return;
            const interval = setInterval(() => {
              if (pausedRef.current) return;
              const idx = tags.indexOf(activeRef.current);
              const next = (idx + 1) % tags.length;
              setActive(tags[next]);
            }, 4500);
            return () => clearInterval(interval);
          }, [isOpen]);

          useEffect(() => {
            function onKey(e: KeyboardEvent) {
              if (e.key === "Escape") setIsOpen(false);
            }
            if (isOpen) window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
          }, [isOpen]);

          const preview = dpItems.filter((d) => d.tag === active).slice(0, 4);

          return (
            <div>
              <div
                className="flex items-center gap-3 mb-4 flex-wrap"
                onMouseEnter={() => (pausedRef.current = true)}
                onMouseLeave={() => (pausedRef.current = false)}
              >
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActive(t)}
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      active === t
                        ? "bg-cosmic-violet/10 text-cosmic-violet"
                        : "bg-white/3 text-cosmic-light/80"
                    }`}
                  >
                    {t}
                  </button>
                ))}
                <div className="ml-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setModalTag(null);
                      setIsOpen(true);
                    }}
                    className="text-sm font-semibold text-cosmic-violet"
                  >
                    View all
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {preview.map((item, idx) => (
                  <GlassCard
                    key={idx}
                    className="p-4 rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-2xl overflow-hidden z-0 pointer-events-none">
                      <DottedGlowBackground
                        gap={12}
                        radius={2}
                        color="rgba(124, 58, 237, 0.18)"
                        glowColor="rgba(124, 58, 237, 0.85)"
                        opacity={0.7}
                        backgroundOpacity={0.06}
                        speedMin={0.4}
                        speedMax={1.2}
                        speedScale={0.8}
                      />
                    </div>
                    <div className="relative z-10">
                      <h5 className="font-semibold text-cosmic-light mb-2">
                        {item.title}
                      </h5>
                      <p className="text-sm text-cosmic-light/70">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {isOpen && (modalTag === null || modalTag) && (
                <div
                  role="dialog"
                  aria-modal="true"
                  className="fixed inset-0 z-50 flex items-center justify-center px-4"
                >
                  <div
                    className="absolute inset-0 bg-black/60"
                    onClick={() => setIsOpen(false)}
                  />
                  <div className="relative z-10 w-full max-w-4xl mx-auto rounded-2xl p-6 bg-gradient-to-br from-[#0b0018] via-[#120022] to-black">
                    <div className="flex items-center justify-between ">
                      <h3 className="text-lg font-semibold text-cosmic-light">
                        {modalTag === null
                          ? "All Capabilities"
                          : `${modalTag} — Capabilities`}
                      </h3>
                      <button
                        aria-label="Close"
                        onClick={() => setIsOpen(false)}
                        className="text-cosmic-light/70"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="max-h-[70vh] overflow-y-auto">
                      <div className="rounded-xl p-2 ">
                        <HoverEffect
                          items={(modalTag === null
                            ? dpItems
                            : dpItems.filter((d) => d.tag === modalTag)
                          ).map((d) => ({
                            title: d.title,
                            description: d.description,
                            link: d.link,
                            tag: d.tag,
                          }))}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }

        return <Pane />;
      })()}

      <div className="mt-8 border-t border-white/6 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-cosmic-light mb-3">
              Why choose DataCosmos for platform engineering
            </h4>
            <ul className="text-cosmic-light/70 list-disc list-inside space-y-3">
              <li>Proven cloud-native patterns for cost-efficient scale</li>
              <li>Production-focused ML & data ops with governance baked in</li>
              <li>
                WhatsApp-first and field-ready integrations for real-world
                adoption
              </li>
              <li>
                Flexible delivery: embedded teams, augmentation, or managed
                operations
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <div className="p-6 rounded-2xl relative overflow-hidden border border-cosmic-violet/20 bg-white/3 h-full flex flex-col justify-between">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cosmic-violet/20 via-cosmic-violet/10 to-transparent mix-blend-overlay" />
              <div className="relative">
                <h5 className="text-base font-semibold text-cosmic-light mb-2">
                  Discuss platform needs
                </h5>
                <p className="text-sm text-cosmic-light/70 mb-4">
                  Ready to scale your data platform? We can help with
                  architecture, delivery, or managed operations.
                </p>

                <HoverBorderGradient
                  as="a"
                  href="#contact"
                  containerClassName="inline-block"
                  className="text-sm font-semibold text-white px-5 py-2"
                >
                  Request a consultation
                </HoverBorderGradient>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-cosmic-darker">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle>Products & Platforms.</SectionTitle>

        <ProductsGrid items={products} />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <SwaySalesDetails />
          </div>
          <SwaySalesWorkflows />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <SwayAnalyticsDetails />
          </div>
          <SwayAnalyticsSide />
        </div>

        <div className="mt-16">
          <DataPlatformAndEngineering />
        </div>
      </div>
    </section>
  );
}
