import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";

const timelineEvents = [
  {
    year: "-212",
    era: "Qin",
    title: "Epang Palace",
    description: "Construction of the legendary Epang Palace by Emperor Qin Shi Huang.",
  },
  {
    year: "-200",
    era: "Han",
    title: "Weiyang Palace",
    description: "Completion of the magnificent Weiyang Palace, largest of the Han dynasty.",
  },
  {
    year: "634",
    era: "Tang",
    title: "Daming Palace",
    description: "Construction of Daming Palace, the grandest palace in Chinese history.",
  },
  {
    year: "1103",
    era: "Song",
    title: "Yingzao Fashi",
    description: "Publication of Li Jie's architectural treatise, codifying construction standards.",
  },
  {
    year: "1406",
    era: "Ming",
    title: "Forbidden City",
    description: "Beginning of the Forbidden City construction in Beijing under Emperor Yongle.",
  },
  {
    year: "1703",
    era: "Qing",
    title: "Chengde Resort",
    description: "Construction of Chengde Mountain Resort, integrating multiple architectural styles.",
  },
  {
    year: "1750",
    era: "Qing",
    title: "Summer Palace",
    description: "Creation of the Summer Palace, masterpiece of Chinese garden design.",
  },
];

export const TimelineSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <SectionTitle
          chineseTitle="時間軸"
          title="Architectural Timeline"
          subtitle="Imperial milestones that shaped China's palace architecture across dynasties."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Content */}
              <div className="flex-1 pl-12 md:pl-0">
                <div className="museum-card p-6">
                  <div className="flex items-center gap-3 mb-3 md:justify-start">
                    <span className="text-xs font-medium px-2 py-1 rounded-sm bg-primary/10 text-primary">
                      {event.era}
                    </span>
                    <span className="font-serif text-lg font-semibold text-accent">
                      {event.year.startsWith("-")
                        ? `${event.year.slice(1)} BC`
                        : event.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6">
                <div className="timeline-dot" />
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};